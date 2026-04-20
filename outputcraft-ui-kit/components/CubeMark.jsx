/**
 * OUTPUTCRAFT isometric cube mark — inline SVG, no external deps.
 * Uses unique gradient IDs to avoid conflicts when multiple instances render.
 * @param {number} height - rendered height in px (width auto-scales)
 * @param {string} className
 * @param {string} id - optional unique prefix for gradient IDs (default: 'cm')
 */
export default function CubeMark({ height = 30, className = '', id = 'cm' }) {
  return (
    <svg
      viewBox="11 5 78 90"
      height={height}
      aria-hidden="true"
      focusable="false"
      className={className}
      style={{ display: 'block', flexShrink: 0 }}
    >
      <defs>
        <linearGradient id={`${id}-top`} x1="88" y1="6" x2="12" y2="28" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FF5C00" />
          <stop offset="100%" stopColor="#FF7A30" />
        </linearGradient>
        <linearGradient id={`${id}-right`} x1="0" y1="28" x2="0" y2="94" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#CC4A00" />
          <stop offset="100%" stopColor="#A33A00" />
        </linearGradient>
        <linearGradient id={`${id}-left`} x1="0" y1="28" x2="0" y2="94" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#8A3000" />
          <stop offset="100%" stopColor="#6A2400" />
        </linearGradient>
        <clipPath id={`${id}-clip`}>
          <polygon points="50,6 88,28 50,50 12,28" />
        </clipPath>
      </defs>

      {/* Left face — darkest */}
      <polygon points="12,28 50,50 50,94 12,72" fill={`url(#${id}-left)`} />

      {/* Right face */}
      <polygon points="88,28 88,72 50,94 50,50" fill={`url(#${id}-right)`} />

      {/* Top face — orange */}
      <polygon points="50,6 88,28 50,50 12,28" fill={`url(#${id}-top)`} />

      {/* Precision grid on top face */}
      <g clipPath={`url(#${id}-clip)`} stroke="white" strokeWidth="0.7" fill="none">
        <line x1="37" y1="13" x2="75" y2="35" opacity="0.20" />
        <line x1="25" y1="21" x2="63" y2="43" opacity="0.12" />
        <line x1="63" y1="13" x2="25" y2="35" opacity="0.20" />
        <line x1="75" y1="21" x2="37" y2="43" opacity="0.12" />
      </g>

      {/* Edge seams */}
      <line x1="50" y1="50" x2="50" y2="94" stroke="#3D1500" strokeWidth="1" opacity="0.7" />
      <line x1="12" y1="72" x2="50" y2="94" stroke="#3D1500" strokeWidth="0.6" opacity="0.5" />
      <line x1="88" y1="72" x2="50" y2="94" stroke="#3D1500" strokeWidth="0.6" opacity="0.5" />
      <line x1="50" y1="6" x2="88" y2="28" stroke="#FF9060" strokeWidth="0.8" opacity="0.35" />
      <line x1="50" y1="6" x2="12" y2="28" stroke="#FF9060" strokeWidth="0.8" opacity="0.35" />

      {/* Outer silhouette */}
      <polygon
        points="50,6 88,28 88,72 50,94 12,72 12,28"
        fill="none"
        stroke="#3D1500"
        strokeWidth="0.6"
        opacity="0.5"
      />

      {/* Apex dot */}
      <circle cx="50" cy="6" r="2.2" fill="#FFB880" opacity="0.85" />
    </svg>
  )
}
