import TapeDivider from "./TapeDivider";

/**
 * Section headline + tape-measure rule. Deliberately no "eyebrow" label:
 * the same label/headline/intro stack on every section is a template tell.
 * (`eyebrow` is still accepted so callers don't break; it's not rendered.)
 */
export default function SectionHeading({
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
