"use client";

import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const navItems = [
    { label: "La consultora", href: "#consultora" },
    { label: "Acompañamiento", href: "#acompanamiento" },
    { label: "El Proceso", href: "#proceso" },
    { label: "Experiencias", href: "#experiencias" },
    { label: "FAQ", href: "#faq" },
    { label: "Turnos", href: "#turnos" },
  ];

  const supportModes = [
    {
      id: "ansiedad",
      label: "Ansiedad",
      title: "Recuperar regulación emocional",
      text: "Trabajamos síntomas de ansiedad, rumiación y tensión corporal con herramientas clínicas y prácticas.",
      badge: "Alta demanda",
    },
    {
      id: "vinculos",
      label: "Vínculos",
      title: "Vincularte con más claridad",
      text: "Exploramos patrones relacionales, límites y comunicación para construir vínculos más saludables.",
      badge: "Proceso guiado",
    },
    {
      id: "cambios",
      label: "Cambios vitales",
      title: "Sostener transiciones importantes",
      text: "Acompañamiento en duelos, mudanzas, separaciones, decisiones profesionales y nuevas etapas.",
      badge: "Plan personalizado",
    },
  ];

  const [selectedMode, setSelectedMode] = useState(supportModes[0]);
  const testimonials = [
    {
      quote:
        "“Por primera vez sentí que tenía herramientas reales para gestionar la ansiedad.”",
      author: "Marina, 31 años",
      context: "Proceso de 4 meses",
    },
    {
      quote:
        "“La calidad humana y la claridad del proceso marcaron una diferencia enorme.”",
      author: "Carla, 28 años",
      context: "Acompañamiento en cambios vitales",
    },
    {
      quote:
        "“Aprendí a poner límites sin culpa y a entender mejor lo que me pasaba.”",
      author: "Lucía, 35 años",
      context: "Trabajo vincular",
    },
  ];
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const contactMethods = [
    { id: "email", label: "Email", hint: "Respuesta dentro de 24 hs hábiles." },
    { id: "whatsapp", label: "WhatsApp", hint: "Canal más rápido para coordinar." },
    { id: "llamada", label: "Llamada", hint: "Podés solicitar contacto telefónico." },
  ];
  const [contactMethod, setContactMethod] = useState(contactMethods[1]);

  return (
    <div className="text-[var(--foreground)]">
      <header className="sticky top-0 z-20 w-full border-b border-[var(--line)] bg-white/75 backdrop-blur-xl">
        <nav className="flex w-full items-center justify-between px-6 py-4 md:px-8">
          <a href="#top" className="flex items-center gap-3">
            <Image
              src="/logo.jpeg"
              alt="Thompson Lorena Consultora Psicológica"
              width={148}
              height={44}
              className="h-10 w-auto md:h-11"
              priority
            />
            <span className="flex flex-col leading-none">
              <span
                className="text-base tracking-wide text-[var(--deep-blue)] md:text-lg"
                style={{ fontFamily: "var(--font-dm-serif)" }}
              >
                Thompson Lorena
              </span>
              <span className="mt-1 text-[10px] font-medium uppercase tracking-[0.14em] text-[var(--muted)] md:text-[11px]">
                Consultora Psicológica
              </span>
            </span>
          </a>
          <ul className="hidden lg:flex items-center gap-7 text-sm">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="nav-link transition-colors hover:text-[var(--violet)]"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#turnos"
            className="rounded-full border border-[var(--deep-blue)] px-4 py-2 text-sm transition-colors hover:bg-[var(--deep-blue)] hover:text-white"
          >
            Reservar turno
          </a>
        </nav>
      </header>

      <main>
        <section className="border-b border-[var(--line)]">
          <div className="section-shell section-block grid gap-12 md:grid-cols-2 md:items-center">
            <div>
              <div className="mb-5 flex flex-wrap gap-2">
                <span className="rounded-full bg-[var(--violet-soft)] px-3 py-1 text-xs font-medium text-[var(--violet)]">
                  Consultora psicológica
                </span>
                <span className="rounded-full bg-[#edf4ff] px-3 py-1 text-xs font-medium text-[#335882]">
                  Turnos online/presenciales
                </span>
              </div>
              <h1 className="text-5xl leading-[0.92] md:text-7xl">
                Espacio de calma para volver a vos.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-[var(--muted)]">
                Acompañamiento psicológico con enfoque humano y profesional para
                atravesar ansiedad, cambios vitales y procesos emocionales
                complejos con claridad, respeto y herramientas concretas.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#turnos"
                  className="rounded-full bg-[var(--violet)] px-6 py-3 text-sm font-medium text-white shadow-[0_10px_28px_rgba(108,74,166,0.35)] transition-all hover:-translate-y-0.5"
                >
                  Solicitar primera consulta
                </a>
                <a
                  href="#proceso"
                  className="rounded-full border border-[var(--line)] bg-white px-6 py-3 text-sm font-medium hover:border-[var(--violet)]/35"
                >
                  Conocer el proceso
                </a>
              </div>
              <div className="mt-7 flex flex-wrap items-center gap-3">
                {["+250 procesos acompañados", "Modalidad híbrida", "Enfoque personalizado"].map(
                  (item, index) => (
                    <span
                      key={item}
                      className={`rounded-full border border-[var(--line)] bg-white px-3 py-1 text-xs text-[var(--deep-blue)] ${index === 0 ? "soft-pulse" : ""}`}
                    >
                      {item}
                    </span>
                  ),
                )}
              </div>
            </div>

            <div className="relative">
              <div className="pointer-events-none absolute -inset-3 rounded-[1.9rem] border border-[var(--line)]/80 bg-[linear-gradient(135deg,#ffffff_0%,#f5f1fd_45%,#eef5ff_100%)] shadow-[0_18px_45px_rgba(36,42,88,0.12)]" />
              <div className="pointer-events-none absolute -left-1 top-8 h-20 w-1 rounded-full bg-[var(--violet)]/35" />
              <div className="pointer-events-none absolute -right-1 bottom-8 h-20 w-1 rounded-full bg-[var(--deep-blue)]/30" />
              <div className="surface-card relative p-8 md:p-10">
              <p className="text-sm uppercase tracking-[0.12em] text-[var(--violet)]">
                Sesiones online y presenciales
              </p>
              <h2 className="mt-4 text-4xl leading-[1.02]">
                Un abordaje claro, humano y medible.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-[var(--muted)]">
                Diseñamos un proceso terapéutico que combine escucha clínica y
                herramientas concretas para tu día a día.
              </p>
              <div className="mt-8 grid grid-cols-3 gap-3">
                {["Empatía", "Método", "Resultados"].map((item) => (
                  <div
                    key={item}
                    className="rounded-md border border-[var(--line)] bg-[#fafbff] px-3 py-3 text-center text-xs font-semibold uppercase tracking-wide text-[var(--deep-blue)]"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
            </div>
          </div>
        </section>

        <section id="consultora" className="section-shell section-block">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div>
              <p className="section-badge section-badge-violet">La consultora</p>
              <h2 className="section-title mt-3">Thompson Lorena</h2>
              <p className="section-lead">
                Psicóloga especializada en acompañamiento de adultos y jóvenes en
                procesos de ansiedad, crisis de identidad, duelos, vínculos y toma
                de decisiones. Su trabajo integra escucha clínica, mirada empática
                y herramientas prácticas para construir bienestar emocional.
              </p>
            </div>
            <div className="surface-card aspect-video w-full p-2">
              <div className="flex h-full items-center justify-center rounded-xl border border-dashed border-[var(--line)] bg-[#fafbff] text-sm text-[var(--muted)]">
                Espacio para video de presentación de la consultora
              </div>
            </div>
          </div>
        </section>

        <section
          id="acompanamiento"
          className="section-shell section-block border-t border-[var(--line)]"
        >
          <p className="section-badge section-badge-blue">Acompañamiento</p>
          <h2 className="section-title mt-3">En qué puedo ayudarte</h2>
          <p className="section-lead">
            Elegí una temática para ver cómo trabajamos cada proceso.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {supportModes.map((mode) => (
              <button
                key={mode.id}
                onClick={() => setSelectedMode(mode)}
                className={`rounded-full border px-4 py-2 text-sm transition-all ${
                  selectedMode.id === mode.id
                    ? "active-pill border-transparent shadow-[0_8px_25px_rgba(73,78,156,0.3)]"
                    : "border-[var(--line)] bg-white hover:border-[var(--violet)]/30"
                }`}
              >
                {mode.label}
              </button>
            ))}
          </div>
          <article className="surface-card interactive-card mt-7 p-8 md:p-10">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h3 className="text-3xl">{selectedMode.title}</h3>
              <span className="rounded-full bg-[var(--violet-soft)] px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[var(--violet)]">
                {selectedMode.badge}
              </span>
            </div>
            <p className="mt-5 max-w-3xl text-lg leading-relaxed text-[var(--muted)]">
              {selectedMode.text}
            </p>
          </article>
        </section>

        <section
          id="proceso"
          className="border-y border-[var(--line)] bg-[linear-gradient(180deg,#f7f3ff_0%,#fcfbff_100%)]"
        >
          <div className="section-shell">
            <div className="section-block">
            <p className="section-badge section-badge-violet">El Proceso</p>
            <h2 className="section-title mt-3">Simple, claro y cercano</h2>
            <p className="section-lead">
              Tres etapas para dar estructura, claridad y continuidad al proceso.
            </p>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {[
                {
                  step: "01",
                  title: "Primer contacto",
                  text: "Coordinamos un espacio inicial para conocer tu motivo de consulta y tus necesidades.",
                },
                {
                  step: "02",
                  title: "Objetivos terapéuticos",
                  text: "Definimos juntas un plan de trabajo realista, con foco en tu bienestar presente y futuro.",
                },
                {
                  step: "03",
                  title: "Seguimiento",
                  text: "Sostenemos un proceso de acompañamiento continuo, con herramientas prácticas para tu día a día.",
                },
              ].map((item) => (
                <article
                  key={item.step}
                  className="surface-card interactive-card p-8"
                >
                  <p className="text-xs font-semibold tracking-[0.12em] text-[var(--violet)]">
                    PASO {item.step}
                  </p>
                  <h3 className="mt-2 text-2xl">{item.title}</h3>
                  <p className="mt-4 leading-relaxed text-[var(--muted)]">
                    {item.text}
                  </p>
                </article>
              ))}
            </div>
            </div>
          </div>
        </section>

        <section
          id="experiencias"
          className="section-shell section-block"
        >
          <p className="section-badge section-badge-blue">Experiencias</p>
          <h2 className="section-title mt-3">Lo que destacan quienes consultan</h2>
          <p className="section-lead">
            Comentarios de personas que atravesaron el proceso terapéutico.
          </p>
          <div className="mt-10 surface-card p-8 md:p-10">
            <blockquote className="text-2xl leading-relaxed text-[var(--deep-blue)]">
              {testimonials[testimonialIndex].quote}
            </blockquote>
            <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-sm font-semibold text-[var(--deep-blue)]">
                  {testimonials[testimonialIndex].author}
                </p>
                <p className="text-sm text-[var(--muted)]">
                  {testimonials[testimonialIndex].context}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() =>
                    setTestimonialIndex((prev) =>
                      prev === 0 ? testimonials.length - 1 : prev - 1,
                    )
                  }
                  className="rounded-full border border-[var(--line)] px-3 py-2 text-sm hover:border-[var(--violet)]/40"
                >
                  Anterior
                </button>
                <button
                  type="button"
                  onClick={() =>
                    setTestimonialIndex((prev) =>
                      prev === testimonials.length - 1 ? 0 : prev + 1,
                    )
                  }
                  className="rounded-full border border-[var(--line)] px-3 py-2 text-sm hover:border-[var(--violet)]/40"
                >
                  Siguiente
                </button>
              </div>
            </div>
            <div className="mt-5 flex items-center gap-2">
              {testimonials.map((item, index) => (
                <button
                  key={item.author}
                  type="button"
                  onClick={() => setTestimonialIndex(index)}
                  className={`h-2.5 rounded-full transition-all ${
                    testimonialIndex === index
                      ? "w-8 bg-[var(--violet)]"
                      : "w-2.5 bg-[var(--line)]"
                  }`}
                  aria-label={`Ir a experiencia ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="section-shell section-block border-t border-[var(--line)]">
          <p className="section-badge section-badge-violet">FAQ</p>
          <h2 className="section-title mt-3">Preguntas frecuentes</h2>
          <p className="section-lead">Respuestas rápidas para ayudarte a empezar.</p>
          <div className="mt-10 space-y-4">
            {[
              {
                q: "¿Las sesiones son online o presenciales?",
                a: "Podés elegir modalidad online o presencial según lo que te resulte más cómodo.",
              },
              {
                q: "¿Cuál es la duración de una sesión?",
                a: "Cada sesión tiene una duración aproximada de 50 minutos.",
              },
              {
                q: "¿Con qué frecuencia se recomienda asistir?",
                a: "Se define en conjunto según tu momento actual; en general se sugiere frecuencia semanal al inicio.",
              },
            ].map((item) => (
              <details
                key={item.q}
                className="surface-card interactive-card rounded-2xl p-6"
              >
                <summary className="cursor-pointer text-lg font-medium text-[var(--deep-blue)]">
                  {item.q}
                </summary>
                <p className="mt-3 leading-relaxed text-[var(--muted)]">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </section>

        <section
          id="turnos"
          className="bg-[linear-gradient(140deg,#1e3550_0%,#283a66_65%,#50357c_100%)]"
        >
          <div className="section-shell section-block">
            <div className="rounded-[2rem] border border-white/20 bg-white/10 px-8 py-12 text-center md:px-14">
              <p className="inline-flex rounded-full bg-white/15 px-3 py-1 text-xs font-medium text-white/90">
                Turnos
              </p>
              <h2 className="mt-3 text-4xl font-semibold !text-white md:text-5xl">
                Empezá tu proceso hoy
              </h2>
              <p className="contrast-on-dark mx-auto mt-5 max-w-2xl text-lg leading-relaxed">
                Coordiná tu primera consulta y recibí una propuesta de
                acompañamiento ajustada a tu momento actual.
              </p>
              <div className="mt-7 flex flex-wrap justify-center gap-3">
                {contactMethods.map((method) => (
                  <button
                    key={method.id}
                    type="button"
                    onClick={() => setContactMethod(method)}
                    className={`rounded-full border px-4 py-2 text-sm transition-all ${
                      contactMethod.id === method.id
                        ? "border-white bg-white text-[var(--deep-blue)]"
                        : "border-white/45 bg-transparent text-white hover:bg-white/10"
                    }`}
                  >
                    {method.label}
                  </button>
                ))}
              </div>
              <p className="mt-4 text-sm text-white/80">{contactMethod.hint}</p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <a
                  href="mailto:turnos@thompsonlorena.com"
                  className="rounded-full bg-white px-6 py-3 text-[var(--deep-blue)] shadow-[0_12px_30px_rgba(255,255,255,0.25)]"
                >
                  Enviar email
                </a>
                <a
                  href="https://wa.me/5490000000000"
                  className="rounded-full border border-white/50 px-6 py-3 text-white hover:bg-white/10"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="section-shell py-8 text-sm text-[var(--deep-blue)]/70">
        © {new Date().getFullYear()} Thompson Lorena Consultora Psicológica
      </footer>
    </div>
  );
}
