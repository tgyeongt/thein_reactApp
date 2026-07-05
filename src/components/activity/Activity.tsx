import { activities, education } from "../../data/activity";
import TrainingItem from "./TrainingItem";

export default function Activity() {
  return (
    <>
      <div className="reveal">
        <div className="group-label">교육 & 연수</div>
        {education.map((e, i) => (
          <TrainingItem key={e.title} item={e} imgId={`edu-${i}`} />
        ))}
        <div className="divider" />
      </div>
      <div className="reveal mt-12">
        <div className="group-label">교내·외 활동 · 동아리</div>
        {activities.map((e, i) => (
          <TrainingItem key={e.title} item={e} imgId={`act-${i}`} />
        ))}
        <div className="divider" />
      </div>
    </>
  );
}
