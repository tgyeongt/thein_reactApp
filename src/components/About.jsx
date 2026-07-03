import { EDUCATION } from "../data/education";
import { AWARDS } from "../data/awards";
import { CLUBS } from "../data/clubs";
import { ACTIVITIES } from "../data/activities";
import { SKILLS } from "../data/skills";

const PASTELS = ["bg-yellow-200", "bg-[#ECE9FF]", "bg-pink-200"];

function About() {
  return (
    <section
      id="about"
      className="border-t-[3px] border-black px-6 py-24 dark:border-white"
    >
      <div className="mx-auto max-w-3xl">
        <h2 className="text-2xl font-extrabold text-neutral-900 dark:text-white">
          About
        </h2>
        <p className="mt-6 rounded-xl border-[3px] border-black bg-[#ECE9FF] p-5 leading-relaxed text-neutral-800 shadow-[4px_4px_0_0_#000] dark:border-white dark:shadow-[4px_4px_0_0_#fff]">
          서경대학교 컴퓨터공학과에 재학 중인 박태경입니다. 여러 해커톤과
          대외활동에 참여하며 웹 개발과 클라우드 기술을 익혀왔고, 새로운 기술을
          배우고 실제 서비스로 만들어보는 과정을 즐깁니다. 꼼꼼한 문제 해결과
          협업을 통해 좋은 제품을 만드는 개발자가 되고자 합니다.
        </p>

        <h3 className="mt-10 text-lg font-extrabold text-neutral-900 dark:text-white">
          Skills
        </h3>
        <dl className="mt-4 divide-y-2 divide-black rounded-xl border-[3px] border-black bg-white shadow-[4px_4px_0_0_#000] dark:divide-white dark:border-white dark:bg-neutral-900 dark:shadow-[4px_4px_0_0_#fff]">
          {SKILLS.map((group) => (
            <div
              key={group.category}
              className="flex flex-col gap-1 px-5 py-3 sm:flex-row sm:items-baseline sm:gap-6"
            >
              <dt className="shrink-0 text-sm font-bold text-black sm:w-40 dark:text-white">
                {group.category}
              </dt>
              <dd className="text-sm text-neutral-700 dark:text-neutral-300">
                {group.items.join(', ')}
              </dd>
            </div>
          ))}
        </dl>

        <h3 className="mt-10 text-lg font-extrabold text-neutral-900 dark:text-white">
          Education
        </h3>
        <ul className="mt-4 grid gap-4 sm:grid-cols-2">
          {EDUCATION.map((item, index) => (
            <li
              key={item.school}
              className={`rounded-xl border-[3px] border-black p-4 shadow-[4px_4px_0_0_#000] dark:border-white dark:shadow-[4px_4px_0_0_#fff] ${PASTELS[index % PASTELS.length]}`}
            >
              <p className="font-bold text-black">{item.school}</p>
              <p className="mt-1 text-sm text-neutral-800">{item.detail}</p>
              <p className="mt-2 text-xs font-semibold text-neutral-600">
                {item.period}
              </p>
            </li>
          ))}
        </ul>

        <h3 className="mt-10 text-lg font-extrabold text-neutral-900 dark:text-white">
          Awards
        </h3>
        <ul className="mt-4 grid gap-4 sm:grid-cols-2">
          {AWARDS.map((award, index) => (
            <li
              key={award.title}
              className={`rounded-xl border-[3px] border-black p-4 shadow-[4px_4px_0_0_#000] dark:border-white dark:shadow-[4px_4px_0_0_#fff] ${PASTELS[(index + 2) % PASTELS.length]}`}
            >
              <p className="font-bold text-black">{award.title}</p>
              {award.org && (
                <p className="mt-1 text-sm text-neutral-800">{award.org}</p>
              )}
              <p className="mt-2 text-xs font-semibold text-neutral-600">
                {award.period}
              </p>
            </li>
          ))}
        </ul>

        <h3 className="mt-10 text-lg font-extrabold text-neutral-900 dark:text-white">
          Club Activities
        </h3>
        <ul className="mt-4 space-y-4">
          {CLUBS.map((club, index) => (
            <li
              key={club.title}
              className={`rounded-xl border-[3px] border-black p-5 shadow-[4px_4px_0_0_#000] dark:border-white dark:shadow-[4px_4px_0_0_#fff] ${PASTELS[index % PASTELS.length]}`}
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <p className="font-bold text-black">{club.title}</p>
                <p className="text-xs font-semibold text-neutral-600">{club.period}</p>
              </div>
              <p className="mt-1 text-sm text-neutral-800">{club.intro}</p>
              <ul className="mt-3 list-inside list-disc space-y-1 text-sm text-neutral-800">
                {club.activities.map((activity) => (
                  <li key={activity}>{activity}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>

        <h3 className="mt-10 text-lg font-extrabold text-neutral-900 dark:text-white">
          Extracurricular Activities
        </h3>
        <ul className="mt-4 space-y-4">
          {ACTIVITIES.map((activity, index) => (
            <li
              key={activity.title}
              className={`rounded-xl border-[3px] border-black p-5 shadow-[4px_4px_0_0_#000] dark:border-white dark:shadow-[4px_4px_0_0_#fff] ${PASTELS[(index + 1) % PASTELS.length]}`}
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <p className="font-bold text-black">{activity.title}</p>
                <p className="text-xs font-semibold text-neutral-600">{activity.period}</p>
              </div>
              <p className="mt-1 text-sm text-neutral-800">{activity.intro}</p>
              <ul className="mt-3 list-inside list-disc space-y-1 text-sm text-neutral-800">
                {activity.activities.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default About;
