function ProgressBar({ results }) {
  const total = results.length;
  const correct = results.filter((r) => r === 'correct').length;
  const wrong = results.filter((r) => r === 'wrong').length;

  return (
    <div className="gb-scoreboard">
      <div className="gb-score-row">
        <span className="gb-badge-green">정답패 🟢 {correct}</span>
        <span className="gb-badge-rose">오답패 🔴 {wrong}</span>
        <span className="gb-badge-slate">
          잔여 🔔 {total - correct - wrong}
        </span>
      </div>

      <div className="gb-matrix-grid">
        {results.map((r, i) => (
          <div
            key={i}
            className={`gb-matrix-cell ${r === 'correct' ? 'correct' : r === 'wrong' ? 'wrong' : ''}`}
          >
            {i + 1}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProgressBar;
