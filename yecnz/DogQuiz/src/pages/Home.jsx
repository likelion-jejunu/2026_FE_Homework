import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-6">
      <section className="w-full max-w-md text-center">
        <p className="text-sm font-semibold text-slate-400">Dog Breed Quiz</p>
        <h1 className="mt-3 text-3xl font-bold text-slate-800">
          강아지 종 맞히기 퀴즈
        </h1>
        <p className="mt-4 text-base leading-7 text-slate-500">
          강아지 사진을 보고 견종 이름을 맞혀보세요. 총 10문제입니다.
        </p>

        <button
          onClick={() => navigate('/quiz')}
          className="mt-8 w-full rounded-lg bg-slate-700 px-5 py-3 font-semibold text-white transition hover:bg-slate-600 focus:outline-none focus:ring-2 focus:ring-slate-200"
        >
          퀴즈 시작하기
        </button>
      </section>
    </main>
  );
}

export default Home;
