export type Operator = '+' | '-' | '*' | '/' | '^' | 'root';

export interface CalculatorProps {
  numA: string;
  numB: string;
  onChangeA: (value: string) => void;
  onChangeB: (value: string) => void;
  operator: Operator;
  onChangeOperator: (op: Operator) => void;
  onCalculate: () => void;
  result: number | null;
  error: string | null;
}
