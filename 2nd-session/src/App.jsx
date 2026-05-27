import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { SessionProvider } from './context/SessionContext';
import Header from './components/Header';
import Home from './pages/Home';
import TimerPage from './pages/TimerPage';

function App() {
  return (
    <SessionProvider>
      <BrowserRouter>
        <div className="">
          <Header />
          <main className="">
            <div className=""></div>
            <div className=""></div>
            
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/timer/:mode" element={<TimerPage key={window.location.pathname} />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </SessionProvider>
  );
}

export default App;
