import type { Award } from "../../data/record";

export default function AwardRow({ award }: { award: Award }) {
  return (
    <div className="py-5 divider">
      <div className="row-header">
        <div className="font-sans font-semibold text-lg leading-[1.4]">{award.title}</div>
        <span className="font-mono font-medium text-[13px] text-[#8a8a8a] whitespace-nowrap">
          {award.date}
        </span>
      </div>
      <div className="row-meta">{award.org}</div>
    </div>
  );
}
