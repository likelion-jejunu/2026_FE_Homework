type Operator = "+" | "-" | "*" | "/";
type ActiveInput = "numA" | "numB";

interface CalculatorProps {
  numA: string;
  numB: string;
  onChangeA: (value: string) => void;
  onChangeB: (value: string) => void;
  operator: Operator;
  onChangeOperator: (op: Operator) => void;
  onCalculate: () => void;
  onClear: () => void;
  onDelete: () => void;
  onInputNumber: (value: string) => void;
  onPercent: () => void;
  activeInput: ActiveInput;
  onSelectInput: (input: ActiveInput) => void;
  result: number | null;
  error: string;
}

export default function Calculator({
  numA,
  numB,
  onChangeA,
  onChangeB,
  operator,
  onChangeOperator,
  onCalculate,
  onClear,
  onDelete,
  onInputNumber,
  onPercent,
  activeInput,
  onSelectInput,
  result,
  error,
}: CalculatorProps) {
  const operatorText = operator === "*" ? "×" : operator === "/" ? "÷" : operator;
  const displayText = error || (result !== null ? String(result) : `${numA || "0"} ${operatorText} ${numB || "0"}`);

  return (
    <section className="calculator" aria-label="계산기">
      <div className="calculator__top">
        <div className="calculator__display">
          <span>CALC</span>
          <output>{displayText}</output>
        </div>
        <div className="calculator__solar" aria-hidden="true" />
      </div>

      <div className="calculator__inputs">
        <input
          aria-label="첫 번째 숫자"
          className={activeInput === "numA" ? "is-active" : ""}
          placeholder="첫 번째 숫자"
          value={numA}
          onChange={(e) => onChangeA(e.target.value)}
          onFocus={() => onSelectInput("numA")}
        />
        <input
          aria-label="두 번째 숫자"
          className={activeInput === "numB" ? "is-active" : ""}
          placeholder="두 번째 숫자"
          value={numB}
          onChange={(e) => onChangeB(e.target.value)}
          onFocus={() => onSelectInput("numB")}
        />
      </div>

      <div className="calculator__keys">
        <button className="key key--control" onClick={onClear}>
          AC
        </button>
        <button className="key key--control" onClick={onDelete}>
          ←
        </button>
        <button className="key key--control" onClick={onPercent}>
          %
        </button>
        <button
          className={`key key--operator ${operator === "/" ? "is-selected" : ""}`}
          onClick={() => onChangeOperator("/")}
        >
          ÷
        </button>

        {(["7", "8", "9"] as const).map((number) => (
          <button className="key" key={number} onClick={() => onInputNumber(number)}>
            {number}
          </button>
        ))}
        <button
          className={`key key--operator ${operator === "*" ? "is-selected" : ""}`}
          onClick={() => onChangeOperator("*")}
        >
          ×
        </button>

        {(["4", "5", "6"] as const).map((number) => (
          <button className="key" key={number} onClick={() => onInputNumber(number)}>
            {number}
          </button>
        ))}
        <button
          className={`key key--operator ${operator === "-" ? "is-selected" : ""}`}
          onClick={() => onChangeOperator("-")}
        >
          -
        </button>

        {(["1", "2", "3"] as const).map((number) => (
          <button className="key" key={number} onClick={() => onInputNumber(number)}>
            {number}
          </button>
        ))}
        <button
          className={`key key--operator ${operator === "+" ? "is-selected" : ""}`}
          onClick={() => onChangeOperator("+")}
        >
          +
        </button>

        {(["0", "00", "."] as const).map((number) => (
          <button className="key" key={number} onClick={() => onInputNumber(number)}>
            {number}
          </button>
        ))}
        <button className="key key--equals" onClick={onCalculate}>
          =
        </button>
      </div>

      {error && <p className="calculator__message">{error}</p>}
      {result !== null && !error && <p className="calculator__message">결과: {result}</p>}
    </section>
  );
}
