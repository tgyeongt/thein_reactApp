import { skills } from "../../data/skills";
import SkillGroupRow from "./SkillGroupRow";

export default function Skills() {
  return (
    <div className="list-top-divider">
      {skills.map((g) => (
        <SkillGroupRow key={g.label} group={g} />
      ))}
    </div>
  );
}
