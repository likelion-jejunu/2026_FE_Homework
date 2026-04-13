import logo from './jejunu_logo.png';

function App() {
  return (
    <div style={{ backgroundColor: 'white', minHeight: '100vh', fontFamily: 'sans-serif' }}>
      {/* 헤더 */}
      <div style={{ backgroundColor: '#0872AE', padding: '10px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <img src={logo} alt="제주대학교" style={{ height: '40px' }} />
          <span style={{ color: 'white', fontSize: '22px', fontWeight: 'bold', borderLeft: '1px solid rgba(255,255,255,0.4)', paddingLeft: '12px' }}>포털</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', border: '2px solid white', borderRadius: '0px', overflow: 'hidden', backgroundColor: 'white' }}>
          <input type="text" placeholder="메뉴검색" style={{ padding: '10px 15px', border: 'none', backgroundColor: 'white', color: '#333', width: '300px', fontSize: '14px', outline: 'none', boxShadow: 'none', WebkitAppearance: 'none', appearance: 'none' }} />
          <button style={{ padding: '10px 14px', backgroundColor: '#076AA2', color: 'white', border: 'none', cursor: 'pointer', fontSize: '16px' }}>
            <i className="fas fa-search"></i>
          </button>
        </div>
        <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
          <span style={{ color: 'white' }}>통합정보</span>
          <span style={{ color: 'white' }}>JNUclass</span>
          <span style={{ color: 'white' }}>홈페이지</span>
          <div style={{ border: '1px solid rgba(255,255,255,0.5)', borderRadius: '4px', display: 'flex', overflow: 'hidden' }}>
            <span style={{ color: 'white', padding: '6px 15px' }}>로그아웃</span>
            <span style={{ borderLeft: '1px solid rgba(255,255,255,0.5)' }}></span>
            <span style={{ color: 'white', padding: '6px 15px' }}>마이페이지</span>
          </div>
          <i className="fa-solid fa-gear" style={{ color: 'white', fontSize: '20px' }}></i>
          <i className="fa-regular fa-circle-question" style={{ color: 'white', fontSize: '20px' }}></i>
          <i className="fa-solid fa-globe" style={{ color: 'white', fontSize: '20px' }}></i>
        </div>
      </div>

      {/* 메뉴바 */}
      <div style={{ backgroundColor: 'white', display: 'flex', justifyContent: 'space-around', padding: '15px 20px', borderBottom: '2px solid #eee' }}>
        <span style={{ color: '#333', fontWeight: '500' }}>학사안내</span>
        <span style={{ color: '#333', fontWeight: '500' }}>수업/성적</span>
        <span style={{ color: '#333', fontWeight: '500' }}>학적/졸업</span>
        <span style={{ color: '#333', fontWeight: '500' }}>등록/장학</span>
        <span style={{ color: '#333', fontWeight: '500' }}>경력관리</span>
        <span style={{ color: '#333', fontWeight: '500' }}>교내활동</span>
        <span style={{ color: '#333', fontWeight: '500' }}>게시판</span>
        <span style={{ color: '#333', fontWeight: '500' }}>시설물예약</span>
      </div>

      {/* 중간 3개 박스 */}
      <div style={{ display: 'flex', gap: '15px', padding: '15px 0px 15px 20px', backgroundColor: '#D5E7EF' }}>
        {/* 왼쪽 - 개인정보 */}
        <div style={{ flex: 1, backgroundColor: '#0571AE', borderRadius: '8px', padding: '20px 20px 12px 20px', color: 'white' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <span style={{ fontWeight: 'bold', fontSize: '22px' }}>송채희</span>
              <span style={{ backgroundColor: '#055E92', padding: '4px 12px', borderRadius: '4px', fontSize: '12px', marginLeft: '10px' }}>컴퓨터공학과</span>
            </div>
            <div style={{ display: 'flex', gap: '5px', alignItems: 'center' }}>
              <i className="fa-solid fa-bell" style={{ fontSize: '18px' }}></i>
              <span style={{ fontSize: '13px' }}>알림</span>
              <span style={{ backgroundColor: '#FDE55F', color: '#333', borderRadius: '12px', padding: '2px 8px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: 'bold' }}>99</span>
            </div>
          </div>
          <div style={{ marginBottom: '20px', display: 'flex', alignItems: 'center' }}>
            <span>학부생(재학생) 접속중</span>
            <span style={{ marginLeft: '10px', backgroundColor: 'white', padding: '5px 15px', borderRadius: '20px', fontSize: '14px', display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#888888', fontWeight: 'bold' }}>
              <span style={{ backgroundColor: '#F16500', borderRadius: '50%', width: '10px', height: '10px', display: 'inline-block' }}></span>
              2차인증 하기 →
            </span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '20px' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ backgroundColor: '#2E9FE1', borderRadius: '50%', width: '60px', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 8px' }}>
                <i className="fa-solid fa-building-columns" style={{ fontSize: '24px' }}></i>
              </div>
              <div style={{ fontSize: '12px' }}>통합정보</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ backgroundColor: '#2E9FE1', borderRadius: '50%', width: '60px', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 8px' }}>
                <i className="fa-solid fa-book-open" style={{ fontSize: '24px' }}></i>
              </div>
              <div style={{ fontSize: '12px' }}>중앙도서관</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ backgroundColor: '#2E9FE1', borderRadius: '50%', width: '60px', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 8px' }}>
                <i className="fa-solid fa-envelope" style={{ fontSize: '24px' }}></i>
              </div>
              <div style={{ fontSize: '12px' }}>메일</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ backgroundColor: '#2E9FE1', borderRadius: '50%', width: '60px', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 8px' }}>
                <i className="fa-solid fa-id-card-clip" style={{ fontSize: '24px' }}></i>
              </div>
              <div style={{ fontSize: '12px' }}>증명서발급</div>
            </div>
          </div>
          <div style={{ borderTop: '1px dashed rgba(255,255,255,0.3)', paddingTop: '15px', fontSize: '15px', marginTop: '5px' }}>
            <div style={{ marginBottom: '8px' }}><i className="fa-solid fa-desktop" style={{ marginRight: '6px' }}></i>최근 접속 IP : 211.234.227.157</div>
            <div><i className="fa-regular fa-clock" style={{ marginRight: '6px' }}></i>최근 접속 시간 : 2026-04-07 16:31:50</div>
          </div>
        </div>

        {/* 가운데 - 공지사항 */}
        <div style={{ flex: 1, backgroundColor: 'white', borderRadius: '8px', padding: '20px' }}>
          <div style={{ fontWeight: 'bold', fontSize: '18px', marginBottom: '10px' }}>공지사항</div>
          <div style={{ display: 'flex', gap: '15px', borderBottom: '1px solid #ddd', marginBottom: '15px' }}>
            <span style={{ color: '#0571AE', fontWeight: 'bold', borderBottom: '2px solid #0571AE', paddingBottom: '10px' }}>공지</span>
            <span style={{ color: '#555', fontWeight: 'bold', paddingBottom: '10px' }}>수업</span>
            <span style={{ color: '#555', fontWeight: 'bold', paddingBottom: '10px' }}>등록</span>
            <span style={{ color: '#555', fontWeight: 'bold', paddingBottom: '10px' }}>장학</span>
            <span style={{ color: '#555', fontWeight: 'bold', paddingBottom: '10px' }}>JNUclass</span>
          </div>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            <li style={{ padding: '8px 0', borderBottom: '1px solid #f0f0f0', display: 'flex', justifyContent: 'space-between' }}>
              <span>• 2026년 상반기 「전국에너지공동학점과정」 수강생 모집</span>
              <span style={{ color: '#999', fontSize: '13px' }}>04-07</span>
            </li>
            <li style={{ padding: '8px 0', borderBottom: '1px solid #f0f0f0', display: 'flex', justifyContent: 'space-between' }}>
              <span>• (해양과학대학) 2026학년도 제1학기 국가근로장학생 ...</span>
              <span style={{ color: '#999', fontSize: '13px' }}>04-07</span>
            </li>
            <li style={{ padding: '8px 0', borderBottom: '1px solid #f0f0f0', display: 'flex', justifyContent: 'space-between' }}>
              <span>• 2026 정원드림 프로젝트 참가자 모집 안내</span>
              <span style={{ color: '#999', fontSize: '13px' }}>04-07</span>
            </li>
            <li style={{ padding: '8px 0', display: 'flex', justifyContent: 'space-between' }}>
              <span>• [미래국제재단] 2026년 "대학교 학업 및 생활비 지원"...</span>
              <span style={{ color: '#999', fontSize: '13px' }}>04-07</span>
            </li>
          </ul>
        </div>

        {/* 오른쪽 - 수강정보 */}
        <div style={{ flex: 1, backgroundColor: 'white', borderRadius: '8px', padding: '15px' }}>
          <div style={{ fontWeight: 'bold', fontSize: '18px', marginBottom: '10px' }}>수강정보</div>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            <li style={{ padding: '10px 12px', backgroundColor: '#F2F2F2', marginBottom: '6px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span>빅데이터분석및시각화</span>
            </li>
            <li style={{ padding: '10px 12px', backgroundColor: '#F2F2F2', marginBottom: '6px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span>인터넷과 지식재산권법</span>
              <span style={{ backgroundColor: '#F16500', color: 'white', padding: '3px 10px', borderRadius: '20px', fontSize: '12px' }}>일반선택</span>
            </li>
            <li style={{ padding: '10px 12px', backgroundColor: '#F2F2F2', marginBottom: '6px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span>소프트웨어공학</span>
            </li>
            <li style={{ padding: '10px 12px', backgroundColor: '#F2F2F2', marginBottom: '6px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span>빅데이터프로그래밍</span>
              <span style={{ backgroundColor: '#7135C5', color: 'white', padding: '3px 10px', borderRadius: '20px', fontSize: '12px' }}>블렌디드</span>
            </li>
            <li style={{ padding: '10px 12px', backgroundColor: '#F2F2F2', marginBottom: '6px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span>과학기술과우리의삶</span>
              <span style={{ backgroundColor: '#666666', color: 'white', padding: '3px 10px', borderRadius: '20px', fontSize: '12px' }}>JOY공유대학</span>
            </li>
            <li style={{ padding: '10px 12px', backgroundColor: '#F2F2F2' }}>
              <span>SPA개발방법론</span>
            </li>
          </ul>
        </div>

        {/* QUICK LINK + TOP */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0px', marginTop: '100px' }}>
          <div style={{ backgroundColor: '#39A1DC', color: 'white', padding: '10px 8px', borderRadius: '4px 4px 0 0', textAlign: 'center', cursor: 'pointer' }}>
            <i className="fa-solid fa-caret-left" style={{ backgroundColor: 'white', color: '#0872AE', borderRadius: '50%', width: '24px', height: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px', margin: '0 auto' }}></i>
          </div>
          <div style={{ backgroundColor: '#39A1DC', color: 'white', padding: '15px 8px', writingMode: 'vertical-rl', fontSize: '13px', fontWeight: 'bold', letterSpacing: '3px', textAlign: 'center', cursor: 'pointer' }}>QUICK LINK</div>
          <div style={{ backgroundColor: '#0872AE', color: 'white', padding: '10px 8px', borderRadius: '0 0 4px 4px', textAlign: 'center', cursor: 'pointer', fontSize: '12px', borderTop: '1px solid rgba(255,255,255,0.3)' }}>
            <div style={{ fontSize: '14px' }}>^</div>
            <div>TOP</div>
          </div>
        </div>
      </div>

      {/* 아래쪽 3개 박스 */}
      <div style={{ display: 'flex', gap: '15px', padding: '15px 0px 15px 20px', marginRight: '42px' }}>
        {/* 주요서비스링크 */}
        <div style={{ flex: 1, border: '1px solid #ddd', borderRadius: '8px', padding: '20px', backgroundColor: 'white' }}>
          <div style={{ fontWeight: 'bold', fontSize: '18px', marginBottom: '15px' }}>주요서비스링크</div>
          <div style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '20px' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ backgroundColor: '#f0f0f0', borderRadius: '50%', width: '60px', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 8px' }}>
                <i className="fa-regular fa-file" style={{ fontSize: '22px', color: '#888' }}></i>
              </div>
              <div style={{ fontSize: '11px', color: '#555' }}>연구실안전<br/>관리시스템</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ backgroundColor: '#f0f0f0', borderRadius: '50%', width: '60px', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 8px' }}>
                <i className="fa-solid fa-certificate" style={{ fontSize: '22px', color: '#888' }}></i>
              </div>
              <div style={{ fontSize: '11px', color: '#555' }}>공학인증</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ backgroundColor: '#f0f0f0', borderRadius: '50%', width: '60px', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 8px' }}>
                <i className="fa-solid fa-display" style={{ fontSize: '22px', color: '#888' }}></i>
              </div>
              <div style={{ fontSize: '11px', color: '#555' }}>오피스365</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ backgroundColor: '#f0f0f0', borderRadius: '50%', width: '60px', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 8px' }}>
                <i className="fa-solid fa-comments" style={{ fontSize: '22px', color: '#888' }}></i>
              </div>
              <div style={{ fontSize: '11px', color: '#555' }}>총학생회</div>
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ backgroundColor: '#f0f0f0', borderRadius: '50%', width: '60px', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 8px' }}>
                <i className="fa-solid fa-people-group" style={{ fontSize: '22px', color: '#888' }}></i>
              </div>
              <div style={{ fontSize: '11px', color: '#555' }}>동아리연합회</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ backgroundColor: '#f0f0f0', borderRadius: '50%', width: '60px', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 8px' }}>
                <i className="fa-solid fa-headset" style={{ fontSize: '22px', color: '#888' }}></i>
              </div>
              <div style={{ fontSize: '11px', color: '#555' }}>헬프유(원격1)</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ backgroundColor: '#f0f0f0', borderRadius: '50%', width: '60px', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 8px' }}>
                <i className="fa-solid fa-display" style={{ fontSize: '22px', color: '#888' }}></i>
              </div>
              <div style={{ fontSize: '11px', color: '#555' }}>넷클리닉(원격2)</div>
            </div>
            <div style={{ width: '60px' }}></div>
          </div>
        </div>

        {/* 비교과프로그램 */}
        <div style={{ flex: 1, border: '1px solid #ddd', borderRadius: '8px', padding: '20px', backgroundColor: 'white' }}>
          <div style={{ fontWeight: 'bold', fontSize: '18px', marginBottom: '15px' }}>비교과프로그램</div>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            <li style={{ padding: '12px', backgroundColor: '#F2F2F2', marginBottom: '6px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span>• 2026학년도 학습컨설팅</span>
              <span style={{ backgroundColor: '#666666', color: 'white', padding: '4px 12px', borderRadius: '4px', fontSize: '12px' }}>신청하기 &gt;</span>
            </li>
            <li style={{ padding: '12px', backgroundColor: '#F2F2F2', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span>• 2026학년 1학기 취업연계 국가근로장학 참여학생 모집</span>
              <span style={{ backgroundColor: '#666666', color: 'white', padding: '4px 12px', borderRadius: '4px', fontSize: '12px' }}>신청하기 &gt;</span>
            </li>
          </ul>
        </div>

        {/* 강의시간표 (빈칸) */}
        <div style={{ flex: 1, border: '1px solid #ddd', borderRadius: '8px', padding: '20px', backgroundColor: 'white' }}>
          <div style={{ fontWeight: 'bold', fontSize: '18px' }}>강의시간표</div>
        </div>
      </div>
    </div>
  );
}

export default App;