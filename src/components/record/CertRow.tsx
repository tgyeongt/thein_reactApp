import type { Cert } from "../../data/record";

export default function CertRow({ cert }: { cert: Cert }) {
  return (
    <div className="py-5 divider">
      <div className="row-header">
        <div className="font-sans font-semibold text-[17.5px] leading-[1.35]">{cert.title}</div>
        <span className="font-mono font-medium text-xs text-[#8a8a8a] whitespace-nowrap">
          {cert.date}
        </span>
      </div>
      <div className="row-meta">{cert.org}</div>
    </div>
  );
}
