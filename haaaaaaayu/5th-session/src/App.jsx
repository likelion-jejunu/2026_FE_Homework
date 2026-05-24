import { useState, useEffect } from "react";

const BASE_URL = "http://localhost:3001";

/* ──────────────────────────────────────
   배경 오브 (파스텔 블루 + 핑크)
   ────────────────────────────────────── */
function OrbBackground() {
  return (
    <div style={{ position: "fixed", inset: 0, zIndex: 0, overflow: "hidden" }}>
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(160deg, #dce8f5 0%, #e8edf7 30%, #f0e6ef 60%, #e3eaf6 100%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "-10%",
          left: "-5%",
          width: 600,
          height: 600,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(180,200,240,0.6) 0%, rgba(200,215,245,0.3) 40%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "20%",
          left: "30%",
          width: 500,
          height: 500,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(230,180,190,0.45) 0%, rgba(220,190,210,0.2) 40%, transparent 70%)",
          filter: "blur(50px)",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "5%",
          right: "10%",
          width: 350,
          height: 350,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(170,195,235,0.5) 0%, rgba(190,210,240,0.2) 40%, transparent 70%)",
          filter: "blur(35px)",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "55%",
          left: "15%",
          width: 200,
          height: 200,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(235,175,175,0.35) 0%, transparent 60%)",
          filter: "blur(30px)",
        }}
      />
    </div>
  );
}

/* ──────────────────────────────────────
   체크마크 아이콘
   ────────────────────────────────────── */
function Checkmark() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
      <path
        d="M2.5 6L5 8.5L9.5 3.5"
        stroke="#fff"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ──────────────────────────────────────
   폰트 변수
   ────────────────────────────────────── */
const FONT_TITLE = "'Gowun Batang', serif";      // 제목용 명조
const FONT_BODY = "'Gowun Dodum', sans-serif";    // 본문용 돋움

/* ──────────────────────────────────────
   스타일 객체
   ────────────────────────────────────── */
const s = {
  wrapper: {
    position: "relative",
    zIndex: 1,
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    padding: "60px 20px",
  },
  container: { width: "100%", maxWidth: 480 },

  /* 제목 */
  title: {
    fontFamily: FONT_TITLE,
    fontSize: 30,
    fontWeight: 700,
    color: "#3a4a6b",
    textAlign: "center",
    marginBottom: 6,
    letterSpacing: "-0.5px",
  },
  subtitle: {
    fontFamily: FONT_BODY,
    fontSize: 13,
    color: "#8a9bb5",
    textAlign: "center",
    marginBottom: 36,
    letterSpacing: 3,
    textTransform: "uppercase",
  },

  /* 글래스 카드 */
  card: {
    background: "rgba(255,255,255,0.45)",
    backdropFilter: "blur(24px)",
    WebkitBackdropFilter: "blur(24px)",
    borderRadius: 24,
    border: "1px solid rgba(255,255,255,0.6)",
    boxShadow:
      "0 8px 32px rgba(100,120,160,0.1), inset 0 1px 0 rgba(255,255,255,0.5)",
    padding: 28,
  },

  /* 입력 */
  inputRow: { display: "flex", gap: 10, marginBottom: 24 },
  input: {
    flex: 1,
    padding: "14px 18px",
    borderRadius: 16,
    border: "1px solid rgba(160,180,210,0.3)",
    background: "rgba(255,255,255,0.5)",
    backdropFilter: "blur(8px)",
    fontSize: 14,
    fontFamily: FONT_BODY,
    color: "#3a4a6b",
    outline: "none",
    transition: "all 0.25s ease",
  },
  addBtn: {
    padding: "14px 22px",
    borderRadius: 16,
    border: "none",
    background:
      "linear-gradient(135deg, #7a9cc6 0%, #a8b5d6 50%, #c4a5b8 100%)",
    color: "#fff",
    fontSize: 14,
    fontFamily: FONT_BODY,
    fontWeight: 400,
    cursor: "pointer",
    transition: "all 0.25s ease",
    whiteSpace: "nowrap",
    letterSpacing: 0.5,
  },

  /* 탭 */
  tabRow: {
    display: "flex",
    gap: 4,
    marginBottom: 20,
    background: "rgba(160,180,210,0.12)",
    borderRadius: 14,
    padding: 4,
  },
  tab: (active) => ({
    flex: 1,
    padding: "10px 0",
    borderRadius: 11,
    border: "none",
    background: active ? "rgba(255,255,255,0.7)" : "transparent",
    color: active ? "#3a4a6b" : "#8a9bb5",
    fontSize: 13,
    fontFamily: FONT_BODY,
    fontWeight: active ? 400 : 400,
    cursor: "pointer",
    transition: "all 0.25s ease",
    boxShadow: active ? "0 2px 8px rgba(100,120,160,0.12)" : "none",
    letterSpacing: 0.3,
  }),

  /* 리스트 */
  list: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    display: "flex",
    flexDirection: "column",
    gap: 8,
  },
  item: (done) => ({
    display: "flex",
    alignItems: "center",
    gap: 12,
    padding: "14px 16px",
    borderRadius: 16,
    background: done ? "rgba(180,195,220,0.15)" : "rgba(255,255,255,0.4)",
    border: "1px solid rgba(255,255,255,0.4)",
    transition: "all 0.25s ease",
    animation: "fadeSlideIn 0.3s ease",
  }),
  checkbox: (done) => ({
    width: 22,
    height: 22,
    borderRadius: "50%",
    border: done ? "none" : "2px solid rgba(140,165,200,0.4)",
    background: done
      ? "linear-gradient(135deg, #7a9cc6, #c4a5b8)"
      : "rgba(255,255,255,0.3)",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    transition: "all 0.25s ease",
  }),
  text: (done) => ({
    flex: 1,
    fontSize: 15,
    fontFamily: FONT_BODY,
    color: done ? "#a0aec0" : "#3a4a6b",
    textDecoration: done ? "line-through" : "none",
    transition: "all 0.25s ease",
    lineHeight: 1.6,
  }),
  delBtn: {
    background: "none",
    border: "none",
    color: "#bcc5d3",
    fontSize: 18,
    cursor: "pointer",
    padding: "4px 8px",
    borderRadius: 8,
    transition: "all 0.2s ease",
    lineHeight: 1,
  },
  empty: {
    textAlign: "center",
    fontFamily: FONT_BODY,
    color: "#a0aec0",
    fontSize: 14,
    padding: "40px 0",
  },
  count: {
    textAlign: "center",
    fontFamily: FONT_BODY,
    color: "#8a9bb5",
    fontSize: 12,
    marginTop: 20,
    letterSpacing: 0.5,
  },
};

/* ──────────────────────────────────────
   App
   ────────────────────────────────────── */
function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [activeTab, setActiveTab] = useState("todo");

  // GET - 목록 조회
  useEffect(() => {
    const fetchTodos = async () => {
      const res = await fetch(`${BASE_URL}/todos`);
      const data = await res.json();
      setTodos(data);
    };
    fetchTodos();
  }, []);

  // POST - 할일 추가
  const addTodo = async () => {
    if (!input.trim()) return;
    const res = await fetch(`${BASE_URL}/todos`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: input, completed: false }),
    });
    const newTodo = await res.json();
    setTodos([...todos, newTodo]);
    setInput("");
  };

  // PUT - 완료 토글
  const toggleTodo = async (todo) => {
    const res = await fetch(`${BASE_URL}/todos/${todo.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...todo, completed: !todo.completed }),
    });
    const updated = await res.json();
    setTodos(todos.map((t) => (t.id === updated.id ? updated : t)));
  };

  // DELETE - 할일 삭제
  const deleteTodo = async (id) => {
    await fetch(`${BASE_URL}/todos/${id}`, { method: "DELETE" });
    setTodos(todos.filter((t) => t.id !== id));
  };

  // 탭별 필터링
  const filtered = todos.filter((t) =>
    activeTab === "todo" ? !t.completed : t.completed
  );
  const todoCount = todos.filter((t) => !t.completed).length;
  const doneCount = todos.filter((t) => t.completed).length;

  return (
    <>
      {/* 글로벌 CSS */}
      <style>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { margin: 0; -webkit-font-smoothing: antialiased; }

        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        input::placeholder { color: #a0aec0; }
        input:focus {
          border-color: rgba(122,156,198,0.5) !important;
          box-shadow: 0 0 0 3px rgba(122,156,198,0.1) !important;
        }
        button:hover  { transform: translateY(-1px); }
        button:active { transform: translateY(0); }
      `}</style>

      <OrbBackground />

      <div style={s.wrapper}>
        <div style={s.container}>
          <h1 style={s.title}>오늘의 할 일</h1>
          <p style={s.subtitle}>To-do List</p>

          <div style={s.card}>
            {/* ── 입력창 ── */}
            <div style={s.inputRow}>
              <input
                style={s.input}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && addTodo()}
                placeholder="새로운 할 일을 입력하세요"
              />
              <button style={s.addBtn} onClick={addTodo}>
                추가
              </button>
            </div>

            {/* ── 탭 ── */}
            <div style={s.tabRow}>
              <button
                style={s.tab(activeTab === "todo")}
                onClick={() => setActiveTab("todo")}
              >
                할 일 {todoCount > 0 && `(${todoCount})`}
              </button>
              <button
                style={s.tab(activeTab === "completed")}
                onClick={() => setActiveTab("completed")}
              >
                완료 {doneCount > 0 && `(${doneCount})`}
              </button>
            </div>

            {/* ── 목록 ── */}
            {filtered.length === 0 ? (
              <div style={s.empty}>
                {activeTab === "todo"
                  ? "모든 할 일을 완료했어요 ✨"
                  : "아직 완료한 항목이 없어요"}
              </div>
            ) : (
              <ul style={s.list}>
                {filtered.map((todo) => (
                  <li key={todo.id} style={s.item(todo.completed)}>
                    <div
                      style={s.checkbox(todo.completed)}
                      onClick={() => toggleTodo(todo)}
                    >
                      {todo.completed && <Checkmark />}
                    </div>
                    <span style={s.text(todo.completed)}>{todo.title}</span>
                    <button
                      style={s.delBtn}
                      onClick={() => deleteTodo(todo.id)}
                      title="삭제"
                    >
                      ×
                    </button>
                  </li>
                ))}
              </ul>
            )}

            <div style={s.count}>
              총 {todos.length}개 중 {doneCount}개 완료
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;