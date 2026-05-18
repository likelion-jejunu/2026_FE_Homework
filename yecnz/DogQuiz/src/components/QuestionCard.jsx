// props:
//   - question: { imageUrl, breed } — 현재 문제
//   - index: 현재 문제 번호 (0부터)
//   - total: 전체 문제 수
//   - answer: 사용자가 입력한 답 (한국어)
//   - setAnswer: 답 변경 함수
//   - result: 'correct' | 'wrong' | null (null이면 아직 제출 전)
//   - actual: 실제 정답 (한국어, 제출 후 보여줌)
//   - onSubmit: 제출 버튼 핸들러
//   - onNext: 다음 문제 버튼 핸들러
function QuestionCard({
  question,
  index,
  total,
  answer,
  setAnswer,
  result,
  actual,
  onSubmit,
  onNext,
}) {
  return (
    <div className="mb-6 border border-slate-200 bg-white p-4 sm:p-6">
      {/* 진행 상황: "문제 1 / 10" */}
      <p className="mb-3 text-sm font-semibold text-slate-500">
        문제 {index + 1} / {total}
      </p>

      {/* 강아지 사진 */}
      <div className="mb-6 flex justify-center overflow-hidden bg-slate-100">
        <img
          src={question.imageUrl}
          alt="강아지 사진"
          className="h-72 w-full object-cover"
        />
      </div>

      {/* 견종 이름 입력 */}
      <input
        type="text"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        disabled={result !== null}
        placeholder="견종 이름을 한국어로 입력 (예: 비글, 시바견, 푸들)"
        className="mb-4 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-slate-900 disabled:bg-slate-100"
      />

      {/* 제출 버튼 또는 결과 박스 (result 상태에 따라 분기) */}
      {result === null ? (
        // 아직 제출 전: 제출 버튼 표시
        <button
          onClick={onSubmit}
          disabled={!answer.trim()}
          className="w-full rounded-lg bg-slate-900 py-3 font-semibold text-white transition hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-300 disabled:cursor-not-allowed disabled:opacity-50"
        >
          제출
        </button>
      ) : (
        // 제출 후: 정답/오답 박스 + 다음 문제 버튼
        <div>
          <div
            className={`mb-4 p-4 text-center text-lg font-semibold ${
              result === 'correct'
                ? 'bg-slate-100 text-slate-900'
                : 'bg-slate-100 text-slate-900'
            }`}
          >
            {result === 'correct' ? '정답!' : '틀렸어요!'}
            <p className="mt-1 text-sm font-normal text-slate-700">
              실제 정답: <strong>{actual ?? '없음'}</strong>
            </p>
          </div>
          <button
            onClick={onNext}
            className="w-full rounded-lg bg-slate-900 py-3 font-semibold text-white transition hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-300"
          >
            다음 문제 →
          </button>
        </div>
      )}
    </div>
  );
}

export default QuestionCard;
