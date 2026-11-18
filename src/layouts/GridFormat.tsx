import { motion } from 'framer-motion';
import { Activity, ArrowDown, ArrowUpRight, Atom, BookOpen, Database, Fingerprint, Globe2, Layers3, Scale, Users } from 'lucide-react';
import Brand from '../components/Brand';
import { FieldArtwork } from '../components/FieldArtwork';
import StandardSections from '../components/StandardSections';
import { researchLenses, originalResearch } from '../data/content';

const links = [
  { href:'#home', label:'Overview', icon:Globe2 },{href:'#research',label:'Research',icon:BookOpen},{href:'#data-library',label:'Datasets',icon:Database},{href:'#observatory',label:'Visualizations',icon:Activity},{href:'#about',label:'About',icon:Users},{href:'#standards',label:'Standards',icon:Scale},{href:'#careers',label:'Careers',icon:Fingerprint}
];
export default function GridFormat(){
  return <div className="site-format theme-grid grid-format" id="home">
    <aside className="grid-sidebar"><Brand/><div className="sidebar-rule"/><span className="sidebar-label">RESEARCH INDEX</span><nav>{links.map(({href,label,icon:Icon})=><a href={href} key={href}><Icon size={16}/><span>{label}</span><ArrowUpRight size={12} className="nav-arrow"/></a>)}</nav><div className="sidebar-bottom"><div className="sidebar-coordinate">20° 35′ N<br/>78° 57′ E</div><span>INDIA / 2026</span><a href="mailto:namaste@bharatnomy.com">CONTACT THE TEAM <ArrowUpRight size={12}/></a></div></aside>
    <main className="grid-main">
      <div className="grid-topline"><span><i/> INDEPENDENT RESEARCH / INDIA</span><span>CLIMATE · ENERGY · MARKETS · POLICY</span><span>ISSUE 001 — 2026</span></div>
      <section className="grid-hero">
        <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:.8}} className="grid-hero-copy">
          <div className="hero-index"><span>BHARATNOMY / A RESEARCH INSTITUTION</span><span>01 — 05 / CONNECTED LENSES</span></div>
          <h1>India is a<br/><em>living</em> economic<br/>field<span className="hero-period">.</span></h1>
          <div className="grid-hero-foot"><p>{originalResearch.intro}</p><a href="#research" className="circle-link"><ArrowDown size={19}/><span>EXPLORE THE WORK</span></a></div>
        </motion.div>
        <FieldArtwork/>
        <div className="grid-hero-meta"><span>FIELD NOTE 001</span><span>RESEARCH AS A CONNECTED SYSTEM</span><span>OPEN EVIDENCE / OPEN DATA</span></div>
      </section>
      <section className="lens-section"><div className="section-kicker"><span>THE FIVE RESEARCH LENSES</span><span>01 — 05</span></div><div className="lens-grid">{researchLenses.map((item,i)=><motion.a href="#research" className={`lens-card lens-${item.tone}`} key={item.number} initial={{opacity:0,y:18}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*.08}}><span>{item.number}</span><h3>{item.short}</h3><p>{item.description}</p><small>{item.lens}</small><ArrowUpRight size={17}/></motion.a>)}</div></section>
      <div className="grid-manifesto"><div className="manifesto-number">B—01</div><div><span className="eyebrow">THE BHARATNOMY METHOD</span><h2>One question.<br/>Multiple disciplines.<br/><em>One connected answer.</em></h2></div><blockquote>{originalResearch.mission}</blockquote></div>
      <StandardSections format="grid"/>
    </main>
  </div>;
}
