import { motion, useScroll, useSpring } from "framer-motion";

// A hairline progress bar tracking scroll depth, the kind of small honest
// wayfinding detail long-form product/editorial sites use so a page never
// feels like an undifferentiated static block, without adding any content
// of its own.
const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30, restDelta: 0.001 });

  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX }}
      className="fixed left-0 right-0 top-0 z-[60] h-[2.5px] origin-left bg-gradient-to-r from-primary via-accent to-accent-violet"
    />
  );
};

export default ScrollProgress;
