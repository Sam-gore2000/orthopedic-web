import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiPhoneCall, FiMapPin, FiMail, FiArrowUpRight } from "react-icons/fi";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import Logo from "./Logo";
import { EXTERNAL_BOOKING_URL } from "../data/siteData";

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/sportsdoc_lucknow?igsh=N3podXJ3dDVmYmE4",
    icon: FaInstagram,
    gradient: "from-[#f09433] via-[#e6683c] to-[#bc1888]",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/abhishek-saini-6a3a10172?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    icon: FaLinkedinIn,
    gradient: "from-[#0A66C2] to-[#0A66C2]",
  },
];

const Footer = () => (
  <footer className="relative border-t border-white/50 dark:border-white/10">
    <div className="glass rounded-none border-x-0 border-b-0">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <div className="mb-3">
              <Logo />
            </div>
            <p className="text-sm text-ink-dark/60 dark:text-ink-light/60">
              Sports injury and orthopedic care under Dr. Abhishek Saini.
            </p>
            <div className="mt-4 flex items-center gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  whileHover={{ y: -3, scale: 1.06 }}
                  whileTap={{ scale: 0.95 }}
                  className="glass-icon h-10 w-10 rounded-full !text-white"
                >
                  <span
                    className={`absolute inset-0 rounded-full bg-gradient-to-br ${social.gradient} opacity-90`}
                  />
                  <social.icon size={16} className="relative" />
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-bold uppercase tracking-wide text-ink-dark/50 dark:text-ink-light/50">
              Explore
            </h4>
            <ul className="space-y-2 text-sm text-ink-dark/70 dark:text-ink-light/70">
              <li><Link to="/about" className="hover:text-primary">About Us</Link></li>
              <li><Link to="/specialty" className="hover:text-primary">Our Specialty</Link></li>
              <li><Link to="/services" className="hover:text-primary">Services</Link></li>
              <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-bold uppercase tracking-wide text-ink-dark/50 dark:text-ink-light/50">
              Patients
            </h4>
            <ul className="space-y-2 text-sm text-ink-dark/70 dark:text-ink-light/70">
              <li>
                <a
                  href={EXTERNAL_BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:text-primary"
                >
                  Book Appointment <FiArrowUpRight size={12} />
                </a>
              </li>
              <li><Link to="/specialty" className="hover:text-primary">Conditions We Treat</Link></li>
              <li><Link to="/contact" className="hover:text-primary">Emergency Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-bold uppercase tracking-wide text-ink-dark/50 dark:text-ink-light/50">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-ink-dark/70 dark:text-ink-light/70">
              <li className="flex items-center gap-3">
                <span className="glass-icon h-8 w-8 shrink-0 rounded-lg">
                  <FiPhoneCall size={13} />
                </span>
                +91 8175081034
              </li>
              <li className="flex items-center gap-3">
                <span className="glass-icon h-8 w-8 shrink-0 rounded-lg">
                  <FiMail size={13} />
                </span>
                care@drabhisheksaini.example
              </li>
              <li className="flex items-start gap-3">
                <span className="glass-icon mt-0.5 h-8 w-8 shrink-0 rounded-lg">
                  <FiMapPin size={13} />
                </span>
                <span>Department Of Sports Medicine, King George's Medical College, Shah Mina Road, Chowk, Lucknow-226003, Uttar Pradesh</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/50 pt-6 text-center text-xs text-ink-dark/50 dark:border-white/10 dark:text-ink-light/50">
          © {new Date().getFullYear()} Dr. Abhishek Saini. All rights reserved.
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
