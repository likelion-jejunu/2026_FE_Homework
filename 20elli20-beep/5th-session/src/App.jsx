import { useState, useEffect } from 'react';
import './App.css';

const BASE_URL = 'http://localhost:3001';
const FRUITS = ['apple','banana','cherry','blueberry','grape','lemon','mango','orange','pear','strawberry','watermelon','kiwi'];

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  const [tab, setTab] = useState('todo');
  const [fruit, setFruit] = useState(null);
  const [fruitLoading, setFruitLoading] = useState(true);
  const [fruitError, setFruitError] = useState(false);

  const loadFruit = async () => {
    setFruitLoading(true); setFruitError(false); setFruit(null);
    const name = FRUITS[Math.floor(Math.random() * FRUITS.length)];
    try {
      const data = await fetch(`https://www.fruityvice.com/api/fruit/${name}`).then(r => r.json());
      setFruit(data);
    } catch { setFruitError(true); }
    finally { setFruitLoading(false); }
  };

  useEffect(() => {
    fetch(`${BASE_URL}/todos`).then(r => r.json()).then(setTodos);
  }, []);

  useEffect(() => { loadFruit(); }, []);

  const addTodo = async () => {
    if (!input.trim()) return;
    const newTodo = await fetch(`${BASE_URL}/todos`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: input, completed: false }),
    }).then(r => r.json());
    setTodos([...todos, newTodo]);
    setInput('');
  };

  const toggleTodo = async (todo) => {
    const updated = await fetch(`${BASE_URL}/todos/${todo.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...todo, completed: !todo.completed }),
    }).then(r => r.json());
    setTodos(todos.map(t => t.id === updated.id ? updated : t));
  };

  const deleteTodo = async (id) => {
    await fetch(`${BASE_URL}/todos/${id}`, { method: 'DELETE' });
    setTodos(todos.filter(t => t.id !== id));
  };

  const filtered = todos.filter(t => tab === 'todo' ? !t.completed : t.completed);

  return (
    <div className="container">
      <header className="header">
        <div className="header-deco">🌿 🌸 🍃</div>
        <h1 className="title">오늘의 할 일</h1>
        <p className="subtitle">섬 주민의 하루를 기록해요</p>
      </header>

      <div className="input-row">
        <input
          className="todo-input"
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && addTodo()}
          placeholder="오늘 할 일을 입력하세요 🌱"
        />
        <button className="add-btn" onClick={addTodo}>+ 추가</button>
      </div>

      <div className="tabs">
        <button className={`tab ${tab === 'todo' ? 'active' : ''}`} onClick={() => setTab('todo')}>
          🌻 To-Do <span className="tab-count">{todos.filter(t => !t.completed).length}</span>
        </button>
        <button className={`tab ${tab === 'done' ? 'active' : ''}`} onClick={() => setTab('done')}>
          ✅ Completed <span className="tab-count">{todos.filter(t => t.completed).length}</span>
        </button>
      </div>

      <ul className="todo-list">
        {filtered.length === 0 ? (
          <li className="empty">
            {tab === 'todo' ? '🌱 할 일이 없어요! 새로운 할 일을 추가해봐요.' : '🌻 완료한 일이 없어요. 열심히 해봐요!'}
          </li>
        ) : filtered.map(todo => (
          <li key={todo.id} className="todo-item">
            <button className={`check-btn ${todo.completed ? 'done' : ''}`} onClick={() => toggleTodo(todo)}>
              {todo.completed ? '✓' : ''}
            </button>
            <span className={`todo-title ${todo.completed ? 'done' : ''}`}>{todo.title}</span>
            <button className="del-btn" onClick={() => deleteTodo(todo.id)}>×</button>
          </li>
        ))}
      </ul>

      <div className="fruit-card">
        <div className="fruit-card-header">
          <span className="fruit-icon">🍎</span>
          <span className="fruit-label">오늘의 작물</span>
          <button className="refresh-btn" onClick={loadFruit}>새로 뽑기 🎲</button>
        </div>
        {fruitLoading && <p className="fruit-loading">작물 뽑는 중... 🌾</p>}
        {fruitError && <p className="fruit-error">🌧 작물 정보를 가져오지 못했어요.</p>}
        {fruit && !fruitLoading && (
          <>
            <div className="fruit-name">{fruit.name}</div>
            <div className="fruit-stats">
              <div className="stat"><div className="stat-val">{fruit.nutritions.calories}</div><div className="stat-lbl">칼로리 kcal</div></div>
              <div className="stat"><div className="stat-val">{fruit.nutritions.sugar}g</div><div className="stat-lbl">당분</div></div>
              <div className="stat"><div className="stat-val">{fruit.nutritions.carbohydrates}g</div><div className="stat-lbl">탄수화물</div></div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default App;