// props:
//   - correct: 맞힌 개수
//   - wrong: 틀린 개수
//   - onHome: 홈으로 돌아가기 버튼 핸들러
function QuizFinished({ correct, wrong, onHome }) {
  const total = correct + wrong;

  return (
    <div className="flex min-h-screen items-center justify-center bg-white px-6">
      <div className="w-full max-w-md border border-slate-200 p-8 text-center">
        <p className="text-sm font-semibold text-slate-500">
          Result
        </p>
        <h1 className="mt-3 text-3xl font-bold text-slate-900">퀴즈 종료</h1>
        <div className="mt-8 grid grid-cols-2 gap-3">
          <div className="border border-slate-200 p-5">
            <p className="text-sm font-semibold text-slate-600">맞힌 개수</p>
            <p className="mt-2 text-3xl font-bold text-slate-900">{correct}</p>
          </div>
          <div className="border border-slate-200 p-5">
            <p className="text-sm font-semibold text-slate-600">틀린 개수</p>
            <p className="mt-2 text-3xl font-bold text-slate-900">{wrong}</p>
          </div>
        </div>
        <p className="mt-5 text-slate-600">
          총 {total}문제 중 {correct}문제를 맞혔어요.
        </p>
        <button
          onClick={onHome}
          className="mt-8 w-full rounded-lg bg-slate-900 px-6 py-3 font-semibold text-white transition hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-300"
        >
          홈으로 돌아가기
        </button>
      </div>
    </div>
  );
}

export default QuizFinished;
