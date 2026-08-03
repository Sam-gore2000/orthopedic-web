import { useRef } from "react";
import { motion } from "framer-motion";

// A single restrained "boldness spend": the primary booking CTA nudges
// toward the cursor within a small radius, then springs back. Applied only
// to the site's highest-intent action so it reads as a deliberate signature
// rather than a scattered effect.
const MagneticButton = ({ as: Component = "a", className = "", children, strength = 14, ...props }) => {
  const ref = useRef(null);

  const handleMouseMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    el.style.transform = `translate(${(x / rect.width) * strength}px, ${(y / rect.height) * strength}px)`;
  };

  const handleMouseLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "translate(0px, 0px)";
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="inline-block transition-transform duration-200 ease-out"
      whileTap={{ scale: 0.97 }}
    >
      <Component className={className} {...props}>
        {children}
      </Component>
    </motion.div>
  );
};

export default MagneticButton;
