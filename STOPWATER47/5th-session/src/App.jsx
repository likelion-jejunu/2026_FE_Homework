import { useEffect, useMemo, useState } from 'react';
import './App.css';

const BASE_URL = 'http://localhost:3001';
const WEATHER_URL =
  'https://api.open-meteo.com/v1/forecast?latitude=37.5665&longitude=126.9780&current=temperature_2m,weather_code&timezone=Asia%2FSeoul';

const TEXT = {
  add: '\uCD94\uAC00',
  addAria: '\uD560 \uC77C \uCD94\uAC00',
  allDoneEmpty: '\uC644\uB8CC\uD55C \uD560 \uC77C\uC774 \uC544\uC9C1 \uC5C6\uC2B5\uB2C8\uB2E4.',
  completed: '\uC644\uB8CC',
  date: '5\uC6D4 20\uC77C',
  delete: '\uC0AD\uC81C',
  fetchError: '\uBAA9\uB85D\uC744 \uBD88\uB7EC\uC624\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4.',
  placeholder: '\uD560 \uC77C \uCD94\uAC00\uD558\uAE30...',
  tabLabel: '\uD560 \uC77C \uD544\uD130',
  todo: '\uD560 \uC77C',
  weekday: '2026\uB144 \uC218\uC694\uC77C',
};

const categories = [
  {
    id: 'today',
    endpoint: 'todayTodos',
    label: '\uC624\uB298 \uD560 \uC77C',
    icon: '\uD83D\uDCC5',
  },
  {
    id: 'work',
    endpoint: 'workTodos',
    label: '\uC5C5\uBB34',
    icon: '\uD83D\uDCBC',
  },
  {
    id: 'personal',
    endpoint: 'personalTodos',
    label: '\uAC1C\uC778',
    icon: '\u2728',
  },
  {
    id: 'shopping',
    endpoint: 'shoppingTodos',
    label: '\uC1FC\uD551',
    icon: '\uD83D\uDED2',
  },
];

const getWeatherIcon = (code) => {
  if (code === 0) return '\u2600\uFE0F';
  if ([1, 2, 3].includes(code)) return '\u26C5';
  if ([45, 48].includes(code)) return '\uD83C\uDF2B\uFE0F';
  if ([51, 53, 55, 61, 63, 65, 80, 81, 82].includes(code)) return '\u2614';
  if ([71, 73, 75, 77, 85, 86].includes(code)) return '\u2744\uFE0F';
  if ([95, 96, 99].includes(code)) return '\u26C8\uFE0F';
  return '\u26C5';
};

function TodoInput({ onAddTodo }) {
  const [input, setInput] = useState('');
  const [categoryId, setCategoryId] = useState('work');

  const handleSubmit = (event) => {
    event.preventDefault();
    onAddTodo(input, categoryId);
    setInput('');
  };

  return (
    <form className="composer" onSubmit={handleSubmit}>
      <div className="composer-row">
        <input
          value={input}
          onChange={(event) => setInput(event.target.value)}
          placeholder={TEXT.placeholder}
        />
        <button className="add-button" type="submit" aria-label={TEXT.addAria}>
          +
        </button>
      </div>

      <div className="category-list" aria-label="\uCE74\uD14C\uACE0\uB9AC \uC120\uD0DD">
        {categories.map((category) => (
          <button
            className={categoryId === category.id ? 'category is-active' : 'category'}
            key={category.id}
            type="button"
            onClick={() => setCategoryId(category.id)}
          >
            <span>{category.icon}</span>
            {category.label}
          </button>
        ))}
      </div>
    </form>
  );
}

function TodoItem({ todo, category, onToggleTodo, onDeleteTodo }) {
  return (
    <li className={todo.completed ? 'todo-item is-complete' : 'todo-item'}>
      <button
        className="check-button"
        type="button"
        onClick={() => onToggleTodo(todo, category)}
        aria-label={`${todo.title} \uC644\uB8CC \uC0C1\uD0DC \uBCC0\uACBD`}
      >
        {todo.completed ? '\u2713' : ''}
      </button>

      <button
        className="todo-title"
        type="button"
        onClick={() => onToggleTodo(todo, category)}
      >
        {todo.title}
      </button>

      <button
        className="delete-button"
        type="button"
        onClick={() => onDeleteTodo(todo.id, category)}
        aria-label={`${todo.title} ${TEXT.delete}`}
      >
        {TEXT.delete}
      </button>
    </li>
  );
}

function CategorySection({ category, todos, onToggleTodo, onDeleteTodo }) {
  return (
    <section className="list-group">
      <div className="group-title">
        <span className="section-icon" aria-hidden="true">
          {category.icon}
        </span>
        <span>{category.label}</span>
        <small>({todos.length})</small>
        <span className="chevron" aria-hidden="true">
          ^
        </span>
      </div>

      <ul className="todo-list">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            category={category}
            onToggleTodo={onToggleTodo}
            onDeleteTodo={onDeleteTodo}
          />
        ))}
      </ul>
    </section>
  );
}

function TodoList({ groupedTodos, activeTab, onToggleTodo, onDeleteTodo }) {
  const visibleGroups = categories
    .map((category) => ({
      category,
      todos: groupedTodos[category.id] ?? [],
    }))
    .filter((group) => group.todos.length > 0);

  if (visibleGroups.length === 0) {
    return (
      <p className="empty-message">
        {activeTab === 'todo'
          ? '\uCE74\uD14C\uACE0\uB9AC\uB97C \uACE0\uB974\uACE0 \uD560 \uC77C\uC744 \uCD94\uAC00\uD574\uBCF4\uC138\uC694.'
          : TEXT.allDoneEmpty}
      </p>
    );
  }

  return (
    <div className="group-list">
      {visibleGroups.map(({ category, todos }) => (
        <CategorySection
          key={category.id}
          category={category}
          todos={todos}
          onToggleTodo={onToggleTodo}
          onDeleteTodo={onDeleteTodo}
        />
      ))}
    </div>
  );
}

function App() {
  const [todosByCategory, setTodosByCategory] = useState({
    today: [],
    work: [],
    personal: [],
    shopping: [],
  });
  const [activeTab, setActiveTab] = useState('todo');
  const [error, setError] = useState('');
  const [weather, setWeather] = useState({
    icon: '\u26C5',
    temperature: null,
  });

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const responses = await Promise.all(
          categories.map((category) => fetch(`${BASE_URL}/${category.endpoint}`)),
        );

        if (responses.some((response) => !response.ok)) {
          throw new Error(TEXT.fetchError);
        }

        const data = await Promise.all(responses.map((response) => response.json()));
        const nextTodos = categories.reduce((acc, category, index) => {
          acc[category.id] = data[index];
          return acc;
        }, {});

        setTodosByCategory(nextTodos);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchTodos();
  }, []);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(WEATHER_URL);
        if (!response.ok) return;

        const data = await response.json();
        setWeather({
          icon: getWeatherIcon(data.current.weather_code),
          temperature: Math.round(data.current.temperature_2m),
        });
      } catch {
        setWeather((prevWeather) => prevWeather);
      }
    };

    fetchWeather();
  }, []);

  const addTodo = async (title, categoryId) => {
    const trimmedTitle = title.trim();
    const category = categories.find((item) => item.id === categoryId);
    if (!trimmedTitle || !category) return;

    const response = await fetch(`${BASE_URL}/${category.endpoint}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title: trimmedTitle,
        completed: false,
      }),
    });

    const newTodo = await response.json();
    setTodosByCategory((prevTodos) => ({
      ...prevTodos,
      [category.id]: [...prevTodos[category.id], newTodo],
    }));
  };

  const toggleTodo = async (todo, category) => {
    const response = await fetch(`${BASE_URL}/${category.endpoint}/${todo.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...todo, completed: !todo.completed }),
    });

    const updated = await response.json();
    setTodosByCategory((prevTodos) => ({
      ...prevTodos,
      [category.id]: prevTodos[category.id].map((item) =>
        item.id === updated.id ? updated : item,
      ),
    }));
  };

  const deleteTodo = async (id, category) => {
    await fetch(`${BASE_URL}/${category.endpoint}/${id}`, {
      method: 'DELETE',
    });

    setTodosByCategory((prevTodos) => ({
      ...prevTodos,
      [category.id]: prevTodos[category.id].filter((todo) => todo.id !== id),
    }));
  };

  const filteredTodosByCategory = useMemo(
    () =>
      categories.reduce((acc, category) => {
        acc[category.id] = todosByCategory[category.id].filter(
          (todo) => todo.completed === (activeTab === 'completed'),
        );
        return acc;
      }, {}),
    [activeTab, todosByCategory],
  );

  const allTodos = categories.flatMap((category) => todosByCategory[category.id]);
  const todoCount = allTodos.filter((todo) => !todo.completed).length;
  const completedCount = allTodos.filter((todo) => todo.completed).length;

  return (
    <main className="app">
      <div className="planner">
        <h2 className="page-title">TO DO LIST</h2>

        <header className="top-bar">
          <div className="date-block">
            <span className="calendar-icon" aria-hidden="true">
              {'\uD83D\uDCC5'}
            </span>
            <div>
              <h1>{TEXT.date}</h1>
              <p>{TEXT.weekday}</p>
            </div>
          </div>

          <div className="weather-pill">
            <span aria-hidden="true">{weather.icon}</span>
            <strong>
              {weather.temperature === null ? '--' : weather.temperature}
              {'\u00B0C'}
            </strong>
          </div>
        </header>

        <section className="todo-card">
          <TodoInput onAddTodo={addTodo} />

          <div className="divider" />

          <div className="tabs" role="tablist" aria-label={TEXT.tabLabel}>
            <button
              className={activeTab === 'todo' ? 'tab is-active' : 'tab'}
              type="button"
              onClick={() => setActiveTab('todo')}
            >
              {TEXT.todo} ({todoCount})
            </button>
            <button
              className={activeTab === 'completed' ? 'tab is-active' : 'tab'}
              type="button"
              onClick={() => setActiveTab('completed')}
            >
              {TEXT.completed} ({completedCount})
            </button>
          </div>

          {error ? (
            <p className="error-message">{error}</p>
          ) : (
            <TodoList
              groupedTodos={filteredTodosByCategory}
              activeTab={activeTab}
              onToggleTodo={toggleTodo}
              onDeleteTodo={deleteTodo}
            />
          )}
        </section>
      </div>
    </main>
  );
}

export default App;
