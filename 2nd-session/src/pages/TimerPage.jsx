import { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { SessionContext } from '../context/SessionContext';

export default function TimerPage() {
  const { mode } = useParams();
  const navigate = useNavigate();
  const { setCompletedSessions } = useContext(SessionContext);

  // 1. 처음 시작 시간을 딱 한 번만 정해요 (에러 방지)
  const initialTime = mode === 'focus' ? 30 * 60 : 10 * 60;
  const [timeLeft, setTimeLeft] = useState(initialTime);

  // 2. 1초마다 줄어드는 타이머 (깔끔한 버전)
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // 3. 시간이 다 됐을 때 다음 화면으로 이동
  useEffect(() => {
    if (timeLeft === 0) {
      if (mode === 'focus') {
        setCompletedSessions((prev) => prev + 1);
        navigate('/timer/rest');
      } else {
        navigate('/timer/focus');
      }
    }
  }, [timeLeft, mode, navigate, setCompletedSessions]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="flex flex-col items-center">
      {/* 📱 메인 카드 디자인 */}
      <div className="bg-[#1e1e2e] p-10 rounded-[40px] shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-gray-700 flex flex-col items-center w-[350px]">
        
        {/* 상단 배지 */}
        <div className={`mb-6 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase ${
          mode === 'focus' ? 'bg-orange-500/20 text-orange-400' : 'bg-emerald-500/20 text-emerald-400'
        }`}>
          {mode === 'focus' ? '🔥 Focus Session' : '🧘 Short Break'}
        </div>
        
        {/* 큰 시계 숫자 (동그란 테두리 포함) */}
        <div className="relative flex items-center justify-center w-56 h-56 mb-10">
          {/* 장식용 원형 배경 */}
          <div className="absolute inset-0 border-4 border-gray-800 rounded-full"></div>
          <div className={`absolute inset-0 border-4 rounded-full transition-all duration-1000 ${
            mode === 'focus' ? 'border-orange-500 shadow-[0_0_20px_rgba(249,115,22,0.4)]' : 'border-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.4)]'
          }`} style={{ clipPath: `inset(0 0 0 0)` }}></div>
          
          <div className="text-6xl font-light text-white tracking-tighter">
            {String(minutes).padStart(2, '0')}<span className="opacity-30">:</span>{String(seconds).padStart(2, '0')}
          </div>
        </div>

        {/* 제어 버튼들 */}
        <div className="flex gap-4 w-full">
          <button 
            onClick={() => setTimeLeft(0)}
            className="flex-1 py-4 bg-gray-800 text-gray-300 rounded-2xl font-medium hover:bg-gray-700 transition active:scale-95"
          >
            Skip
          </button>
          <button 
            onClick={() => setTimeLeft(initialTime)}
            className="flex-1 py-4 bg-gray-800 text-gray-300 rounded-2xl font-medium hover:bg-gray-700 transition active:scale-95"
          >
            Reset
          </button>
        </div>
      </div>

      {/* 하단 격려 메시지 */}
      <p className="mt-10 text-gray-500 font-medium tracking-tight">
        {mode === 'focus' ? "Don't stop until you're proud." : "Recharge for the next win."}
      </p>
    </div>
  );
}
