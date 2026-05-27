import { useState } from "react";
import Calculator from "./Calculator";
import type { Operator } from "./Types";

export default function App() {
  const [numA, setNumA] = useState("");
  const [numB, setNumB] = useState("");
  const [operator, setOperator] = useState<Operator>("+");
  const [result, setResult] = useState<number | null>(null);
  const [error, setError] = useState("");

  const calculate = (a: number, b: number, operator: Operator): number => {
    if (operator === "+") return a + b;
    if (operator === "-") return a - b;
    if (operator === "*") return a * b;
    if (operator === "/") return a / b;
    if (operator === "**") return Math.pow(a, b);
    if (operator === "sqrt") return Math.sqrt(a);

    const check: never = operator;
    return check;
  };

  const handleCalculate = () => {
    const a = Number(numA);
    const b = Number(numB);
    const isSqrt = operator === "sqrt";

    if (isNaN(a) || numA === "") { setError("숫자를 입력해주세요"); return; }
    if (!isSqrt && (isNaN(b) || numB === "")) { setError("두 번째 숫자를 입력해주세요"); return; }
    if (operator === "/" && b === 0) { setError("0으로 나눌 수 없어요"); return; }
    if (operator === "sqrt" && a < 0) { setError("음수의 루트는 구할 수 없어요"); return; }

    setError("");
    setResult(Math.round(calculate(a, b, operator) * 10000) / 10000);
  };

  return (
    <div className="page-bg">
      <Calculator
        numA={numA}
        numB={numB}
        onChangeA={setNumA}
        onChangeB={setNumB}
        operator={operator}
        onChangeOperator={setOperator}
        onCalculate={handleCalculate}
        result={result}
        error={error}
      />
    </div>
  );
}