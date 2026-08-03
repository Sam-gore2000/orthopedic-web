// Fixed, ambient backdrop behind every page. Glass panels need something
// soft and colorful underneath them to blur, and this is that color: three
// large, very slow drifting blobs in the site's own teal/blue palette, kept
// low-opacity so it reads as quiet atmosphere rather than a moving effect.
const Aurora = () => (
  <div
    aria-hidden="true"
    className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-surface-light dark:bg-surface-dark"
  >
    <div className="aurora-blob animate-drift left-[-15%] top-[-15%] h-[34rem] w-[34rem] bg-primary/25" />
    <div className="aurora-blob animate-driftSlow right-[-18%] top-[15%] h-[30rem] w-[30rem] bg-accent/18" />
    <div className="aurora-blob animate-drift bottom-[-20%] left-[10%] h-[28rem] w-[28rem] bg-primary-light/15 [animation-delay:-10s]" />
  </div>
);

export default Aurora;
