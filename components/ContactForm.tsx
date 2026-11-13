"use client";

import { useEffect, useRef, useState } from "react";
import SectionHeading from "./SectionHeading";
import { CheckIcon, ClockIcon, MailIcon, PhoneIcon, PinIcon } from "./Icons";
import { cities, projectTypes, site, timelines } from "@/lib/site";
import { SELECT_PROJECT_EVENT } from "@/lib/events";

// REPLACE WITH YOUR FORM ENDPOINT
// Set NEXT_PUBLIC_FORM_ENDPOINT in .env.local / Vercel env vars, e.g. https://formspree.io/f/abcdwxyz
const FORM_ENDPOINT = process.env.NEXT_PUBLIC_FORM_ENDPOINT || "";

// Formspree file uploads need a PAID plan. The photo field is hidden unless
// NEXT_PUBLIC_FORM_ALLOWS_FILES === "true" (only set that if your endpoint supports files).
const ALLOWS_FILES = process.env.NEXT_PUBLIC_FORM_ALLOWS_FILES === "true";
const MAX_FILES = 5;
const MAX_FILE_MB = 10;

type Errors = Partial<Record<"name" | "phone" | "email" | "project" | "city" | "photos", string>>;

function validate(fd: FormData): Errors {
  const e: Errors = {};
  const name = String(fd.get("name") || "").trim();
  const phone = String(fd.get("phone") || "").trim();
  const email = String(fd.get("email") || "").trim();
  if (!name) e.name = "Please tell us your name.";
  const digits = phone.replace(/\D/g, "");
  if (!phone) e.phone = "We need a phone number to call you back.";
  else if (digits.length < 10 || digits.length > 11) e.phone = "That number looks short. Try something like 403-555-0123.";
  if (!email) e.email = "Please add your email.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) e.email = "That email doesn't look quite right.";
  if (!fd.get("project")) e.project = "Pick the closest project type.";
  if (!fd.get("city")) e.city = "Pick your city or town.";
  if (ALLOWS_FILES) {
    const files = fd.getAll("photos").filter((f): f is File => f instanceof File && f.size > 0);
    if (files.length > MAX_FILES) e.photos = `Up to ${MAX_FILES} photos, please.`;
    else if (files.some((f) => f.size > MAX_FILE_MB * 1024 * 1024)) e.photos = `Each photo needs to be under ${MAX_FILE_MB} MB.`;
  }
  return e;
}

export default function ContactForm() {
  const [project, setProject] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error" | "unconfigured">("idle");
  const formRef = useRef<HTMLFormElement>(null);
  const successRef = useRef<HTMLDivElement>(null);

  // Pre-select project type when a "Get Estimate" link is clicked elsewhere on the page.
  useEffect(() => {
    const onSelect = (e: Event) => {
      const v = (e as CustomEvent<string>).detail;
      if ((projectTypes as readonly string[]).includes(v)) {
        setProject(v);
        setErrors((er) => ({ ...er, project: undefined }));
      }
    };
    window.addEventListener(SELECT_PROJECT_EVENT, onSelect);
    return () => window.removeEventListener(SELECT_PROJECT_EVENT, onSelect);
  }, []);

  useEffect(() => {
    if (status === "sent") successRef.current?.focus();
  }, [status]);

  async function onSubmit(ev: React.FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    const form = ev.currentTarget;
    const fd = new FormData(form);
    const errs = validate(fd);
    setErrors(errs);
    const firstBad = Object.keys(errs)[0];
    if (firstBad) {
      form.querySelector<HTMLElement>(`[name="${firstBad}"]`)?.focus();
      return;
    }
    if (!FORM_ENDPOINT) {
      setStatus("unconfigured");
      return;
    }
    // Honeypot (Formspree reads `_gotcha`); bots fill it, people don't see it.
    if (fd.get("_gotcha")) return;
    if (!ALLOWS_FILES) fd.delete("photos");
    fd.append("_subject", `New estimate request: ${fd.get("project")} in ${fd.get("city")}`);

    setStatus("sending");
    try {
      const res = await fetch(FORM_ENDPOINT, { method: "POST", body: fd, headers: { Accept: "application/json" } });
      if (!res.ok) throw new Error(String(res.status));
      setStatus("sent");
      form.reset();
      setProject("");
    } catch {
      setStatus("error");
    }
  }

  const err = (k: keyof Errors) =>
    errors[k] ? (
      <p id={`${k}-error`} className="mt-1.5 text-[0.95rem] font-medium text-red-700">
        {errors[k]}
      </p>
    ) : null;

  const a11y = (k: keyof Errors) => ({
    "aria-invalid": errors[k] ? (true as const) : undefined,
    "aria-describedby": errors[k] ? `${k}-error` : undefined,
    onChange: () => errors[k] && setErrors((e) => ({ ...e, [k]: undefined })),
  });

  return (
    <section id="contact" aria-labelledby="contact-title" className="bg-concrete py-20 lg:py-28">
      <div className="container-site">
        <SectionHeading
          id="contact-title"
          dark
          eyebrow="Free estimate"
          title="Get Your Free Estimate"
          intro={<p>Tell us about your project. We&rsquo;ll get back to you to talk it through.</p>}
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.6fr_1fr]">
          {/* Form card */}
          <div className="rounded-2xl bg-bone p-6 shadow-soft sm:p-10">
            {status === "sent" ? (
              <div ref={successRef} tabIndex={-1} role="status" className="flex flex-col items-start gap-4 py-10 focus:outline-none">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-copper text-charcoal">
                  <CheckIcon className="h-8 w-8" strokeWidth={3} />
                </span>
                <p className="font-display text-3xl font-bold uppercase text-charcoal">Request sent</p>
                <p className="text-lg text-slate">Thanks! We&rsquo;ll be in touch shortly to talk about your project.</p>
                <button type="button" onClick={() => setStatus("idle")} className="btn-outline-dark mt-2">
                  Send another request
                </button>
              </div>
            ) : (
              <form ref={formRef} noValidate onSubmit={onSubmit} encType="multipart/form-data" className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="field-label">
                    Name
                  </label>
                  <input id="name" name="name" type="text" autoComplete="name" required className="field" {...a11y("name")} />
                  {err("name")}
                </div>
                <div>
                  <label htmlFor="phone" className="field-label">
                    Phone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    inputMode="tel"
                    autoComplete="tel"
                    required
                    placeholder="403-555-0123"
                    className="field"
                    {...a11y("phone")}
                  />
                  {err("phone")}
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="email" className="field-label">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    inputMode="email"
                    autoComplete="email"
                    required
                    className="field"
                    {...a11y("email")}
                  />
                  {err("email")}
                </div>
                <div>
                  <label htmlFor="project" className="field-label">
                    Project type
                  </label>
                  <select
                    id="project"
                    name="project"
                    required
                    value={project}
                    className="field"
                    aria-invalid={errors.project ? true : undefined}
                    aria-describedby={errors.project ? "project-error" : undefined}
                    onChange={(e) => {
                      setProject(e.target.value);
                      setErrors((er) => ({ ...er, project: undefined }));
                    }}
                  >
                    <option value="" disabled>
                      Choose one…
                    </option>
                    {projectTypes.map((p) => (
                      <option key={p}>{p}</option>
                    ))}
                  </select>
                  {err("project")}
                </div>
                <div>
                  <label htmlFor="city" className="field-label">
                    City
                  </label>
                  <select id="city" name="city" required defaultValue="" className="field" {...a11y("city")}>
                    <option value="" disabled>
                      Choose one…
                    </option>
                    {cities.map((c) => (
                      <option key={c}>{c}</option>
                    ))}
                  </select>
                  {err("city")}
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="timeline" className="field-label">
                    Timeline
                  </label>
                  <select id="timeline" name="timeline" defaultValue="" className="field">
                    <option value="">Choose one (optional)</option>
                    {timelines.map((t) => (
                      <option key={t}>{t}</option>
                    ))}
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="details" className="field-label">
                    Project details
                  </label>
                  <textarea
                    id="details"
                    name="details"
                    rows={5}
                    className="field min-h-[140px] resize-y"
                    placeholder="e.g. 900 sq ft unfinished basement, want a bedroom, bathroom and rec room"
                  />
                </div>

                {/* Formspree file uploads need a paid plan — this field is hidden unless
                    NEXT_PUBLIC_FORM_ALLOWS_FILES="true" and your endpoint supports files. */}
                {ALLOWS_FILES && (
                  <div className="sm:col-span-2">
                    <label htmlFor="photos" className="field-label">
                      Add photos of the space (optional)
                    </label>
                    <input
                      id="photos"
                      name="photos"
                      type="file"
                      accept="image/*"
                      multiple
                      className="field file:mr-4 file:rounded-md file:border-0 file:bg-slate file:px-4 file:py-2 file:font-semibold file:text-white"
                      {...a11y("photos")}
                    />
                    {err("photos")}
                  </div>
                )}

                {/* Honeypot: hidden from people and screen readers */}
                <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
                  <label htmlFor="_gotcha">Leave this empty</label>
                  <input id="_gotcha" name="_gotcha" type="text" tabIndex={-1} autoComplete="off" />
                </div>

                <div className="sm:col-span-2">
                  <button type="submit" disabled={status === "sending"} className="btn-copper w-full disabled:opacity-70 sm:w-auto">
                    {status === "sending" ? "Sending…" : "Request My Free Estimate"}
                  </button>
                  <div aria-live="polite">
                    {Object.values(errors).some(Boolean) && (
                      <p className="mt-3 font-medium text-red-700">Please fix the highlighted fields above.</p>
                    )}
                    {status === "error" && (
                      <p className="mt-3 font-medium text-red-700">
                        Something went wrong sending your request. Please try again, or call us at{" "}
                        <a href={site.phone.href} className="underline">
                          {site.phone.display}
                        </a>
                        .
                      </p>
                    )}
                    {status === "unconfigured" && (
                      <p className="mt-3 font-medium text-red-700">
                        Our online form isn&rsquo;t connected yet. Please call{" "}
                        <a href={site.phone.href} className="underline">
                          {site.phone.display}
                        </a>{" "}
                        and we&rsquo;ll talk about your project.
                      </p>
                    )}
                  </div>
                </div>
              </form>
            )}
          </div>

          {/* Direct contact */}
          <aside aria-label="Contact details" className="flex flex-col gap-6 text-white">
            <div className="rounded-2xl border-2 border-copper p-7">
              <p className="eyebrow text-copper">Rather talk?</p>
              <a
                href={site.phone.href}
                className="mt-2 flex items-center gap-3 font-display text-4xl font-bold tracking-wide text-white hover:text-copper sm:text-5xl"
                aria-label={`Call ${site.phone.display}`}
              >
                <PhoneIcon className="h-8 w-8 shrink-0 text-copper" />
                {site.phone.display}
              </a>
              <p className="mt-2 text-warmgrey">You&rsquo;ll talk to the owner, not a call centre.</p>
            </div>

            <ul className="space-y-5 rounded-2xl bg-charcoal-800/70 p-7">
              <li className="flex gap-3">
                <MailIcon className="mt-1 h-5 w-5 shrink-0 text-copper" />
                <div>
                  <p className="font-semibold">Email</p>
                  {/* CONFIRM WITH CLIENT: email address (set `email` in lib/site.ts) */}
                  {site.email ? (
                    <a href={`mailto:${site.email}`} className="text-warmgrey underline decoration-copper underline-offset-4 hover:text-white">
                      {site.email}
                    </a>
                  ) : (
                    <p className="text-warmgrey">[EMAIL — confirm with client]</p>
                  )}
                </div>
              </li>
              <li className="flex gap-3">
                <ClockIcon className="mt-1 h-5 w-5 shrink-0 text-copper" />
                <div>
                  <p className="font-semibold">Hours</p>
                  {/* CONFIRM WITH CLIENT: business hours (set `hours` in lib/site.ts). Do not claim 24/7. */}
                  <p className="text-warmgrey">{site.hours ?? "[HOURS — confirm with client]"}</p>
                </div>
              </li>
              <li className="flex gap-3">
                <PinIcon className="mt-1 h-5 w-5 shrink-0 text-copper" />
                <div>
                  <p className="font-semibold">Service area</p>
                  <p className="text-warmgrey">
                    Based in {site.homeBase}. Serving {site.serviceAreas.join(", ")}.
                  </p>
                </div>
              </li>
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
}
