import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center p-20">
      <h1 className="text-4xl font-bold mb-4">🍅 뽀모도로 타이머</h1>
      <p className="text-gray-600 mb-8">30분 집중, 10분 휴식으로 효율을 높여보세요!</p>
      
      <button
        onClick={() => navigate('/timer/focus')}
        className="px-6 py-3 bg-blue-500 text-white rounded-lg font-bold hover:bg-blue-600 transition"
      >
        타이머 시작하기
      </button>
    </div>
  );
}
