type IconProps = {
  className?: string;
};

export function GithubIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 0C5.37 0 0 5.49 0 12.27c0 5.42 3.44 10.01 8.21 11.63.6.11.82-.27.82-.59 0-.29-.01-1.27-.02-2.31-3.34.75-4.04-1.46-4.04-1.46-.55-1.43-1.34-1.81-1.34-1.81-1.09-.77.08-.76.08-.76 1.21.09 1.84 1.27 1.84 1.27 1.07 1.87 2.81 1.33 3.49 1.02.11-.78.42-1.33.76-1.63-2.67-.31-5.47-1.37-5.47-6.1 0-1.35.46-2.45 1.22-3.31-.12-.31-.53-1.57.12-3.27 0 0 1-.33 3.3 1.26a11.2 11.2 0 0 1 6 0c2.3-1.59 3.3-1.26 3.3-1.26.65 1.7.24 2.96.12 3.27.76.86 1.22 1.96 1.22 3.31 0 4.74-2.81 5.79-5.49 6.09.43.38.81 1.13.81 2.29 0 1.65-.02 2.98-.02 3.39 0 .32.22.71.83.59C20.56 22.27 24 17.69 24 12.27 24 5.49 18.63 0 12 0Z" />
    </svg>
  );
}

export function LinkedinIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.45-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
    </svg>
  );
}

export function XIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M18.9 1.5h3.68l-8.04 9.19L24 22.5h-7.4l-5.8-7.58-6.63 7.58H.49l8.6-9.83L0 1.5h7.59l5.24 6.93 6.07-6.93Zm-1.29 18.9h2.04L6.49 3.48H4.3l13.3 16.92Z" />
    </svg>
  );
}

export function MailIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      className={className}
      aria-hidden="true"
    >
      <rect x="2.5" y="4.5" width="19" height="15" rx="2.2" />
      <path d="M3.5 6.5 12 13l8.5-6.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ExternalLinkIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      className={className}
      aria-hidden="true"
    >
      <path d="M7 17 17 7" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8 7h9v9" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function StarIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 1.5l3.09 6.26 6.91 1-5 4.87 1.18 6.87L12 17.27l-6.18 3.23L7 13.63l-5-4.87 6.91-1L12 1.5Z" />
    </svg>
  );
}

export function DownloadIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      className={className}
      aria-hidden="true"
    >
      <path d="M12 3v12" strokeLinecap="round" />
      <path d="M7 10l5 5 5-5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4 19.5h16" strokeLinecap="round" />
    </svg>
  );
}

export function SunIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      className={className}
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="4.2" />
      <path
        d="M12 2.5v2.4M12 19.1v2.4M4.2 4.2l1.7 1.7M18.1 18.1l1.7 1.7M2.5 12h2.4M19.1 12h2.4M4.2 19.8l1.7-1.7M18.1 5.9l1.7-1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function MoonIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M20.5 14.7A8.6 8.6 0 0 1 9.3 3.5a8.9 8.9 0 1 0 11.2 11.2Z" />
    </svg>
  );
}

export function UserIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      className={className}
      aria-hidden="true"
    >
      <circle cx="12" cy="8" r="3.6" />
      <path d="M4.5 20c1.2-3.6 4.2-5.5 7.5-5.5s6.3 1.9 7.5 5.5" strokeLinecap="round" />
    </svg>
  );
}

export function BriefcaseIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      className={className}
      aria-hidden="true"
    >
      <rect x="3" y="7.5" width="18" height="12" rx="2" />
      <path d="M8.5 7.5V6a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v1.5" strokeLinecap="round" />
      <path d="M3 12.5h18" />
    </svg>
  );
}

export function FolderIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      className={className}
      aria-hidden="true"
    >
      <path
        d="M3.5 6.5A1.5 1.5 0 0 1 5 5h3.6a1.5 1.5 0 0 1 1.2.6l1 1.4H19a1.5 1.5 0 0 1 1.5 1.5v8a1.5 1.5 0 0 1-1.5 1.5H5a1.5 1.5 0 0 1-1.5-1.5v-10Z"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ArrowRightIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      className={className}
      aria-hidden="true"
    >
      <path d="M4.5 12h15" strokeLinecap="round" />
      <path d="M13 6l6.5 6-6.5 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ArrowLeftIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      className={className}
      aria-hidden="true"
    >
      <path d="M19.5 12h-15" strokeLinecap="round" />
      <path d="M11 6l-6.5 6 6.5 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function PenIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      className={className}
      aria-hidden="true"
    >
      <path
        d="M4 16.5 3.3 20l3.5-.7L18.4 7.7a1.8 1.8 0 0 0 0-2.5l-.6-.6a1.8 1.8 0 0 0-2.5 0L4 16.5Z"
        strokeLinejoin="round"
      />
      <path d="M13.5 6.5l3.5 3.5" strokeLinecap="round" />
    </svg>
  );
}

export function HomeIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      className={className}
      aria-hidden="true"
    >
      <path
        d="M4 10.5 12 4l8 6.5V19a1 1 0 0 1-1 1h-4v-6H9v6H5a1 1 0 0 1-1-1v-8.5Z"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function LayoutIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      className={className}
      aria-hidden="true"
    >
      <rect x="3.5" y="4" width="17" height="16" rx="2" />
      <path d="M3.5 9.5h17" />
      <path d="M9 9.5V20" />
    </svg>
  );
}

export function ServerIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      className={className}
      aria-hidden="true"
    >
      <rect x="3.5" y="4" width="17" height="6" rx="1.5" />
      <rect x="3.5" y="14" width="17" height="6" rx="1.5" />
      <path d="M7 7h.01M7 17h.01" strokeLinecap="round" />
    </svg>
  );
}

export function DatabaseIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      className={className}
      aria-hidden="true"
    >
      <ellipse cx="12" cy="5.5" rx="8" ry="3" />
      <path d="M4 5.5V12c0 1.66 3.58 3 8 3s8-1.34 8-3V5.5" />
      <path d="M4 12v6.5c0 1.66 3.58 3 8 3s8-1.34 8-3V12" />
    </svg>
  );
}

export function PuzzleIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      className={className}
      aria-hidden="true"
    >
      <path
        d="M9 4.5h3a1.5 1.5 0 0 1 1.5 1.5v2a1.5 1.5 0 0 0 3 0 1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5 1.5 1.5 0 0 0 0 3 1.5 1.5 0 0 1 1.5 1.5v2a1.5 1.5 0 0 1-1.5 1.5h-3a1.5 1.5 0 0 1 0-3 1.5 1.5 0 0 0 0-3H6a1.5 1.5 0 0 1-1.5-1.5v-3A1.5 1.5 0 0 1 6 9a1.5 1.5 0 0 0 0-3 1.5 1.5 0 0 1 1.5-1.5H9Z"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ArrowUpRightIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      className={className}
      aria-hidden="true"
    >
      <path d="M7 17 17 7" strokeLinecap="round" />
      <path d="M8 7h9v9" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function PhoneIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      className={className}
      aria-hidden="true"
    >
      <path
        d="M6.5 4h2.7l1.3 4.2-2 1.6a11 11 0 0 0 5.7 5.7l1.6-2 4.2 1.3v2.7c0 1-.8 1.8-1.8 1.7C12.4 18.6 5.4 11.6 4.8 5.8 4.7 4.8 5.5 4 6.5 4Z"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function LeetCodeIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      className={className}
      aria-hidden="true"
    >
      <path d="M9.5 5 4 12l5.5 7" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14.5 5 20 12l-5.5 7" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M11 9.5h2" strokeLinecap="round" />
    </svg>
  );
}

export function MapPinIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      className={className}
      aria-hidden="true"
    >
      <path
        d="M12 21s7-6.5 7-12a7 7 0 1 0-14 0c0 5.5 7 12 7 12Z"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="9" r="2.3" />
    </svg>
  );
}

export const iconMap = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  x: XIcon,
  mail: MailIcon,
  leetcode: LeetCodeIcon,
} as const;
