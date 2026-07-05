import profileImg from "../../assets/profile.jpg";
import { aboutItems } from "../../data/about";
import { profile } from "../../data/profile";
import AboutItem from "./AboutItem";

export default function About() {
  const p = profile;

  return (
    <div className="grid grid-cols-1 md:grid-cols-[264px_1fr] gap-8 md:gap-[72px] items-start">
      <div className="reveal">
        <div className="img-slot w-[180px] md:w-full mx-auto md:mx-0 [aspect-ratio:35/45]">
          <img src={profileImg} alt={p.name} />
        </div>
        <div className="mt-5">
          <div className="font-sans font-bold text-[28px] leading-[1.02] tracking-[-0.02em]">
            {p.name}
          </div>
          <div className="mt-2 font-mono font-medium text-[12.5px] text-[#8a8a8a] tracking-[0.02em]">
            {p.role}
          </div>
        </div>
        <div className="mt-[22px] border-t border-ink">
          <div className="py-[14px] px-0.5 border-b border-[#e2e2df]">
            <div className="font-mono font-medium text-[10.5px] text-[#8a8a8a] tracking-[0.08em]">
              EDUCATION
            </div>
            <div className="mt-[7px] font-sans font-semibold text-[15px] leading-[1.35]">
              {p.education.school}
            </div>
            <div className="mt-1 font-mono text-[11px] text-[#8a8a8a]">
              {p.education.period} · {p.education.note}
            </div>
          </div>
          <div className="py-[14px] px-0.5 border-b border-[#e2e2df]">
            <div className="font-mono font-medium text-[10.5px] text-[#8a8a8a] tracking-[0.08em]">
              EMAIL
            </div>
            <a
              href={`mailto:${p.email}`}
              className="inline-block mt-[7px] font-sans font-semibold text-[15px] leading-[1.35] no-underline border-b border-ink"
            >
              {p.email}
            </a>
          </div>
          <div className="py-[14px] px-0.5 border-b border-[#e2e2df]">
            <div className="font-mono font-medium text-[10.5px] text-[#8a8a8a] tracking-[0.08em]">
              GITHUB
            </div>
            <a
              href={p.githubUrl}
              target="_blank"
              rel="noopener"
              className="inline-block mt-[7px] font-sans font-semibold text-[15px] leading-[1.35] no-underline border-b border-ink"
            >
              {p.github}
            </a>
          </div>
        </div>
      </div>
      <div className="reveal">
        <div className="font-mono font-semibold text-[11px] tracking-[0.14em] text-[#8a8a8a] mb-1.5">
          WHO I AM
        </div>
        {aboutItems.map((a, i) => (
          <AboutItem
            key={a.key}
            item={a}
            no={String(i + 1).padStart(2, "0")}
            isLast={i === aboutItems.length - 1}
          />
        ))}
      </div>
    </div>
  );
}
