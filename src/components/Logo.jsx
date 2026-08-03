// Custom logomark: an abstract goniometer (the angle-measuring tool used in
// every orthopedic ROM exam): two bone segments meeting at a joint, with a
// dashed arc reading the angle between them. Distinctive to this practice
// rather than a generic medical-cross or heartbeat glyph.
export const LogoMark = ({ size = 18, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M5.5 19 L10 12" />
    <path d="M10 12 L15.5 5.5" />
    <circle cx="10" cy="12" r="1.3" fill="currentColor" stroke="none" />
    <path d="M13.2 15.2 A6 6 0 0 0 15 9" strokeDasharray="1 2.4" />
  </svg>
);

// Icon in its frosted, gradient-filled badge: the piece that appears in the
// navbar, footer, and error page.
export const LogoBadge = ({ size = "h-9 w-9", iconSize = 18 }) => (
  <span
    className={`glass-icon ${size} rounded-xl bg-gradient-to-br from-primary to-accent !text-white`}
  >
    <LogoMark size={iconSize} />
  </span>
);

// Full lockup: badge + gradient wordmark
const Logo = ({ badgeSize = "h-9 w-9", iconSize = 18, textClassName = "text-lg" }) => (
  <span className="flex items-center gap-2">
    <LogoBadge size={badgeSize} iconSize={iconSize} />
    <span className={`font-display font-extrabold tracking-tight ${textClassName}`}>
      Dr Abhishek <span className="text-gradient">Saini</span>
    </span>
  </span>
);

export default Logo;
