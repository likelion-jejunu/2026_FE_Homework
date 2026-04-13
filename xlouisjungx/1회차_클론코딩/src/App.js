import { useState } from 'react';

const F = {
  fontFamily: "'Malgun Gothic', '맑은 고딕', AppleGothic, sans-serif",
};

// ── TopHeader ────────────────────────────────────────────────
function TopHeader() {
  return (
    <div
      style={{
        background: '#1a5fa8',
        display: 'flex',
        alignItems: 'center',
        padding: '0 20px',
        height: '54px',
        ...F,
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          minWidth: '170px',
          flexShrink: 0,
        }}
      >
        <div
          style={{
            width: '34px',
            height: '34px',
            background: 'white',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#1a5fa8"
            strokeWidth="2.2"
            strokeLinecap="round"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5z" />
            <path d="M2 17l10 5 10-5" />
            <path d="M2 12l10 5 10-5" />
          </svg>
        </div>
        <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.75)' }}>
          제주대학교
        </span>
        <span style={{ fontSize: '20px', fontWeight: '700', color: 'white' }}>
          포털
        </span>
      </div>
      <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
        <div
          style={{
            display: 'flex',
            borderRadius: '3px',
            overflow: 'hidden',
            width: '340px',
          }}
        >
          <input
            type="text"
            placeholder="메뉴검색"
            style={{
              flex: 1,
              padding: '7px 14px',
              border: 'none',
              outline: 'none',
              fontSize: '13px',
              ...F,
            }}
          />
          <button
            style={{
              background: '#154d8c',
              border: 'none',
              padding: '0 14px',
              cursor: 'pointer',
              color: 'white',
              fontSize: '15px',
            }}
          >
            🔍
          </button>
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
        <div
          style={{
            display: 'flex',
            color: 'white',
            fontSize: '13px',
            marginRight: '16px',
          }}
        >
          {['통합정보', 'JNUclass', '홈페이지'].map((l, i, a) => (
            <span
              key={l}
              style={{
                padding: '0 13px',
                cursor: 'pointer',
                lineHeight: 1,
                borderRight:
                  i < a.length - 1
                    ? '1px solid rgba(255,255,255,0.25)'
                    : 'none',
              }}
            >
              {l}
            </span>
          ))}
        </div>
        <div style={{ display: 'flex', gap: '6px', marginRight: '12px' }}>
          {['로그아웃', '마이페이지'].map((l) => (
            <button
              key={l}
              style={{
                background: 'transparent',
                color: 'white',
                border: '1px solid rgba(255,255,255,0.6)',
                padding: '5px 12px',
                borderRadius: '3px',
                fontSize: '12px',
                cursor: 'pointer',
                ...F,
              }}
            >
              {l}
            </button>
          ))}
        </div>
        <div
          style={{
            display: 'flex',
            gap: '10px',
            color: 'white',
            fontSize: '16px',
          }}
        >
          {['⚙️', '❓', '🌐'].map((ic) => (
            <span key={ic} style={{ cursor: 'pointer', opacity: 0.85 }}>
              {ic}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── MainNav ──────────────────────────────────────────────────
function MainNav() {
  const [active, setActive] = useState('학사안내');
  const items = [
    '학사안내',
    '수업/성적',
    '학적/졸업',
    '등록/장학',
    '경력관리',
    '교내활동',
    '게시판',
    '시설물예약',
  ];
  return (
    <div
      style={{
        background: 'white',
        borderBottom: '2px solid #e0e0e0',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <ul style={{ display: 'flex', listStyle: 'none', margin: 0, padding: 0 }}>
        {items.map((item) => (
          <li
            key={item}
            onClick={() => setActive(item)}
            style={{
              padding: '13px 24px',
              fontSize: '14px',
              fontWeight: '600',
              cursor: 'pointer',
              whiteSpace: 'nowrap',
              borderBottom:
                active === item ? '2px solid #1a5fa8' : '2px solid transparent',
              color: active === item ? '#1a5fa8' : '#333',
              marginBottom: '-2px',
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

// ── Left Column ──────────────────────────────────────────────
function UserCard() {
  return (
    <div
      style={{
        background: '#1a5fa8',
        borderRadius: '8px',
        padding: '16px 18px',
        color: 'white',
        height: '280px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
          }}
        >
          <div>
            <span style={{ fontSize: '15px', fontWeight: '700' }}>송채희</span>
            <span
              style={{
                fontSize: '11.5px',
                color: 'rgba(255,255,255,0.8)',
                marginLeft: '6px',
              }}
            >
              컴퓨터공학과
            </span>
          </div>
          <div
            style={{
              position: 'relative',
              cursor: 'pointer',
              fontSize: '17px',
            }}
          >
            🔔
            <span
              style={{
                position: 'absolute',
                top: '-6px',
                right: '-10px',
                background: '#f44336',
                color: 'white',
                borderRadius: '10px',
                fontSize: '9.5px',
                padding: '1px 5px',
                fontWeight: '700',
              }}
            >
              99
            </span>
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            marginTop: '6px',
            flexWrap: 'wrap',
          }}
        >
          <span style={{ fontSize: '11.5px', color: 'rgba(255,255,255,0.8)' }}>
            학부생(재학생) 접속중
          </span>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '5px',
              background: 'rgba(255,255,255,0.12)',
              border: '1px solid rgba(255,255,255,0.35)',
              padding: '3px 10px',
              borderRadius: '20px',
              cursor: 'pointer',
              fontSize: '11px',
            }}
          >
            <div
              style={{
                width: '7px',
                height: '7px',
                background: '#4caf50',
                borderRadius: '50%',
              }}
            />
            <span>2차인증 하기</span>
            <span>→</span>
          </div>
        </div>
      </div>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4,1fr)',
          gap: '4px',
        }}
      >
        {[
          ['🏛️', '통합정보'],
          ['📚', '중앙도서관'],
          ['✉️', '메일'],
          ['📄', '증명서발급'],
        ].map(([ic, lb]) => (
          <div
            key={lb}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '5px',
              cursor: 'pointer',
            }}
          >
            <div
              style={{
                width: '44px',
                height: '44px',
                background: 'rgba(255,255,255,0.18)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '17px',
              }}
            >
              {ic}
            </div>
            <span
              style={{
                fontSize: '10px',
                textAlign: 'center',
                lineHeight: '1.3',
              }}
            >
              {lb}
            </span>
          </div>
        ))}
      </div>
      <div
        style={{
          borderTop: '1px solid rgba(255,255,255,0.18)',
          paddingTop: '8px',
          fontSize: '10.5px',
          color: 'rgba(255,255,255,0.75)',
          lineHeight: '1.9',
        }}
      >
        <div>🖥 최근 접속 IP : 211.234.227.157</div>
        <div>⏱ 최근 접속 시간 : 2026-04-07 16:31:50</div>
      </div>
    </div>
  );
}

function ServiceLinks() {
  const row1 = [
    ['📋', '연구실안전\n관리시스템'],
    ['🏆', '공학인증'],
    ['⊞', '오피스365'],
    ['👥', '총학생회'],
  ];
  const row2 = [
    ['👨‍👩‍👧', '동아리연합회'],
    ['🖥️', '헬프유(원격1)'],
    ['🖥️', '넷클리닉(원격2)'],
  ];
  const Item = ({ ic, lb }) => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '4px',
        cursor: 'pointer',
      }}
    >
      <div
        style={{
          width: '46px',
          height: '46px',
          border: '1px solid #e0e0e0',
          borderRadius: '7px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '18px',
          background: '#fafafa',
        }}
      >
        {ic}
      </div>
      <span
        style={{
          fontSize: '10px',
          textAlign: 'center',
          color: '#555',
          lineHeight: '1.3',
          whiteSpace: 'pre-line',
        }}
      >
        {lb}
      </span>
    </div>
  );
  return (
    <div
      style={{
        background: 'white',
        borderRadius: '8px',
        padding: '14px 16px',
        flex: 1,
      }}
    >
      <div
        style={{ fontSize: '14px', fontWeight: '700', marginBottom: '10px' }}
      >
        주요서비스링크
      </div>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4,1fr)',
          gap: '8px',
        }}
      >
        {row1.map(([ic, lb]) => (
          <Item key={lb} ic={ic} lb={lb} />
        ))}
      </div>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3,1fr)',
          gap: '8px',
          marginTop: '8px',
        }}
      >
        {row2.map(([ic, lb]) => (
          <Item key={lb} ic={ic} lb={lb} />
        ))}
      </div>
    </div>
  );
}

// ── Center Column ─────────────────────────────────────────────
function NoticeBoard() {
  const [tab, setTab] = useState('공지');
  const tabs = ['공지', '수업', '등록', '장학', 'JNUclass'];
  const notices = [
    {
      text: '2026년 상반기 「전국에너지공동학점과정」수강생 모집',
      date: '04-07',
    },
    {
      text: '(해양과학대학) 2026학년도 제1학기 국가근로장학생 ...',
      date: '04-07',
    },
    { text: '2026 정원드림 프로젝트 참가자 모집 안내', date: '04-07' },
    {
      text: '[미래국제재단] 2026년 "대학교 학업 및 생활비 지원" ...',
      date: '04-07',
    },
  ];
  return (
    <div
      style={{
        background: 'white',
        borderRadius: '8px',
        padding: '16px',
        height: '280px',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <div style={{ fontSize: '15px', fontWeight: '700', marginBottom: '8px' }}>
        공지사항
      </div>
      <div
        style={{
          display: 'flex',
          borderBottom: '1px solid #eee',
          marginBottom: '8px',
        }}
      >
        {tabs.map((t) => (
          <div
            key={t}
            onClick={() => setTab(t)}
            style={{
              padding: '6px 14px',
              fontSize: '12.5px',
              cursor: 'pointer',
              borderBottom:
                tab === t ? '2px solid #1a5fa8' : '2px solid transparent',
              color: tab === t ? '#1a5fa8' : '#666',
              fontWeight: tab === t ? '700' : '400',
              marginBottom: '-1px',
            }}
          >
            {t}
          </div>
        ))}
      </div>
      <ul style={{ listStyle: 'none', margin: 0, padding: 0, flex: 1 }}>
        {notices.map((n, i) => (
          <li
            key={i}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              padding: '8px 0',
              borderBottom:
                i < notices.length - 1 ? '1px solid #f5f5f5' : 'none',
              fontSize: '12px',
              cursor: 'pointer',
            }}
          >
            <span
              style={{
                flex: 1,
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
                paddingRight: '10px',
              }}
            >
              {n.text}
            </span>
            <span
              style={{ color: '#aaa', fontSize: '11px', whiteSpace: 'nowrap' }}
            >
              {n.date}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ProgramCard() {
  const items = [
    '2026학년도 학습컨설팅',
    '2026학년 1학기 취업연계 국가근로장학 참여학생 모집',
  ];
  return (
    <div
      style={{
        background: 'white',
        borderRadius: '8px',
        padding: '16px',
        flex: 1,
      }}
    >
      <div
        style={{ fontSize: '14px', fontWeight: '700', marginBottom: '10px' }}
      >
        비교과프로그램
      </div>
      {items.map((p, i) => (
        <div
          key={i}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '9px 0',
            borderBottom: i < items.length - 1 ? '1px solid #f5f5f5' : 'none',
          }}
        >
          <div
            style={{
              width: '6px',
              height: '6px',
              background: '#1a5fa8',
              borderRadius: '50%',
              flexShrink: 0,
            }}
          />
          <div style={{ flex: 1, fontSize: '12px', lineHeight: '1.5' }}>
            {p}
          </div>
          <button
            style={{
              background: '#1a5fa8',
              color: 'white',
              border: 'none',
              padding: '5px 10px',
              borderRadius: '4px',
              fontSize: '11px',
              cursor: 'pointer',
              whiteSpace: 'nowrap',
              ...F,
            }}
          >
            신청하기 ›
          </button>
        </div>
      ))}
    </div>
  );
}

// ── Right Column ──────────────────────────────────────────────
function CourseInfo() {
  const TAG = {
    padding: '2px 7px',
    borderRadius: '3px',
    fontSize: '10px',
    fontWeight: '700',
    whiteSpace: 'nowrap',
  };
  const courses = [
    { name: '빅데이터분석및시각화' },
    {
      name: '인터넷과 지식재산권법',
      tag: { label: '일반선택', bg: '#f05a28' },
    },
    { name: '소프트웨어공학' },
    { name: '빅데이터프로그래밍', tag: { label: '블렌디드', bg: '#6b35cc' } },
    {
      name: '과학기술과우리의삶',
      tag: { label: 'JOY공유대학', bg: '#2196f3' },
    },
    { name: 'SPA개발방법론' },
    { name: '백수수인터넷', tag: { label: '원격수업', bg: '#43a047' } },
  ];
  return (
    <div
      style={{
        background: 'white',
        borderRadius: '8px',
        padding: '14px 16px',
        height: '280px',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <div
        style={{ fontSize: '14px', fontWeight: '700', marginBottom: '10px' }}
      >
        수강정보
      </div>
      <ul
        style={{
          listStyle: 'none',
          margin: 0,
          padding: 0,
          flex: 1,
          overflow: 'auto',
        }}
      >
        {courses.map((c, i) => (
          <li
            key={i}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '6.5px 0',
              borderBottom:
                i < courses.length - 1 ? '1px solid #f5f5f5' : 'none',
              fontSize: '12px',
              cursor: 'pointer',
            }}
          >
            <span style={{ flex: 1 }}>{c.name}</span>
            {c.tag && (
              <span style={{ ...TAG, background: c.tag.bg, color: 'white' }}>
                {c.tag.label}
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Schedule() {
  const days = ['월(6)', '화(7)', '수(8)', '목(9)', '금(10)', '토(11)'];
  const thS = {
    background: '#f5f5f5',
    padding: '4px 2px',
    textAlign: 'center',
    border: '1px solid #eee',
    fontSize: '10px',
  };
  const tdS = {
    padding: '2px',
    border: '1px solid #eee',
    height: '26px',
    verticalAlign: 'top',
    textAlign: 'center',
    fontSize: '9px',
    color: '#bbb',
  };
  const cls = {
    background: '#1a5fa8',
    color: 'white',
    borderRadius: '3px',
    padding: '2px 3px',
    fontSize: '8px',
    lineHeight: '1.3',
    textAlign: 'left',
    display: 'block',
  };
  return (
    <div
      style={{
        background: 'white',
        borderRadius: '8px',
        padding: '14px 16px',
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '8px',
        }}
      >
        <div style={{ fontSize: '14px', fontWeight: '700' }}>강의시간표</div>
        <button
          style={{
            width: '22px',
            height: '22px',
            border: '1px solid #ccc',
            background: 'white',
            cursor: 'pointer',
            borderRadius: '3px',
            fontSize: '16px',
            lineHeight: 1,
            color: '#555',
          }}
        >
          +
        </button>
      </div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          fontSize: '11px',
          color: '#444',
          marginBottom: '6px',
        }}
      >
        <button
          style={{
            width: '20px',
            height: '20px',
            border: '1px solid #ddd',
            background: 'white',
            cursor: 'pointer',
            borderRadius: '3px',
          }}
        >
          ‹
        </button>
        <span>2026-04-06(월)~2026-04-11(토)</span>
        <button
          style={{
            width: '20px',
            height: '20px',
            border: '1px solid #ddd',
            background: 'white',
            cursor: 'pointer',
            borderRadius: '3px',
          }}
        >
          ›
        </button>
      </div>
      <div
        style={{
          display: 'flex',
          gap: '10px',
          fontSize: '10px',
          color: '#666',
          marginBottom: '6px',
          flexWrap: 'wrap',
        }}
      >
        {[
          ['#e53935', '온라인보강(동영상)'],
          ['#1a5fa8', '온라인보강(실시간)'],
        ].map(([c, l]) => (
          <div
            key={l}
            style={{ display: 'flex', alignItems: 'center', gap: '3px' }}
          >
            <div
              style={{
                width: '9px',
                height: '9px',
                borderRadius: '50%',
                background: c,
              }}
            />
            <span>{l}</span>
          </div>
        ))}
      </div>
      <table style={{ width: '100%', borderCollapse: 'collapse', flex: 1 }}>
        <thead>
          <tr>
            <th style={{ ...thS, width: '16px' }} />
            {days.map((d) => (
              <th key={d} style={thS}>
                {d}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {[1, 2, 3, 4].map((row) => (
            <tr key={row}>
              <td style={tdS}>{row}</td>
              {days.map((d, ci) => (
                <td key={d} style={tdS}>
                  {row === 2 && ci === 0 && (
                    <span style={cls}>소프트웨어공학 공과4호D411</span>
                  )}
                  {row === 2 && ci === 1 && (
                    <span style={cls}>소프트웨어공학 공과4호D411</span>
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// ── Root ─────────────────────────────────────────────────────
export default function JejuPortal() {
  return (
    <div
      style={{
        ...F,
        fontSize: '13px',
        background: '#eef0f3',
        color: '#333',
        minHeight: '100vh',
      }}
    >
      <TopHeader />
      <MainNav />

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '290px 1fr 310px',
          gap: '10px',
          padding: '10px 14px',
          maxWidth: '1180px',
          margin: '0 auto',
          alignItems: 'stretch', // 모든 세로 열의 전체 높이를 동일하게 맞춤
        }}
      >
        {/* LEFT */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <UserCard />
          <ServiceLinks />
        </div>

        {/* CENTER */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <NoticeBoard />
          <ProgramCard />
        </div>

        {/* RIGHT */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <CourseInfo />
          <Schedule />
        </div>
      </div>

      <div
        style={{
          position: 'fixed',
          right: 0,
          top: '50%',
          transform: 'translateY(-50%)',
          background: '#1a5fa8',
          color: 'white',
          padding: '11px 5px',
          borderRadius: '5px 0 0 5px',
          writingMode: 'vertical-lr',
          fontSize: '10px',
          fontWeight: '700',
          cursor: 'pointer',
          letterSpacing: '2px',
        }}
      >
        QUICK LINK
      </div>
      <div
        style={{
          position: 'fixed',
          right: 0,
          bottom: '65px',
          background: '#666',
          color: 'white',
          padding: '7px 5px',
          borderRadius: '5px 0 0 5px',
          fontSize: '9px',
          cursor: 'pointer',
          writingMode: 'vertical-lr',
        }}
      >
        ▲ TOP
      </div>
    </div>
  );
}
