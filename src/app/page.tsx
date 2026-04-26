"use client";

import { useState } from "react";

/* ─── SVG Icons ─── */

function CompassLogo({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="compassNeedle" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#d4c08a" />
          <stop offset="100%" stopColor="#a8893e" />
        </linearGradient>
      </defs>
      <circle cx="32" cy="32" r="28" stroke="#c5a55a" strokeWidth="1.5" opacity="0.3" />
      <circle cx="32" cy="32" r="20" stroke="#c5a55a" strokeWidth="1" opacity="0.2" />
      <polygon points="32,6 36,28 32,22 28,28" fill="url(#compassNeedle)" />
      <polygon points="32,58 28,36 32,42 36,36" fill="#c5a55a" opacity="0.4" />
      <polygon points="6,32 28,28 22,32 28,36" fill="#c5a55a" opacity="0.4" />
      <polygon points="58,32 36,36 42,32 36,28" fill="#c5a55a" opacity="0.4" />
      <circle cx="32" cy="32" r="3" fill="#c5a55a" />
    </svg>
  );
}

function ChartIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
      <rect x="6" y="28" width="8" height="14" rx="2" fill="#c5a55a" opacity="0.7" />
      <rect x="20" y="18" width="8" height="24" rx="2" fill="#c5a55a" opacity="0.85" />
      <rect x="34" y="8" width="8" height="34" rx="2" fill="#c5a55a" />
    </svg>
  );
}

function TargetIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
      <circle cx="24" cy="24" r="18" stroke="#c5a55a" strokeWidth="2.5" fill="none" />
      <circle cx="24" cy="24" r="11" stroke="#c5a55a" strokeWidth="2" fill="none" opacity="0.7" />
      <circle cx="24" cy="24" r="4" fill="#c5a55a" />
    </svg>
  );
}

function ReportIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
      <rect x="10" y="4" width="28" height="40" rx="3" stroke="#c5a55a" strokeWidth="2.5" fill="none" />
      <line x1="17" y1="16" x2="31" y2="16" stroke="#c5a55a" strokeWidth="2" opacity="0.6" />
      <line x1="17" y1="22" x2="31" y2="22" stroke="#c5a55a" strokeWidth="2" opacity="0.6" />
      <line x1="17" y1="28" x2="26" y2="28" stroke="#c5a55a" strokeWidth="2" opacity="0.6" />
      <polyline points="17,36 22,32 27,35 31,30" stroke="#c5a55a" strokeWidth="2" fill="none" />
    </svg>
  );
}

function LedgerIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
      <rect x="8" y="6" width="32" height="36" rx="3" stroke="#c5a55a" strokeWidth="2.5" fill="none" />
      <line x1="20" y1="6" x2="20" y2="42" stroke="#c5a55a" strokeWidth="1.5" opacity="0.4" />
      <line x1="8" y1="16" x2="40" y2="16" stroke="#c5a55a" strokeWidth="1.5" opacity="0.4" />
      <line x1="8" y1="26" x2="40" y2="26" stroke="#c5a55a" strokeWidth="1.5" opacity="0.4" />
      <line x1="8" y1="36" x2="40" y2="36" stroke="#c5a55a" strokeWidth="1.5" opacity="0.4" />
      <path d="M26 20L30 24L36 14" stroke="#c5a55a" strokeWidth="2.5" strokeLinecap="round" fill="none" />
    </svg>
  );
}

function CheckCircle() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 shrink-0">
      <circle cx="12" cy="12" r="10" fill="#c5a55a" opacity="0.15" />
      <path d="M8 12.5L11 15.5L16 9.5" stroke="#a8893e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* ─── Navigation ─── */

function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Process", href: "#process" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-navy-950/95 backdrop-blur-md border-b border-navy-800/50">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group">
          <CompassLogo className="w-8 h-8 shield-glow transition-transform group-hover:scale-105" />
          <span className="font-heading text-xl font-bold text-white tracking-wide">
            ABBY<span className="text-gold-400"> Solutions</span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-navy-200 hover:text-gold-400 transition-colors tracking-wide uppercase font-medium"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="ml-2 px-5 py-2 bg-gold-400 text-navy-950 text-sm font-semibold rounded hover:bg-gold-300 transition-colors"
          >
            Get Started
          </a>
        </div>

        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path strokeLinecap="round" d="M6 6L18 18M6 18L18 6" />
            ) : (
              <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-navy-950 border-t border-navy-800/50 px-6 pb-6 pt-4 space-y-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block text-navy-200 hover:text-gold-400 transition-colors text-base"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="block w-full text-center px-5 py-3 bg-gold-400 text-navy-950 font-semibold rounded hover:bg-gold-300 transition-colors"
          >
            Get Started
          </a>
        </div>
      )}
    </nav>
  );
}

/* ─── Sections ─── */

function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center bg-navy-950 grain-overlay overflow-hidden">
      <div className="absolute top-20 right-0 w-96 h-96 bg-gold-400/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-navy-700/20 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-16 w-full">
        <div className="max-w-3xl">
          <div className="animate-fade-in-up opacity-0">
            <CompassLogo className="w-16 h-16 mb-8 shield-glow" />
          </div>

          <p className="animate-fade-in-up opacity-0 animation-delay-100 text-gold-400 font-body text-sm tracking-[0.25em] uppercase mb-4 font-semibold">
            Advanced Business Blueprint &amp; Ynergy
          </p>

          <h1 className="animate-fade-in-up opacity-0 animation-delay-200 font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            Forecasting Growth,
            <br />
            <span className="text-gold-400">Designing Success.</span>
          </h1>

          <p className="animate-fade-in-up opacity-0 animation-delay-300 text-navy-200 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl">
            With over 30 years of corporate finance leadership, ABBY Solutions
            provides the strategic financial guidance your business needs to
            thrive — from FP&amp;A advisory to financial reporting that drives
            decisions.
          </p>

          <div className="animate-fade-in-up opacity-0 animation-delay-400 flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-gold-400 text-navy-950 font-semibold text-base rounded hover:bg-gold-300 hover:shadow-lg hover:shadow-gold-400/20 transition-all"
            >
              Schedule a Consultation
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center px-8 py-4 border border-navy-600 text-navy-200 font-medium text-base rounded hover:border-gold-400/50 hover:text-gold-400 transition-all"
            >
              Explore Services
            </a>
          </div>
        </div>

        <div className="animate-fade-in opacity-0 animation-delay-600 mt-20 pt-10 border-t border-navy-800/50 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { num: "30+", label: "Years Experience" },
            { num: "FP&A", label: "Specialization" },
            { num: "SMBs", label: "& Startups Served" },
            { num: "100%", label: "Client Focused" },
          ].map((stat) => (
            <div key={stat.label} className="text-center md:text-left">
              <div className="font-heading text-2xl md:text-3xl font-bold text-gold-400">
                {stat.num}
              </div>
              <div className="text-navy-400 text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-gold-500 font-semibold text-sm tracking-[0.2em] uppercase mb-3">
              Why ABBY Solutions
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy-900 mb-6 leading-tight">
              Financial Clarity
              <br />
              <span className="text-gold-500">Built on Experience</span>
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-gold-400 to-gold-300 rounded mb-8" />
            <p className="text-navy-700 leading-relaxed mb-6 text-base">
              ABBY Solutions was founded on a simple belief: every business
              deserves access to the same caliber of financial strategy that
              Fortune 500 companies rely on. With three decades of hands-on
              experience in corporate finance and FP&amp;A, we bring institutional
              expertise to small and mid-size businesses, startups, and nonprofits.
            </p>
            <p className="text-navy-700 leading-relaxed text-base">
              We don&apos;t just crunch numbers — we translate financial data into
              actionable strategies that help you make confident decisions, secure
              funding, and build sustainable growth. Your vision is the blueprint.
              Our job is to make the numbers work for it.
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                title: "Decades of Leadership",
                desc: "30+ years in corporate finance, including senior FP&A roles where strategic decisions shaped company direction.",
              },
              {
                title: "Tailored to Your Scale",
                desc: "Whether you're a 10-person startup or a 200-person nonprofit, we calibrate our approach to fit your size, stage, and goals.",
              },
              {
                title: "Clarity Over Complexity",
                desc: "We turn dense financial data into clear, actionable reporting that your leadership team can actually use.",
              },
              {
                title: "Partner, Not Vendor",
                desc: "We integrate with your team, understand your culture, and invest in your outcomes — not just deliverables.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex gap-4 p-5 rounded-lg bg-navy-50/50 border border-navy-100 hover:border-gold-400/50 hover:shadow-sm transition-all"
              >
                <CheckCircle />
                <div>
                  <h3 className="font-heading font-semibold text-navy-900 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-navy-600 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  const services = [
    {
      icon: <ChartIcon />,
      title: "FP&A Advisory",
      desc: "Strategic financial planning and analysis that aligns your financial goals with business objectives. We build the models, forecasts, and insights your leadership team needs to act with confidence.",
    },
    {
      icon: <TargetIcon />,
      title: "Budgeting & Forecasting",
      desc: "Rigorous budgeting frameworks and rolling forecasts that keep you ahead of the curve. Know where your money is going — and where it should be going — before the quarter closes.",
    },
    {
      icon: <ReportIcon />,
      title: "Streamlined Reporting",
      desc: "Cut through the noise with clear, concise financial reports designed for decision-makers. We restructure your reporting to highlight what matters and eliminate what doesn't.",
    },
    {
      icon: <LedgerIcon />,
      title: "Financial Statements Management",
      desc: "End-to-end management of your financial statements — from preparation to analysis. Ensure accuracy, compliance, and readability for stakeholders, investors, and board members.",
    },
  ];

  return (
    <section id="services" className="py-24 bg-navy-950 grain-overlay relative">
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-gold-400 font-semibold text-sm tracking-[0.2em] uppercase mb-3">
            What We Do
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
            Services That Drive Results
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-gold-400 to-gold-300 rounded mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="group p-8 rounded-xl bg-navy-900/60 border border-navy-800 hover:border-gold-400/30 hover:bg-navy-900/80 transition-all"
            >
              <div className="mb-5">{s.icon}</div>
              <h3 className="font-heading text-xl font-semibold text-white mb-3 group-hover:text-gold-400 transition-colors">
                {s.title}
              </h3>
              <p className="text-navy-300 leading-relaxed text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  const steps = [
    {
      num: "01",
      title: "Discovery",
      desc: "We start with a deep dive into your business — your financials, your goals, your pain points. No templates. No assumptions. Just listening.",
    },
    {
      num: "02",
      title: "Strategy",
      desc: "Based on what we learn, we build a customized financial roadmap — clear priorities, realistic timelines, and measurable milestones.",
    },
    {
      num: "03",
      title: "Execution",
      desc: "We roll up our sleeves and implement — building models, restructuring reports, training your team, and delivering results you can see.",
    },
  ];

  return (
    <section id="process" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-gold-500 font-semibold text-sm tracking-[0.2em] uppercase mb-3">
            How We Work
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy-900 mb-4">
            A Clear Path Forward
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-gold-400 to-gold-300 rounded mx-auto" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <div key={step.num} className="relative text-center md:text-left">
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-px bg-gradient-to-r from-gold-300 to-transparent" />
              )}
              <div className="font-heading text-5xl font-bold text-gold-400/20 mb-2">
                {step.num}
              </div>
              <h3 className="font-heading text-xl font-semibold text-navy-900 mb-3">
                {step.title}
              </h3>
              <p className="text-navy-600 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "ABBY Solutions transformed how we think about our finances. For the first time, our board meetings are driven by clear, actionable data instead of gut feelings.",
      name: "Client Name",
      role: "CEO, Growing Startup",
    },
    {
      quote:
        "Their forecasting model helped us secure our Series A. Investors were impressed by the depth and clarity of our financial projections.",
      name: "Client Name",
      role: "Founder, Tech Startup",
    },
    {
      quote:
        "As a nonprofit, every dollar matters. ABBY Solutions streamlined our reporting and helped us allocate resources where they have the most impact.",
      name: "Client Name",
      role: "Executive Director, Nonprofit",
    },
  ];

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-navy-50 to-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-gold-500 font-semibold text-sm tracking-[0.2em] uppercase mb-3">
            Client Impact
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy-900 mb-4">
            Trusted by Growing Organizations
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-gold-400 to-gold-300 rounded mx-auto mb-4" />
          <p className="text-navy-500 text-sm italic">
            Placeholder testimonials — replace with real client feedback as you grow
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="p-8 rounded-xl bg-white border border-navy-100 shadow-sm hover:shadow-md hover:border-gold-400/40 transition-all"
            >
              <svg viewBox="0 0 32 32" className="w-8 h-8 mb-4 text-gold-400/30" fill="currentColor">
                <path d="M4 20.5C4 14.5 7.5 9 13 6.5L14.5 9C10 11.5 8.5 14.5 8 17H12.5C13.9 17 15 18.1 15 19.5V26.5C15 27.9 13.9 29 12.5 29H6.5C5.1 29 4 27.9 4 26.5V20.5ZM18 20.5C18 14.5 21.5 9 27 6.5L28.5 9C24 11.5 22.5 14.5 22 17H26.5C27.9 17 29 18.1 29 19.5V26.5C29 27.9 27.9 29 26.5 29H20.5C19.1 29 18 27.9 18 26.5V20.5Z" />
              </svg>
              <p className="text-navy-700 text-sm leading-relaxed mb-6 italic">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="border-t border-navy-100 pt-4">
                <p className="font-semibold text-navy-900 text-sm">{t.name}</p>
                <p className="text-navy-500 text-xs">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-navy-950 grain-overlay relative">
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <CompassLogo className="w-12 h-12 mx-auto mb-6 shield-glow" />
        <p className="text-gold-400 font-semibold text-sm tracking-[0.2em] uppercase mb-3">
          Get in Touch
        </p>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">
          Ready to Take Control of
          <br />
          <span className="text-gold-400">Your Financial Future?</span>
        </h2>
        <p className="text-navy-300 text-base leading-relaxed max-w-2xl mx-auto mb-10">
          Whether you need a full FP&amp;A overhaul or a second set of expert eyes
          on your financials, let&apos;s start with a conversation. No pitch, no
          pressure — just a clear look at how we can help.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a
            href="mailto:contact@abbysolutions.com"
            className="inline-flex items-center justify-center px-8 py-4 bg-gold-400 text-navy-950 font-semibold text-base rounded hover:bg-gold-300 hover:shadow-lg hover:shadow-gold-400/20 transition-all"
          >
            Email Us
          </a>
          <a
            href="tel:+1234567890"
            className="inline-flex items-center justify-center px-8 py-4 border border-navy-600 text-navy-200 font-medium text-base rounded hover:border-gold-400/50 hover:text-gold-400 transition-all"
          >
            Call for Consultation
          </a>
        </div>

        <div className="grid sm:grid-cols-3 gap-8 text-center border-t border-navy-800/50 pt-10">
          <div>
            <p className="text-gold-400 text-sm font-semibold mb-1 tracking-wide uppercase">Email</p>
            <p className="text-navy-300 text-sm">contact@abbysolutions.com</p>
          </div>
          <div>
            <p className="text-gold-400 text-sm font-semibold mb-1 tracking-wide uppercase">Phone</p>
            <p className="text-navy-300 text-sm">(123) 456-7890</p>
          </div>
          <div>
            <p className="text-gold-400 text-sm font-semibold mb-1 tracking-wide uppercase">Location</p>
            <p className="text-navy-300 text-sm">New Jersey, United States</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-navy-950 border-t border-navy-800/50 py-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <CompassLogo className="w-6 h-6" />
            <span className="font-heading text-base font-bold text-white">
              ABBY<span className="text-gold-400"> Solutions</span>
            </span>
          </div>

          <div className="flex gap-8">
            {["About", "Services", "Process", "Contact"].map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase()}`}
                className="text-navy-400 text-sm hover:text-gold-400 transition-colors"
              >
                {l}
              </a>
            ))}
          </div>

          <p className="text-navy-600 text-xs">
            &copy; {new Date().getFullYear()} ABBY Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

/* ─── Page ─── */

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProcessSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
