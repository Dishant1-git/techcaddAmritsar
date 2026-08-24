import Image from "next/image";
import type { TeamMember } from "@/lib/founder-content";

/**
 * A tall capsule by default — `rounded-full` on a narrow box collapses to a
 * stadium shape rather than an ellipse — that squares off into a normal card
 * on hover. Border-radius is the one property doing that shape change, so it
 * is the only thing transitioned; everything else (scale, photo) rides along
 * for a bit of extra life.
 */
export default function TeamCard({ member }: { member: TeamMember }) {
  return (
    <div className="group relative h-80 w-56 shrink-0 overflow-hidden rounded-full bg-ink ring-1 ring-white/10 transition-[border-radius,transform] duration-500 ease-out hover:scale-[1.03] hover:rounded-[1.75rem]">
      {member.photo ? (
        <Image
          src={member.photo}
          alt={member.name}
          fill
          sizes="14rem"
          className="object-cover"
        />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-brand-700 via-brand-600 to-accent">
          <div aria-hidden="true" className="circuit-texture absolute inset-0 opacity-40" />
          <div aria-hidden="true" className="dot-matrix absolute inset-0 opacity-[0.08]" />
          <span
            aria-hidden="true"
            className="font-display absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-90 text-[5.5rem] leading-none font-bold whitespace-nowrap text-white/10 select-none"
          >
            {member.name.split(" ")[0].toUpperCase()}
          </span>
        </div>
      )}

      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-ink/90 to-transparent" />

      <div className="absolute inset-x-4 bottom-5 text-center">
        <p className="font-display text-sm font-semibold text-white drop-shadow-[0_1px_4px_rgb(2_6_23/0.9)]">
          {member.name}
        </p>
        <p className="mt-0.5 text-xs text-white/60">{member.role}</p>
      </div>
    </div>
  );
}
