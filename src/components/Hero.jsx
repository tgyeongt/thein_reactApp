function Hero() {
  return (
    <section
      id="home"
      className="mx-auto flex max-w-5xl flex-col items-center gap-5 px-6 py-32 text-center"
    >
      <p className="rounded-full border-[3px] border-black bg-yellow-200 px-4 py-1 text-sm font-bold text-black shadow-[3px_3px_0_0_#000] dark:border-white dark:shadow-[3px_3px_0_0_#fff]">
        Hi, I&apos;m
      </p>
      <h1 className="text-4xl font-extrabold tracking-tight text-neutral-900 sm:text-5xl dark:text-white">
        박태경{" "}
        <span className="text-neutral-400 dark:text-neutral-500">
          Tae-Gyeong Park
        </span>
      </h1>
      <p className="max-w-xl rounded-xl border-[3px] border-black bg-[#ECE9FF] px-5 py-3 text-lg text-neutral-800 shadow-[4px_4px_0_0_#000] dark:border-white dark:shadow-[4px_4px_0_0_#fff]">
        컴퓨터공학과 · 웹 개발과 클라우드에 관심이 많은 개발자입니다.
      </p>
      <a
        href="#projects"
        className="mt-4 rounded-lg border-[3px] border-black bg-yellow-200 px-6 py-2.5 text-sm font-extrabold text-black shadow-[4px_4px_0_0_#000] transition-all hover:-translate-y-0.5 hover:shadow-[6px_6px_0_0_#000] dark:border-white dark:shadow-[4px_4px_0_0_#fff] dark:hover:shadow-[6px_6px_0_0_#fff]"
      >
        View my work
      </a>
    </section>
  );
}

export default Hero;
