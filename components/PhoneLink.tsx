import { site } from "@/lib/site";

/** Always formatted 403-714-9409, always click-to-call. */
export default function PhoneLink({
  className = "",
  children,
  label,
}: {
  className?: string;
  children?: React.ReactNode;
  label?: string;
}) {
  return (
    <a href={site.phone.href} className={className} aria-label={label ?? `Call ${site.name} at ${site.phone.display}`}>
      {children ?? site.phone.display}
    </a>
  );
}
