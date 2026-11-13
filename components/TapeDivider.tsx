/** Signature tape-measure divider. Draws in left→right on scroll (see globals.css). */
export default function TapeDivider({
  tone = "copper",
  wide = false,
  center = false,
  className = "",
}: {
  tone?: "copper" | "slate";
  wide?: boolean;
  center?: boolean;
  className?: string;
}) {
  return (
    <div
      aria-hidden="true"
      data-reveal
      className={`tape ${tone === "slate" ? "tape--slate" : ""} ${wide ? "tape--wide" : ""} ${center ? "tape--center" : ""} ${className}`}
    />
  );
}
