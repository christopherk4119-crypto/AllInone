import TapeDivider from "./TapeDivider";

export default function SectionHeading({
  eyebrow,
  title,
  intro,
  dark = false,
  center = false,
  id,
}: {
  eyebrow?: string;
  title: string;
  intro?: React.ReactNode;
  dark?: boolean;
  center?: boolean;
  id?: string;
}) {
  return (
    <div className={`max-w-3xl ${center ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <p data-reveal className={`eyebrow mb-3 ${dark ? "text-copper" : "text-copper-ink"}`}>
          {eyebrow}
        </p>
      )}
      <h2 id={id} data-reveal className={`h2 ${dark ? "text-white" : "text-charcoal"}`}>
        {title}
      </h2>
      <TapeDivider tone={dark ? "copper" : "slate"} center={center} className="mt-5" />
      {intro && (
        <div data-reveal className={`lead mt-6 ${dark ? "text-warmgrey" : "text-slate"}`}>
          {intro}
        </div>
      )}
    </div>
  );
}
