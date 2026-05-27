import type { Operator, CalculatorProps } from "./Types";

export default function Calculator({
  numA, numB, onChangeA, onChangeB,
  operator, onChangeOperator, onCalculate,
  result, error
}: CalculatorProps) {

  const isSqrt = operator === "sqrt";

  return (
    <div className="calc-wrapper">
      <div className="calc-header">
        <div className="calc-mascot">철수 ♥ 영희의</div>
        <h1 className="calc-title">계산기</h1>
        <div className="calc-subtitle">즐거운 수학 공부</div>
      </div>

      <div className="calc-body">
        <div className="section-label">🔢 연산 선택</div>
        <div className="operator-grid">
          {(["+", "-", "*", "/", "**", "sqrt"] as Operator[]).map((op) => (
            <button
              key={op}
              className={`op-btn ${operator === op ? "op-active" : ""}`}
              onClick={() => onChangeOperator(op)}
            >
              {op === "*" ? "×" : op === "/" ? "÷" : op === "**" ? "xʸ" : op === "sqrt" ? "√" : op}
            </button>
          ))}
        </div>

        <div className="inputs-area">
          <div className="input-group">
            <label className="input-label">{isSqrt ? "√ 안의 수" : "첫 번째 수"}</label>
            <input
              className="calc-input"
              placeholder="숫자를 써요"
              value={numA}
              onChange={(e) => onChangeA(e.target.value)}
            />
          </div>

          {!isSqrt && (
            <>
              <div className="operator-display">
                {operator === "*" ? "×" : operator === "/" ? "÷" : operator === "**" ? "^" : operator}
              </div>
              <div className="input-group">
                <label className="input-label">두 번째 수</label>
                <input
                  className="calc-input"
                  placeholder="숫자를 써요"
                  value={numB}
                  onChange={(e) => onChangeB(e.target.value)}
                />
              </div>
            </>
          )}
        </div>

        <button className="calc-btn" onClick={onCalculate}>계산하기 ✏️</button>

        {error && <div className="error-box">⚠️ {error}</div>}
        {result !== null && !error && (
          <div className="result-box">
            <div className="result-label">정답은?</div>
            <div className="result-value">{result}</div>
          </div>
        )}
      </div>

      <div className="calc-footer">바르게 계산해요!</div>
    </div>
  );
}