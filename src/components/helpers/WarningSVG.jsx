export default function WarningSVG() {
  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%", height: "100%" }}
    >
      {/* Outer ring */}
      <circle
        cx="60"
        cy="60"
        r="54"
        stroke="#d0d6f9"
        strokeWidth="1.5"
        opacity="0.2"
      />
      <circle
        cx="60"
        cy="60"
        r="44"
        stroke="#d0d6f9"
        strokeWidth="1"
        opacity="0.12"
        strokeDasharray="4 6"
      />
      {/* Triangle */}
      <path
        d="M60 22 L96 84 L24 84 Z"
        stroke="#d0d6f9"
        strokeWidth="2"
        strokeLinejoin="round"
        fill="none"
        opacity="0.4"
      />
      <path d="M60 28 L91 80 L29 80 Z" fill="#d0d6f9" opacity="0.05" />
      {/* Exclamation stem */}
      <rect
        x="57"
        y="45"
        width="6"
        height="22"
        rx="3"
        fill="#d0d6f9"
        opacity="0.5"
      />
      {/* Exclamation dot */}
      <circle cx="60" cy="74" r="3.5" fill="#d0d6f9" opacity="0.5" />
      {/* Orbit dots */}
      <circle cx="60" cy="8" r="3" fill="#d0d6f9" opacity="0.3" />
      <circle cx="112" cy="60" r="2" fill="#d0d6f9" opacity="0.2" />
      <circle cx="8" cy="60" r="2" fill="#d0d6f9" opacity="0.2" />
    </svg>
  );
}
