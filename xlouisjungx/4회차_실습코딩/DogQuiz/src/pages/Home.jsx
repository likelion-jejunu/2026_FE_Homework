import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    // style 설정을 통해 세로축(column) 중앙 정렬을 완벽하게 강제합니다.
    <div
      className="gb-stage"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div className="gb-frame gb-fade-in">
        <span
          className="gb-highlight"
          style={{
            fontWeight: 'bold',
            letterSpacing: '2px',
            display: 'block',
            marginBottom: '8px',
          }}
        >
          🔔 제 1회 견종 탐구 영역 🔔
        </span>
        <h1 className="gb-title gb-serif">
          도전! <span className="gb-highlight">골든벨</span>
        </h1>
        <p className="gb-subtext">
          전국의 강아지 박사들이여 응답하라!
          <br />
          제시되는 사진을 보고 정답판에 견종을 적어주세요.
        </p>

        <button
          onClick={() => navigate('/quiz')}
          className="gb-btn-gold gb-serif"
        >
          <span>🔔 퀴즈 도전하기 🔔</span>
          <span
            style={{
              display: 'block',
              fontSize: '11px',
              marginTop: '6px',
              opacity: 0.8,
              fontFamily: 'sans-serif',
              fontWeight: 'normal',
            }}
          >
            Dog CEO API 실시간 사진 연동 (총 10문제)
          </span>
        </button>
      </div>

      {/* 하단 자막도 중앙 정렬 처리 */}
      <div
        style={{
          marginTop: '32px',
          fontSize: '12px',
          color: 'rgba(203,213,225,0.4)',
          fontFamily: 'mono',
          textAlign: 'center',
        }}
      >
        © 도전 골든벨 - Dog Breed Quiz Edition
      </div>
    </div>
  );
}

export default Home;
