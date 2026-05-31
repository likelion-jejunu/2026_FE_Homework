// App.tsx
import { useState } from 'react';
import Calculator from './Calculator';
import type { Operator } from './type';
import './App.css';

export default function App() {
  const [numA, setNumA] = useState('');
  const [numB, setNumB] = useState('');
  const [operator, setOperator] = useState<Operator>('+');
  const [result, setResult] = useState<number | null>(null);
  const [error, setError] = useState('');

  const calculate = (a: number, b: number, operator: Operator): number => {
    if (operator === '+') return a + b;
    if (operator === '-') return a - b;
    if (operator === '*') return a * b;
    if (operator === '/') return a / b;
    if (operator === '^') return Math.pow(a, b);
    if (operator === 'root') return Math.sqrt(a);
    const check: never = operator;
    return check;
  };

  const handleCalculate = () => {
    const a = Number(numA);
    const b = Number(numB);

    if (operator === 'root') {
      if (isNaN(a) || numA === '') {
        setError('숫자를 입력해주세요');
        return;
      }
      if (a < 0) {
        setError('음수 제곱근은 불가합니다');
        return;
      }
    } else {
      if (isNaN(a) || isNaN(b) || numA === '' || numB === '') {
        setError('숫자를 입력해주세요');
        return;
      }
    }

    if (operator === '/' && b === 0) {
      setError('0으로 나눌 수 없습니다');
      return;
    }

    setError('');
    const calculatedResult = calculate(a, b, operator);
    setResult(calculatedResult);
    setNumA(String(calculatedResult));
    setNumB('');
  };

  return (
    <div className="app-container">
      <h2 className="app-title">Scientific Calculator</h2>
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
