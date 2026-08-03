import { motion } from "framer-motion";
import { FiCheckCircle, FiActivity, FiArrowUpRight } from "react-icons/fi";
import { department, doctor, EXTERNAL_BOOKING_URL } from "../data/siteData";
import DoctorCard from "../components/DoctorCard";

const Section = ({ title, children }) => (
  <div className="mb-14">
    <h2 className="mb-6 text-2xl font-extrabold">{title}</h2>
    {children}
  </div>
);

const Specialty = () => {
  const dept = department;

  return (
    <div>
      {/* Hero */}
      <section className="relative px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="glass-icon mx-auto mb-4 h-16 w-16 rounded-2xl text-4xl">
              {dept.icon}
            </span>
            <h1 className="text-4xl font-extrabold lg:text-5xl">
              <span className="text-gradient">{dept.name}</span>
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-ink-dark/60 dark:text-ink-light/60">
              {dept.shortDescription}
            </p>
          </motion.div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
        {/* Overview */}
        <Section title="Overview">
          <p className="max-w-4xl text-ink-dark/70 dark:text-ink-light/70">{dept.overview}</p>
        </Section>

        {/* Why choose us */}
        <Section title="Why Choose This Practice?">
          <div className="grid gap-4 sm:grid-cols-2">
            {dept.whyChooseUs.map((point, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="glass glass-hover flex items-start gap-3 p-4"
              >
                <FiCheckCircle className="mt-0.5 shrink-0 text-success" />
                <p className="text-sm text-ink-dark/70 dark:text-ink-light/70">{point}</p>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* Doctor */}
        <Section title="Meet Your Doctor">
          <div className="max-w-sm">
            <DoctorCard doctor={doctor} />
          </div>
        </Section>

        {/* Procedures & Treatments */}
        <Section title="Procedures & Treatments">
          <div className="grid gap-4 sm:grid-cols-2">
            {dept.proceduresAndTreatments.map((item, i) => (
              <div key={i} className="card">
                <h3 className="font-display font-bold">{item.title}</h3>
                <p className="mt-1 text-sm text-ink-dark/60 dark:text-ink-light/60">{item.description}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Conditions Treated */}
        <Section title="Conditions We Treat">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {dept.conditionsTreated.map((item, i) => (
              <div key={i} className="glass glass-hover p-4">
                <h4 className="text-sm font-bold">{item.title}</h4>
                <p className="mt-1 text-xs text-ink-dark/60 dark:text-ink-light/60">{item.description}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Sub-specialities */}
        <Section title="Sub-Specialities">
          <div className="grid gap-4 sm:grid-cols-2">
            {dept.subSpecialities.map((item, i) => (
              <div key={i} className="glass glass-hover flex items-start gap-3 p-4">
                <FiActivity className="mt-0.5 shrink-0 text-primary" />
                <div>
                  <h4 className="font-semibold">{item.title}</h4>
                  <p className="mt-1 text-sm text-ink-dark/60 dark:text-ink-light/60">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Diagnostic tests */}
        <Section title="Diagnostics & Tests Available">
          <div className="flex flex-wrap gap-2">
            {dept.diagnosticTests.map((test, i) => (
              <span key={i} className="glass rounded-full px-4 py-2 text-sm font-semibold text-primary">
                {test}
              </span>
            ))}
          </div>
        </Section>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
          className="relative mt-8 flex flex-col items-center gap-4 overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-accent px-8 py-12 text-center text-white shadow-glow"
        >
          <div className="absolute -right-10 -top-16 h-56 w-56 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-16 -left-10 h-56 w-56 rounded-full bg-white/10 blur-3xl" />
          <h2 className="relative text-2xl font-extrabold">Ready to book a consultation?</h2>
          <p className="relative max-w-md text-white/80">
            Book an appointment with Dr. A. Saini through the official government appointment portal.
          </p>
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
    </div>
  );
};

export default Specialty;
