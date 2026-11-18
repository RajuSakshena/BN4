import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDownToLine, ArrowUpRight, BarChart3, Database, MapPinned, Table2 } from 'lucide-react';
import { districts, datasetInfo, type DatasetKey } from '../data/datasets';

type View = 'map' | 'chart' | 'table';

export default function DataExplorer({ format = 'grid' }: { format?: 'grid' | 'observatory' | 'ledger' }) {
  const [dataset, setDataset] = useState<DatasetKey>('heat');
  const [view, setView] = useState<View>('map');
  const [selected, setSelected] = useState('Nagpur');
  const [metricIndex, setMetricIndex] = useState(0);
  const meta = datasetInfo[dataset];
  const fields = meta.fields;
  const activeField = fields[metricIndex] ?? fields[0];
  const selectedDistrict = districts.find((d) => d.district === selected) ?? districts[0];
  const valueFor = (d: typeof districts[number]) => Number(d[activeField.key as keyof typeof d]);
  const maxValue = Math.max(...districts.map(valueFor), 1);
  const sorted = useMemo(() => [...districts].sort((a,b)=>valueFor(b)-valueFor(a)), [dataset, metricIndex]);

  return (
    <div className={`data-explorer data-${format}`}>
      <div className="explorer-head">
        <div><span className="eyebrow"><Database size={12}/> OPEN DATA / DEMONSTRATOR</span><h3>{meta.title}</h3><p>{meta.description}</p></div>
        <div className="demo-warning"><span/> SYNTHETIC DEMO VALUES</div>
      </div>
      <div className="explorer-controls">
        <div className="dataset-switch" role="group" aria-label="Choose dataset">
          <button className={dataset==='heat'?'active':''} onClick={()=>{setDataset('heat');setMetricIndex(0);}}>01 <span>Heat readiness</span></button>
          <button className={dataset==='energy'?'active':''} onClick={()=>{setDataset('energy');setMetricIndex(0);}}>02 <span>Renewables</span></button>
        </div>
        <div className="explorer-view-switch" role="group" aria-label="Choose visualization">
          <button onClick={()=>setView('map')} className={view==='map'?'active':''}><MapPinned size={14}/> Map</button>
          <button onClick={()=>setView('chart')} className={view==='chart'?'active':''}><BarChart3 size={14}/> Chart</button>
          <button onClick={()=>setView('table')} className={view==='table'?'active':''}><Table2 size={14}/> Table</button>
        </div>
      </div>
      <div className="metric-select-row">
        <label>INDICATOR <select value={activeField.key} onChange={(e)=>setMetricIndex(fields.findIndex((f)=>f.key===e.target.value))}>{fields.map((f)=><option key={f.key} value={f.key}>{f.label}</option>)}</select></label>
        <label>GEOGRAPHY <select value={selected} onChange={(e)=>setSelected(e.target.value)}>{districts.map((d)=><option key={d.district}>{d.district}</option>)}</select></label>
        <span className="geo-note">MAHARASHTRA / SELECTED DISTRICTS</span>
      </div>
      <AnimatePresence mode="wait">
        {view === 'map' && <motion.div key="map" className="map-view" initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-6}} transition={{duration:.25}}>
          <div className="map-stage">
            <div className="map-stage-meta"><span>SPATIAL DISTRIBUTION</span><span>ILLUSTRATIVE DISTRICT PLOT</span></div>
            <svg className="district-map" viewBox="0 0 650 450" role="img" aria-label="Schematic district plot of selected Maharashtra locations">
              <defs><pattern id={`smallGrid-${format}`} width="24" height="24" patternUnits="userSpaceOnUse"><path d="M 24 0 L 0 0 0 24" fill="none" stroke="currentColor" strokeOpacity=".09" strokeWidth=".8"/></pattern><linearGradient id={`mapFill-${format}`} x1="0" x2="1" y1="0" y2="1"><stop offset="0" stopColor="var(--map-fill-a)"/><stop offset="1" stopColor="var(--map-fill-b)"/></linearGradient></defs>
              <rect width="650" height="450" fill={`url(#smallGrid-${format})`}/>
              <g fill="none" stroke="var(--map-line)" strokeWidth="1" opacity=".22">{Array.from({length:10}).map((_,i)=><path key={i} d={`M ${-50+i*54} 0 Q ${120+i*25} ${90+i*8} ${190+i*22} 220 T ${680-i*12} 450`}/> )}</g>
              <path d="M248 36 L314 52 L348 86 L397 92 L428 125 L469 144 L483 198 L459 232 L446 273 L421 307 L414 355 L379 401 L345 414 L310 381 L277 350 L242 319 L214 273 L177 240 L161 190 L179 143 L166 100 L199 67Z" fill={`url(#mapFill-${format})`} stroke="var(--map-outline)" strokeWidth="2.5" strokeDasharray="6 4"/>
              <path d="M258 79 L327 91 L370 136 L420 158 L431 214 L400 258 L390 308 L347 359 L310 332 L273 302 L239 255 L212 216 L221 164 L203 122Z" fill="none" stroke="var(--map-outline)" strokeOpacity=".55" strokeWidth="1.2"/>
              {districts.map((d,i)=>{
                const x=190+d.x*3.1, y=28+d.y*3.4, isSelected=d.district===selected;
                return <g key={d.district} className="map-marker" role="button" tabIndex={0} onClick={()=>setSelected(d.district)} onKeyDown={(e)=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();setSelected(d.district);}}} aria-label={`Select ${d.district}`}>
                  {isSelected && <circle cx={x} cy={y} r="25" fill="var(--map-pulse)" opacity=".18" className="map-pulse"/>}
                  <circle cx={x} cy={y} r={isSelected?9:6} fill={isSelected?'var(--map-selected)':'var(--map-dot)'} stroke="var(--surface)" strokeWidth="3"/>
                  <text x={x+12} y={y+4} fill="var(--map-label)" fontSize="10" fontFamily="IBM Plex Mono,monospace">{d.short}</text>
                </g>;
              })}
            </svg>
            <div className="map-legend"><span><i className="legend-dot"/> Selected district</span><span><i className="legend-dot muted"/> Other locations</span></div>
          </div>
          <div className="district-detail">
            <span className="detail-label">SELECTED DISTRICT</span><span className="district-index">{String(districts.findIndex(d=>d.district===selected)+1).padStart(2,'0')} / 10</span>
            <h4>{selectedDistrict.district}</h4><p>{activeField.label}</p>
            <div className="detail-value">{valueFor(selectedDistrict)}<small> {activeField.unit}</small></div>
            <div className="detail-meter"><span style={{width:`${Math.min(valueFor(selectedDistrict)/maxValue*100,100)}%`}}/></div>
            <div className="detail-foot"><span>DEMO INDICATOR</span><span>{dataset==='heat'?'0—100 INDEX':'GW CAPACITY'}</span></div>
            <div className="detail-hint">Select any marker or use the geography menu to inspect another district.</div>
          </div>
        </motion.div>}
        {view === 'chart' && <motion.div key="chart" className="chart-view" initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-6}} transition={{duration:.25}}>
          <div className="chart-head"><div><span className="detail-label">DISTRICT COMPARISON</span><h4>{activeField.label}</h4></div><span className="chart-unit">{activeField.unit}</span></div>
          <div className="bar-chart">{sorted.map((d,i)=><button className={`bar-row ${d.district===selected?'chosen':''}`} key={d.district} onClick={()=>setSelected(d.district)}><span className="bar-rank">{String(i+1).padStart(2,'0')}</span><span className="bar-name">{d.district}</span><span className="bar-track"><i style={{width:`${valueFor(d)/maxValue*100}%`,transitionDelay:`${i*28}ms`}}/></span><strong>{valueFor(d)}</strong></button>)}</div>
          <p className="chart-caption">Illustrative ranking of ten selected districts. Values are synthetic and do not represent official measurements.</p>
        </motion.div>}
        {view === 'table' && <motion.div key="table" className="table-view" initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-6}} transition={{duration:.25}}>
          <div className="table-scroll"><table><thead><tr><th>District</th>{fields.map(f=><th key={f.key}>{f.label}<small>{f.unit}</small></th>)}</tr></thead><tbody>{districts.map(d=><tr key={d.district} className={d.district===selected?'selected-row':''} onClick={()=>setSelected(d.district)}><td>{d.district}</td>{fields.map(f=><td key={f.key}>{Number(d[f.key as keyof typeof d]).toFixed(dataset==='energy'?1:0)}</td>)}</tr>)}</tbody></table></div>
        </motion.div>}
      </AnimatePresence>
      <div className="explorer-footer"><span><b>{meta.id}</b> · {meta.category} · {meta.unit}</span><div><a href={meta.file} download><ArrowDownToLine size={13}/> CSV</a><a href={meta.readme} download><ArrowUpRight size={13}/> README</a></div></div>
    </div>
  );
}
