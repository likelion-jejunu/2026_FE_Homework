// props:
//   - results: 각 문제의 결과 배열 ['correct' | 'wrong' | null, ...]
function ProgressBar({ results }) {
  const total = results.length;
  // 맞힌 개수, 틀린 개수, 남은 개수 계산
  const correct = results.filter((r) => r === 'correct').length;
  const wrong = results.filter((r) => r === 'wrong').length;
  const remaining = total - correct - wrong;

  return (
    <div className="mx-auto mt-4 w-full max-w-2xl">
      {/* 위쪽 카운트 텍스트 */}
      <div className="mb-2 flex justify-between text-sm font-semibold">
        <span className="text-slate-700">맞힘 {correct}</span>
        <span className="text-slate-700">틀림 {wrong}</span>
        <span className="text-slate-500">남은 {remaining}</span>
      </div>
      {/* 진행 바: results 배열을 그대로 칸으로 매핑 */}
      <div className="flex h-3 w-full overflow-hidden bg-slate-200">
        {results.map((r, i) => (
          <div
            key={i}
            className={`h-full flex-1 transition-colors duration-300 ${
              r === 'correct'
                ? 'bg-slate-900'
                : r === 'wrong'
                ? 'bg-slate-500'
                : 'bg-transparent'
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default ProgressBar;
