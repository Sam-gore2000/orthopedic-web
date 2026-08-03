const Loader = ({ fullScreen = false, label = "Loading" }) => {
  const content = (
    <div className="flex flex-col items-center gap-3">
      <div className="glass-icon h-14 w-14 rounded-full">
        <div className="relative h-8 w-8">
          <div className="absolute inset-0 rounded-full border-4 border-primary/15" />
          <div className="absolute inset-0 rounded-full border-4 border-primary border-t-transparent animate-spin" />
        </div>
      </div>
      <p className="text-sm font-medium text-ink-dark/60 dark:text-ink-light/60">{label}…</p>
    </div>
  );

  if (fullScreen) {
    return (
      <div className="flex min-h-screen w-full items-center justify-center bg-surface-light dark:bg-surface-dark">
        {content}
      </div>
    );
  }

  return <div className="flex w-full items-center justify-center py-10">{content}</div>;
};

export const CardSkeleton = () => (
  <div className="card animate-pulse space-y-4">
    <div className="h-4 w-1/3 rounded bg-slate-200 dark:bg-white/10" />
    <div className="h-3 w-full rounded bg-slate-200 dark:bg-white/10" />
    <div className="h-3 w-2/3 rounded bg-slate-200 dark:bg-white/10" />
  </div>
);

export default Loader;
