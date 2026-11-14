import React, { useEffect, useState } from 'react';
import photoUrl from 'container:///mnt/data/src/assets/fcda0b9a8b21e3b2-photo1054677565760640401.jpeg';
import { ArrowRight, ArrowUpRight, Award, BookOpen, Briefcase, ChevronDown, Code2, Download, Github, GraduationCap, HeartPulse, LineChart, MapPin, Rocket, ShoppingBasket, Sparkles, Wallet, Zap } from 'lucide-react';

const projects = [
  { emoji: '🤖', title: 'LOOP AI', tech: 'Python • React • AI', desc: 'An intelligent LOOP AI experience built during the Zidio internship — fast, interactive and made to feel alive.', href: 'https://ammarahmed-star.github.io/ZIDIO-LOOP-Projects/', color: '#8b5cf6', soft: '#ede9fe', tag: 'AI PRODUCT' },
  { emoji: '📊', title: 'DSA Visualizer', tech: 'JavaScript • React • DSA', desc: 'Watch sorting, searching and data structures come alive with step-by-step visuals that make DSA click.', href: 'https://ammarahmed-star.github.io/DSA---Visualizer/', color: '#ec4899', soft: '#fce7f3', tag: 'LEARNING TOOL' },
  { emoji: '💗', title: 'PCOS Management App', tech: 'React • Health • Web App', desc: 'A thoughtful wellness companion that helps users track cycles, habits and daily care with calm clarity.', href: 'https://ammarahmed-star.github.io/PCOS---Management---Application/', color: '#f43f5e', soft: '#ffe4e6', tag: 'HEALTH & CARE' },
  { emoji: '🍎', title: 'Fresh Fruits Web', tech: 'HTML • CSS • JavaScript', desc: 'A juicy, colourful landing page for fresh fruit — bold typography, fresh produce and a checkout-ready vibe.', href: 'https://ammarahmed-star.github.io/Fresh-Fruits-landing-page/', color: '#22c55e', soft: '#dcfce7', tag: 'LANDING PAGE' },
  { emoji: '💰', title: 'Expense Tracker Android', tech: 'Kotlin • Room DB • MVVM', desc: 'A clean Android money manager with local Room storage, categories and a clear view of where money goes.', href: 'https://ammarahmed-star.github.io/Android-Expense-Tracker/', color: '#f59e0b', soft: '#fef3c7', tag: 'ANDROID APP' },
  { emoji: '📝', title: 'Notes + To-Do Android', tech: 'Kotlin • Room DB • MVVM', desc: 'Capture ideas fast and stay on top of tasks — notes and to-dos in one smooth, offline-first Android app.', href: 'https://ammarahmed-star.github.io/Android-Note-Todo-application/', color: '#06b6d4', soft: '#cffafe', tag: 'ANDROID APP' },
  { emoji: '🍓', title: 'Fresh Fruits Android', tech: 'Kotlin • Android • MVVM', desc: 'Fresh Fruits, pocket-sized. Browse produce, build a basket and enjoy a bright, friendly shopping flow.', href: 'https://ammarahmed-star.github.io/Android-Fresh-Fruits-Application/', color: '#84cc16', soft: '#ecfccb', tag: 'ANDROID APP' },
];

const skills = [
  { name: 'Python', icon: '🐍', color: '#3776ab' },
  { name: 'Kotlin', icon: '🤖', color: '#7f52ff' },
  { name: 'React.js', icon: '⚛️', color: '#06b6d4' },
  { name: 'JavaScript', icon: '⚡', color: '#f59e0b' },
  { name: 'HTML', icon: '🧡', color: '#f97316' },
  { name: 'CSS', icon: '🎨', color: '#3b82f6' },
  { name: 'Tailwind', icon: '💨', color: '#14b8a6' },
  { name: 'Room DB', icon: '🗄️', color: '#ec4899' },
  { name: 'MVVM', icon: '🧩', color: '#8b5cf6' },
  { name: 'DSA', icon: '🌳', color: '#22c55e' },
  { name: 'Git', icon: '🌿', color: '#ef4444' },
  { name: 'GitHub Pages', icon: '🚀', color: '#111827' },
];

const subjects = [
  { name: 'Mobile App Development', marks: 92, grade: 'A+', note: 'Android • Kotlin • UI' },
  { name: 'Software Project Management', marks: 77, grade: 'B+', note: 'Planning • Delivery' },
  { name: 'Cloud Computing', marks: 76, grade: 'B+', note: 'Concepts • Deployment' },
  { name: 'Project Work', marks: 75, grade: 'B+', note: 'Build • Document • Demo' },
];

const shellStyle: React.CSSProperties = { boxSizing: 'border-box', paddingTop: 'var(--safe-area-inset-top)' };

function createResumeUrl() {
  const text = `AMMAR AHMED\nPython | React | Android Developer\nMalegaon, Maharashtra\nGitHub: github.com/AmmarAhmed-star\n\nABOUT\nBCA student at Manipal University Jaipur (Online), 2023-2026. SGPA 8.25/10.\nBuilder of 7 live projects across web and Android.\n\nSKILLS\nPython, Kotlin, React.js, JavaScript, HTML, CSS, Tailwind, Room DB, MVVM, DSA, Git, GitHub Pages\n\nPROJECTS\n- LOOP AI\n- DSA Visualizer\n- PCOS Management App\n- Fresh Fruits Web\n- Expense Tracker Android\n- Notes + To-Do Android\n- Fresh Fruits Android\n\nINTERNSHIP\nZidio Development — LOOP AI\n\nEDUCATION\nBCA, Manipal University Jaipur (Online) — 2023-2026\nMobile App Development: 92 (A+) | SPM: 77 (B+) | Cloud: 76 (B+) | Project: 75 (B+)\n`;
  const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
  return URL.createObjectURL(blob);
}

export default function App() {
  const [resumeNote, setResumeNote] = useState('');
  const [activeSkill, setActiveSkill] = useState('React.js');
  const [showAllSubjects, setShowAllSubjects] = useState(false);
  const [resumeUrl, setResumeUrl] = useState('');

  useEffect(() => {
    const url = createResumeUrl();
    setResumeUrl(url);
    return () => URL.revokeObjectURL(url);
  }, []);

  const handleResume = () => {
    setResumeNote('Resume downloaded — check your downloads folder.');
  };

  return (
    <div data-safe-area-inset-root style={shellStyle} className="min-h-screen w-full overflow-x-clip bg-[var(--bg)] text-[var(--ink)]">
      {/* TOP BAR */}
      <header data-safe-area-sticky-top style={{ top: 'var(--safe-area-inset-top)' }} className="sticky z-40 border-b border-[var(--line)] bg-[var(--bg)]/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
          <a href="#top" className="flex items-center gap-2.5">
            <span className="grid h-10 w-10 place-items-center rounded-2xl bg-gradient-to-br from-pink-500 via-orange-400 to-violet-600 text-lg font-black text-white">A</span>
            <span className="leading-none">
              <span className="block text-[15px] font-extrabold tracking-tight">AMMAR AHMED</span>
              <span className="mt-0.5 block text-[11px] font-bold uppercase tracking-[0.16em] text-pink-600">Developer Portfolio</span>
            </span>
          </a>
          <nav className="hidden items-center gap-5 text-[13px] font-bold md:flex">
            <a href="#about" className="hover:text-pink-600">About</a>
            <a href="#skills" className="hover:text-pink-600">Skills</a>
            <a href="#projects" className="hover:text-pink-600">Projects</a>
            <a href="#education" className="hover:text-pink-600">Education</a>
            <a href="#contact" className="rounded-full bg-[#1e1230] px-4 py-2 text-white hover:bg-pink-600">Let&apos;s Talk →</a>
          </nav>
          <a href="#projects" className="rounded-full bg-pink-600 px-3.5 py-2 text-[12px] font-extrabold text-white md:hidden">View Work</a>
        </div>
      </header>

      <main id="top">
        {/* HERO */}
        <section className="hero-grid relative overflow-hidden bg-gradient-to-br from-pink-500 via-orange-400 to-violet-600 text-white">
          <div className="mx-auto grid max-w-6xl items-center gap-9 px-4 pb-14 pt-10 sm:px-6 lg:grid-cols-[1.15fr_.85fr] lg:pt-14">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/20 px-3 py-1.5 text-[12px] font-extrabold tracking-wide backdrop-blur">
                <span className="h-2 w-2 rounded-full bg-emerald-300" /> OPEN TO OPPORTUNITIES • MALEGAON, MAHARASHTRA
              </div>
              <p className="mt-6 text-sm font-bold uppercase tracking-[0.22em] text-yellow-200">Hello, I&apos;m 👋</p>
              <h1 className="mt-2 text-[clamp(2.8rem,9vw,5.2rem)] font-black leading-[0.92] tracking-tight">AMMAR<br />AHMED</h1>
              <p className="mt-5 max-w-xl text-[clamp(1.05rem,3vw,1.45rem)] font-bold leading-snug">Python <span className="text-yellow-200">|</span> React <span className="text-yellow-200">|</span> Android Developer <span className="text-yellow-200">|</span> 7 Live Projects</p>
              <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-white/90">I turn ideas into colourful, working products — from AI web experiences to offline-first Android apps. Every project here is live, not just a screenshot.</p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a href="#projects" className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-extrabold text-violet-700 shadow-xl hover:bg-yellow-300 hover:text-black">View Projects <ArrowRight size={17} /></a>
                <a href={resumeUrl} download="Ammar-Ahmed-Resume.txt" onClick={handleResume} className="inline-flex items-center gap-2 rounded-full border-2 border-white/80 px-5 py-3 text-sm font-extrabold hover:bg-white hover:text-violet-700"><Download size={17} /> Download Resume</a>
                <a href="https://github.com/AmmarAhmed-star" target="_blank" rel="noopener" className="inline-flex items-center gap-2 rounded-full bg-black/25 px-5 py-3 text-sm font-extrabold backdrop-blur hover:bg-black/40"><Github size={18} /> GitHub</a>
              </div>
              {resumeNote && <p role="status" className="mt-3 rounded-xl bg-white/20 px-3 py-2 text-sm font-bold">{resumeNote}</p>}
              <div className="mt-8 flex flex-wrap gap-2 text-xs font-extrabold">
                <span className="rounded-full bg-white/20 px-3 py-1.5">🐍 Python</span>
                <span className="rounded-full bg-white/20 px-3 py-1.5">⚛️ React</span>
                <span className="rounded-full bg-white/20 px-3 py-1.5">🤖 Android</span>
                <span className="rounded-full bg-white/20 px-3 py-1.5">⭐ SGPA 8.25</span>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[360px]">
              <div className="absolute -left-3 top-8 z-10 rotate-[-8deg] rounded-2xl bg-white px-3 py-2 text-xs font-black text-violet-700 shadow-xl">7 LIVE PROJECTS 🚀</div>
              <div className="absolute -right-2 bottom-20 z-10 rotate-[6deg] rounded-2xl bg-yellow-300 px-3 py-2 text-xs font-black text-black shadow-xl">BCA • 2023–2026 🎓</div>
              <div className="relative mx-auto aspect-square w-[min(78vw,340px)] rounded-full bg-gradient-to-br from-pink-500 via-orange-400 to-violet-600 p-2.5 shadow-2xl">
                <div className="h-full w-full overflow-hidden rounded-full bg-white ring-4 ring-white">
                  <img src={photoUrl} alt="Portrait of Ammar Ahmed" className="h-full w-full object-cover object-top" />
                </div>
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-black px-4 py-2 text-xs font-extrabold text-white shadow-lg">✨ 100% LIVE WORK</div>
              </div>
              <p className="mt-5 text-center text-lg font-black uppercase tracking-[0.18em] text-white drop-shadow">Ammar Ahmed</p>
              <p className="mt-1 text-center text-[11px] font-extrabold uppercase tracking-[0.2em] text-white/85">Build • Ship • Repeat</p>
              <div className="mt-10 grid grid-cols-3 gap-2 text-center">
                {[{ n: '7', l: 'Projects' }, { n: '3', l: 'Android Apps' }, { n: '8.25', l: 'SGPA' }].map((s) => (
                  <div key={s.l} className="rounded-2xl bg-white/20 px-2 py-3 backdrop-blur"><div className="text-xl font-black">{s.n}</div><div className="text-[11px] font-bold uppercase tracking-wide">{s.l}</div></div>
                ))}
              </div>
            </div>
          </div>
          <div className="mx-auto flex max-w-6xl justify-center pb-4"><a href="#about" aria-label="Scroll to About" className="grid h-10 w-10 place-items-center rounded-full bg-white/25"><ChevronDown /></a></div>
        </section>

        {/* ABOUT */}
        <section id="about" className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
          <div className="grid items-start gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <div className="flex items-center gap-4">
                <div className="h-24 w-24 shrink-0 rounded-full bg-gradient-to-br from-pink-500 via-orange-400 to-violet-600 p-1 shadow-xl sm:h-28 sm:w-28">
                  <div className="h-full w-full overflow-hidden rounded-full ring-2 ring-white">
                    <img src={photoUrl} alt="Portrait of Ammar Ahmed" className="h-full w-full object-cover object-top" />
                  </div>
                </div>
                <p className="text-xs font-black uppercase tracking-[0.22em] text-pink-600">01 • About Me</p>
              </div>
              <h2 className="mt-2 text-[clamp(1.9rem,6vw,3rem)] font-black leading-[1.05]">A student who<br />loves to <span className="bg-gradient-to-r from-pink-500 via-orange-500 to-violet-600 bg-clip-text text-transparent">ship real things.</span></h2>
              <p className="mt-4 leading-relaxed text-[var(--muted)]">I&apos;m Ammar — a BCA student building practical apps people can actually use. My favourite moment is when an idea stops being a sketch and starts working in someone&apos;s hand.</p>
              <div className="mt-5 space-y-3 text-sm font-semibold">
                <div className="flex items-center gap-3 rounded-2xl bg-[var(--surface)] p-3 soft-shadow"><GraduationCap className="shrink-0 text-violet-600" /><span><b>BCA</b> • Manipal University Jaipur (Online) • 2023–2026</span></div>
                <div className="flex items-center gap-3 rounded-2xl bg-[var(--surface)] p-3 soft-shadow"><MapPin className="shrink-0 text-pink-600" /><span>Malegaon, Maharashtra</span></div>
                <div className="flex items-center gap-3 rounded-2xl bg-[var(--surface)] p-3 soft-shadow"><Briefcase className="shrink-0 text-orange-500" /><span><b>Zidio Internship</b> — LOOP AI</span></div>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                <span className="rounded-full bg-pink-100 px-3 py-1.5 text-xs font-extrabold text-pink-700">🎯 Problem-first</span>
                <span className="rounded-full bg-violet-100 px-3 py-1.5 text-xs font-extrabold text-violet-700">📱 Mobile-first</span>
                <span className="rounded-full bg-amber-100 px-3 py-1.5 text-xs font-extrabold text-amber-800">🚀 Always live</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {[
                { icon: <Rocket className="text-pink-600" />, n: '7', l: 'Projects', d: 'All live on the web', bg: 'bg-pink-50' },
                { icon: <Award className="text-violet-600" />, n: '8.25', l: 'SGPA / 10', d: 'Strong & consistent', bg: 'bg-violet-50' },
                { icon: <Code2 className="text-teal-600" />, n: '3', l: 'Android Apps', d: 'Kotlin + Room + MVVM', bg: 'bg-teal-50' },
                { icon: <Sparkles className="text-amber-600" />, n: '100%', l: 'Live', d: 'No dead demos here', bg: 'bg-amber-50' },
              ].map((c) => (
                <article key={c.l} className={`rounded-[26px] ${c.bg} p-5 card-shadow`}>
                  <div className="grid h-11 w-11 place-items-center rounded-2xl bg-white">{c.icon}</div>
                  <div className="mt-4 text-4xl font-black">{c.n}</div>
                  <div className="mt-1 font-extrabold">{c.l}</div>
                  <div className="mt-1 text-xs font-semibold text-slate-600">{c.d}</div>
                </article>
              ))}
              <div className="col-span-2 rounded-[26px] bg-[#1e1230] p-5 text-white">
                <p className="text-sm font-bold text-yellow-300">MY PROMISE</p>
                <p className="mt-2 text-lg font-bold leading-snug">“If it isn&apos;t live, it isn&apos;t finished.” — every card below opens a real app.</p>
              </div>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="border-y border-[var(--line)] bg-[var(--surface-2)]">
          <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div><p className="text-xs font-black uppercase tracking-[0.22em] text-violet-600">02 • What I Build With</p><h2 className="mt-2 text-[clamp(1.8rem,5vw,2.6rem)] font-black">Skills that ship 🚀</h2></div>
              <p className="max-w-sm text-sm font-semibold text-[var(--muted)]">Tap a skill to spotlight it. From Python logic to polished Android screens — I cover the full journey.</p>
            </div>
            <div className="mt-7 flex flex-wrap gap-2.5">
              {skills.map((s) => (
                <button key={s.name} onClick={() => setActiveSkill(s.name)} aria-pressed={activeSkill === s.name} className={`rounded-full border-2 px-4 py-2.5 text-sm font-extrabold transition ${activeSkill === s.name ? 'border-transparent bg-[#1e1230] text-white shadow-lg scale-[1.03]' : 'border-[var(--line)] bg-white text-slate-800 hover:-translate-y-0.5'}`}>
                  <span className="mr-2">{s.icon}</span>{s.name}
                </button>
              ))}
            </div>
            <div className="mt-4 rounded-3xl bg-white p-4 text-sm font-bold text-slate-700 soft-shadow sm:p-5">
              <span className="mr-2 text-xl">✦</span> Spotlight: <span className="text-violet-700">{activeSkill}</span> — part of the toolkit behind the 7 live projects below. Try the live demos to see it in action.
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div><p className="text-xs font-black uppercase tracking-[0.22em] text-pink-600">03 • Selected Work</p><h2 className="mt-2 text-[clamp(1.8rem,5vw,2.7rem)] font-black leading-none">7 projects.<br />7 live demos.</h2></div>
            <a href="https://github.com/AmmarAhmed-star" target="_blank" rel="noopener" className="inline-flex items-center gap-2 rounded-full bg-[#1e1230] px-4 py-2.5 text-sm font-extrabold text-white">All on GitHub <Github size={17} /></a>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((p, i) => (
              <article key={p.title} className="flex flex-col overflow-hidden rounded-[28px] bg-[var(--surface)] card-shadow transition hover:-translate-y-1">
                <div className="flex items-start justify-between p-5 pb-0">
                  <div className="grid h-16 w-16 place-items-center rounded-[22px] text-3xl" style={{ background: p.soft }}>{p.emoji}</div>
                  <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-black text-white" style={{ background: p.color }}><span className="h-1.5 w-1.5 rounded-full bg-white" /> LIVE</span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <p className="text-[11px] font-black uppercase tracking-[0.16em]" style={{ color: p.color }}>{p.tag} • {String(i + 1).padStart(2, '0')}</p>
                  <h3 className="mt-2 text-xl font-black leading-tight">{p.title}</h3>
                  <p className="mt-1 text-xs font-extrabold text-slate-500">{p.tech}</p>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-[var(--muted)]">{p.desc}</p>
                  <div className="mt-5 flex gap-2">
                    <a href={p.href} target="_blank" rel="noopener" className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-full px-3 py-2.5 text-sm font-extrabold text-white" style={{ background: p.color }}>View Live <ArrowUpRight size={16} /></a>
                    <a href="https://github.com/AmmarAhmed-star" target="_blank" rel="noopener" aria-label={`GitHub for ${p.title}`} className="inline-flex items-center justify-center gap-1.5 rounded-full border-2 border-slate-200 px-3 py-2.5 text-sm font-extrabold"><Github size={17} /> Code</a>
                  </div>
                </div>
              </article>
            ))}
            <article className="flex flex-col justify-between rounded-[28px] bg-gradient-to-br from-pink-500 via-orange-400 to-violet-600 p-6 text-white card-shadow sm:col-span-2 lg:col-span-1">
              <div><div className="text-4xl">💡</div><h3 className="mt-3 text-2xl font-black leading-tight">Your idea could be #8.</h3><p className="mt-2 text-sm leading-relaxed text-white/90">Have a web or Android idea? Let&apos;s turn it into the next live project.</p></div>
              <a href="#contact" className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-extrabold text-violet-700">Start a project <ArrowRight size={16} /></a>
            </article>
          </div>
        </section>

        {/* EDUCATION + INTERNSHIP */}
        <section id="education" className="bg-[var(--surface-2)]">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[1.2fr_.8fr]">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-violet-600">04 • Education</p>
              <h2 className="mt-2 text-[clamp(1.8rem,5vw,2.6rem)] font-black">Learning, with receipts 📚</h2>
              <div className="mt-7 border-l-4 border-pink-400 pl-5">
                <div className="flex flex-wrap items-center gap-2"><span className="rounded-full bg-violet-600 px-3 py-1 text-xs font-black text-white">2023 — 2026</span><span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-black text-emerald-800">IN PROGRESS</span></div>
                <h3 className="mt-3 text-xl font-black">Bachelor of Computer Applications (BCA)</h3>
                <p className="mt-1 font-bold text-[var(--muted)]">Manipal University Jaipur (Online)</p>
                <p className="mt-3 inline-flex items-center gap-2 rounded-2xl bg-white px-3 py-2 text-sm font-extrabold soft-shadow"><Award className="text-amber-500" /> SGPA: <span className="text-2xl font-black text-violet-700">8.25 / 10</span></p>
              </div>
              <div className="mt-6">
                <div className="flex items-center justify-between"><h4 className="font-black">Subject highlights</h4><button onClick={() => setShowAllSubjects(v => !v)} className="text-sm font-extrabold text-pink-600">{showAllSubjects ? 'Show less ↑' : 'Show all ↓'}</button></div>
                <div className="mt-3 space-y-3">
                  {(showAllSubjects ? subjects : subjects.slice(0, 2)).map((s) => (
                    <div key={s.name} className="rounded-2xl bg-white p-4 soft-shadow">
                      <div className="flex items-center justify-between gap-3"><div><p className="text-sm font-extrabold">{s.name}</p><p className="text-xs font-semibold text-slate-500">{s.note}</p></div><span className="shrink-0 rounded-full bg-violet-100 px-3 py-1 text-sm font-black text-violet-800">{s.marks} • {s.grade}</span></div>
                      <div className="mt-3 h-2.5 overflow-hidden rounded-full bg-slate-100"><div className="h-full rounded-full bg-gradient-to-r from-pink-500 to-violet-600" style={{ width: `${s.marks}%` }} /></div>
                    </div>
                  ))}
                </div>
                {!showAllSubjects && <p className="mt-3 text-xs font-bold text-slate-500">Showing 2 of 4 subjects — tap Show all to see the rest.</p>}
              </div>
            </div>

            <aside className="space-y-4">
              <div className="overflow-hidden rounded-[28px] bg-[#1e1230] p-6 text-white card-shadow">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-yellow-300">05 • Internship</p>
                <div className="mt-4 flex items-center gap-3"><span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-pink-500 to-violet-600 text-2xl">🤖</span><div><h3 className="text-xl font-black leading-tight">Zidio Development</h3><p className="text-sm font-bold text-white/70">LOOP AI</p></div></div>
                <p className="mt-4 text-sm leading-relaxed text-white/85">Hands-on internship work on LOOP AI — building, testing and shipping a real AI product as part of a development team.</p>
                <div className="mt-5 flex flex-wrap gap-2 text-xs font-extrabold"><span className="rounded-full bg-white/15 px-3 py-1.5">AI PRODUCT</span><span className="rounded-full bg-white/15 px-3 py-1.5">TEAM WORK</span><span className="rounded-full bg-white/15 px-3 py-1.5">REAL SHIPPING</span></div>
                <a href="https://ammarahmed-star.github.io/ZIDIO-LOOP-Projects/" target="_blank" rel="noopener" className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-extrabold text-violet-700">See LOOP AI <ArrowUpRight size={16} /></a>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-[24px] bg-white p-4 soft-shadow"><HeartPulse className="text-pink-600" /><p className="mt-2 font-black">Health tech</p><p className="text-xs font-semibold text-slate-500">Care-first design</p></div>
                <div className="rounded-[24px] bg-white p-4 soft-shadow"><Wallet className="text-amber-600" /><p className="mt-2 font-black">Fintech basics</p><p className="text-xs font-semibold text-slate-500">Track & understand</p></div>
                <div className="rounded-[24px] bg-white p-4 soft-shadow"><ShoppingBasket className="text-emerald-600" /><p className="mt-2 font-black">E-commerce</p><p className="text-xs font-semibold text-slate-500">Fresh, fast flows</p></div>
                <div className="rounded-[24px] bg-white p-4 soft-shadow"><LineChart className="text-violet-600" /><p className="mt-2 font-black">Visual learning</p><p className="text-xs font-semibold text-slate-500">DSA made visible</p></div>
              </div>
              <div className="flex items-center gap-3 rounded-[24px] border-2 border-dashed border-violet-300 bg-white/70 p-4"><BookOpen className="shrink-0 text-violet-600" /><p className="text-sm font-bold">Currently learning: deeper Android architecture + cleaner React patterns.</p></div>
            </aside>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
          <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-pink-500 via-orange-400 to-violet-600 p-6 text-center text-white card-shadow sm:p-10">
            <div className="absolute left-6 top-6 text-3xl opacity-80">✨</div><div className="absolute bottom-6 right-6 text-3xl opacity-80">🚀</div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-yellow-200">06 • Contact</p>
            <h2 className="mx-auto mt-3 max-w-2xl text-[clamp(2rem,6vw,3.4rem)] font-black leading-[1.02]">Let&apos;s Work Together</h2>
            <p className="mx-auto mt-3 max-w-xl text-[15px] leading-relaxed text-white/90">Got a project, internship or collaboration in mind? I&apos;d love to build something live with you.</p>
            <div className="mx-auto mt-6 flex max-w-2xl flex-col justify-center gap-3 sm:flex-row">
              <a href="https://github.com/AmmarAhmed-star" target="_blank" rel="noopener" className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-extrabold text-violet-700"><Github size={18} /> github.com/AmmarAhmed-star</a>
              <span className="inline-flex items-center justify-center gap-2 rounded-full bg-black/25 px-5 py-3 text-sm font-extrabold"><MapPin size={17} /> Malegaon, Maharashtra</span>
            </div>
            <div className="mt-6 flex flex-wrap justify-center gap-2 text-xs font-extrabold"><span className="rounded-full bg-white/20 px-3 py-1.5">Python</span><span className="rounded-full bg-white/20 px-3 py-1.5">React</span><span className="rounded-full bg-white/20 px-3 py-1.5">Android</span><span className="rounded-full bg-white/20 px-3 py-1.5">7 Live Projects</span></div>
            <a href={resumeUrl} download="Ammar-Ahmed-Resume.txt" onClick={handleResume} className="mt-7 inline-flex items-center gap-2 rounded-full bg-black px-6 py-3.5 text-sm font-extrabold text-white hover:bg-zinc-800"><Download size={17} /> Download Resume</a>
            {resumeNote && <p role="status" className="mx-auto mt-3 w-fit rounded-full bg-white/20 px-4 py-2 text-sm font-bold">{resumeNote}</p>}
          </div>
          <footer className="mt-8 flex flex-col items-center justify-between gap-3 text-center text-xs font-bold text-[var(--muted)] sm:flex-row sm:text-left">
            <p>© {new Date().getFullYear()} Ammar Ahmed • Python | React | Android Developer</p>
            <div className="flex gap-4"><a href="#about" className="hover:text-pink-600">About</a><a href="#projects" className="hover:text-pink-600">Projects</a><a href="#education" className="hover:text-pink-600">Education</a><a href="#contact" className="hover:text-pink-600">Contact</a></div>
          </footer>
        </section>
      </main>
    </div>
  );
}
