import { PROJECT_CATEGORIES } from '../data/projects'

const PASTELS = ['bg-yellow-200', 'bg-[#ECE9FF]', 'bg-pink-200']
const IMAGE_SLOTS = [1, 2, 3]

function Projects() {
  return (
    <section id="projects" className="border-t-[3px] border-black px-6 py-24 dark:border-white">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-2xl font-extrabold text-neutral-900 dark:text-white">Projects</h2>

        {PROJECT_CATEGORIES.map((group, groupIndex) => (
          <div key={group.category} className={groupIndex > 0 ? 'mt-14' : 'mt-8'}>
            <h3 className="text-lg font-extrabold text-neutral-900 dark:text-white">
              {group.category}
            </h3>
            <div className="mt-4 flex flex-col gap-6">
              {group.projects.map((project, index) => (
                <div
                  key={project.title}
                  className={`flex flex-col gap-5 rounded-xl border-[3px] border-black p-5 shadow-[4px_4px_0_0_#000] dark:border-white dark:shadow-[4px_4px_0_0_#fff] ${PASTELS[index % PASTELS.length]}`}
                >
                  <div className="flex gap-3 overflow-x-auto pb-1">
                    {IMAGE_SLOTS.map((slot) => (
                      <div
                        key={slot}
                        className="flex aspect-[410/720] w-24 shrink-0 items-center justify-center rounded-lg border-[3px] border-dashed border-black bg-white/70 sm:w-28"
                      >
                        <span className="text-center text-[10px] font-bold text-neutral-500">
                          410 × 720
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="min-w-0">
                    <p className="text-xs font-semibold text-neutral-600">{project.period}</p>
                    <p className="mt-1 text-xs font-bold text-black">{project.context}</p>

                    <h4 className="mt-2 text-lg font-extrabold text-black">{project.title}</h4>
                    <p className="text-sm text-neutral-700">{project.subtitle}</p>

                    <div className="mt-3 flex flex-wrap gap-2 text-xs font-bold text-black">
                      <span className="rounded-full border-2 border-black bg-white px-3 py-1">
                        역할 · {project.role}
                      </span>
                      <span className="rounded-full border-2 border-black bg-white px-3 py-1">
                        인원 · {project.team}
                      </span>
                    </div>

                    <ul className="mt-3 flex flex-wrap gap-2">
                      {project.stack.map((tag) => (
                        <li
                          key={tag}
                          className="rounded-full border-2 border-black bg-white px-3 py-1 text-xs font-bold text-black"
                        >
                          {tag}
                        </li>
                      ))}
                    </ul>

                    <p className="mt-4 text-sm leading-relaxed text-neutral-800">
                      {project.intro}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs font-extrabold tracking-wide text-neutral-600">
                      담당 업무
                    </p>
                    <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-neutral-800">
                      {project.responsibilities.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>

                    <p className="mt-4 text-xs font-extrabold tracking-wide text-neutral-600">
                      주요 성과
                    </p>
                    <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-neutral-800">
                      {project.achievements.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>

                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-4 inline-block rounded-lg border-[3px] border-black bg-white px-4 py-1.5 text-sm font-extrabold text-black shadow-[3px_3px_0_0_#000] transition-all hover:-translate-y-0.5 hover:shadow-[5px_5px_0_0_#000]"
                      >
                        실 서비스 보러가기 ↗
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
