import { motion } from 'framer-motion';
import { ArrowDownRight, ArrowUpRight, Activity, BookOpen, Database, Globe2, Info, Map, ShieldCheck, Users } from 'lucide-react';
import Brand from '../components/Brand';
import { ObservatoryArtwork } from '../components/FieldArtwork';
import StandardSections from '../components/StandardSections';
import { originalResearch, researchLenses } from '../data/content';

const links=[['home','Top'],['research','Research'],['data-library','Datasets'],['observatory','Explore'],['about','About'],['standards','Standards'],['careers','Careers']];
export default function ObservatoryFormat(){
  return <div className="site-format theme-observatory observatory-format" id="home">
    <header className="obs-masthead"><Brand/><div className="obs-masthead-center"><span>AN INDEPENDENT RESEARCH FIRM</span><span>NEW DELHI · INDIA</span></div><a href="#observatory" className="obs-live-link"><i/> OPEN DATA ROOM <ArrowUpRight size={13}/></a></header>
    <aside className="obs-edge-rail"><span className="edge-rail-label">NAVIGATE THE PLATFORM</span>{links.map(([href,label],i)=><a href={`#${href}`} key={href}><span>0{i+1}</span><b>{label}</b></a>)}<div className="edge-rail-line"/></aside>
    <main className="obs-main">
      <section className="obs-hero">
        <div className="obs-hero-intro"><span className="eyebrow"><i/> FIELD INTELLIGENCE / 2026</span><span className="obs-coordinate">LAT 20.5937° N <b>•</b> LONG 78.9629° E</span></div>
        <motion.h1 initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:.8}}>The economy,<br/><em>from the ground</em><br/>up<span>.</span></motion.h1>
        <div className="obs-hero-sub"><p>{originalResearch.intro}</p><div className="obs-hero-scroll"><span>SCROLL TO EXPLORE</span><ArrowDownRight size={25}/></div></div>
        <ObservatoryArtwork/>
        <div className="obs-signal-strip"><span>TRANSMITTING RESEARCH SIGNALS</span><div>{['CLIMATE','ENERGY','COMMODITIES','EQUITIES','MACROECONOMICS'].map((x,i)=><span key={x}><i/>{x}</span>)}</div><span>01 / 05</span></div>
      </section>
      <section className="obs-lens-band"><div className="obs-band-head"><span>OUR RESEARCH SYSTEM</span><span>FIVE INTERCONNECTED DOMAINS</span></div><div className="obs-lens-list">{researchLenses.map((x,i)=><motion.a key={x.number} href="#research" className="obs-lens-item" initial={{opacity:0,x:-12}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{delay:i*.06}}><span>{x.number}</span><strong>{x.title}</strong><small>{x.lens}</small><ArrowUpRight size={16}/></motion.a>)}</div></section>
      <section className="obs-stats-band"><div className="obs-stat-intro"><span>THE RESEARCH PROMISE</span><h2>Make the evidence<br/>easy to reach.</h2></div><div className="obs-stat"><strong>05</strong><span>Research lenses<br/>read as one system</span></div><div className="obs-stat"><strong>02</strong><span>Interactive demo<br/>data products</span></div><div className="obs-stat"><strong>IN</strong><span>District and state<br/>level lens</span></div></section>
      <div className="obs-quote-band"><div className="quote-symbol">“</div><blockquote>{originalResearch.mission}</blockquote><span>BHARATNOMY / MISSION</span></div>
      <StandardSections format="observatory"/>
    </main>
    <footer className="obs-bottom-bar"><span>BHARATNOMY / INDEPENDENT ECONOMIC RESEARCH</span><span>EVERY CLAIM CITED · EVERY DATASET OPEN</span><a href="#home">BACK TO TOP ↑</a></footer>
  </div>;
}
