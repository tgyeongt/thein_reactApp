import { useState } from "react";
import { NAV_LINKS } from "../data/navLinks";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b-[2px] border-black bg-orange-50 dark:border-white dark:bg-neutral-950">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a
          href="#home"
          className="rounded-lg border-[3px] border-black bg-yellow-200 px-3 py-1 text-lg font-extrabold tracking-tight text-black shadow-[3px_3px_0_0_#000] dark:border-white dark:shadow-[3px_3px_0_0_#fff]"
        >
          TG
        </a>

        <ul className="hidden gap-3 text-sm font-bold text-black sm:flex dark:text-white">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`block rounded-lg border-[2px] border-black bg-white px-4 py-1.5 transition-all hover:-translate-y-0.5 hover:shadow-[3px_3px_0_0_#000] dark:border-white dark:hover:shadow-[3px_3px_0_0_#fff] ${link.color}`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => setIsMenuOpen((open) => !open)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border-[3px] border-black bg-white text-black sm:hidden dark:border-white dark:bg-neutral-900 dark:text-white"
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth={2.2}
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5"
              />
            )}
          </svg>
        </button>
      </nav>

      {isMenuOpen && (
        <ul className="flex flex-col gap-3 border-t-[2px] border-black px-6 py-4 text-sm font-bold text-black sm:hidden dark:border-white dark:text-white">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={`block rounded-lg border-[2px] border-black bg-white px-4 py-2 transition-colors dark:border-white ${link.color}`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}

export default Header;
