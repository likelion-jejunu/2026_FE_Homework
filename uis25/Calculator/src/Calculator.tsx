import {type CalculatorProps, type ExtendOperator, operator_labels, unary_operator} from "./type.ts";
import "./Calculator.css";

export default function Calculator({
  numA, numB, onChangeA, onChangeB,
  operator, onChangeOperator, onCalculate,
  result, error,
}: CalculatorProps) {

  const isUnary = unary_operator.includes(operator);

  return (
    <div className="calculator">
      <div className="operator-group">
        {(Object.keys(operator_labels) as ExtendOperator[]).map((op) => (
          <button
            key={op}
            className={`operator-btn ${operator === op ? "active" : ""}`}
            onClick={() => onChangeOperator(op)}
          >
            {operator_labels[op]}
          </button>
        ))}
      </div>
      
      <div className="input-group">
        {isUnary ? (
          <input
            className="calc-input"
            placeholder="숫자 입력"
            value={numB}
            onChange={(e) => onChangeB(e.target.value)}
          />
        ) : (
          <>
            <input
              className="calc-input"
              placeholder="첫 번째 숫자"
              value={numA}
              onChange={(e) => onChangeA(e.target.value)}
            />
            <input
              className="calc-input"
              placeholder="두 번째 숫자"
              value={numB}
              onChange={(e) => onChangeB(e.target.value)}
            />
          </>
        )}
      </div>

      <button className="calc-btn" onClick={onCalculate}>
        계산하기
      </button>

      {error && <p className="calc-error">{error}</p>}
      {result !== null && (
        <div className="result-box">
          <span className="result-label">결과</span>
          <span className="result-value">{result}</span>
        </div>
      )}
    </div>
  );
}