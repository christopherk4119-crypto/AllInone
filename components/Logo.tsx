type Tone = "dark" | "light";

/**
 * Badge mark: a house whose roof peak doubles as the letter "A"
 * (the crossbar under the peak completes the A), inside a rounded square.
 * `tone="dark"` = for dark backgrounds (copper mark); `tone="light"` = charcoal mark.
 */
export function BadgeMark({ tone = "dark", className = "h-12 w-12" }: { tone?: Tone; className?: string }) {
  const stroke = tone === "dark" ? "#D9822B" : "#1B1D1F";
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true" focusable="false">
      <rect x="2" y="2" width="44" height="44" rx="10" fill="none" stroke={stroke} strokeWidth="3" />
      {/* Roofline / letter A */}
      <path d="M9.5 27 24 11.5 38.5 27" fill="none" stroke={stroke} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      {/* A crossbar */}
      <path d="M18.5 21.5h11" stroke={stroke} strokeWidth="3" strokeLinecap="round" />
      {/* Walls + door */}
      <path d="M14 27.5V37h20v-9.5" fill="none" stroke={stroke} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M21.5 37v-5.5h5V37" fill="none" stroke={stroke} strokeWidth="2.5" strokeLinejoin="round" />
    </svg>
  );
}

/**
 * Header/footer logo. The wrapper reserves a 200x80 slot for the client's PNG.
 */
export default function Logo({ tone = "dark", compact = false }: { tone?: Tone; compact?: boolean }) {
  const main = tone === "dark" ? "text-white" : "text-charcoal";
  const sub = tone === "dark" ? "text-warmgrey" : "text-slate";
  return (
    // REPLACE WITH LOGO PNG — transparent background
    // When the client's logo is ready, save it as /public/logo.png and swap the
    // contents of this <span> for:
    //   <Image src="/logo.png" alt="All In One Contracting & Design" width={200} height={80} priority={false} className="h-auto max-h-[80px] w-auto" />
    <span className={`flex items-center gap-3 ${compact ? "max-h-14" : "max-h-20"} max-w-[200px]`}>
      <BadgeMark tone={tone} className={compact ? "h-10 w-10 shrink-0" : "h-12 w-12 shrink-0"} />
      <span className="flex flex-col leading-none">
        <span className={`font-display font-bold uppercase tracking-tight ${main} ${compact ? "text-[1.6rem]" : "text-[1.85rem]"}`}>
          All In One
        </span>
        <span className={`mt-1 font-display text-[0.62rem] font-semibold uppercase tracking-[0.22em] ${sub}`}>
          Contracting &amp; Design
        </span>
      </span>
    </span>
  );
}
