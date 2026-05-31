export type BasicOperator = "+" | "-" | "*" | "/";
export type ExtendOperator = BasicOperator | "^" | "√";

export const operator_labels: Record<ExtendOperator, string> = {
  "+": "+",
  "-": "−",
  "*": "×",
  "/": "÷",
  "^": "xⁿ",
  "√": "√x",
};

export const unary_operator: ExtendOperator[] = ["√"];

export interface CalculatorProps {
  numA: string;
  numB: string;
  onChangeA: (value: string) => void;
  onChangeB: (value: string) => void;
  operator: ExtendOperator;
  onChangeOperator: (op: ExtendOperator) => void;
  onCalculate: () => void;
  result: number | null;
  error: string;
}