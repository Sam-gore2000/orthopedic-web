// Fixed, ambient backdrop of soft drifting color behind every page. Glass
// panels need something colorful underneath them to blur, and this is that
// color: a slow-rotating conic mesh plus four drifting blobs, kept low
// opacity and slow-moving so it reads as atmosphere, not decoration.
// A hairline grain layer on top keeps large gradient fields from looking
// flat. Colors are drawn from the existing brand palette plus the violet
// accent, so "more gradient" doesn't mean "off-brand".
const Aurora = () => (
  <div
    aria-hidden="true"
    className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-surface-light dark:bg-surface-dark"
  >
    <div className="aurora-mesh animate-meshRotate" />
    <div className="aurora-blob animate-drift left-[-12%] top-[-12%] h-[36rem] w-[36rem] bg-primary/40" />
    <div className="aurora-blob animate-driftSlow right-[-15%] top-[8%] h-[30rem] w-[30rem] bg-accent/30" />
    <div className="aurora-blob animate-drift bottom-[-18%] left-[12%] h-[32rem] w-[32rem] bg-warning/20 [animation-delay:-6s]" />
    <div className="aurora-blob animate-driftSlow bottom-[2%] right-[2%] h-[26rem] w-[26rem] bg-accent-violet/20 [animation-delay:-9s]" />
    <div className="aurora-blob animate-drift left-[38%] top-[35%] h-[22rem] w-[22rem] bg-primary-light/15 [animation-delay:-3s]" />
    <div className="grain-overlay" />
  </div>
);

export default Aurora;
