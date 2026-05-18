import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import { BREED_KO, KO_TO_BREED } from '../data/breeds.js';
import QuestionCard from '../components/QuestionCard.jsx';
import QuizFinished from '../components/QuizFinished.jsx';
import ProgressBar from '../components/ProgressBar.jsx';

function Quiz() {
  const navigate = useNavigate();
  const onHome = () => navigate('/');
  const total = 10;

  const [questions, setQuestions] = useState([]);
  const [index, setIndex] = useState(0);
  const [results, setResults] = useState(Array(total).fill(null));
  const [answer, setAnswer] = useState('');
  const [actual, setActual] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const breeds = Object.keys(BREED_KO);
        const newQuestions = [];

        for (let i = 0; i < total; i++) {
          const correctBreed =
            breeds[Math.floor(Math.random() * breeds.length)];
          const res = await axios.get(
            `https://dog.ceo/api/breed/${correctBreed}/images/random`,
          );

          newQuestions.push({
            imageUrl: res.data.message,
            breed: correctBreed,
          });
        }

        if (newQuestions.length === total) {
          setQuestions(newQuestions);
        } else {
          setError(true);
        }
      } catch (err) {
        console.error(err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchQuestions();
  }, []);

  const correct = results.filter((r) => r === 'correct').length;
  const wrong = results.filter((r) => r === 'wrong').length;
  const currentQ = questions[index];

  const handleSubmit = () => {
    if (!currentQ || !answer.trim()) return;

    const userBreed = KO_TO_BREED[answer.replace(/\s/g, '')];
    const isCorrect = userBreed === currentQ.breed;

    setActual(BREED_KO[currentQ.breed]);
    setResult(isCorrect ? 'correct' : 'wrong');
    setResults((prev) => {
      const next = [...prev];
      next[index] = isCorrect ? 'correct' : 'wrong';
      return next;
    });
  };

  const handleNext = () => {
    setAnswer('');
    setActual(null);
    setResult(null);
    setIndex((i) => i + 1);
  };

  // 1. 네트워크 에러 화면 처리
  if (error) {
    return (
      <div className="gb-stage" style={{ textAlign: 'center' }}>
        <p
          style={{
            fontSize: '1.25rem',
            color: '#f87171',
            fontWeight: 'bold',
            marginBottom: '16px',
          }}
        >
          ⚠️ 데이터를 가져오는 데 실패했습니다.
        </p>
        <button
          onClick={() => window.location.reload()}
          className="gb-btn-gold"
          style={{ fontSize: '1rem', padding: '12px 24px', width: 'auto' }}
        >
          다시 시도하기
        </button>
      </div>
    );
  }

  // 2. 로딩 화면 디자인
  if (loading) {
    return (
      <div className="gb-stage" style={{ textAlign: 'center' }}>
        <div
          className="gb-bounce"
          style={{ fontSize: '4rem', marginBottom: '16px' }}
        >
          🔔
        </div>
        <p
          className="gb-serif"
          style={{
            fontSize: '1.5rem',
            fontWeight: 'bold',
            color: '#facc15',
            letterSpacing: '1px',
          }}
        >
          문제를 출제 중입니다. 잠시만 기다려주세요...
        </p>
      </div>
    );
  }

  // ★ 순서 변경: 안전장치보다 "퀴즈 종료 조건"을 먼저 검사해야 에러 없이 피날레 화면이 뜹니다!
  if (index >= total) {
    return <QuizFinished correct={correct} wrong={wrong} onHome={onHome} />;
  }

  // 4. 문제 도중 데이터 누락 시 작동하는 화이트 스크린 안전 장치
  if (questions.length === 0 || !currentQ) {
    return null;
  }

  return (
    <div className="gb-stage-flex">
      <div className="gb-wrapper" style={{ flexGrow: 1 }}>
        {/* 상단 레이아웃 네비바 */}
        <div className="gb-navbar">
          <h1
            className="gb-serif"
            style={{
              fontSize: '1.25rem',
              fontWeight: '900',
              color: '#facc15',
              margin: 0,
              letterSpacing: '1px',
            }}
          >
            📺 도전! 골든벨{' '}
            <span
              style={{
                color: '#ffffff',
                fontSize: '0.85rem',
                fontWeight: 'normal',
                opacity: 0.8,
                fontFamily: 'sans-serif',
                marginLeft: '8px',
              }}
            >
              | 견종 탐구 편
            </span>
          </h1>
          <button
            onClick={onHome}
            style={{
              fontSize: '11px',
              fontWeight: 'bold',
              backgroundColor: '#090d22',
              border: '1px solid #1e3a8a',
              color: '#93c5fd',
              padding: '6px 12px',
              borderRadius: '6px',
              cursor: 'pointer',
            }}
          >
            ← 무대 아래로 (홈)
          </button>
        </div>

        {/* 메인 문제 카드 출력부 */}
        <div
          style={{
            flexGrow: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <QuestionCard
            question={currentQ}
            index={index}
            total={total}
            answer={answer}
            setAnswer={setAnswer}
            result={result}
            actual={actual}
            onSubmit={handleSubmit}
            onNext={handleNext}
          />
        </div>

        {/* 전광판 현황 모듈 */}
        <ProgressBar results={results} />
      </div>
    </div>
  );
}

export default Quiz;
