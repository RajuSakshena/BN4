import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight, Asterisk, BookOpen, Database, Globe2, Layers, Mail, Scale, Users } from 'lucide-react';
import Brand from '../components/Brand';
import { LedgerArtwork } from '../components/FieldArtwork';
import StandardSections from '../components/StandardSections';
import { originalResearch, researchLenses } from '../data/content';

const links=[['home','Index'],['research','Research'],['data-library','Datasets'],['observatory','Visuals'],['about','About'],['standards','Standards'],['careers','Careers']];
export default function LedgerFormat(){
  return <div className="site-format theme-ledger ledger-format" id="home">
    <header className="ledger-header"><Brand/><span className="ledger-edition">VOL. 01 <i/> INDIA / ECONOMY / 2026</span><a href="mailto:namaste@bharatnomy.com">CORRESPONDENCE <ArrowUpRight size={13}/></a></header>
    <main className="ledger-main">
      <section className="ledger-hero">
        <div className="ledger-hero-index"><span>01</span><small>THE<br/>CONNECTED<br/>ECONOMY</small></div>
        <div className="ledger-hero-copy"><p className="eyebrow">BHARATNOMY / INDEPENDENT RESEARCH</p><motion.h1 initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} transition={{duration:.8}}>A country<br/>is more than<br/><em>its numbers.</em></motion.h1><p className="ledger-hero-desc">{originalResearch.intro}</p><a href="#research" className="ledger-scroll-link">TURN THE PAGE <ArrowDown size={16}/></a></div>
        <div className="ledger-hero-side"><span>THE RESEARCH INDEX</span><strong>Climate<br/>Energy<br/>Markets<br/>Policy</strong><small>FIVE FIELDS.<br/>ONE METHOD.</small></div>
      </section>
      <LedgerArtwork/>
      <section className="ledger-index-section"><div className="ledger-index-head"><span>CONTENTS / 2026</span><span>SELECT A RESEARCH FIELD</span></div><div className="ledger-index-list">{researchLenses.map((x,i)=><motion.a href="#research" className="ledger-index-row" key={x.number} initial={{opacity:0,x:-20}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{delay:i*.05}}><span className="ledger-index-num">{x.number}</span><div><h3>{x.title}</h3><p>{x.description}</p></div><small>{x.short}</small><ArrowUpRight size={18}/></motion.a>)}</div></section>
      <section className="ledger-manifesto"><span className="eyebrow">A NOTE ON THE METHOD</span><div className="ledger-manifesto-grid"><h2>Research should<br/>connect what the<br/>world keeps apart.</h2><div><Asterisk size={32}/><p>{originalResearch.mission}</p></div></div></section>
      <StandardSections format="ledger"/>
    </main>
    <nav className="ledger-bottom-nav" aria-label="Main navigation">{links.map(([href,label],i)=><a href={`#${href}`} key={href}><span>0{i+1}</span>{label}</a>)}</nav>
    <div className="ledger-side-note">A FIELD GUIDE TO INDIA'S ECONOMY <i/> INDEPENDENT / EVIDENCE-LED</div>
  </div>;
}
