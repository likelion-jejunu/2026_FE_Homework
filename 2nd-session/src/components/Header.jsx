import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { SessionContext } from '../context/SessionContext';

export default function Header() {
  // 아까 만든 기억 상자에서 '오늘 집중한 횟수(completedSessions)'를 꺼내오는 마법이에요!
  const { completedSessions } = useContext(SessionContext);

  return (
    <header className="flex justify-between items-center p-4 bg-white shadow-md">
      
      {/* 왼쪽: 메뉴 이동 버튼들 (NavLink를 쓰면 지금 있는 페이지 글씨가 파랗게 변해요) */}
      <div className="flex gap-4">
        <NavLink 
          to="/" 
          className={({ isActive }) => isActive ? "text-blue-500 font-bold" : "text-gray-600 hover:text-blue-400"}
        >
          🏠 홈으로
        </NavLink>
        <NavLink 
          to="/timer/focus" 
          className={({ isActive }) => isActive ? "text-blue-500 font-bold" : "text-gray-600 hover:text-blue-400"}
        >
          ⏱️ 타이머
        </NavLink>
      </div>

      {/* 오른쪽: 우리가 기록한 점수판 */}
      <div className="font-semibold text-gray-800">
        🔥 오늘 집중 완료: <span className="text-blue-500">{completedSessions}</span> 번
      </div>
      
    </header>
  );
}
