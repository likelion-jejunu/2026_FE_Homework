type Operator = "+" | "-" | "*" | "/";

interface CalculatorProps {
  numA: string;   // 첫번째 값
  numB: string;   // 두번째 값
  onChangeA: (value: string) => void;   // setNumA
  onChangeB: (value: string) => void;   // setNumB
  operator: Operator;   // 연산자
  onChangeOperator: (op: Operator) => void;   // setOperator
  onCalculate: () => void;   // 계산 함수
  result: number | null;  // 결과가 없을 수도 있음
  error: string;
}

export default function Calculator({
  numA, numB, onChangeA, onChangeB,
  operator, onChangeOperator, onCalculate,
  result, error
}: CalculatorProps) {

  return (
    <div className="calculator">

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

      <div className="calc-operators">
        {(["+", "-", "*", "/"] as Operator[]).map((op) => (
          <button
            key={op}
            className={`calc-op ${operator === op ? "active" : ""}`}
            onClick={() => onChangeOperator(op)}
          >
            {op === "*" ? "×" : op === "/" ? "÷" : op}
          </button>
        ))}
      </div>

      <button className="calc-equals" onClick={onCalculate}>
        계산하기
      </button>

      {error && <p className="calc-error">{error}</p>}
      {result !== null && <p className="calc-result">결과: {result}</p>}
    </div>
  );
}