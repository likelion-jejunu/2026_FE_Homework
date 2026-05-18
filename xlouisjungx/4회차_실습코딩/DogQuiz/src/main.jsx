import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import './css/allStyle.css'; // 골든벨 전용 단일 스타일시트 주입!
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
