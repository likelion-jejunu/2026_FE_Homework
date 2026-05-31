import { useState } from "react";
import Calculator from "./Calculator";
import "./App.css";

type Operator = "+" | "-" | "*" | "/";
type ActiveInput = "numA" | "numB";

export default function App() {
  const [numA, setNumA] = useState("");
  const [numB, setNumB] = useState("");
  const [operator, setOperator] = useState<Operator>("+");
  const [result, setResult] = useState<number | null>(null);
  const [error, setError] = useState("");
  const [activeInput, setActiveInput] = useState<ActiveInput>("numA");

  const calculate = (a: number, b: number, operator: Operator): number => {
    if (operator === "+") return a + b;
    if (operator === "-") return a - b;
    if (operator === "*") return a * b;
    if (operator === "/") return a / b;

    const check: never = operator;
    return check;
  };

  const handleChangeA = (value: string) => {
    setNumA(value);
    setResult(null);
    setError("");
  };

  const handleChangeB = (value: string) => {
    setNumB(value);
    setResult(null);
    setError("");
  };

  const handleInputNumber = (value: string) => {
    const currentValue = activeInput === "numA" ? numA : numB;
    const setValue = activeInput === "numA" ? setNumA : setNumB;

    setResult(null);
    setError("");

    if (value === "." && currentValue.includes(".")) return;
    if (currentValue === "0" && value !== ".") {
      setValue(value);
      return;
    }

    setValue(currentValue + value);
  };

  const handleChangeOperator = (op: Operator) => {
    setOperator(op);
    setResult(null);
    setError("");
    setActiveInput("numB");
  };

  const handleDelete = () => {
    setResult(null);
    setError("");

    if (activeInput === "numA") {
      setNumA((value) => value.slice(0, -1));
      return;
    }

    setNumB((value) => value.slice(0, -1));
  };

  const handleClear = () => {
    setNumA("");
    setNumB("");
    setOperator("+");
    setResult(null);
    setError("");
    setActiveInput("numA");
  };

  const handlePercent = () => {
    const currentValue = activeInput === "numA" ? numA : numB;
    const setValue = activeInput === "numA" ? setNumA : setNumB;
    const convertedValue = Number(currentValue);

    if (isNaN(convertedValue) || currentValue === "") {
      setError("숫자를 입력해주세요");
      return;
    }

    setError("");
    setResult(null);
    setValue(String(convertedValue / 100));
  };

  const handleCalculate = () => {
    const a = Number(numA);
    const b = Number(numB);

    if (isNaN(a) || isNaN(b) || numA === "" || numB === "") {
      setError("숫자를 입력해주세요");
      return;
    }

    if (operator === "/" && b === 0) {
      setError("0으로 나눌 수 없어요");
      return;
    }

    setError("");
    setResult(calculate(a, b, operator));
  };

  return (
    <main className="app">
      <Calculator
        numA={numA}
        numB={numB}
        onChangeA={handleChangeA}
        onChangeB={handleChangeB}
        operator={operator}
        onChangeOperator={handleChangeOperator}
        onCalculate={handleCalculate}
        onClear={handleClear}
        onDelete={handleDelete}
        onInputNumber={handleInputNumber}
        onPercent={handlePercent}
        activeInput={activeInput}
        onSelectInput={setActiveInput}
        result={result}
        error={error}
      />
    </main>
  );
}
