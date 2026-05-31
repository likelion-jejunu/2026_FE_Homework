// App.tsx
import { useState } from "react";
import Calculator from "./Calculator";
import "./App.css";

export default function App() {
	type Operator = "+" | "-" | "*" | "/";
	
  const [numA, setNumA] = useState("");
  const [numB, setNumB] = useState("");
  const [operator, setOperator] = useState<Operator>("+");
  const [result, setResult] = useState<number | null>(null);
  const [error, setError] = useState("");

	const calculate = (a: number, b: number, operator: Operator): number => {
	  if (operator === "+") return a + b; // 더하기 로직
	  if (operator === "-") return a - b; // 빼기 로직
	  if (operator === "*") return a * b; // 곱하기 로직
	  if (operator === "/") return a / b; // 나누기 로직
	
	  const check: never = operator; // 빠진 케이스 없는지 검사
	  return check;
	};
	
  const handleCalculate = () => {
    const a = Number(numA);
    const b = Number(numB);

    if (isNaN(a) || isNaN(b) || numA === "" || numB === "") {
      setError("숫자를 입력해주세요"); return;
    }
    if (operator === "/" && b === 0) {
      setError("0으로 나눌 수 없어요"); return;
    }

    setError("");
    setResult(calculate(a, b, operator));
  };

  return (
    <div className="app">
      <h2 className="app-title">계산기</h2>
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