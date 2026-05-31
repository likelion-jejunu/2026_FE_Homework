// Calculator.tsx
import type { Operator, CalculatorProps } from './type';
import './Calculator.css';

export default function Calculator({
  numA,
  numB,
  onChangeA,
  onChangeB,
  operator,
  onChangeOperator,
  onCalculate,
  result,
  error,
}: CalculatorProps) {
  const isRoot = operator === 'root';

  const getButtonClassName = (op: Operator) => {
    const isSelected = operator === op;
    const isSpecial = op === '^' || op === 'root';

    let classes = 'calc-btn-base ';
    classes += isSpecial ? 'calc-btn-special' : 'calc-btn-normal';
    if (isSelected) classes += ' active';

    return classes;
  };

  return (
    <div className="calc-wrapper">
      {/* 첫 번째 입력창 */}
      <input
        placeholder="0"
        value={numA}
        onChange={(e) => onChangeA(e.target.value)}
        className="calc-input"
      />

      {/* 두 번째 입력창 */}
      <input
        placeholder={isRoot ? 'NOT USED' : '0'}
        value={isRoot ? '' : numB}
        onChange={(e) => onChangeB(e.target.value)}
        disabled={isRoot}
        className="calc-input"
      />

      {/* 연산자 패드 버튼들 */}
      <div className="calc-button-grid">
        {(['+', '-', '*', '/', '^', 'root'] as Operator[]).map((op) => (
          <button
            key={op}
            onClick={() => onChangeOperator(op)}
            className={getButtonClassName(op)}
          >
            {op === '*'
              ? '×'
              : op === '/'
                ? '÷'
                : op === '^'
                  ? 'xʸ'
                  : op === 'root'
                    ? '√x'
                    : op}
          </button>
        ))}
      </div>

      {/* 계산하기 버튼 */}
      <button onClick={onCalculate} className="calc-btn-submit">
        Calculate
      </button>

      {/* 에러 피드백 */}
      {error && <p className="calc-error-text">{error}</p>}

      {/* 결과창 LCD 디스플레이 */}
      {result !== null && (
        <div className="calc-screen">
          <p className="calc-screen-label">MATRIX / ANSWER</p>
          <p className="calc-screen-result">{result}</p>
        </div>
      )}
    </div>
  );
}
