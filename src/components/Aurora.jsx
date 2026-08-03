// Fixed, ambient backdrop of soft drifting color behind every page. Glass
// panels need something colorful underneath them to blur, and this is that
// color, kept low-opacity and slow-moving so it reads as atmosphere, not
// decoration. Colors are drawn straight from the existing brand palette.
const Aurora = () => (
  <div
    aria-hidden="true"
    className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-surface-light dark:bg-surface-dark"
  >
    <div className="aurora-blob animate-drift left-[-10%] top-[-10%] h-[32rem] w-[32rem] bg-primary/40" />
    <div className="aurora-blob animate-driftSlow right-[-15%] top-[10%] h-[28rem] w-[28rem] bg-accent/30" />
    <div className="aurora-blob animate-drift bottom-[-15%] left-[15%] h-[30rem] w-[30rem] bg-warning/20 [animation-delay:-6s]" />
    <div className="aurora-blob animate-driftSlow bottom-[5%] right-[5%] h-[24rem] w-[24rem] bg-primary-light/25 [animation-delay:-9s]" />
  </div>
);

export default Aurora;
