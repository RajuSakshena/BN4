import { motion } from 'framer-motion';
import { ArrowUpRight, BookOpen, Check, ChevronRight, Layers3, ShieldCheck } from 'lucide-react';
import { audience, originalResearch, outputTypes, standards, team } from '../data/content';
import DataExplorer from './DataExplorer';
import type { FormatKey } from './FormatSwitcher';

const reveal = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: .65, ease: 'easeOut' } } };
const researchQuestions = [
  'Which under-reported macroeconomic indicators give citizens and investors the clearest decision-making signal?',
  'Can systematic public-data collection compensate for delays or gaps in official reporting?',
  'What are the localized socio-economic trade-offs of moving away from coal in energy-dependent regional economies?',
  'How can public datasets better capture real-time climate-adaptation readiness at the district level?'
];
const stateIndicators = ['Heat Action Plan status', 'Fiscal capacity index', 'Renewable share of grid', 'Gross state value added'];
const nonNegotiables = [
  'No fabricated data points and no uncited empirical claims, under any circumstance.',
  'No partisan alignment, political bias, or political sponsorship.',
  'No compromise on primary-data privacy, anonymity, or participant consent.'
];
const tradeoffs = [
  'Depth of verification outranks speed of publishing. Fact-checking never yields to a release deadline.',
  'Analytical rigor is never diluted for the sake of simplicity — technical terms get a plain-language definition alongside them instead of being cut.',
  'Non-partisan public utility outranks commercial monetization when the two conflict.'
];

export default function StandardSections({ format }: { format: FormatKey }) {
  return <>
    <section id="research" className={`content-section research-section section-${format}`}>
      <div className="section-kicker"><span>01 / RESEARCH PROGRAMME</span><span>WORK IN PROGRESS</span></div>
      <div className="section-title-row"><div><p className="eyebrow">THE RESEARCH DESK</p><h2>{originalResearch.researchStatus}</h2><p className="section-lede">{originalResearch.researchIntro}</p></div><div className="status-stamp"><span className="status-pulse"/> RESEARCH PHASE <small>First working paper in progress</small></div></div>
      <div className="research-current">
        <div className="current-visual"><div className="heat-orb"><span>40°</span><i/><b/></div><div className="current-visual-foot"><span>FIELD STUDY / MH</span><span>2026—ONGOING</span></div></div>
        <div className="current-copy"><span className="eyebrow">CURRENTLY IN PROGRESS / PRJ-01</span><h3>{originalResearch.heatProject}</h3><p>{originalResearch.heatDescription}</p><a href="#data-library" className="text-link">Explore the research framework <ArrowUpRight size={15}/></a></div>
      </div>
      <div className="project-facts">
        <div><span>PHASE</span><strong>{originalResearch.heatProjectPhase}</strong></div>
        <div><span>CURRENT BLOCKER</span><strong>{originalResearch.heatProjectBlocker}</strong></div>
        <div><span>NEXT MILESTONE</span><strong>{originalResearch.heatProjectMilestone}</strong></div>
      </div>
      <div className="output-types"><div className="output-intro"><span className="eyebrow">OUR OUTPUT</span><h3>Research designed for different readers.</h3></div>{outputTypes.map((item,i)=><motion.div className="output-item" key={item.title} variants={reveal} initial="hidden" whileInView="visible" viewport={{once:true,amount:.4}}><span>0{i+1}</span><div><h4>{item.title}</h4><p>{item.text}</p></div><ChevronRight size={16}/></motion.div>)}</div>
      <div className="open-questions"><span className="eyebrow">OPEN QUESTIONS WE ARE PURSUING</span><div className="question-grid">{researchQuestions.map((q,i)=><div className="question" key={q}><span>Q0{i+1}</span><p>{q}</p></div>)}</div></div>
      <div className="topic-selection"><span className="eyebrow">WHAT WE CHOOSE TO STUDY</span><p>{originalResearch.topicSelection}</p></div>
      <div className="section-cta"><div><span className="eyebrow">FOLLOW THE FIRST PAPER</span><h3>Want to know when our first paper is out?</h3><p>We will only email when there is something real to share.</p></div><a className="primary-link" href="mailto:namaste@bharatnomy.com">Email the research team <ArrowUpRight size={16}/></a></div>
    </section>

    <section id="data-library" className={`content-section datasets-section section-${format}`}>
      <div className="section-kicker"><span>02 / OPEN DATA</span><span>PRE-RELEASE / SCHEMA BUILD</span></div>
      <div className="section-title-row"><div><p className="eyebrow">THE DATA LIBRARY</p><h2>{originalResearch.datasetStatus}</h2><p className="section-lede">{originalResearch.datasetIntro}</p></div><div className="data-mark"><Layers3 size={27}/><span>OPEN BY DESIGN</span></div></div>
      <div className="dataset-methods">{[
        ['A','Original survey data','Collected directly, for questions where existing data does not go deep enough.'],
        ['B','Cleaned government data','Numbers that already exist, made usable — the unglamorous work of normalizing formats across sources.'],
        ['C','Proprietary indices','Composite measures we build ourselves, when no existing metric captures what we think matters.']
      ].map(([letter,title,text])=><div className="method-item" key={letter}><span>{letter}</span><div><h3>{title}</h3><p>{text}</p></div></div>)}</div>
      <div className="release-standard"><div className="release-standard-head"><ShieldCheck size={20}/><div><span className="eyebrow">THE STANDARD, BEFORE THE RELEASE</span><h3>Evidence first. Open formats by default.</h3></div></div><div className="release-standard-grid">
        <div><span>01 / VERIFICATION</span><p>{originalResearch.datasetVerification}</p></div>
        <div><span>02 / SCRAPING BOUNDARY</span><p>{originalResearch.scrapingBoundary}</p></div>
        <div><span>03 / DISTRIBUTION FORMAT</span><p>{originalResearch.distributionFormat}</p></div>
      </div></div>
      <div className="data-standard-note"><ShieldCheck size={18}/><p>Official Indian datasets are frequently inconsistent with one another, and reporting delays are common. Part of our data work is building around that reality rather than assuming it away.</p></div>
      <div className="section-cta"><div><span className="eyebrow">DATASET PRIORITIES</span><h3>Tell us what should exist next.</h3><p>This page will fill in as datasets go live. A specific dataset request is useful input for what we prioritize first.</p></div><a className="primary-link" href="mailto:namaste@bharatnomy.com?subject=Dataset%20suggestion">Suggest a dataset <ArrowUpRight size={16}/></a></div>
    </section>

    <section id="observatory" className={`content-section observatory-section section-${format}`}>
      <div className="section-kicker"><span>03 / DATA OBSERVATORY</span><span>INTERACTIVE DEMONSTRATOR</span></div>
      <div className="section-title-row"><div><p className="eyebrow">EXPLORE THE EVIDENCE</p><h2>{originalResearch.dashboardStatus}</h2><p className="section-lede">{originalResearch.dashboardIntro}</p></div><div className="data-mark"><MapIcon/><span>DISTRICT LENS</span></div></div>
      <div className="state-profile-intro"><div><span className="eyebrow">STATE PROFILE / PREVIEW STRUCTURE</span><h3>One state at a time. Comparable across India.</h3><p>{originalResearch.dashboardExpectation}</p></div><div className="state-preview-tag">DESIGN PREVIEW<br/>NO POPULATED FIGURES</div></div>
      <div className="state-preview-table"><div className="state-preview-caption"><span>INDICATOR</span><span>LATEST VALUE</span><span>NATIONAL RANK</span><span>TREND</span></div>{stateIndicators.map((label,i)=><div className="state-preview-row" key={label}><span>{label}</span><b>—</b><b>—</b><small>Pending data</small></div>)}</div>
      <p className="preview-disclaimer">Table shown to illustrate the intended state-profile layout. No figures are populated yet. Profiles will roll out as they clear the data-verification standard.</p>
      <DataExplorer format={format}/>
      <div className="observatory-principles">{['Sticky column headers and explicit units','Direct on-chart data labels','WCAG AAA contrast as a design target','Colour reserved for genuine data thresholds'].map((x)=><span key={x}><Check size={13}/>{x}</span>)}</div>
      <div className="design-commitment"><span className="eyebrow">DESIGN COMMITMENT</span><p>Every filter and control that changes what a dashboard shows will be visible on the screen — nothing that changes the data will be tucked behind a hidden menu.</p></div>
    </section>

    <section id="about" className={`content-section about-section section-${format}`}>
      <div className="section-kicker"><span>04 / THE INSTITUTION</span><span>INDEPENDENT BY DESIGN</span></div>
      <div className="about-feature"><div><p className="eyebrow">WHY BHARATNOMY EXISTS</p><h2>An independent research firm studying India's economy as one system.</h2></div><p>{originalResearch.about}</p></div>
      <div className="about-principles"><article><span className="eyebrow">WHY WE STARTED</span><p>{originalResearch.whyStarted}</p></article><article><span className="eyebrow">HOW WE THINK</span><p>{originalResearch.howWeThink}</p></article></div>
      <div className="why-now"><span className="eyebrow">WHY NOW</span><div>{originalResearch.whyNow.map((p,i)=><p key={i}>{p}</p>)}</div></div>
      <div className="audience-grid">{audience.map((a,i)=><div className="audience-card" key={a.title}><span>WHO THIS IS FOR / 0{i+1}</span><h3>{a.title}</h3><p>{a.text}</p></div>)}</div>
      <div className="review-capabilities"><div><span className="eyebrow">WHAT WE BRING</span><p>{originalResearch.whatWeBring}</p></div><div><span className="eyebrow">WHAT WE CHECK INDEPENDENTLY</span><p>{originalResearch.whatWeReview}</p></div></div>
      <div className="team-heading"><p className="eyebrow">THE PEOPLE</p><h3>Different disciplines. One research method.</h3></div>
      <div className="team-grid">{team.map((p,i)=><div className="team-card" key={p.name}><div className={`team-avatar avatar-${i}`}><span>{p.name.slice(0,1)}</span><i/></div><div><h4>{p.name}</h4><small>{p.role}</small><p>{p.text}</p></div></div>)}</div>
      <p className="young-firm-note">Bharatnomy is a young firm. We think that is worth stating plainly, not hiding.</p>
    </section>

    <section id="standards" className={`content-section standards-section section-${format}`}>
      <div className="section-kicker"><span>05 / EDITORIAL STANDARD</span><span>THE RULES WE WORK BY</span></div>
      <div className="section-title-row"><div><p className="eyebrow">TRUST IS A PRACTICE</p><h2>The standards behind everything we publish.</h2><p className="section-lede">{originalResearch.standards}</p></div><div className="data-mark"><BookOpen size={28}/><span>PUBLIC METHOD</span></div></div>
      <div className="hard-lines"><span className="eyebrow">NON-NEGOTIABLES / HARD LINES</span>{nonNegotiables.map((line,i)=><div key={line}><b>0{i+1}</b><p>{line}</p></div>)}</div>
      <div className="standard-list">{standards.map((s,i)=><div className="standard-row" key={s.title}><span>0{i+1}</span><h3>{s.title}</h3><p>{s.text}</p></div>)}</div>
      <div className="tradeoff-rules"><span className="eyebrow">HOW WE RESOLVE TRADE-OFFS</span>{tradeoffs.map((line,i)=><div key={line}><span>0{i+1}</span><p>{line}</p></div>)}</div>
      <div className="tradeoff-note"><span>DECISION ORDER WHEN PRIORITIES CONFLICT</span><strong>Empirical accuracy <i>→</i> Non-partisan neutrality <i>→</i> Stakeholder utility <i>→</i> Commercial viability</strong></div>
      <p className="funding-note">Funding transparency: details of Bharatnomy's funding and ownership structure will be published here once finalized.</p>
    </section>

    <section id="careers" className={`content-section careers-section section-${format}`}>
      <div className="career-card"><div><p className="eyebrow">06 / WORK WITH US</p><h2>We're building the team. Early is the best time to shape what this becomes.</h2><p>Bharatnomy is a young firm, which means the people who join now will have an outsized hand in what it becomes — not just the research, but how we work and what “rigorous but readable” ends up meaning in practice.</p><p>We are not running a formal hiring process yet, but we are always interested in hearing from people who think across disciplines rather than staying in one lane: economists who read policy, policy people who understand markets, researchers who can write for a reader who is not a specialist.</p><p>If that is you, tell us what you would want to work on, not just what you have done.</p><a className="primary-link" href="mailto:namaste@bharatnomy.com">Email namaste@bharatnomy.com <ArrowUpRight size={16}/></a></div><div className="career-art"><div className="career-stamp">BN<br/>OPEN<br/>MINDS</div><span>ECONOMICS × POLICY × FINANCE × LAW</span></div></div>
    </section>
    <footer className={`site-footer footer-${format}`}><div className="footer-brand"><div className="brand-symbol"><span/><span/><span/></div><strong>Bharatnomy</strong><small>INDEPENDENT ECONOMIC RESEARCH</small></div><p>Independent, evidence-based research on India's economy for citizens and market actors. Every claim is verified. Every insight we publish will be open.</p><div className="footer-links"><a href="#research">Research</a><a href="#data-library">Datasets</a><a href="#observatory">Visualizations</a><a href="#about">About</a><a href="#standards">Standards</a><a href="#careers">Careers</a><a href="mailto:namaste@bharatnomy.com">Contact</a></div><div className="footer-bottom"><span>© 2026 Bharatnomy</span><span>This platform maintains no partisan political affiliation.</span></div></footer>
  </>;
}

function MapIcon(){return <svg width="30" height="30" viewBox="0 0 30 30" fill="none"><path d="M4 8L11 4L19 7L26 4V22L19 26L11 23L4 26V8Z" stroke="currentColor" strokeWidth="1.5"/><path d="M11 4V23M19 7V26" stroke="currentColor" strokeWidth="1.5"/><circle cx="16" cy="14" r="2.5" fill="currentColor"/></svg>}
