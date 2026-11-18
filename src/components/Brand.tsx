import { ArrowUpRight } from 'lucide-react';

type Props = { light?: boolean; compact?: boolean };
export default function Brand({ light = false, compact = false }: Props) {
  return (
    <a className={`brand-lockup ${light ? 'brand-light' : ''} ${compact ? 'brand-compact' : ''}`} href="#home" aria-label="Bharatnomy home">
      <span className="brand-symbol"><span /><span /><span /></span>
      <span className="brand-copy"><strong>Bharatnomy</strong>{!compact && <small>INDEPENDENT RESEARCH</small>}</span>
      {!compact && <ArrowUpRight size={12} strokeWidth={1.7} className="brand-arrow" />}
    </a>
  );
}
