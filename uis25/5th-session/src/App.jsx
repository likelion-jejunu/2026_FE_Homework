import { useState, useEffect } from 'react';
import './App.css';

const BASE_URL = 'http://localhost:3001';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  const [activeTab, setActiveTab] = useState('todo');

  useEffect(() => {
    const fetchTodos = async () => {
      const response = await fetch(`${BASE_URL}/todos`);
      const data = await response.json();
      setTodos(data);
    };
    fetchTodos();
  }, []);

  const addTodo = async () => {
    if (!input.trim()) return;

    const response = await fetch(`${BASE_URL}/todos`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: input, completed: false }),
    });

    const newTodo = await response.json();
    setTodos([...todos, newTodo]);
    setInput('');
  };

  const toggleTodo = async (todo) => {
    const response = await fetch(`${BASE_URL}/todos/${todo.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...todo, completed: !todo.completed }),
    });

    const updated = await response.json();
    setTodos(todos.map((t) => (t.id === updated.id ? updated : t)));
  };

  const deleteTodo = async (id) => {
    await fetch(`${BASE_URL}/todos/${id}`, { method: 'DELETE' });
    setTodos(todos.filter((t) => t.id !== id));
  };

  const incompleteTodos = todos.filter((t) => !t.completed);
  const completedTodos = todos.filter((t) => t.completed);
  const visibleTodos = activeTab === 'todo' ? incompleteTodos : completedTodos;

  return (
    <div>
      <h1>To-do list</h1>

     <div className="input-row">
  <input
    value={input}
    onChange={(e) => setInput(e.target.value)}
    onKeyDown={(e) => e.key === 'Enter' && addTodo()}
    placeholder="할 일을 입력하세요"/>
  <button className="add-btn" onClick={addTodo}>+</button>
</div>

      <div className="tabs">
        <button
          className={`tab-btn ${activeTab === 'todo' ? 'active' : ''}`}
          onClick={() => setActiveTab('todo')}
        >
          To-do
          {incompleteTodos.length > 0 && (
            <span className="tab-badge">{incompleteTodos.length}</span>
          )}
        </button>
        <button
          className={`tab-btn ${activeTab === 'completed' ? 'active' : ''}`}
          onClick={() => setActiveTab('completed')}
        >
          Completed
          {completedTodos.length > 0 && (
            <span className="tab-badge">{completedTodos.length}</span>
          )}
        </button>
      </div>

      <ul>
        {visibleTodos.length === 0 && (
          <li className="empty-msg">
            {activeTab === 'todo' ? '할 일이 없어요' : '완료된 항목이 없어요'}
          </li>
        )}
        {visibleTodos.map((todo) => (
          <li key={todo.id}>
            <button className="delete-btn" onClick={() => deleteTodo(todo.id)}>✕</button>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo)}
            />
            <span
              onClick={() => toggleTodo(todo)}
              style={{
                cursor: 'pointer',
                textDecoration: todo.completed ? 'line-through' : 'none',
                color: todo.completed ? 'var(--accent-border)' : 'var(--text-h)',
                fontStyle: todo.completed ? 'italic' : 'normal',
                flex: 1,
              }}
            >
              {todo.title}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;