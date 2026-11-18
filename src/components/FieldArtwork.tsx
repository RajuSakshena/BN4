import { motion } from 'framer-motion';

export function FieldArtwork() {
  return (
    <div className="field-artwork" aria-label="Animated abstract cartographic landscape of India">
      <div className="field-art-top"><span>BHARAT / SPATIAL SYSTEMS</span><span>20°N · 78°E</span></div>
      <svg viewBox="0 0 1200 510" role="img" aria-label="Abstract map and data contours, not a geographic boundary map">
        <defs>
          <linearGradient id="land-gradient" x1="0" x2="1" y1="0" y2="1"><stop offset="0" stopColor="#DDE8CC"/><stop offset=".55" stopColor="#B8CBA1"/><stop offset="1" stopColor="#93B38D"/></linearGradient>
          <linearGradient id="signal-gradient" x1="0" x2="1"><stop offset="0" stopColor="#A5C76C" stopOpacity="0"/><stop offset=".5" stopColor="#A5C76C" stopOpacity=".9"/><stop offset="1" stopColor="#A5C76C" stopOpacity="0"/></linearGradient>
          <filter id="soft-shadow"><feGaussianBlur stdDeviation="18"/></filter>
        </defs>
        <g opacity=".32" fill="none" stroke="#7A987A" strokeWidth="1">
          {Array.from({ length: 12 }).map((_, i) => <path key={i} d={`M ${-50 + i * 30} ${70 + i * 20} C 220 ${-20 + i * 13}, 420 ${280 + i * 9}, 730 ${80 + i * 14} S 1050 ${300 - i * 8}, 1270 ${100 + i * 20}`} />)}
          {Array.from({ length: 9 }).map((_, i) => <path key={`b${i}`} d={`M ${120 + i * 70} -20 C ${-40 + i * 70} 160, ${520 + i * 35} 230, ${250 + i * 95} 540`} />)}
        </g>
        <ellipse cx="610" cy="260" rx="280" ry="150" fill="#9EB88B" opacity=".32" filter="url(#soft-shadow)" />
        <path d="M 466 40 L 565 58 L 604 92 L 660 107 L 700 151 L 756 176 L 782 225 L 751 268 L 731 304 L 694 349 L 673 397 L 628 430 L 592 405 L 553 358 L 515 327 L 484 278 L 444 244 L 422 195 L 434 151 L 414 109 Z" fill="url(#land-gradient)" stroke="#668768" strokeWidth="2" transform="translate(50 8)" />
        <path d="M 500 67 L 566 86 L 613 115 L 668 143 L 710 191 L 735 237 L 700 280 L 672 324 L 625 364 L 594 397 L 553 353 L 528 312 L 493 276 L 472 234 L 470 183 L 451 142 Z" fill="none" stroke="#F7F7EC" strokeWidth="2" strokeDasharray="5 8" opacity=".85" transform="translate(48 9)" />
        <g className="field-signal-rings" fill="none" stroke="#F2A65B" strokeWidth="1.5">
          <circle cx="624" cy="235" r="28"/><circle cx="624" cy="235" r="58"/><circle cx="624" cy="235" r="91"/>
        </g>
        <g fill="#315D45" stroke="#F7F7EC" strokeWidth="3">
          {[[530,168],[590,216],[624,235],[680,184],[650,302],[574,318],[714,260],[548,268],[637,126],[700,330],[482,220],[600,375]].map(([cx,cy], i) => <circle key={i} cx={cx+48} cy={cy+9} r={i===2?8:5} />)}
        </g>
        <g className="field-data-beams" stroke="url(#signal-gradient)" strokeWidth="2"><path d="M 0 235 H 1200"/><path d="M 0 282 H 1200" opacity=".4"/></g>
        <g fill="#315D45" fontFamily="IBM Plex Mono, monospace" fontSize="11" letterSpacing="2"><text x="90" y="120">CLIMATE SIGNAL</text><text x="895" y="184">ENERGY SYSTEM</text><text x="910" y="362">DISTRICT LENS</text><text x="90" y="390">ECONOMIC FIELD</text></g>
        <g className="field-moving-dot"><circle cx="830" cy="245" r="6" fill="#F2A65B"/><circle cx="830" cy="245" r="16" fill="none" stroke="#F2A65B" opacity=".65"/></g>
      </svg>
      <div className="field-art-bottom"><span>FIG. 01 — CONNECTED ECONOMIC SYSTEMS</span><span>ILLUSTRATIVE VISUAL · NOT GEOGRAPHIC DATA</span></div>
    </div>
  );
}

export function ObservatoryArtwork() {
  return (
    <div className="observatory-art" aria-label="Animated signal observatory illustration">
      <div className="obs-grid-plane" />
      <div className="obs-orbit obs-orbit-one"/><div className="obs-orbit obs-orbit-two"/><div className="obs-orbit obs-orbit-three"/>
      <div className="obs-core"><span className="obs-core-tag">INDIA / 01</span><strong>Signal<br/>field</strong><small>CLIMATE × ENERGY × MARKETS</small></div>
      {[
        ['NATIONAL ACCOUNTS','01','north'],['CLIMATE EXPOSURE','02','west'],['ENERGY CAPACITY','03','east'],['MARKET SIGNALS','04','south']
      ].map(([label,no,pos]) => <div className={`obs-node obs-${pos}`} key={no}><i>{no}</i><span>{label}</span><b /></div>)}
      <div className="obs-coordinate coord-a">18.5204° N / 73.8567° E</div><div className="obs-coordinate coord-b">SIGNAL TRANSMISSION <span>●</span> ACTIVE</div>
    </div>
  );
}

export function LedgerArtwork() {
  return (
    <div className="ledger-art" aria-label="Layered animated research landscape">
      <div className="ledger-art-head"><span>FIELD NOTES / 2026</span><span>INDIA AS A SYSTEM</span></div>
      <svg viewBox="0 0 1400 340" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="ledger-ridge" x1="0" x2="1"><stop offset="0" stopColor="#C4C79C"/><stop offset=".5" stopColor="#E0B57F"/><stop offset="1" stopColor="#B86A52"/></linearGradient>
          <linearGradient id="ledger-ridge2" x1="0" x2="1"><stop offset="0" stopColor="#879E7E"/><stop offset="1" stopColor="#D8A078"/></linearGradient>
        </defs>
        <path d="M0 220 C160 154 260 260 410 186 S700 100 860 176 S1130 280 1400 135 L1400 340 L0 340Z" fill="#E7D7B8"/>
        <path d="M0 260 C190 140 320 280 490 212 S760 140 920 202 S1200 300 1400 190 L1400 340 L0 340Z" fill="url(#ledger-ridge)" opacity=".9"/>
        <path d="M0 287 C180 220 330 315 510 260 S840 182 1010 254 S1240 322 1400 245 L1400 340 L0 340Z" fill="url(#ledger-ridge2)" opacity=".8"/>
        <g fill="none" stroke="#8D614C" opacity=".45" strokeWidth="1">{Array.from({length:12}).map((_,i)=><path key={i} d={`M0 ${250+i*8} C230 ${160+i*7} 310 ${330-i*3} 560 ${230+i*7} S1020 ${190+i*7} 1400 ${240+i*6}`}/>)}</g>
        <g className="ledger-stars" fill="#F8F1E4">{Array.from({length:18}).map((_,i)=><circle key={i} cx={40+i*78} cy={34+(i%4)*19} r={i%3===0?2.6:1.5}/>)}</g>
        <path d="M1020 72 L1130 120 L1090 186 L1000 156Z" fill="#E5BA70" opacity=".65"/><path d="M1020 72 L1130 120 L1090 186 L1000 156Z" fill="none" stroke="#946044" strokeDasharray="4 5"/>
      </svg>
      <div className="ledger-art-caption">A layered view of the forces shaping India's economy.</div>
    </div>
  );
}
