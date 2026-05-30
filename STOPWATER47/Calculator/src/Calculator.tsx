import type { CalculatorKey, CalculatorProps } from "./type";

const calculatorKeys: CalculatorKey[] = [
  { label: "%", value: "%", ariaLabel: "퍼센트", tone: "utility" },
  { label: "CE", value: "", ariaLabel: "현재 수식 지우기", tone: "utility", action: "clearEntry" },
  { label: "C", value: "", ariaLabel: "전체 지우기", tone: "utility", action: "clearAll" },
  { label: "⌫", value: "", ariaLabel: "한 글자 지우기", tone: "utility", action: "backspace" },
  { label: "1/x", value: "", ariaLabel: "역수", tone: "function", action: "reciprocal" },
  { label: "x²", value: "", ariaLabel: "제곱", tone: "function", action: "square" },
  { label: "²√x", value: "", ariaLabel: "루트", tone: "function", action: "sqrt" },
  { label: "÷", value: "÷", ariaLabel: "나누기", tone: "operator" },
  { label: "7", value: "7", ariaLabel: "7", tone: "number" },
  { label: "8", value: "8", ariaLabel: "8", tone: "number" },
  { label: "9", value: "9", ariaLabel: "9", tone: "number" },
  { label: "×", value: "×", ariaLabel: "곱하기", tone: "operator" },
  { label: "4", value: "4", ariaLabel: "4", tone: "number" },
  { label: "5", value: "5", ariaLabel: "5", tone: "number" },
  { label: "6", value: "6", ariaLabel: "6", tone: "number" },
  { label: "-", value: "-", ariaLabel: "빼기", tone: "operator" },
  { label: "1", value: "1", ariaLabel: "1", tone: "number" },
  { label: "2", value: "2", ariaLabel: "2", tone: "number" },
  { label: "3", value: "3", ariaLabel: "3", tone: "number" },
  { label: "+", value: "+", ariaLabel: "더하기", tone: "operator" },
  { label: "+/-", value: "", ariaLabel: "부호 바꾸기", tone: "utility", action: "toggleSign" },
  { label: "0", value: "0", ariaLabel: "0", tone: "number" },
  { label: ".", value: ".", ariaLabel: "소수점", tone: "number" },
  { label: "=", value: "", ariaLabel: "계산하기", tone: "equals", action: "calculate" },
];

const formatResult = (value: number | null) => {
  if (value === null) return "0";

  return new Intl.NumberFormat("ko-KR", {
    maximumFractionDigits: 10,
  }).format(value);
};

export default function Calculator({
  expression,
  onExpressionChange,
  onKeyPress,
  onCalculate,
  onReset,
  result,
  error,
  history,
}: CalculatorProps) {
  return (
    <section className="calculator" aria-labelledby="calculator-title">
      <header className="calculator__header">
        <div>
          <p className="calculator__eyebrow">Pastel Calculator</p>
          <h1 id="calculator-title">계산기</h1>
        </div>
        <button className="calculator__ghost-button" type="button" onClick={onReset}>
          초기화
        </button>
      </header>

      <form
        className="calculator__form"
        onSubmit={(event) => {
          event.preventDefault();
          onCalculate();
        }}
      >
        <div className="calculator__display" aria-live="polite">
          <label className="calculator__expression-field">
            <span>수식</span>
            <input
              inputMode="decimal"
              placeholder="(2 + 3) × 4"
              value={expression}
              onChange={(event) => onExpressionChange(event.target.value)}
            />
          </label>
          <strong>{formatResult(result)}</strong>
        </div>

        <div className="calculator__keypad" role="group" aria-label="계산기 버튼">
          {calculatorKeys.map((key) => (
            <button
              aria-label={key.ariaLabel}
              className={`calculator__key calculator__key--${key.tone}`}
              key={`${key.label}-${key.ariaLabel}`}
              onClick={() => onKeyPress(key)}
              title={key.ariaLabel}
              type="button"
            >
              <span
                className={`calculator__key-symbol ${
                  key.label.includes("√") ? "calculator__key-symbol--sqrt" : ""
                }`}
              >
                {key.label}
              </span>
            </button>
          ))}
        </div>

        {error && (
          <p className="calculator__message calculator__message--error" role="alert">
            {error}
          </p>
        )}
      </form>

      {history.length > 0 && (
        <section className="calculator__history" aria-label="최근 계산">
          <h2>최근 계산</h2>
          <ul>
            {history.slice(0, 2).map((item, index) => (
              <li key={`${item.expression}-${index}`}>
                <span>{item.expression}</span>
                <strong>{formatResult(item.result)}</strong>
              </li>
            ))}
          </ul>
        </section>
      )}
    </section>
  );
}
