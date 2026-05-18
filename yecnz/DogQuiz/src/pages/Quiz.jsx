// React 훅
import { useState, useEffect } from 'react';
// React Router 훅 (페이지 이동)
import { useNavigate } from 'react-router-dom';
// HTTP 요청 라이브러리
import axios from 'axios';

// 분리된 데이터/컴포넌트들
import { BREED_KO, KO_TO_BREED } from '../data/breed.js';
import QuestionCard from '../components/QuestionCard.jsx';
import QuizFinished from '../components/QuizFinished.jsx';
import ProgressBar from '../components/ProgressBar.jsx';

function Quiz() {
  const navigate = useNavigate();
  const onHome = () => navigate('/');

  // 한 번에 풀 문제 수
  const total = 10;

  // ===== 상태(state) =====
  // 각 문제: { imageUrl, breed }
  //   - imageUrl: 강아지 사진 URL
  //   - breed: 정답 견종 코드 (예: 'akita')
  const [questions, setQuestions] = useState([]);
  const [index, setIndex] = useState(0); // 현재 몇 번째 문제인지
  const [results, setResults] = useState(Array(total).fill(null)); // 각 문제의 결과
  const [answer, setAnswer] = useState(''); // 사용자가 입력한 답
  const [actual, setActual] = useState(null); // 화면에 보여줄 실제 정답 (한국어)
  const [result, setResult] = useState(null); // 'correct' | 'wrong' | null
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // ===== 사이드 이펙트: 마운트 시 문제 10개 만들기 =====
  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const breeds = Object.keys(BREED_KO);
        const newQuestions = [];

        for (let i = 0; i < total; i++) {
          // 1. 정답 견종을 무작위로 뽑기
          const correctBreed =
            breeds[Math.floor(Math.random() * breeds.length)];

          // 2. 해당 견종 사진 한 장 받아오기
          const res = await axios.get(
            `https://dog.ceo/api/breed/${correctBreed}/images/random`
          );

          newQuestions.push({
            imageUrl: res.data.message,
            breed: correctBreed,
          });
        }

        setQuestions(newQuestions);
      } catch (err) {
        console.error(err);
        setError('문제를 불러오지 못했어요. 잠시 후 다시 시도해 주세요.');
      } finally {
        setLoading(false);
      }
    };

    fetchQuestions();
  }, []);

  // ===== 파생 변수 =====
  const correct = results.filter((r) => r === 'correct').length;
  const wrong = results.filter((r) => r === 'wrong').length;
  const currentQ = questions[index];

  // ===== 제출 핸들러 =====
  const handleSubmit = () => {
    if (!currentQ || !answer.trim()) return;

    // 사용자가 입력한 한국어 이름 → 견종 코드로 변환해서 비교
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

  // ===== 다음 문제로 이동 =====
  const handleNext = () => {
    setAnswer('');
    setActual(null);
    setResult(null);
    setIndex((i) => i + 1);
  };

  // ===== 조건부 렌더링: 로딩 =====
  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-white px-6">
        <div className="text-center">
          <p className="text-lg font-semibold text-slate-900">문제를 불러오는 중...</p>
          <p className="mt-2 text-sm text-slate-500">잠시만 기다려 주세요.</p>
        </div>
      </div>
    );
  }

  // ===== 조건부 렌더링: 종료 화면 =====
  if (index >= total) {
    return <QuizFinished correct={correct} wrong={wrong} onHome={onHome} />;
  }

  if (error || questions.length < total || !currentQ) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-white px-6">
        <div className="w-full max-w-md border border-slate-200 p-8 text-center">
          <h1 className="text-2xl font-bold text-slate-900">오류가 발생했어요</h1>
          <p className="mt-3 text-slate-600">
            {error || '문제를 찾을 수 없어요. 다시 시작해 주세요.'}
          </p>
          <button
            onClick={onHome}
            className="mt-6 rounded-lg bg-slate-900 px-5 py-3 font-semibold text-white transition hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-300"
          >
            홈으로 돌아가기
          </button>
        </div>
      </div>
    );
  }

  // ===== 메인 화면: 문제 풀이 =====
  return (
    <div className="flex min-h-screen flex-col bg-white p-5 sm:p-6">
      <div className="mx-auto w-full max-w-2xl flex-grow">
        {/* 상단: 제목 + 홈으로 버튼 */}
        <div className="mb-6 flex items-center justify-between gap-4">
          <h1 className="text-2xl font-bold text-slate-900">강아지 종 맞히기</h1>
          <button
            onClick={onHome}
            className="text-sm font-semibold text-slate-500 transition hover:text-slate-900"
          >
            ← 홈으로
          </button>
        </div>

        {/* 문제 카드 */}
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

      {/* 하단 진행 바 */}
      <ProgressBar results={results} />
    </div>
  );
}

export default Quiz;
