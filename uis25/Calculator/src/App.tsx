import {useState} from "react";
import Calculator from "./Calculator";
import {type ExtendOperator, unary_operator} from "./type.ts";
import "./App.css";

export default function App() {
  const [numA, setNumA] = useState("");
  const [numB, setNumB] = useState("");
  const [operator, setOperator] = useState<ExtendOperator>("+");
  const [result, setResult] = useState<number | null>(null);
  const [error, setError] = useState("");

  const calculate = (a: number, b: number, op: ExtendOperator): number => {
    if (op === "+") return a + b;
    if (op === "-") return a - b;
    if (op === "*") return a * b;
    if (op === "/") return a / b;
    if (op === "^") return Math.pow(a, b);
    if (op === "√") return Math.sqrt(b);

    const check: never = op;
    return check;
  };

  const handleCalculate = () => {
    const isUnary = unary_operator.includes(operator);
    const a = Number(numA);
    const b = Number(numB);

    if (!isUnary && (isNaN(a) || numA === "")) {
      setError("숫자를 입력해주세요"); return;
    }
    if (isNaN(b) || numB === "") {
      setError("숫자를 입력해주세요"); return;
    }
    if (operator === "/" && b === 0) {
      setError("0으로 나눌 수 없어요"); return;
    }
    if (operator === "√" && b < 0) {
      setError("음수의 제곱근은 계산할 수 없어요"); return;
    }

    setError("");
    setResult(calculate(a, b, operator));
  };

  return (
    <div className="app">
      <h2 className="app-title"> 계산기</h2>
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