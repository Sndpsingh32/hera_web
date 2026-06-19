export function IsoLogo() {
  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-[100px] w-[100px]"
      aria-hidden
    >
      <circle cx="60" cy="60" r="52" stroke="#1A1A1A" strokeWidth="3" />
      <circle cx="60" cy="60" r="38" stroke="#1A1A1A" strokeWidth="2" />
      <text
        x="60"
        y="54"
        textAnchor="middle"
        fill="#1A1A1A"
        fontSize="14"
        fontWeight="700"
        fontFamily="Arial, sans-serif"
      >
        ISO
      </text>
      <text
        x="60"
        y="72"
        textAnchor="middle"
        fill="#1A1A1A"
        fontSize="11"
        fontWeight="600"
        fontFamily="Arial, sans-serif"
      >
        9001:2015
      </text>
    </svg>
  );
}

export function BisLogo() {
  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-[100px] w-[100px]"
      aria-hidden
    >
      <rect x="10" y="20" width="100" height="80" rx="4" stroke="#1A1A1A" strokeWidth="2.5" />
      <text
        x="60"
        y="58"
        textAnchor="middle"
        fill="#1A1A1A"
        fontSize="28"
        fontWeight="700"
        fontFamily="Arial, sans-serif"
      >
        BIS
      </text>
      <text
        x="60"
        y="78"
        textAnchor="middle"
        fill="#1A1A1A"
        fontSize="9"
        fontWeight="600"
        fontFamily="Arial, sans-serif"
      >
        CERTIFIED
      </text>
    </svg>
  );
}

export function LabLogo() {
  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-[100px] w-[100px]"
      aria-hidden
    >
      <circle cx="60" cy="60" r="48" stroke="#2563EB" strokeWidth="3" />
      <path
        d="M48 78 L56 42 H64 L72 78"
        stroke="#2563EB"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <line x1="46" y1="78" x2="74" y2="78" stroke="#2563EB" strokeWidth="3" strokeLinecap="round" />
      <circle cx="60" cy="36" r="6" stroke="#2563EB" strokeWidth="2.5" />
      <path
        d="M36 60 A24 24 0 0 1 84 60"
        stroke="#64748B"
        strokeWidth="2"
        strokeDasharray="4 3"
      />
    </svg>
  );
}
