import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowDown, ArrowUpRight, Menu, Minus, Plus, X } from "lucide-react";
import { profile, projects, skills, services, timeline, highlights } from "@/lib/portfolio-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Suleman — AI / ML Engineer" },
      { name: "description", content: "AI/ML Engineer focused on computer vision, deep learning and full-stack AI applications." },
      { property: "og:title", content: "Suleman — AI / ML Engineer" },
      { property: "og:description", content: "Computer vision, deep learning and full-stack AI applications." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const NAV = [
  ["about", "About"], ["projects", "Projects"], ["expertise", "Expertise"], ["experience", "Experience"],
] as const;

function Label({ n, children, light }: { n: string; children: string; light?: boolean }) {
  return (
    <p className={`label-mono flex items-center gap-3 ${light ? "text-paper-muted" : "text-ink-muted"}`}>
      <span className="text-signal">{n}</span><span className="h-px w-8 bg-current opacity-40" />{children}
    </p>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll(); window.addEventListener("scroll", onScroll);
    const io = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)), { rootMargin: "-45% 0px -50% 0px" });
    document.querySelectorAll("section[id]").forEach((s) => io.observe(s));
    const esc = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", esc);
    return () => { window.removeEventListener("scroll", onScroll); window.removeEventListener("keydown", esc); io.disconnect(); };
  }, []);
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${scrolled ? "bg-ink/85 backdrop-blur-md border-b border-line" : ""}`}>
      <div className="mx-auto grid h-16 max-w-7xl grid-cols-[1fr_auto] items-center px-5 md:grid-cols-[1fr_auto_1fr] md:px-8">
        <a href="#top" className="font-display text-lg font-bold tracking-tight text-paper">SULEMAN<span className="text-signal">.</span></a>
        <nav aria-label="Primary" className="hidden gap-8 md:flex">
          {NAV.map(([id, l]) => (
            <a key={id} href={`#${id}`} aria-current={active === id ? "true" : undefined}
              className={`label-mono transition-colors hover:text-paper ${active === id ? "text-paper" : "text-ink-muted"}`}>
              {active === id && <span className="mr-1.5 text-signal">●</span>}{l}
            </a>
          ))}
        </nav>
        <div className="flex justify-end">
          <a href="#contact" className="label-mono hidden bg-signal px-4 py-2.5 text-paper transition-opacity hover:opacity-85 md:inline-block">Contact</a>
          <button className="text-paper md:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mnav" onClick={() => setOpen(!open)}>
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {open && (
        <nav id="mnav" aria-label="Mobile" className="border-t border-line bg-ink px-5 pb-6 md:hidden">
          {[...NAV, ["contact", "Contact"] as const].map(([id, l]) => (
            <a key={id} href={`#${id}`} onClick={() => setOpen(false)} className="font-display block border-b border-line py-4 text-2xl text-paper">{l}</a>
          ))}
        </nav>
      )}
    </header>
  );
}

function Portrait() {
  return (
    <div className="rise w-full max-w-[190px] md:col-span-5 md:col-start-1 md:max-w-none" style={{ animationDelay: ".05s" }}>
      <div className="relative aspect-[4/5] w-full overflow-hidden">
          {profile.portrait ? (
            <img src={profile.portrait} alt={`${profile.name}, ${profile.role}`} className="h-full w-full object-cover" />
          ) : (
            <div className="flex h-full w-full flex-col items-center justify-center border border-dashed border-paper/45 text-paper">
              <span className="font-display text-7xl font-bold tracking-tighter md:text-8xl">S<span className="text-ink/70">.</span></span>
              <span className="label-mono mt-4 px-4 text-center opacity-80">Your photo here</span>
            </div>
          )}
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section id="top" className="spotlight relative flex min-h-[92svh] flex-col justify-end overflow-hidden px-5 pb-10 pt-24 text-paper md:px-8 md:pt-28">
      <div className="pointer-events-none absolute inset-0 opacity-[0.06] [background-image:repeating-linear-gradient(0deg,var(--paper)_0_1px,transparent_1px_6px)]" />
      <div className="relative mx-auto grid w-full max-w-7xl items-end gap-6 md:grid-cols-12 md:gap-10">
        <Portrait />
        <div className="md:col-span-5 md:col-start-8 rise" style={{ animationDelay: ".15s" }}>
          <p className="label-mono text-signal">{profile.role}</p>
          <p className="font-display mt-5 text-2xl leading-tight md:text-3xl">Building intelligent systems.<br /><span className="text-ink-muted">Turning research into real-world applications.</span></p>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-ink-muted">AI/ML Engineer focused on computer vision, deep learning, and full-stack AI applications. Interested in developing practical intelligent systems that solve meaningful problems.</p>
          <div className="mt-7 flex flex-wrap gap-3 rise" style={{ animationDelay: ".3s" }}>
            <a href="#projects" className="label-mono group inline-flex items-center gap-2 bg-paper px-5 py-3 text-ink">Explore projects <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></a>
            <a href="#contact" className="label-mono inline-flex items-center gap-2 border border-line px-5 py-3 text-paper hover:border-paper">Let's connect</a>
          </div>
        </div>
      </div>
      <h1 className="display-xl rise relative mx-auto mt-10 w-full max-w-7xl md:mt-14">SULEMAN<span className="text-signal">.</span></h1>
      <a href="#about" className="label-mono relative mx-auto mt-8 flex w-full max-w-7xl items-center gap-2 text-ink-muted hover:text-paper"><ArrowDown className="h-3.5 w-3.5 animate-bounce" /> Scroll</a>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="bg-paper px-5 py-24 text-ink md:px-8 md:py-36">
      <div className="mx-auto grid max-w-7xl gap-14 md:grid-cols-12">
        <div className="md:col-span-5">
          <Label n="01" light>About</Label>
          <h2 className="display-lg mt-6">A little<br />about me<span className="text-signal">.</span></h2>
        </div>
        <div className="md:col-span-6 md:col-start-7">
          <p className="font-display text-2xl leading-snug tracking-tight md:text-3xl">I build AI systems that <span className="text-signal">see</span>, reason and ship — from training deep-learning models to the interfaces people use.</p>
          <p className="mt-6 max-w-prose leading-relaxed text-paper-muted">My work sits between machine-learning research and practical software: computer vision pipelines, model evaluation, and full-stack applications that put those models in front of real users.</p>
          <dl className="mt-12 grid grid-cols-1 border-t border-ink/15 sm:grid-cols-2">
            {profile.facts.map((f) => (
              <div key={f.k} className="border-b border-ink/15 py-5 sm:odd:pr-6">
                <dt className="label-mono text-paper-muted">{f.k}</dt>
                <dd className="mt-2 font-medium">{f.v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

function ProjectLinkBtn({ href, label, variant }: { href: string; label: string; variant: "outline" | "signal" }) {
  const base = "label-mono group inline-flex items-center gap-2 px-4 py-2.5 transition-[opacity,border-color,transform]";
  const arrow = "h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5";
  const url = href.trim();
  if (url) {
    const active = variant === "outline"
      ? `${base} border border-line text-paper hover:border-paper`
      : `${base} bg-signal text-paper hover:opacity-85`;
    return (
      <a href={url} target="_blank" rel="noreferrer noopener" className={active}>
        {label} <ArrowUpRight className={arrow} />
      </a>
    );
  }
  const idle = variant === "outline"
    ? `${base} cursor-default border border-line/50 text-paper/35`
    : `${base} cursor-default border border-line/50 bg-signal/20 text-paper/35`;
  return (
    <span className={idle} aria-disabled="true" title="Add URL in src/lib/portfolio-data.ts">
      {label} <ArrowUpRight className="h-3.5 w-3.5 opacity-50" />
    </span>
  );
}

function ProjectLinks({ repo, demo }: { repo: string; demo: string }) {
  return (
    <div className="mt-6">
      <p className="label-mono text-ink-muted">Links</p>
      <div className="mt-3 flex flex-wrap gap-3">
        <ProjectLinkBtn href={repo} label="Repository" variant="outline" />
        <ProjectLinkBtn href={demo} label="Live demo" variant="signal" />
      </div>
    </div>
  );
}

function Projects() {
  return (
    <section id="projects" className="bg-ink text-paper">
      <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        <Label n="02">Selected work</Label>
        <h2 className="display-lg mt-6">Featured<br />projects<span className="text-signal">.</span></h2>
      </div>
      {projects.map((p) => (
        <article key={p.id} id={`project-${p.id}`} className="group relative border-t border-line">
          <div className="relative h-[70svh] min-h-[420px] overflow-hidden">
            <img src={p.image} alt={`${p.title} visual`} loading="lazy" width={1920} height={1088} className="h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.04]" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-ink/40" />
            <div className="absolute inset-x-0 top-0 mx-auto flex max-w-7xl justify-between px-5 pt-6 md:px-8">
              <span className="label-mono">[{p.id}]</span><span className="label-mono">{p.category}</span><span className="label-mono text-signal">{p.status}</span>
            </div>
            <div className="absolute inset-x-0 bottom-0 mx-auto max-w-7xl px-5 pb-8 md:px-8">
              <h3 className="font-display text-4xl font-semibold tracking-tight md:text-6xl">{p.title}</h3>
              <p className="mt-3 max-w-xl text-sm text-ink-muted md:text-base">{p.summary}</p>
            </div>
          </div>
          <div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 md:grid-cols-12 md:px-8">
            <div className="md:col-span-4"><p className="label-mono text-ink-muted">Problem</p><p className="mt-2 text-sm leading-relaxed">{p.problem}</p></div>
            <div className="md:col-span-4"><p className="label-mono text-ink-muted">Approach</p><p className="mt-2 text-sm leading-relaxed">{p.approach}</p></div>
            <div className="md:col-span-4">
              <p className="label-mono text-ink-muted">Stack</p>
              <ul className="mt-2 flex flex-wrap gap-2">{p.tech.map((t) => <li key={t} className="label-mono border border-line px-2.5 py-1">{t}</li>)}</ul>
              <ProjectLinks repo={p.repo} demo={p.demo} />
            </div>
          </div>
        </article>
      ))}
    </section>
  );
}

function Expertise() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="expertise" className="border-t border-line bg-ink px-5 py-24 text-paper md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <Label n="03">Expertise</Label>
        <h2 className="display-lg mt-6">Technical<br />toolkit<span className="text-signal">.</span></h2>
        <div className="mt-16 grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((g) => (
            <div key={g.group} className="bg-ink p-6">
              <p className="label-mono text-signal">{g.group}</p>
              <ul className="mt-5 space-y-2.5">{g.items.map((i) => <li key={i} className="font-display text-lg">{i}</li>)}</ul>
            </div>
          ))}
        </div>
        <div className="mt-28 grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4"><p className="label-mono text-ink-muted">Capabilities</p><p className="mt-4 max-w-xs text-sm text-ink-muted">What I can help build — click a row to expand.</p></div>
          <ul className="md:col-span-8 border-t border-line">
            {services.map((s, i) => {
              const isOpen = open === i;
              return (
                <li key={s.t} className="border-b border-line">
                  <h3>
                    <button aria-expanded={isOpen} aria-controls={`svc-${i}`} onClick={() => setOpen(isOpen ? null : i)}
                      className="flex w-full items-center gap-5 py-6 text-left hover:text-signal">
                      <span className="label-mono text-ink-muted">{String(i + 1).padStart(2, "0")}</span>
                      <span className="font-display flex-1 text-xl uppercase tracking-tight md:text-2xl">{s.t}</span>
                      {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                    </button>
                  </h3>
                  <div id={`svc-${i}`} hidden={!isOpen} className="pb-7 pl-10">
                    <p className="max-w-lg text-sm text-ink-muted">{s.d}</p>
                    <div className="mt-4 flex flex-wrap items-center gap-2">
                      {s.tech.map((t) => <span key={t} className="label-mono border border-line px-2.5 py-1">{t}</span>)}
                      {s.link && <a href={`#project-${s.link}`} className="label-mono ml-3 inline-flex items-center gap-1 text-signal">Related project <ArrowUpRight className="h-3.5 w-3.5" /></a>}
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="bg-paper px-5 py-24 text-ink md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <Label n="04" light>Experience · Education · Research</Label>
        <h2 className="display-lg mt-6">The path<br />so far<span className="text-signal">.</span></h2>
        <ol className="mt-16 border-t border-ink/15">
          {timeline.map((t) => (
            <li key={t.role} className="grid gap-3 border-b border-ink/15 py-8 md:grid-cols-12">
              <p className="label-mono text-paper-muted md:col-span-2">{t.date}</p>
              <div className="md:col-span-4"><p className="font-display text-2xl tracking-tight">{t.role}</p><p className="label-mono mt-1 text-signal">{t.org}</p></div>
              <div className="md:col-span-6">
                <p className="max-w-prose text-sm leading-relaxed text-paper-muted">{t.desc}</p>
                <ul className="mt-3 flex flex-wrap gap-2">{t.tags.map((g) => <li key={g} className="label-mono border border-ink/20 px-2.5 py-1">{g}</li>)}</ul>
              </div>
            </li>
          ))}
        </ol>
        <div className="mt-24 grid gap-10 sm:grid-cols-3">
          {highlights.map((h) => (
            <div key={h.l} className="border-t-2 border-ink pt-5">
              <p className="font-display text-6xl font-bold tracking-tighter">{h.k}<span className="text-signal">.</span></p>
              <p className="mt-3 max-w-[16rem] text-sm text-paper-muted">{h.l}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section id="contact" className="spotlight px-5 py-24 text-paper md:px-8 md:py-36">
      <div className="mx-auto grid max-w-7xl gap-14 md:grid-cols-12">
        <div className="md:col-span-6">
          <Label n="05">Contact</Label>
          <h2 className="display-lg mt-6">Have a project<br />or idea in <span className="text-signal">mind?</span></h2>
          <a href={`mailto:${profile.email}`} className="font-display mt-10 inline-flex items-center gap-2 text-2xl underline decoration-line underline-offset-8 hover:decoration-signal">{profile.email}<ArrowUpRight /></a>
        </div>
        <form className="space-y-6 md:col-span-5 md:col-start-8" onSubmit={(e) => {
          e.preventDefault(); const f = new FormData(e.currentTarget);
          window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(`Portfolio enquiry from ${f.get("name")}`)}&body=${encodeURIComponent(`${f.get("message")}\n\n— ${f.get("name")} (${f.get("email")})`)}`;
          setSent(true);
        }}>
          {[["name", "Your name", "text"], ["email", "Email address", "email"]].map(([n, l, t]) => (
            <label key={n} className="block"><span className="label-mono text-ink-muted">{l}</span>
              <input required name={n} type={t} className="mt-2 w-full border-b border-line bg-transparent py-3 outline-none focus:border-signal" /></label>
          ))}
          <label className="block"><span className="label-mono text-ink-muted">Message</span>
            <textarea required name="message" rows={4} className="mt-2 w-full resize-none border-b border-line bg-transparent py-3 outline-none focus:border-signal" /></label>
          <button className="label-mono bg-signal px-6 py-3.5 text-paper hover:opacity-85">Send message</button>
          {sent && <p role="status" className="text-sm text-ink-muted">Your email app should open with the message ready.</p>}
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="overflow-hidden border-t border-line bg-ink px-5 pt-14 text-paper md:px-8">
      <div className="mx-auto flex max-w-7xl flex-wrap justify-between gap-6">
        <nav aria-label="Footer" className="flex flex-wrap gap-6">{NAV.map(([id, l]) => <a key={id} href={`#${id}`} className="label-mono text-ink-muted hover:text-paper">{l}</a>)}</nav>
        <div className="flex gap-6">
          {profile.github && <a href={profile.github} className="label-mono text-ink-muted hover:text-paper">GitHub</a>}
          {profile.linkedin && <a href={profile.linkedin} className="label-mono text-ink-muted hover:text-paper">LinkedIn</a>}
          <a href="#top" className="label-mono text-ink-muted hover:text-paper">Back to top ↑</a>
        </div>
      </div>
      <p className="display-xl mx-auto mt-12 max-w-7xl translate-y-[12%]" aria-hidden>SULEMAN<span className="text-signal">.</span></p>
    </footer>
  );
}

function Index() {
  return (
    <main className="bg-ink">
      <Header /><Hero /><About /><Projects /><Expertise /><Experience /><Contact /><Footer />
    </main>
  );
}
