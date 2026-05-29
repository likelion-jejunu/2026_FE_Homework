import { useState } from "react";
import "./App.css";
import Calculator from "./Calculator";
import type { CalculationRecord, CalculatorKey, FunctionOperator, Operator } from "./type";

type NumberToken = {
  type: "number";
  value: number;
};

type OperatorToken = {
  type: "operator";
  value: Operator;
};

type FunctionToken = {
  type: "function";
  value: FunctionOperator;
};

type ParenthesisToken = {
  type: "parenthesis";
  value: "(" | ")";
};

type Token = NumberToken | OperatorToken | FunctionToken | ParenthesisToken;

const operatorSet = new Set(["+", "-", "*", "/", "^"]);
const precedence: Record<Operator, number> = {
  "+": 1,
  "-": 1,
  "*": 2,
  "/": 2,
  "^": 3,
};

const normalizeExpression = (expression: string) => {
  return expression
    .replaceAll("×", "*")
    .replaceAll("÷", "/")
    .replaceAll("√", "sqrt")
    .replaceAll(",", "")
    .replace(/\s/g, "");
};

const isOperatorToken = (token: Token | undefined): token is OperatorToken => {
  return token?.type === "operator";
};

const tokenize = (expression: string): Token[] => {
  const value = normalizeExpression(expression);
  const tokens: Token[] = [];
  let index = 0;
  let expectsOperand = true;

  while (index < value.length) {
    const current = value[index];
    const next = value[index + 1];

    if (/\d|\./.test(current) || (current === "-" && expectsOperand && /\d|\./.test(next ?? ""))) {
      const start = index;
      index += current === "-" ? 1 : 0;

      while (index < value.length && /\d|\./.test(value[index])) {
        index += 1;
      }

      const numberText = value.slice(start, index);
      const number = Number(numberText);

      if (Number.isNaN(number) || numberText.split(".").length > 2) {
        throw new Error("숫자 형식이 올바르지 않습니다.");
      }

      tokens.push({ type: "number", value: number });
      expectsOperand = false;
      continue;
    }

    if (value.startsWith("sqrt", index)) {
      tokens.push({ type: "function", value: "sqrt" });
      index += 4;
      expectsOperand = true;
      continue;
    }

    if (current === "%") {
      if (expectsOperand) {
        throw new Error("% 앞에 숫자나 괄호를 입력해 주세요.");
      }

      tokens.push({ type: "function", value: "percent" });
      index += 1;
      expectsOperand = false;
      continue;
    }

    if (current === "(" || current === ")") {
      tokens.push({ type: "parenthesis", value: current });
      index += 1;
      expectsOperand = current === "(";
      continue;
    }

    if (operatorSet.has(current)) {
      if (current === "-" && expectsOperand) {
        tokens.push({ type: "number", value: 0 });
      } else if (expectsOperand) {
        throw new Error("연산자 앞에 숫자나 괄호를 입력해 주세요.");
      }

      tokens.push({ type: "operator", value: current as Operator });
      index += 1;
      expectsOperand = true;
      continue;
    }

    throw new Error("사용할 수 없는 문자가 포함되어 있습니다.");
  }

  return tokens;
};

const toRpn = (tokens: Token[]) => {
  const output: Array<NumberToken | OperatorToken | FunctionToken> = [];
  const stack: Array<OperatorToken | FunctionToken | ParenthesisToken> = [];

  tokens.forEach((token) => {
    if (token.type === "number") {
      output.push(token);
      return;
    }

    if (token.type === "function") {
      if (token.value === "percent") {
        output.push(token);
        return;
      }

      stack.push(token);
      return;
    }

    if (token.type === "operator") {
      while (stack.length > 0) {
        const top = stack.at(-1);

        if (!top || top.type === "parenthesis") break;

        const shouldPop =
          top.type === "function" ||
          (isOperatorToken(top) &&
            (precedence[top.value] > precedence[token.value] ||
              (precedence[top.value] === precedence[token.value] && token.value !== "^")));

        if (!shouldPop) break;

        output.push(stack.pop() as OperatorToken | FunctionToken);
      }

      stack.push(token);
      return;
    }

    if (token.value === "(") {
      stack.push(token);
      return;
    }

    while (stack.length > 0 && stack.at(-1)?.type !== "parenthesis") {
      output.push(stack.pop() as OperatorToken | FunctionToken);
    }

    if (stack.length === 0) {
      throw new Error("괄호의 짝이 맞지 않습니다.");
    }

    stack.pop();

    if (stack.at(-1)?.type === "function") {
      output.push(stack.pop() as FunctionToken);
    }
  });

  while (stack.length > 0) {
    const token = stack.pop();

    if (token?.type === "parenthesis") {
      throw new Error("괄호의 짝이 맞지 않습니다.");
    }

    output.push(token as OperatorToken | FunctionToken);
  }

  return output;
};

const evaluateExpression = (expression: string) => {
  const tokens = tokenize(expression);

  if (tokens.length === 0) {
    throw new Error("계산할 수식을 입력해 주세요.");
  }

  const stack: number[] = [];

  toRpn(tokens).forEach((token) => {
    if (token.type === "number") {
      stack.push(token.value);
      return;
    }

    if (token.type === "function") {
      const value = stack.pop();

      if (value === undefined) {
        throw new Error("함수 안에 숫자나 수식을 입력해 주세요.");
      }

      if (token.value === "percent") {
        stack.push(value / 100);
        return;
      }

      if (value < 0) {
        throw new Error("음수의 루트는 계산할 수 없습니다.");
      }

      stack.push(Math.sqrt(value));
      return;
    }

    const b = stack.pop();
    const a = stack.pop();

    if (a === undefined || b === undefined) {
      throw new Error("수식이 완성되지 않았습니다.");
    }

    if (token.value === "+") stack.push(a + b);
    if (token.value === "-") stack.push(a - b);
    if (token.value === "*") stack.push(a * b);
    if (token.value === "/") {
      if (b === 0) throw new Error("0으로 나눌 수 없습니다.");
      stack.push(a / b);
    }
    if (token.value === "^") stack.push(a ** b);
  });

  if (stack.length !== 1) {
    throw new Error("수식이 완성되지 않았습니다.");
  }

  const result = stack[0];

  if (!Number.isFinite(result)) {
    throw new Error("계산 결과가 너무 큽니다.");
  }

  return result;
};

export default function App() {
  const [expression, setExpression] = useState("");
  const [result, setResult] = useState<number | null>(null);
  const [history, setHistory] = useState<CalculationRecord[]>([]);
  const [error, setError] = useState("");

  const appendExpression = (value: string) => {
    setExpression((currentExpression) => `${currentExpression}${value}`);
    setResult(null);
    setError("");
  };

  const handleCalculate = () => {
    try {
      const nextResult = evaluateExpression(expression);

      setError("");
      setResult(nextResult);
      setHistory((currentHistory) => [
        {
          expression,
          result: nextResult,
        },
        ...currentHistory,
      ].slice(0, 5));
    } catch (caughtError) {
      setResult(null);
      setError(caughtError instanceof Error ? caughtError.message : "계산할 수 없습니다.");
    }
  };

  const wrapExpression = (prefix: string, suffix = ")") => {
    setExpression((currentExpression) =>
      currentExpression.trim() === "" ? prefix : `${prefix}${currentExpression}${suffix}`,
    );
    setResult(null);
    setError("");
  };

  const handleKeyPress = (key: CalculatorKey) => {
    if (key.action === "clearEntry") {
      setExpression("");
      setResult(null);
      setError("");
      return;
    }

    if (key.action === "clearAll") {
      setExpression("");
      setResult(null);
      setHistory([]);
      setError("");
      return;
    }

    if (key.action === "backspace") {
      setExpression((currentExpression) => currentExpression.slice(0, -1));
      setResult(null);
      setError("");
      return;
    }

    if (key.action === "calculate") {
      handleCalculate();
      return;
    }

    if (key.action === "reciprocal") {
      wrapExpression("1/(");
      return;
    }

    if (key.action === "square") {
      setExpression((currentExpression) =>
        currentExpression.trim() === "" ? "" : `(${currentExpression})^2`,
      );
      setResult(null);
      setError("");
      return;
    }

    if (key.action === "sqrt") {
      wrapExpression("√(");
      return;
    }

    if (key.action === "toggleSign") {
      setExpression((currentExpression) =>
        currentExpression.trim() === "" ? "-" : `-(${currentExpression})`,
      );
      setResult(null);
      setError("");
      return;
    }

    appendExpression(key.value);
  };

  const handleReset = () => {
    setExpression("");
    setResult(null);
    setHistory([]);
    setError("");
  };

  return (
    <main className="app-shell">
      <Calculator
        expression={expression}
        onExpressionChange={(value) => {
          setExpression(value);
          setResult(null);
          setError("");
        }}
        onKeyPress={handleKeyPress}
        onCalculate={handleCalculate}
        onReset={handleReset}
        result={result}
        error={error}
        history={history}
      />
    </main>
  );
}
