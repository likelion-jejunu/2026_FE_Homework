import './App.css';

function App() {
  return (
    <div className="portal-wrapper">
      {/* 상단 파란색 헤더 [cite: 117, 120] */}
      <header className="global-header">
        <div className="header-inner">
          <div className="logo-area">
            <img src="https://www.jejunu.ac.kr/images/common/logo.png" alt="제주대 로고" />
            <h1>포털</h1>
          </div>
          <div className="search-area">
            <input type="text" placeholder="메뉴검색" />
            <button className="search-btn">🔍</button>
          </div>
          <div className="user-links">
            <span>통합정보</span> <span>JNUclass</span> <span>홈페이지</span>
            <button className="logout-btn">로그아웃</button>
          </div>
        </div>
      </header>

      {/* 하얀색 네비게이션 바 [cite: 115] */}
      <nav className="main-nav">
        <ul>
          <li>학사안내</li> <li>수업/성적</li> <li>학적/졸업</li> <li>등록/장학</li>
          <li>경력관리</li> <li>교내활동</li> <li>게시판</li> <li>시설물예약</li>
        </ul>
      </nav>

      {/* 본문 3단 레이아웃 [cite: 118] */}
      <main className="portal-content">
        {/* 왼쪽: 프로필 & 서비스링크 [cite: 38, 47] */}
        <section className="column left">
          <div className="profile-card">
            <div className="user-tag">학부생(재학생) 접속중</div>
            <h2>홍지수 <small>식물자원환경학과</small></h2>
            <div className="quick-icons">
              <div className="icon">🏛️<p>통합정보</p></div>
              <div className="icon">📖<p>도서관</p></div>
              <div className="icon">✉️<p>메일</p></div>
              <div className="icon">📄<p>증명서</p></div>
            </div>
            <div className="access-log">최근 접속: 2026-04-13 23:40</div>
          </div>
          <div className="white-box">
            <h3>주요서비스링크</h3>
            <div className="service-grid">
              <span>🔬</span> <span>🎓</span> <span>💼</span> <span>👥</span>
            </div>
          </div>
        </section>

        {/* 가운데: 공지사항 & 비교과 */}
        <section className="column middle">
          <div className="white-box notice-box">
            <div className="tab-menu">
              <span className="active">공지</span> <span>수업</span> <span>등록</span>
            </div>
            <ul className="list">
              <li>2026년 상반기 수강생 모집 <span>04-07</span></li>
              <li>제1학기 국가근로장학생 모집 <span>04-07</span></li>
              <li>정원드림 프로젝트 참가 안내 <span>04-07</span></li>
            </ul>
          </div>
          <div className="white-box">
            <h3>비교과프로그램</h3>
            <div className="program-item">2026학년도 학습컨설팅 <button>신청하기</button></div>
          </div>
        </section>

        {/* 오른쪽: 수강정보 */}
        <section className="column right">
          <div className="white-box">
            <h3>수강정보</h3>
            <ul className="course-list">
              <li>식물생리학 <span className="badge">일반선택</span></li>
              <li>스마트팜환경제어 <span className="badge">전공</span></li>
              <li>기초화학</li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;