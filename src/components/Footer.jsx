import { SOCIAL_LINKS } from '../data/social'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer id="contact" className="border-t-[3px] border-black dark:border-white">
      <div className="mx-auto max-w-5xl px-6 py-16 text-center">
        <h2 className="text-2xl font-extrabold text-neutral-900 dark:text-white">Contact</h2>
        <p className="mt-3 text-sm">함께 일하고 싶으시다면 언제든 이메일로 연락해주세요.</p>
        <a
          href="mailto:tgyeongt@gmail.com"
          className="mt-5 inline-block rounded-lg border-[3px] border-black bg-yellow-200 px-6 py-2.5 text-lg font-extrabold text-black shadow-[4px_4px_0_0_#000] transition-all hover:-translate-y-0.5 hover:shadow-[6px_6px_0_0_#000] dark:border-white dark:shadow-[4px_4px_0_0_#fff] dark:hover:shadow-[6px_6px_0_0_#fff]"
        >
          tgyeongt@gmail.com
        </a>
      </div>

      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 border-t-[3px] border-black px-6 py-6 text-sm text-neutral-600 sm:flex-row sm:justify-between dark:border-white dark:text-neutral-400">
        <p>&copy; {year} 박태경 (Tae-Gyeong Park). All rights reserved.</p>

        <ul className="flex items-center gap-3">
          {SOCIAL_LINKS.map((social) => (
            <li key={social.label}>
              <a
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
                className="flex h-10 w-10 items-center justify-center rounded-full border-[3px] border-black bg-white text-black transition-all hover:-translate-y-0.5 hover:bg-[#ECE9FF] hover:shadow-[3px_3px_0_0_#000] dark:border-white dark:bg-neutral-900 dark:text-white dark:hover:shadow-[3px_3px_0_0_#fff]"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d={social.d} />
                </svg>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}

export default Footer
