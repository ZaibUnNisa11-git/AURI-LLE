import { ArrowUpRight } from 'lucide-react';

function SectionHeading({ eyebrow, title, subtitle, align = 'center' }) {
  return (
    <div className={`section-heading section-heading--${align}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2>{title}</h2>
      {subtitle && <p>{subtitle}</p>}
      {align === 'left' && <ArrowUpRight className="section-heading__mark" size={18} aria-hidden="true" />}
    </div>
  );
}

export default SectionHeading;
