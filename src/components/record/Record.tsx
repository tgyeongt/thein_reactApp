import { awards, certs } from "../../data/record";
import AwardRow from "./AwardRow";
import CertRow from "./CertRow";

export default function Record() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[1.3fr_1fr] gap-10 md:gap-14">
      <div className="reveal">
        <div className="group-label">수상경력 · {awards.length}</div>
        {awards.map((a) => (
          <AwardRow key={a.title} award={a} />
        ))}
        <div className="divider" />
      </div>
      <div className="reveal">
        <div className="group-label">자격증 · {certs.length}</div>
        {certs.map((c) => (
          <CertRow key={c.title} cert={c} />
        ))}
        <div className="divider" />
      </div>
    </div>
  );
}
