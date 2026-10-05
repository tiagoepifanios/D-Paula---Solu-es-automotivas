import type { SVGProps } from 'react';
import type { IconName } from '../data/site';

type P = SVGProps<SVGSVGElement>;
const base: P = {
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
  focusable: false,
};

export const WhatsAppIcon = (p: P) => (
  <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" focusable="false" {...p}>
    <path
      fill="currentColor"
      d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"
    />
  </svg>
);

export const InstagramIcon = (p: P) => (
  <svg {...base} {...p}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" stroke="none" />
  </svg>
);

export const PinIcon = (p: P) => (
  <svg {...base} {...p}>
    <path d="M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 0 1 13 0c0 5.4-6.5 11-6.5 11Z" />
    <circle cx="12" cy="10" r="2.4" />
  </svg>
);

export const ClockIcon = (p: P) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="M12 7.5V12l3 2" />
  </svg>
);

export const PhoneIcon = (p: P) => (
  <svg {...base} {...p}>
    <path d="M5 4h3.2l1.6 4-2 1.3a10.5 10.5 0 0 0 4.9 4.9l1.3-2 4 1.6V17a2 2 0 0 1-2 2A15 15 0 0 1 3 6a2 2 0 0 1 2-2Z" />
  </svg>
);

export const RouteIcon = (p: P) => (
  <svg {...base} {...p}>
    <path d="m3 11 18-8-8 18-2-8-8-2Z" />
  </svg>
);

export const ArrowIcon = (p: P) => (
  <svg {...base} {...p}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export const CloseIcon = (p: P) => (
  <svg {...base} {...p}>
    <path d="M6 6l12 12M18 6 6 18" />
  </svg>
);

export const ChevronIcon = ({ dir = 'right', ...p }: P & { dir?: 'left' | 'right' }) => (
  <svg {...base} {...p}>
    <path d={dir === 'right' ? 'm9 5 7 7-7 7' : 'm15 5-7 7 7 7'} />
  </svg>
);

export const PlayIcon = (p: P) => (
  <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" focusable="false" {...p}>
    <path fill="currentColor" d="M8 5.5v13a.8.8 0 0 0 1.2.7l10.4-6.5a.8.8 0 0 0 0-1.4L9.2 4.8A.8.8 0 0 0 8 5.5Z" />
  </svg>
);

export const StarIcon = (p: P) => (
  <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" focusable="false" {...p}>
    <path fill="currentColor" d="m12 3 2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9L12 3Z" />
  </svg>
);

const serviceIcons: Record<IconName, JSX.Element> = {
  tire: (
    <>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="4.2" />
      <path d="M12 3v2.2M12 18.8V21M3 12h2.2M18.8 12H21M5.6 5.6l1.6 1.6M16.8 16.8l1.6 1.6M18.4 5.6l-1.6 1.6M7.2 16.8l-1.6 1.6" />
    </>
  ),
  alignment: (
    <>
      <path d="M12 2.5v19" strokeDasharray="1.6 2.2" />
      <rect x="9.2" y="5" width="5.6" height="14" rx="2.2" transform="rotate(12 12 12)" />
      <path d="M12 4.2a8 8 0 0 1 3.2.9" />
      <path d="M4 21h16" />
    </>
  ),
  balance: (
    <>
      <circle cx="12" cy="12" r="7.5" />
      <circle cx="12" cy="12" r="2" />
      <path d="M12 2.5v2M12 19.5v2" />
      <rect x="15.6" y="5.4" width="2.6" height="1.8" rx="0.4" transform="rotate(40 16.9 6.3)" fill="currentColor" stroke="none" />
    </>
  ),
  paint: (
    <>
      <path d="M4 14h11l3-5H7.5L4 14Z" />
      <path d="M15 14v3a1.5 1.5 0 0 1-1.5 1.5H8M18 9l2-4" />
      <path d="M20.5 15.5c0 1-.7 1.8-1.5 1.8s-1.5-.8-1.5-1.8.8-2.1 1.5-3c.7.9 1.5 2 1.5 3Z" />
    </>
  ),
  polish: (
    <>
      <path d="M3 15.5 5 11h14l2 4.5V18H3v-2.5Z" />
      <path d="M7 11 9 7.5h6L17 11" />
      <path d="M12 2.5v2M8.6 3.6l.9 1.6M15.4 3.6l-.9 1.6" />
    </>
  ),
  wheel: (
    <>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="2" />
      <path d="M12 10V3.5M13.9 11.4l6.1-2M13.2 13.6l3.9 5.2M10.8 13.6l-3.9 5.2M10.1 11.4l-6.1-2" />
    </>
  ),
  truck: (
    <>
      <path d="M2.5 6h11v9h-11zM13.5 9h4l3 3.5V15h-7z" />
      <circle cx="6.5" cy="17" r="2" />
      <circle cx="17" cy="17" r="2" />
    </>
  ),
  weld: (
    <>
      <path d="m4 20 8-8M10 10l4 4M13 7l4 4 3-3-4-4-3 3Z" />
      <path d="M5 13.5 3.5 12M7.5 16.5 6.8 18.6M3.5 16.5l2-.5" />
    </>
  ),
};

export const ServiceIcon = ({ name, ...p }: P & { name: IconName }) => (
  <svg {...base} width={28} height={28} {...p}>
    {serviceIcons[name]}
  </svg>
);
