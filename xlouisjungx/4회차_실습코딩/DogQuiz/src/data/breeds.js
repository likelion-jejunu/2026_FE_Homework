// 전체 견종 한국어 매핑 데이터
export const BREED_KO = {
  akita: '아키타',
  beagle: '비글',
  boxer: '복서',
  chihuahua: '치와와',
  chow: '차우차우',
  dachshund: '닥스훈트',
  dalmatian: '달마티안',
  doberman: '도베르만',
  germanshepherd: '저먼 셰퍼드',
  husky: '허스키',
  labrador: '리트리버',
  malamute: '말라뮤트',
  maltese: '말티즈',
  newfoundland: '뉴펀들랜드',
  papillon: '파피용',
  pekinese: '페키니즈',
  pembroke: '웰시 코기',
  pitbull: '핏불',
  pomeranian: '포메라니안',
  pug: '퍼그',
  rottweiler: '로트와일러',
  samoyed: '사모예드',
  sharpei: '샤페이',
  shiba: '시바견',
  shihtzu: '시츄',
  stbernard: '세인트 버나드',
};

// 한국어 이름(공백 제거) → 견종 코드 역매핑
export const KO_TO_BREED = Object.entries(BREED_KO).reduce(
  (acc, [code, name]) => {
    acc[name.replace(/\s/g, '')] = code;
    return acc;
  },
  {},
);
