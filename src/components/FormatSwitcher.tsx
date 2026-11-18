import { Grid3X3, Map, Rows3 } from 'lucide-react';
export type FormatKey = 'grid' | 'observatory' | 'ledger';
const options: { key: FormatKey; number: string; title: string; icon: typeof Grid3X3 }[] = [
  { key: 'grid', number: '01', title: 'Field Grid', icon: Grid3X3 },
  { key: 'observatory', number: '02', title: 'Observatory', icon: Map },
  { key: 'ledger', number: '03', title: 'Ledger', icon: Rows3 }
];
export default function FormatSwitcher({ active, onChange }: { active: FormatKey; onChange: (key: FormatKey) => void }) {
  return <div className={`format-switcher switcher-${active}`} role="group" aria-label="Preview another website format">
    <span className="switcher-label"><i/> FORMAT STUDY</span>
    {options.map((item)=>{const Icon=item.icon;return <button key={item.key} className={`switcher-option ${active===item.key?'selected':''}`} onClick={()=>{onChange(item.key);window.scrollTo({top:0,behavior:'smooth'});}} aria-pressed={active===item.key} title={`Preview ${item.title}`}><span>{item.number}</span><Icon size={14}/><b>{item.title}</b></button>;})}
  </div>;
}
