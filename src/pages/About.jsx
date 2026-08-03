import { motion } from "framer-motion";
import { FiHeart, FiShield, FiUsers, FiAward, FiArrowUpRight } from "react-icons/fi";
import { doctor, EXTERNAL_BOOKING_URL } from "../data/siteData";
import MagneticButton from "../components/MagneticButton";

const credentials = [
  { label: "MS Orthopaedic Surgery", detail: "King George's Medical University, Lucknow" },
  { label: "FNB Sports Medicine", detail: "All India Rank 2 · Sports Injury Centre, Safdarjung Hospital" },
  { label: "Shoulder Fellowship", detail: "Under Prof. J. C. Yoo, Samsung Medical Centre, Seoul" },
];

const values = [
  { icon: FiHeart, title: "Patient First", desc: "Every decision starts with what's best for the person in front of us." },
  { icon: FiShield, title: "Trusted Expertise", desc: "Fellowship-trained expertise built on years of focused orthopedic and sports medicine practice." },
  { icon: FiUsers, title: "Personalized Care", desc: "Every treatment plan is built around your goals, your body, and your recovery timeline." },
  { icon: FiAward, title: "Continuous Improvement", desc: "Modern technique and ongoing training to keep raising the bar." },
];

const milestones = [
  { year: "2021", text: "Medical Doctor at King George's Medical University." },
  { year: "2021", text: "Sports Injury Expert at King George's Medical University." },
  { year: "2021", text: "Assistant Professor at King George's Medical University." },
];

const narrative = [
  "I am working as a Sports Medicine Specialist at King George's Medical University, Lucknow. I completed my MS (Orthopaedic Surgery) from the prestigious King George's Medical University, Lucknow.",
  "Thereafter, I did FNB — the only NMC/MCI recognised fellowship in India — in Sports Medicine from the Sports Injury Centre, Safdarjung Hospital, New Delhi, after securing All India Rank 2. Then I did my Shoulder Fellowship under Prof. J. C. Yoo at Samsung Medical Centre, Seoul, South Korea.",
  "My aim is to provide the most comprehensive and quality care to my patients in Uttar Pradesh through the efficient and effective administration of medical equipment with safety. With the help of modern teaching tools and training activities, I would like to make a difference in the lives of sportspersons by preventing injuries, prolonging their careers, and performing surgical intervention whenever required.",
];

import media from "../asset/Media.jpg";
import media1 from "../asset/Media-1.jpg";
import media2 from "../asset/Media-2.jpg";
import media3 from "../asset/Media-3.jpg";
import media4 from "../asset/Media-4.jpg";
import media5 from "../asset/Media-5.jpg";

const gallery = [
  { id: 1, img: media },
  { id: 2, img: media1 },
  { id: 3, img: media2 },
  { id: 4, img: media3 },
  { id: 5, img: media4 },
  { id: 6, img: media5 },
];

const About = () => (
  <div>
    {/* Hero: split intro with real portrait + floating credential chips */}
    <section className="relative overflow-hidden px-6 pb-16 pt-16 lg:px-8 lg:pt-24">
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="eyebrow">About The Practice</span>
          <h1 className="display-h1 mt-4">
            Care that grows with <span className="text-gradient">you</span>
          </h1>
          <p className="display-lead mt-6 max-w-xl text-ink-dark/60 dark:text-ink-light/60">
            A fellowship-trained sports and orthopedic surgeon, focused on getting athletes and active
            patients back to full strength — not just back on their feet.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <MagneticButton
              as="a"
              href={EXTERNAL_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Book an Appointment <FiArrowUpRight />
            </MagneticButton>
          </div>

          {/* Credential strip */}
          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {credentials.map((c, i) => (
              <motion.div
                key={c.label}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.25 + i * 0.1 }}
                className="glass glass-hover rounded-xl2 p-4"
              >
                <p className="font-display text-sm font-bold leading-snug">{c.label}</p>
                <p className="mt-1 text-xs leading-relaxed text-ink-dark/55 dark:text-ink-light/55">{c.detail}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="aurora-blob animate-driftSlow -right-10 -top-10 h-56 w-56 bg-accent-violet/25" />
          <div className="glass relative overflow-hidden rounded-xl3 p-3">
            <img
              src={doctor.photo}
              alt={doctor.name}
              className="aspect-[3/4] w-full rounded-xl2 object-cover object-[50%_10%]"
            />
          </div>
          <motion.div
            initial={{ opacity: 0, x: -14 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="glass absolute -left-6 bottom-8 hidden max-w-[11rem] rounded-xl2 p-3 sm:block"
          >
            <p className="font-display text-lg font-extrabold text-gradient">{doctor.rating}/5</p>
            <p className="text-xs text-ink-dark/55 dark:text-ink-light/55">Average patient rating</p>
          </motion.div>
        </motion.div>
      </div>
    </section>

    {/* Narrative + pull quote */}
    <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="lg:sticky lg:top-28 lg:self-start"
        >
          <span className="eyebrow">Philosophy</span>
          <blockquote className="display-h3 mt-3 max-w-sm text-ink-dark/85 dark:text-ink-light/85">
            "Preventing injuries, prolonging careers, and intervening surgically only when required."
          </blockquote>
          <div className="mt-6 h-1 w-16 rounded-full bg-gradient-to-r from-primary to-accent" />
        </motion.div>
        <div className="space-y-6">
          {narrative.map((p, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="text-ink-dark/70 dark:text-ink-light/70"
            >
              {p}
            </motion.p>
          ))}
        </div>
      </div>
    </section>

    {/* Values */}
    <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
      <div className="mb-10 max-w-xl">
        <span className="eyebrow">What Guides The Practice</span>
        <h2 className="display-h2 mt-2">Values that shape every visit</h2>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {values.map((v, i) => (
          <motion.div
            key={v.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="card"
          >
            <span className="glass-icon mb-3 h-12 w-12 rounded-2xl">
              <v.icon size={22} />
            </span>
            <h3 className="font-display font-bold">{v.title}</h3>
            <p className="mt-1 text-sm text-ink-dark/60 dark:text-ink-light/60">{v.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>

    {/* Journey timeline */}
    <section className="py-16">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="mb-14 text-center">
          <span className="eyebrow">Our Journey</span>
          <h2 className="display-h2 mt-2">Training built for sports medicine</h2>
        </div>
        <div className="relative space-y-10 pl-10">
          <div className="absolute bottom-2 left-[7px] top-2 w-px bg-gradient-to-b from-primary via-accent to-transparent" />
          {milestones.map((m, i) => (
            <motion.div
              key={`${m.year}-${i}`}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="glass glass-hover relative rounded-xl2 p-5"
            >
              <span className="absolute -left-10 top-5 flex h-4 w-4 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent shadow-glow" />
              <p className="font-display text-lg font-bold text-gradient">{m.year}</p>
              <p className="mt-1 text-sm text-ink-dark/70 dark:text-ink-light/70">{m.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Gallery */}
    <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
      <div className="mb-10 text-center">
        <span className="eyebrow">In Practice</span>
        <h2 className="display-h2 mt-2">Gallery</h2>
      </div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
        {gallery.map((v, i) => (
          <motion.div
            key={v.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="group relative aspect-[4/5] overflow-hidden rounded-xl2"
          >
            <img
              src={v.img}
              alt={`Dr. Abhishek Saini in clinical practice, photo ${v.id}`}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-black/0 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </motion.div>
        ))}
      </div>
    </section>

    {/* Closing CTA */}
    <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5 }}
        className="cta-mesh relative flex flex-col items-center gap-6 overflow-hidden rounded-xl3 px-8 py-16 text-center text-white shadow-glow-lg"
      >
        <div className="absolute -right-10 -top-16 h-56 w-56 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-16 -left-10 h-56 w-56 rounded-full bg-white/10 blur-3xl" />
        <span className="glass-icon relative h-14 w-14 rounded-2xl !text-white">
          <FiShield size={26} />
        </span>
        <h2 className="display-h2 relative max-w-xl text-gradient-warm">Ready to start your recovery?</h2>
        <p className="relative max-w-md text-white/80">
          Book your appointment with Dr. A. Saini through the official government appointment portal.
        </p>
        <MagneticButton
          as="a"
          href={EXTERNAL_BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="relative inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-primary shadow-lg"
        >
          Book Appointment <FiArrowUpRight />
        </MagneticButton>
      </motion.div>
    </section>
  </div>
);

export default About;
