import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { LogoMark } from "../components/Logo";

const NotFound = () => (
  <div className="flex min-h-[calc(100vh-64px)] flex-col items-center justify-center gap-4 px-6 text-center">
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center gap-4"
    >
      <span className="glass-icon h-14 w-14 rounded-2xl">
        <LogoMark size={24} />
      </span>
      <h1 className="display-hero text-gradient">404</h1>
      <p className="text-lg font-semibold">Page not found</p>
      <p className="max-w-sm text-sm text-ink-dark/60 dark:text-ink-light/60">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link to="/" className="btn-primary">
        Back to Home
      </Link>
    </motion.div>
  </div>
);

export default NotFound;
