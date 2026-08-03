import { motion } from "framer-motion";
import { FiShare2, FiMapPin, FiArrowUpRight, FiPhoneCall } from "react-icons/fi";
import { getDepartmentColor } from "../utils/departmentColors";
import { EXTERNAL_BOOKING_URL } from "../data/siteData";

// "Book Appointment" opens the government ORS portal in a new tab: there's
// no in-app booking flow anymore, this site is purely informational.
const DoctorCard = ({ doctor }) => {
  const phoneHref = doctor.phone ? `tel:${doctor.phone.replace(/\s+/g, "")}` : null;
  const brandColor = getDepartmentColor(doctor.department);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4 }}
      whileHover={{ y: -4 }}
      className="glass glass-hover group flex flex-col overflow-hidden"
    >
      {/* Photo banner */}
      <div
        className="relative flex h-72 items-end overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${brandColor}22, ${brandColor}55)`,
        }}
      >
        <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-white/20 blur-2xl" />
        <div className="absolute -bottom-10 -left-6 h-24 w-24 rounded-full bg-white/10 blur-2xl" />
        {doctor.photo ? (
          <img
            src={doctor.photo}
            alt={doctor.name}
            className="h-full w-full object-cover object-[50%_12%] transition-transform duration-700 group-hover:scale-105"
          />
        ) : null}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-black/0 to-transparent" />
        <button
          aria-label="Share doctor profile"
          className="glass-icon absolute right-3 top-3 h-8 w-8 rounded-full !text-ink-dark"
        >
          <FiShare2 size={13} />
        </button>
      </div>

      {/* Info */}
      <div className="flex flex-1 flex-col gap-2 p-5">
        <h3 className="font-display text-base font-bold leading-tight">{doctor.name}</h3>
        <p className="text-sm font-medium text-primary">{doctor.department}</p>
        {doctor.specialization && (
          <p className="text-sm text-ink-dark/60 dark:text-ink-light/60">{doctor.specialization}</p>
        )}

        <div className="my-2 h-px w-12 bg-gradient-to-r from-primary to-accent" />

        <p className="text-sm font-semibold text-ink-dark dark:text-ink-light">
          {doctor.experienceYears.trim()} experience{doctor.qualifications ? `, ${doctor.qualifications}` : ""}
        </p>

        <p className="flex items-center gap-1.5 text-sm text-ink-dark/60 dark:text-ink-light/60">
          <FiMapPin className="shrink-0 text-primary" size={14} />
          {doctor.hospitalBranch || "Dr. Abhishek Saini"}
        </p>
      </div>

      {/* Footer actions */}
      <div className="grid grid-cols-2 border-t border-white/50 dark:border-white/10">
        <a
          href={EXTERNAL_BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 bg-gradient-to-r from-warning to-warning/80 px-3 py-3 text-sm font-bold text-ink-dark transition-opacity hover:opacity-90"
        >
          Book Appointment <FiArrowUpRight size={15} />
        </a>
        <a
          href={phoneHref || "#"}
          onClick={(e) => !phoneHref && e.preventDefault()}
          className="flex items-center justify-center gap-1.5 border-l border-white/50 px-3 py-3 text-sm font-bold text-primary backdrop-blur-md transition-colors hover:bg-white/40 dark:border-white/10 dark:hover:bg-white/5"
        >
          <FiPhoneCall size={14} /> Call Now
        </a>
      </div>
    </motion.div>
  );
};

export default DoctorCard;
