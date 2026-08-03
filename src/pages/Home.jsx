import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiArrowRight, FiArrowUpRight, FiHeart, FiShield, FiStar } from "react-icons/fi";
import DoctorCard from "../components/DoctorCard";
import MagneticButton from "../components/MagneticButton";
import { doctor, department, EXTERNAL_BOOKING_URL } from "../data/siteData";

const stats = [
  { label: "Patients Treated", value: "5,000+" },
  { label: "Years of Experience", value: doctor.experienceYears.trim() },
  { label: "Surgeries Performed", value: "1,200+" },
  { label: "Patient Rating", value: `${doctor.rating}/5` },
];

const testimonials = [
  {
    name: "Meera K.",
    text: "Dr. Saini took the time to explain every option before my ACL surgery. Recovery went exactly as planned.",
  },
  {
    name: "Arvind P.",
    text: "As a weekend athlete, getting back to running after my meniscus tear felt impossible. Not anymore.",
  },
  {
    name: "Fatima S.",
    text: "Clear communication, no unnecessary tests, and a treatment plan that actually fit my life.",
  },
];

const Home = () => (
  <div>
    {/* Hero */}
    <section className="relative overflow-hidden">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:px-8 lg:py-28">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-semibold text-primary">
            <FiHeart /> Sports injury &amp; joint care
          </span>
          <h1 className="display-hero mt-5">
            Get back to what you love, <span className="text-gradient">pain-free</span>
          </h1>
          <p className="display-lead mt-6 max-w-lg text-ink-dark/60 dark:text-ink-light/60">
            {doctor.name} specializes in sports injuries, joint problems, and orthopedic surgery, helping
            athletes and active patients recover safely and fully.
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
            <Link to="/specialty" className="btn-secondary">
              Learn About Our Care
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                whileHover={{ y: -3 }}
                className="glass glass-hover rounded-xl px-3 py-3"
              >
                <p className="font-display text-xl font-extrabold text-gradient">{s.value}</p>
                <p className="text-xs text-ink-dark/50 dark:text-ink-light/50">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="relative"
        >
          <div className="aurora-blob animate-driftSlow -right-8 -top-8 h-64 w-64 bg-accent-violet/20" />
          <div className="max-w-sm">
            <DoctorCard doctor={doctor} />
          </div>
        </motion.div>
      </div>
    </section>

    {/* Specialty teaser */}
    <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <span className="eyebrow">Our Specialty</span>
          <h2 className="display-h2 mt-2 text-gradient">{department.name}</h2>
          <p className="mt-4 text-ink-dark/60 dark:text-ink-light/60">{department.shortDescription}</p>
          <Link to="/specialty" className="mt-6 inline-flex items-center gap-1 font-semibold text-primary">
            View Full Details <FiArrowRight />
          </Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid gap-4 sm:grid-cols-2"
        >
          {department.conditionsTreated.slice(0, 4).map((c) => (
            <motion.div key={c.title} whileHover={{ y: -3 }} className="glass glass-hover rounded-xl p-4">
              <h4 className="text-sm font-bold">{c.title}</h4>
              <p className="mt-1 text-xs text-ink-dark/60 dark:text-ink-light/60">{c.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>

    {/* Doctor */}
    <section className="py-20">
      <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
        <span className="eyebrow">Meet Your Doctor</span>
        <h2 className="display-h2 mt-2">A specialist you can trust</h2>
        <p className="mx-auto mt-4 max-w-2xl text-ink-dark/60 dark:text-ink-light/60">{doctor.bio}</p>
        <div className="mx-auto mt-10 max-w-sm">
          <DoctorCard doctor={doctor} />
        </div>
      </div>
    </section>

    {/* Testimonials */}
    <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <div className="mb-12 max-w-xl">
        <span className="eyebrow">Testimonials</span>
        <h2 className="display-h2 mt-2">What our patients say</h2>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            whileHover={{ y: -4 }}
            className="card"
          >
            <div className="mb-3 flex gap-0.5 text-warning">
              {Array.from({ length: 5 }).map((_, s) => (
                <FiStar key={s} fill="currentColor" size={14} />
              ))}
            </div>
            <p className="text-sm text-ink-dark/70 dark:text-ink-light/70">"{t.text}"</p>
            <p className="mt-4 text-sm font-semibold">{t.name}</p>
          </motion.div>
        ))}
      </div>
    </section>

    {/* CTA */}
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

export default Home;
