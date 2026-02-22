export default function AstronautSVG() {
  return (
    <svg
      viewBox="0 0 120 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%", height: "100%" }}
    >
      {/* helmet */}
      <ellipse cx="60" cy="48" rx="28" ry="30" fill="#d0d6f9" opacity="0.15" />
      <ellipse cx="60" cy="48" rx="26" ry="28" fill="#d0d6f9" opacity="0.08" />
      <circle
        cx="60"
        cy="48"
        r="22"
        fill="none"
        stroke="#d0d6f9"
        strokeWidth="2"
        opacity="0.5"
      />
      {/* visor */}
      <ellipse cx="60" cy="48" rx="14" ry="12" fill="#0b0d17" opacity="0.8" />
      <ellipse cx="55" cy="43" rx="4" ry="3" fill="#d0d6f9" opacity="0.15" />
      {/* reflection */}
      <ellipse cx="54" cy="44" rx="3" ry="2" fill="white" opacity="0.12" />
      {/* neck */}
      <rect
        x="52"
        y="74"
        width="16"
        height="8"
        rx="4"
        fill="#d0d6f9"
        opacity="0.2"
      />
      {/* body */}
      <rect
        x="36"
        y="80"
        width="48"
        height="52"
        rx="16"
        fill="#d0d6f9"
        opacity="0.12"
      />
      <rect
        x="36"
        y="80"
        width="48"
        height="52"
        rx="16"
        fill="none"
        stroke="#d0d6f9"
        strokeWidth="1.5"
        opacity="0.3"
      />
      {/* chest panel */}
      <rect
        x="48"
        y="92"
        width="24"
        height="16"
        rx="4"
        fill="none"
        stroke="#d0d6f9"
        strokeWidth="1"
        opacity="0.3"
      />
      <circle cx="54" cy="100" r="2" fill="#d0d6f9" opacity="0.5" />
      <circle cx="60" cy="100" r="2" fill="#d0d6f9" opacity="0.3" />
      <circle cx="66" cy="100" r="2" fill="#d0d6f9" opacity="0.2" />
      {/* left arm */}
      <rect
        x="18"
        y="82"
        width="18"
        height="36"
        rx="9"
        fill="#d0d6f9"
        opacity="0.12"
        stroke="#d0d6f9"
        strokeWidth="1.5"
      />
      {/* right arm */}
      <rect
        x="84"
        y="82"
        width="18"
        height="36"
        rx="9"
        fill="#d0d6f9"
        opacity="0.12"
        stroke="#d0d6f9"
        strokeWidth="1.5"
      />
      {/* left glove */}
      <ellipse cx="27" cy="122" rx="9" ry="7" fill="#d0d6f9" opacity="0.2" />
      {/* right glove */}
      <ellipse cx="93" cy="122" rx="9" ry="7" fill="#d0d6f9" opacity="0.2" />
      {/* legs */}
      <rect
        x="40"
        y="128"
        width="16"
        height="28"
        rx="8"
        fill="#d0d6f9"
        opacity="0.12"
        stroke="#d0d6f9"
        strokeWidth="1.5"
      />
      <rect
        x="64"
        y="128"
        width="16"
        height="28"
        rx="8"
        fill="#d0d6f9"
        opacity="0.12"
        stroke="#d0d6f9"
        strokeWidth="1.5"
      />
      {/* tether line */}
      <path
        d="M 93 100 Q 115 80 108 50"
        stroke="#d0d6f9"
        strokeWidth="1"
        strokeDasharray="3 4"
        opacity="0.3"
        fill="none"
      />
    </svg>
  );
}
