"use client";
export default function Home() {
  return (

    <div className="min-h-screen bg-white text-gray-900">
      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
        <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-xl bg-green-600" />
            <span className="font-bold text-lg">HUNAFA Academy</span>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a className="hover:text-green-700" href="#home">Home</a>
            <a className="hover:text-green-700" href="#why">Why Us</a>
            <a className="hover:text-green-700" href="#courses">Courses</a>
            <a className="hover:text-green-700" href="#pricing">Pricing</a>
            <a className="hover:text-green-700" href="#contact">Contact</a>
          </nav>

          <a
            href="#contact"
            className="rounded-xl bg-green-600 px-4 py-2 text-white text-sm font-semibold hover:bg-green-700 transition"
          >
            Book Free Trial
          </a>
        </div>
      </header>

      {/* Hero */}
      <main id="home" className="mx-auto max-w-6xl px-4">
        <section className="py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm text-green-700">
              ✅ 1-to-1 Live Zoom Classes
            </p>

            <h1 className="mt-4 text-4xl md:text-5xl font-extrabold leading-tight">
              Learn <span className="text-green-700">Quran</span> &{" "}
              <span className="text-green-700">Arabic</span> the right way —
              with a personal teacher.
            </h1>

            <p className="mt-4 text-lg text-gray-600">
              Tailored lessons for English speakers. Flexible schedule, clear
              progress plan, and supportive coaching for all levels.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="#contact"
                className="rounded-xl bg-green-600 px-6 py-3 text-white font-semibold hover:bg-green-700 transition text-center"
              >
                Book Your Free Trial
              </a>
              <a
                href="#pricing"
                className="rounded-xl border px-6 py-3 font-semibold hover:border-green-600 hover:text-green-700 transition text-center"
              >
                View Pricing
              </a>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-4 text-center">
              <div className="rounded-2xl border p-4">
                <div className="text-2xl font-bold text-green-700">1:1</div>
                <div className="text-sm text-gray-600">Private Lessons</div>
              </div>
              <div className="rounded-2xl border p-4">
                <div className="text-2xl font-bold text-green-700">Zoom</div>
                <div className="text-sm text-gray-600">Live Online</div>
              </div>
              <div className="rounded-2xl border p-4">
                <div className="text-2xl font-bold text-green-700">Plan</div>
                <div className="text-sm text-gray-600">Clear Progress</div>
              </div>
            </div>
          </div>

          {/* Hero Card */}
          <div className="rounded-3xl border bg-gray-50 p-6 shadow-sm">
            <div className="rounded-2xl bg-white border p-6">
              <h2 className="text-xl font-bold">Free Trial Includes</h2>
              <ul className="mt-4 space-y-3 text-gray-700">
                <li className="flex gap-3">
                  <span className="text-green-700">✔</span>
                  Level assessment & goals
                </li>
                <li className="flex gap-3">
                  <span className="text-green-700">✔</span>
                  Personalized learning plan
                </li>
                <li className="flex gap-3">
                  <span className="text-green-700">✔</span>
                  30 minutes live session
                </li>
              </ul>

              <div className="mt-6 rounded-2xl bg-green-50 border border-green-100 p-4">
                <p className="text-sm text-green-900">
                  Tip: Consistency beats intensity. Start small — we’ll guide
                  your weekly routine.
                </p>
              </div>

              <a
                href="#contact"
                className="mt-6 inline-block w-full rounded-xl bg-green-600 px-5 py-3 text-center text-white font-semibold hover:bg-green-700 transition"
              >
                Start Free Trial
              </a>
            </div>
          </div>
        </section>

        {/* Why Us */}
        <section id="why" className="py-10 md:py-14">
          <h2 className="text-2xl md:text-3xl font-bold">
            Why students choose HUNAFA
          </h2>
          <p className="mt-2 text-gray-600">
            Simple, structured, and supportive learning — built for busy
            schedules.
          </p>

          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <div className="rounded-3xl border p-6">
              <h3 className="font-bold text-lg">Personalized Curriculum</h3>
              <p className="mt-2 text-gray-600">
                Lessons tailored to your level and goals (Quran reading, Tajweed,
                memorization, Arabic).
              </p>
            </div>

            <div className="rounded-3xl border p-6">
              <h3 className="font-bold text-lg">Clear Weekly Plan</h3>
              <p className="mt-2 text-gray-600">
                We track progress and give you a simple plan to improve every
                week.
              </p>
            </div>

            <div className="rounded-3xl border p-6">
              <h3 className="font-bold text-lg">Flexible Timing</h3>
              <p className="mt-2 text-gray-600">
                Choose times that work for you. Reschedule easily when needed.
              </p>
            </div>
          </div>
        </section>

        {/* Courses */}
        <section id="courses" className="py-10 md:py-14">
          <h2 className="text-2xl md:text-3xl font-bold">Courses</h2>
          <p className="mt-2 text-gray-600">
            Pick what you want to focus on — or combine them.
          </p>

          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Quran Reading",
                desc: "Learn correct recitation step-by-step for beginners to advanced.",
              },
              {
                title: "Tajweed",
                desc: "Master rules with practical drills and teacher feedback.",
              },
              {
                title: "Arabic (Basics)",
                desc: "Build foundations: letters, words, and everyday grammar.",
              },
            ].map((c) => (
              <div key={c.title} className="rounded-3xl border p-6">
                <h3 className="font-bold text-lg">{c.title}</h3>
                <p className="mt-2 text-gray-600">{c.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing Preview */}
        <section id="pricing" className="py-10 md:py-14">
  <div className="text-center">
    <h2 className="text-2xl md:text-3xl font-bold">Fees</h2>
    <p className="mt-2 text-gray-600">30 MINS CLASS</p>
  </div>

  {(() => {
    const plans = [
      { perWeek: 1, gbp: 14, usd: 18, classesPerMonth: 4, hoursPerMonth: 2 },
      { perWeek: 2, gbp: 28, usd: 36, classesPerMonth: 8, hoursPerMonth: 4 },
      { perWeek: 3, gbp: 36, usd: 48, classesPerMonth: 12, hoursPerMonth: 6 },
      { perWeek: 4, gbp: 48, usd: 64, classesPerMonth: 16, hoursPerMonth: 8 },
      { perWeek: 5, gbp: 55, usd: 75, classesPerMonth: 20, hoursPerMonth: 10 },
    ];

    // ✅ خلي أول 3 فوق، والباقي تحت (زي الصورة)
    const topRow = plans.slice(0, 3);
    const bottomRow = plans.slice(3);

    const Card = (p: (typeof plans)[number]) => (
      <div
        key={p.perWeek}
        className="overflow-hidden rounded-2xl border bg-white"
      >
        <div className="bg-green-800 text-white text-center font-bold py-3">
          {p.perWeek} class / week
        </div>

        <div className="divide-y">
          <div className="text-center py-4 font-semibold">£{p.gbp}</div>
          <div className="text-center py-4 font-semibold">${p.usd}</div>
          <div className="text-center py-4 text-gray-700">
            {p.classesPerMonth} classes / month
          </div>
          <div className="text-center py-4 text-gray-700">
            {p.hoursPerMonth} Hrs / month
          </div>
        </div>

        <a
          href="#contact"
          className="block bg-orange-400 text-center font-semibold py-3 hover:bg-orange-500 transition"
        >
          Contact us
        </a>
      </div>
    );

    return (
      <>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {topRow.map(Card)}
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-2 md:max-w-4xl md:mx-auto">
          {bottomRow.map(Card)}
        </div>
      </>
    );
  })()}

       </section>

        {/* Contact / CTA */}
        <section id="contact" className="py-12 md:py-16">
          <div className="rounded-3xl border bg-green-50 p-8 md:p-10">
            <h2 className="text-2xl md:text-3xl font-bold">
              Ready to start your free trial?
            </h2>
            <p className="mt-2 text-gray-700">
              Send your name + preferred time, and we’ll reply with available
              slots.
            </p>

            <form
  className="mt-6 grid gap-3 max-w-xl"
  onSubmit={(e) => {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement;
    const data = new FormData(form);

    const name = String(data.get("name") || "");
    const contact = String(data.get("contact") || "");
    const tz = String(data.get("tz") || "");
    const time = String(data.get("time") || "");

    const msg =
      `HUNAFA Free Trial Request%0A` +
      `Name: ${encodeURIComponent(name)}%0A` +
      `Contact: ${encodeURIComponent(contact)}%0A` +
      `Timezone: ${encodeURIComponent(tz)}%0A` +
      `Preferred time: ${encodeURIComponent(time)}`;

    // ✅ ضع رقمك الدولي هنا بدون +
    const phone = "201032835990";

    window.open(`https://wa.me/${phone}?text=${msg}`, "_blank");
    form.reset();
  }}
>
  <div className="grid sm:grid-cols-2 gap-3">
    <input
      name="name"
      required
      placeholder="Your name"
      className="rounded-xl border px-4 py-3 outline-none focus:border-green-600"
    />
    <input
      name="contact"
      required
      placeholder="WhatsApp number or Email"
      className="rounded-xl border px-4 py-3 outline-none focus:border-green-600"
    />
  </div>

  <div className="grid sm:grid-cols-2 gap-3">
    <input
      name="tz"
      placeholder="Your timezone (e.g. GMT+2)"
      className="rounded-xl border px-4 py-3 outline-none focus:border-green-600"
    />
    <input
      name="time"
      placeholder="Preferred time (e.g. Sat 7pm)"
      className="rounded-xl border px-4 py-3 outline-none focus:border-green-600"
    />
  </div>

  <button
    type="submit"
    className="rounded-xl bg-green-600 px-6 py-3 text-white font-semibold hover:bg-green-700 transition"
  >
    Send on WhatsApp
  </button>

  <p className="text-sm text-gray-600">
    By sending, you agree we contact you to arrange the free trial.
  </p>
</form>

<p className="mt-4 text-sm text-gray-600">
  By sending, you agree we contact you to arrange the free trial.
</p>
</div>

<footer className="py-10 text-center text-sm text-gray-500">
  © {new Date().getFullYear()} HUNAFA Academy. All rights reserved.
</footer>
</section>
</main>
</div>
);
}
