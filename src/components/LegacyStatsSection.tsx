import {
  GraduationCap,
  School,
  ShieldCheck,
  Star,
  UsersRound,
} from "lucide-react";
import type { ComponentType } from "react";

type LegacyStat = {
  value: string;
  label: string;
  description: string[];
  accent: string;
  iconAccent?: string;
  waveAccent?: string;
  border: string;
  glow: string;
  Icon: ComponentType<{ className?: string; strokeWidth?: number }>;
  darkIcon?: boolean;
};

const legacyStats: LegacyStat[] = [
  {
    value: "950+",
    label: "Schools",
    description: ["Academic Excellence", "Across India"],
    accent: "#7A893E",
    iconAccent: "#738437",
    waveAccent: "#96A66B",
    border: "rgba(142,124,91,0.18)",
    glow: "rgba(114,132,55,0.18)",
    Icon: School,
  },
  {
    value: "950000+",
    label: "Students",
    description: ["Shaping Future", "Achievers"],
    accent: "#9B6B33",
    iconAccent: "#A57437",
    waveAccent: "#A98A5A",
    border: "rgba(155,107,51,0.18)",
    glow: "rgba(155,107,51,0.2)",
    Icon: UsersRound,
  },
  {
    value: "55000+",
    label: "Staffs",
    description: ["Experienced Teaching &", "Support Team"],
    accent: "#73883D",
    iconAccent: "#768A3A",
    waveAccent: "#8FA060",
    border: "rgba(115,136,61,0.18)",
    glow: "rgba(115,136,61,0.18)",
    Icon: GraduationCap,
  },
  {
    value: "41+",
    label: "Years",
    description: ["Trusted Educational", "Legacy"],
    accent: "#3F5137",
    iconAccent: "#435738",
    waveAccent: "#45593D",
    border: "rgba(63,81,55,0.2)",
    glow: "rgba(63,81,55,0.16)",
    Icon: ShieldCheck,
  },
];

export function LegacyStatsSection() {
  return (
    <section
      className="relative isolate overflow-hidden px-4 pb-10 pt-7 sm:px-6 sm:pb-12 sm:pt-8 lg:px-8 lg:pb-9 lg:pt-8"
      style={{
        fontFamily: "var(--font-poppins), Poppins, sans-serif",
        background:
          "radial-gradient(circle at 50% 10%, rgba(255, 255, 255, 0.9), transparent 34%), radial-gradient(circle at 8% 4%, rgba(194, 158, 104, 0.12), transparent 20%), radial-gradient(circle at 94% 6%, rgba(198, 173, 126, 0.18), transparent 18%), linear-gradient(180deg, #faf5ec 0%, #fffdfa 47%, #f8f1e7 100%)",
      }}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.11]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(122, 100, 70, 0.18) 0.75px, transparent 1.1px)",
          backgroundSize: "17px 17px",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute left-5 top-0 hidden h-[250px] w-[178px] bg-contain bg-left-top bg-no-repeat opacity-[0.24] sm:left-6 lg:left-7 md:block"
        style={{ backgroundImage: "url('/png/leaf1.png')" }}
      />
      <div
        aria-hidden="true"
        className="absolute -right-[62px] -top-[70px] hidden h-[330px] w-[200px] rounded-bl-[165px] rounded-tl-[210px] bg-[#e8ddc8]/70 lg:block"
      />
      <div
        aria-hidden="true"
        className="absolute right-0 top-0 hidden h-[170px] w-[150px] opacity-[0.34] lg:block"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(162, 126, 76, 0.34) 1.45px, transparent 2.25px)",
          backgroundSize: "15px 15px",
        }}
      />

      <div className="relative mx-auto w-full max-w-[1320px]">
        <div className="mx-auto max-w-[960px] text-center">
          <div
            data-section-reveal
            className="legacy-copy-reveal legacy-delay-1 mx-auto flex w-[220px] items-center justify-center gap-4 text-[#9B6B33]"
          >
            <span className="h-px flex-1 bg-current" />
            <Star className="h-7 w-7 fill-[#fff8ed] text-[#9B6B33] drop-shadow-[0_4px_8px_rgba(139,93,45,0.28)]" strokeWidth={1.2} />
            <span className="h-px flex-1 bg-current" />
          </div>

          <h2
            data-wave-reveal
            className="legacy-heading-wave wave-reveal-heading mt-4 text-[28px] font-extrabold leading-[1.12] tracking-[0] text-[#303B2E] sm:text-[40px] sm:leading-[1.08] lg:text-[48px]"
          >
            <span>
              An Illustrious Legacy
            </span>
            <span className="block">
              we continue to{" "}
              <span className="relative inline-block text-[#965F35]">
                Shape
                <svg
                  aria-hidden="true"
                  viewBox="0 0 196 24"
                  className="legacy-shape-underline absolute -bottom-4 left-1/2 h-6 w-[126%] -translate-x-1/2 text-[#965F35]"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M6 17C52 7 122 4 190 10"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeWidth="4.4"
                  />
                  <path
                    d="M46 22C86 15 139 13 176 16"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeWidth="4.2"
                  />
                </svg>
              </span>
            </span>
          </h2>

          <div
            data-section-reveal
            className="legacy-copy-reveal legacy-delay-3 mx-auto mt-5 flex w-[124px] items-center justify-center gap-4 text-[#9B6B33]"
          >
            <span className="h-px flex-1 bg-current" />
            <span className="h-2.5 w-2.5 rounded-full bg-current" />
            <span className="h-px flex-1 bg-current" />
          </div>

          <p
            data-section-reveal
            className="legacy-copy-reveal legacy-delay-4 mx-auto mt-4 max-w-[720px] text-[13px] font-medium leading-6 text-[#565652] sm:text-[15px] sm:leading-7"
          >
            A journey of excellence, innovation, and leadership
            <span className="hidden sm:inline"> </span>
            <span className="block sm:inline">
              that inspires generations and builds a better tomorrow.
            </span>
          </p>
        </div>

        <div className="mx-auto mt-9 grid max-w-[320px] grid-cols-1 justify-center gap-5 md:max-w-[690px] md:grid-cols-2 lg:max-w-none lg:grid-cols-4 lg:gap-6">
          {legacyStats.map((stat) => {
            const Icon = stat.Icon;
            const iconAccent = stat.iconAccent ?? stat.accent;
            const waveAccent = stat.waveAccent ?? stat.accent;

            return (
              <article
                key={stat.label}
                data-section-reveal
                className="legacy-card-reveal group relative min-h-[390px] overflow-hidden rounded-[18px] border px-5 pb-6 pt-5 text-center shadow-[0_22px_44px_rgba(70,55,37,0.12)] transition-all duration-300 hover:-translate-y-1.5"
                style={{
                  borderColor: stat.border,
                  background:
                    "radial-gradient(circle at 50% 0%, rgba(255,255,255,0.96) 0%, rgba(255,252,246,0.98) 42%, rgba(249,244,235,0.96) 100%)",
                  boxShadow: `0 22px 44px rgba(70,55,37,0.11), 0 0 34px ${stat.glow}`,
                }}
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 292 96"
                  className="legacy-card-wave absolute left-0 top-[60px] h-[78px] w-full opacity-[0.78] transition-opacity duration-300 group-hover:opacity-95"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0 49C44 24 91 27 132 48C174 69 221 70 292 25"
                    fill="none"
                    stroke={waveAccent}
                    strokeLinecap="round"
                    strokeWidth="3.2"
                  />
                </svg>

                <div
                  aria-hidden="true"
                  className="legacy-card-dot-field absolute -bottom-2 -left-1 h-[82px] w-[108px] opacity-40"
                  style={{
                    backgroundImage: `radial-gradient(circle, ${stat.accent} 1.4px, transparent 2.15px)`,
                    backgroundSize: "12px 12px",
                  }}
                />
                <div
                  aria-hidden="true"
                  className="legacy-card-dot-field legacy-card-dot-field-reverse absolute bottom-0 right-2 h-[84px] w-[108px] opacity-40"
                  style={{
                    backgroundImage: `radial-gradient(circle, ${stat.accent} 1.4px, transparent 2.15px)`,
                    backgroundSize: "12px 12px",
                  }}
                />

                <div
                  className="legacy-card-icon relative z-10 mx-auto flex h-[74px] w-[74px] items-center justify-center rounded-full border-[6px] border-white text-white shadow-[0_14px_26px_rgba(72,57,37,0.2)] transition-transform duration-300 group-hover:scale-105"
                  style={{
                    backgroundColor: iconAccent,
                    boxShadow: `0 18px 34px ${stat.glow}, inset 0 1px 0 rgba(255,255,255,0.28)`,
                  }}
                >
                  <Icon className="h-9 w-9" strokeWidth={1.75} />
                </div>

                <p
                  className="legacy-stat-value relative z-10 mt-11 text-[40px] font-extrabold leading-none tracking-[0] drop-shadow-[0_5px_0_rgba(70,57,36,0.08)] sm:text-[45px]"
                  style={{ color: stat.accent }}
                >
                  {stat.value}
                </p>

                <div className="relative z-10 mx-auto mt-5 flex w-[164px] items-center justify-center gap-2">
                  <span
                    className="legacy-label-line h-px flex-1"
                    style={{ backgroundColor: stat.accent }}
                  />
                  <span
                    className="legacy-label-dot h-1.5 w-1.5 rounded-full"
                    style={{ backgroundColor: stat.accent }}
                  />
                  <h3
                    className="text-[10px] font-extrabold uppercase leading-none tracking-[0.16em]"
                    style={{ color: stat.accent }}
                  >
                    {stat.label}
                  </h3>
                  <span
                    className="legacy-label-dot h-1.5 w-1.5 rounded-full"
                    style={{ backgroundColor: stat.accent }}
                  />
                  <span
                    className="legacy-label-line h-px flex-1"
                    style={{ backgroundColor: stat.accent }}
                  />
                </div>

                <p className="relative z-10 mt-7 text-[13px] font-medium leading-6 text-[#272b2e] sm:text-[14px]">
                  {stat.description.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </p>

                <span
                  aria-hidden="true"
                  className="legacy-card-bottom-line relative z-10 mx-auto mt-9 block h-1.5 w-[72px] rounded-full transition-all duration-300 group-hover:w-20"
                  style={{ backgroundColor: stat.accent }}
                />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
