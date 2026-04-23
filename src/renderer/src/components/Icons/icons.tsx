import type { SVGProps } from 'react'

type IconProps = SVGProps<SVGSVGElement>

const baseProps = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  viewBox: '0 0 24 24',
  'aria-hidden': true
}

export const MenuIcon = (props: IconProps): React.JSX.Element => (
  <svg {...baseProps} {...props}>
    <path d="M4 7h16" />
    <path d="M4 12h16" />
    <path d="M4 17h16" />
  </svg>
)

export const CloseIcon = (props: IconProps): React.JSX.Element => (
  <svg {...baseProps} {...props}>
    <path d="M6 6l12 12" />
    <path d="M18 6L6 18" />
  </svg>
)

export const UsersIcon = (props: IconProps): React.JSX.Element => (
  <svg {...baseProps} {...props}>
    <path d="M16 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" />
    <circle cx="9.5" cy="7" r="4" />
    <path d="M20 8a3 3 0 0 1 0 6" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
  </svg>
)

export const UserPlusIcon = (props: IconProps): React.JSX.Element => (
  <svg {...baseProps} {...props}>
    <path d="M16 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" />
    <circle cx="9.5" cy="7" r="4" />
    <path d="M19 8h4" />
    <path d="M21 6v4" />
  </svg>
)

export const InfoIcon = (props: IconProps): React.JSX.Element => (
  <svg {...baseProps} {...props}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 10v6" />
    <path d="M12 7h.01" />
  </svg>
)

export const ArrowLeftIcon = (props: IconProps): React.JSX.Element => (
  <svg {...baseProps} {...props}>
    <path d="M19 12H5" />
    <path d="M12 19l-7-7 7-7" />
  </svg>
)

export const TrashIcon = (props: IconProps): React.JSX.Element => (
  <svg {...baseProps} {...props}>
    <path d="M3 6h18" />
    <path d="M8 6V4h8v2" />
    <path d="M19 6l-1 14H6L5 6" />
    <path d="M10 11v6" />
    <path d="M14 11v6" />
  </svg>
)

export const MailIcon = (props: IconProps): React.JSX.Element => (
  <svg {...baseProps} {...props}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="M3 8l9 6 9-6" />
  </svg>
)

export const PhoneIcon = (props: IconProps): React.JSX.Element => (
  <svg {...baseProps} {...props}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.08 4.18 2 2 0 0 1 4.06 2h3a2 2 0 0 1 2 1.72l.46 3.09a2 2 0 0 1-.57 1.71l-1.35 1.35a16 16 0 0 0 6 6l1.35-1.35a2 2 0 0 1 1.71-.57l3.09.46A2 2 0 0 1 22 16.92z" />
  </svg>
)

export const BriefcaseIcon = (props: IconProps): React.JSX.Element => (
  <svg {...baseProps} {...props}>
    <rect x="3" y="7" width="18" height="13" rx="2" />
    <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
    <path d="M3 12h18" />
  </svg>
)

export const MapPinIcon = (props: IconProps): React.JSX.Element => (
  <svg {...baseProps} {...props}>
    <path d="M12 21s-6-5.33-6-11a6 6 0 1 1 12 0c0 5.67-6 11-6 11z" />
    <circle cx="12" cy="10" r="2.5" />
  </svg>
)

export const SparklesIcon = (props: IconProps): React.JSX.Element => (
  <svg {...baseProps} {...props}>
    <path d="M12 3l1.2 3.8L17 8l-3.8 1.2L12 13l-1.2-3.8L7 8l3.8-1.2L12 3z" />
    <path d="M19 14l.7 2.3L22 17l-2.3.7L19 20l-.7-2.3L16 17l2.3-.7L19 14z" />
    <path d="M5 14l.9 2.6L8.5 17l-2.6.4L5 20l-.9-2.6L1.5 17l2.6-.4L5 14z" />
  </svg>
)
