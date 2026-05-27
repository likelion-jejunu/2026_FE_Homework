import { createContext, useState } from 'react';

// 빈 기억 공간(Context) 만들기
// eslint-disable-next-line react-refresh/only-export-components
export const SessionContext = createContext();

// 점수를 관리하고 다른 화면들에 전달해 주는 제공자(Provider) 만들기
export function SessionProvider({ children }) {
  // 처음에 앱을 켰을 때 완료한 집중 세션 횟수는 0번입니다.
  const [completedSessions, setCompletedSessions] = useState(0);

  return (
    <SessionContext.Provider value={{ completedSessions, setCompletedSessions }}>
      {children}
    </SessionContext.Provider>
  );
}