export type Operator = "+" | "-" | "*" | "/" | "^";
export type FunctionOperator = "sqrt" | "percent";
export type CalculatorKeyTone = "number" | "operator" | "function" | "utility" | "equals";
export type CalculatorKeyAction =
  | "append"
  | "clearEntry"
  | "clearAll"
  | "backspace"
  | "calculate"
  | "reciprocal"
  | "square"
  | "sqrt"
  | "toggleSign";

export interface CalculatorKey {
  label: string;
  value: string;
  ariaLabel: string;
  tone: CalculatorKeyTone;
  action?: CalculatorKeyAction;
  wide?: boolean;
}

export interface CalculationRecord {
  expression: string;
  result: number;
}

export interface CalculatorProps {
  expression: string;
  result: number | null;
  error: string;
  history: CalculationRecord[];
  onExpressionChange: (value: string) => void;
  onKeyPress: (key: CalculatorKey) => void;
  onCalculate: () => void;
  onReset: () => void;
}
