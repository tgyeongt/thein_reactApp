import type { SkillGroup } from "../../data/skills";
import SkillTag from "./SkillTag";

export default function SkillGroupRow({ group }: { group: SkillGroup }) {
  return (
    <div className="reveal grid grid-cols-1 sm:grid-cols-[200px_1fr] gap-2 sm:gap-6 py-[22px] border-b border-[#cfcfca] sm:items-center">
      <div className="font-mono font-medium text-[12.5px] text-ink tracking-[0.04em] uppercase">
        {group.label}
      </div>
      <div className="flex flex-wrap gap-[9px]">
        {group.items.map((it) => (
          <SkillTag key={it} label={it} />
        ))}
      </div>
    </div>
  );
}
