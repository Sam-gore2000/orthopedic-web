import { motion } from "framer-motion";
import {
  FiActivity,
  FiHeart,
  FiTarget,
  FiTrendingUp,
  FiUsers,
  FiClipboard,
  FiArrowUpRight,
} from "react-icons/fi";
import { EXTERNAL_BOOKING_URL } from "../data/siteData";

const services = [
  { icon: FiActivity, title: "Sports Injury Diagnosis", desc: "Accurate diagnosis of ligament, joint, and muscle injuries using clinical exams and imaging." },
  { icon: FiTarget, title: "Arthroscopic Surgery", desc: "Minimally invasive keyhole surgery for ACL, meniscus, and shoulder injuries." },
  { icon: FiHeart, title: "Joint Replacement", desc: "Knee and hip replacement for advanced arthritis and degenerative joint disease." },
  { icon: FiTrendingUp, title: "Sports Rehabilitation", desc: "Structured recovery plans coordinated with physiotherapy to safely return to play." },
  { icon: FiClipboard, title: "Fracture Care", desc: "Diagnosis and surgical or non-surgical treatment of sports-related fractures." },
  { icon: FiUsers, title: "Second Opinions", desc: "A clear, honest second opinion on surgical vs. non-surgical treatment options." },
];

const Services = () => (
  <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
    <div className="mx-auto mb-14 max-w-2xl text-center">
      <span className="text-sm font-bold uppercase tracking-wide text-primary">Our Services</span>
      <h1 className="mt-2 text-4xl font-extrabold">How <span className="text-gradient">Dr. A. Saini</span> can help</h1>
      <p className="mt-4 text-ink-dark/60 dark:text-ink-light/60">
        From first diagnosis to full recovery, every treatment plan is built around getting you back to the
        activities you care about, safely and efficiently.
      </p>
    </div>

    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {services.map((s, i) => (
        <motion.div
          key={s.title}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.4, delay: i * 0.05 }}
          className="card"
        >
          <span className="glass-icon mb-3 h-11 w-11 rounded-2xl">
            <s.icon size={20} />
          </span>
          <h3 className="font-display font-bold">{s.title}</h3>
          <p className="mt-1 text-sm text-ink-dark/60 dark:text-ink-light/60">{s.desc}</p>
        </motion.div>
      ))}
    </div>

    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5 }}
      className="relative mt-16 flex flex-col items-center gap-4 overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-accent px-8 py-14 text-center text-white shadow-glow"
    >
      <div className="absolute -right-10 -top-16 h-56 w-56 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute -bottom-16 -left-10 h-56 w-56 rounded-full bg-white/10 blur-3xl" />
      <h2 className="relative text-2xl font-extrabold">Ready to book a consultation?</h2>
      <a
        href={EXTERNAL_BOOKING_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="relative inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-primary shadow-lg transition-transform hover:scale-[1.02]"
      >
        Book Appointment <FiArrowUpRight />
      </a>
    </motion.div>
  </div>
);

export default Services;
