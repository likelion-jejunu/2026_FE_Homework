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
    <div className="gb-card gb-fade-in">
      <div className="gb-badge-red">제 {index + 1} 번 문제</div>

      {/* 초대형 스튜디오 모니터 시스템 */}
      <div className="gb-tv-monitor">
        <img src={question?.imageUrl} alt="출제 강아지" />
      </div>

      {/* 정답 기입용 화이트 마커 보드 */}
      <div className="gb-board-frame">
        <div className="gb-whiteboard">
          <span className="gb-whiteboard-tag">정답판 (ANSWER BOARD)</span>
          <input
            type="text"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            disabled={result !== null}
            placeholder="견종 이름을 입력하세요... (예: 비글, 시바견)"
            className="gb-whiteboard-input gb-serif"
          />
        </div>
      </div>

      {/* 버튼 액션 및 자막 분기 콘솔 */}
      <div style={{ marginTop: '20px' }}>
        {result === null ? (
          <button
            onClick={onSubmit}
            disabled={!answer.trim()}
            className="gb-btn-blue gb-serif"
            style={{ letterSpacing: '2px' }}
          >
            정답판을 들어주세요! 🖋️
          </button>
        ) : (
          <div
            style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
          >
            <div
              className={`gb-alert ${result === 'correct' ? 'gb-alert-correct' : 'gb-alert-wrong'}`}
            >
              <div
                className="gb-serif"
                style={{
                  fontSize: '1.5rem',
                  fontWeight: '900',
                  letterSpacing: '2px',
                  marginBottom: '4px',
                }}
              >
                {result === 'correct'
                  ? '⭕ 딩동댕! 정답입니다'
                  : '❌ 땡! 아쉽습니다'}
              </div>
              <p style={{ margin: 0, fontSize: '0.85rem', color: '#cbd5e1' }}>
                출제 정답:{' '}
                <span
                  className="gb-serif"
                  style={{
                    color: '#facc15',
                    fontWeight: 'bold',
                    fontSize: '1rem',
                    textDecoration: 'underline',
                    textUnderlineOffset: '4px',
                  }}
                >
                  {actual}
                </span>
              </p>
            </div>

            <button
              onClick={onNext}
              className="gb-btn-gold gb-serif"
              style={{ padding: '16px', fontSize: '1.2rem' }}
            >
              {index + 1 === total
                ? '최종 결과 확인하기 🔔'
                : '다음 문제로 넘어가기 ▶'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default QuestionCard;
