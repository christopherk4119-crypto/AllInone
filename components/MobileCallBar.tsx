import { PhoneIcon } from "./Icons";
import { site } from "@/lib/site";

/** Sticky bottom bar on mobile so the phone number is always one tap away. */
export default function MobileCallBar() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-2 border-t border-white/10 bg-charcoal/95 px-3 pt-2 backdrop-blur lg:hidden"
      style={{ paddingBottom: "max(0.5rem, env(safe-area-inset-bottom))" }}
    >
      <a href={site.phone.href} className="btn-copper min-h-[52px] px-3 text-lg" aria-label={`Call now: ${site.phone.display}`}>
        <PhoneIcon className="h-5 w-5" />
        Call Now
      </a>
      <a href="#contact" className="btn-outline-light min-h-[52px] px-3 text-lg">
        {site.estimateShort}
      </a>
    </div>
  );
}
