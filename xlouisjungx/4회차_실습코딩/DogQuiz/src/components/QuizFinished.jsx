function QuizFinished({ correct, wrong, onHome }) {
  const isGoldenBell = correct === 10;

  return (
    <div className="gb-stage">
      <div
        className="gb-frame gb-fade-in"
        style={{ maxWidth: '440px', padding: '40px 24px' }}
      >
        <div
          className="gb-bounce"
          style={{ fontSize: '3.5rem', marginBottom: '16px' }}
        >
          {isGoldenBell ? '👑' : '🔔'}
        </div>

        <h1
          className="gb-serif"
          style={{
            fontSize: '2rem',
            fontWeight: '900',
            color: '#ffffff',
            margin: '0 0 8px 0',
          }}
        >
          {isGoldenBell ? (
            <span>
              제 1대 <span className="gb-highlight">골든벨 등극!</span>
            </span>
          ) : (
            <span>
              퀴즈 <span style={{ color: '#fb923c' }}>명예로운 도전 종료</span>
            </span>
          )}
        </h1>

        <p
          style={{
            fontSize: '0.75rem',
            color: '#93c5fd',
            opacity: 0.8,
            margin: '0 0 32px 0',
          }}
        >
          - 명예의 전당 기록 보관소 -
        </p>

        <div className="gb-summary-card">
          <div className="gb-summary-row" style={{ color: '#34d399' }}>
            <span>최종 정답 개수</span>
            <span style={{ fontWeight: '900', fontSize: '1.5rem' }}>
              {correct} 개
            </span>
          </div>
          <div className="gb-summary-row" style={{ color: '#f43f5e' }}>
            <span>아쉬운 오답 개수</span>
            <span style={{ fontWeight: '900', fontSize: '1.5rem' }}>
              {wrong} 개
            </span>
          </div>
        </div>

        <p
          className="gb-serif"
          style={{
            fontSize: '0.9rem',
            fontWeight: '500',
            color: '#fde047',
            fontStyle: 'italic',
            marginBottom: '32px',
            padding: '0 8px',
            lineHeight: 1.6,
          }}
        >
          {isGoldenBell
            ? '"모든 고난을 이겨내고 마침내 황금빛 종소리를 사방에 울렸습니다!"'
            : '"비록 골든벨은 울리지 못했지만, 전국의 견종 박사 대열에 동참하셨습니다!"'}
        </p>

        <button
          onClick={onHome}
          className="gb-btn-gold gb-serif"
          style={{ padding: '16px', fontSize: '1.2rem' }}
        >
          명예의 전당 퇴장 (처음으로)
        </button>
      </div>
    </div>
  );
}

export default QuizFinished;
