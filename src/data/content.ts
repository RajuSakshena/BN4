export const researchLenses = [
  { number: '01', title: 'Climate adaptation & resilience', short: 'CLIMATE', description: "How India's institutions are, and are not, preparing for a hotter, less predictable future.", lens: 'Institutional readiness · Climate risk · Resilience infrastructure', tone: 'moss' },
  { number: '02', title: 'Energy policy & markets', short: 'ENERGY', description: "The economics behind India's coal-to-renewables transition, not just the headlines.", lens: 'Transition economics · Policy design · Market signals', tone: 'blue' },
  { number: '03', title: 'Macroeconomic health', short: 'MACRO', description: 'National growth, inflation, and fiscal capacity, read plainly and traced to primary data.', lens: 'Growth · Inflation · Fiscal capacity', tone: 'amber' },
  { number: '04', title: 'Equity markets', short: 'EQUITIES', description: 'What is actually moving Indian capital markets, and why, separated from market narrative.', lens: 'Capital markets · Market drivers · Investor behaviour', tone: 'rose' },
  { number: '05', title: 'Commodity markets', short: 'COMMODITIES', description: 'The real-economy forces behind commodity prices, not the headline number alone.', lens: 'Price formation · Supply dynamics · Real economy', tone: 'violet' }
];

export const originalResearch = {
  hero: "India's economy, read as one connected system.",
  intro: "Bharatnomy is an independent research firm studying India's economy layer by layer, because they move together. We combine economics, finance, law, and policy into a single research method. Every claim we publish will carry a citation, and every dataset will be open.",
  mission: 'Our mission is to democratize high-rigor, home-grown research so Indian citizens and market actors can make informed decisions — and hold government accountable.',
  whyNow: [
    'Two forces make this work urgent. Democratic backsliding and social-media-driven misinformation are weakening the evidence base behind public decisions. At the same time, most existing research on India’s economy defaults toward partisan framing or sits behind institutional paywalls — not because researchers set out to be partisan or exclusive, but because that is the path of least resistance.',
    'Bharatnomy is built against that default. We are independent by design, and we are writing for people outside the room where policy gets written.'
  ],
  researchStatus: 'We have not published a paper yet.',
  researchIntro: 'This page states our method and current status directly, instead of presenting placeholder output as finished work. Below: how we plan to work, and what is already underway.',
  heatProject: 'Tracking Heat Action Plans across Maharashtra',
  heatDescription: 'Indian districts are increasingly required to hold Heat Action Plans, but having a plan on paper and implementing one on the ground are different facts. We are building a district-by-district record of what is documented versus what is operating.',
  datasetStatus: 'No dataset is public yet. Here is what we are building toward.',
  datasetIntro: 'Reliable research depends on reliable data, and reliable data on India is often the harder half of the work — scattered across sources, inconsistently defined, or simply hard to find. Building that properly, before releasing anything, is the point of this page.',
  dashboardStatus: 'India, state by state — still in the build phase.',
  dashboardIntro: 'Numbers rarely mean much in isolation. We are building one interactive profile per Indian state, covering climate resilience, energy, macroeconomic health, and market activity, designed to be explored rather than only read.',
  whyStarted: "Most research on India's economy is built to serve one audience: other specialists. We are building ours for a wider one — investors, civil servants, journalists, and anyone who wants to understand how the country actually works, not just what happened this week.",
  howWeThink: "A heatwave is simultaneously a climate story, an energy story, an agriculture story, and a fiscal story. Research that addresses only one of those threads produces an incomplete answer. Our method puts law, economics, policy, and finance in the same room on the same question, from the start of a project rather than as an afterthought.",
  about: "Climate, energy, capital markets, and public policy interact continuously. Bharatnomy studies them that way, rather than in separate silos.",
  whatWeBring: "Multidisciplinary synthesis across law, economics, policy, and finance, and a habit of grounding technical findings in India's social and cultural realities rather than treating them as abstractions.",
  whatWeReview: "Commercial market mechanics and dashboard or product design sit outside our founding expertise. Both get independent review before anything reaches a reader.",
  heatProjectPhase: "Architecture — establishing the interdisciplinary methodology and topic-selection criteria.",
  heatProjectBlocker: "Finalizing topic-selection heuristics.",
  heatProjectMilestone: "Completing selection of the initial two to three research topics.",
  topicSelection: "A topic is in scope when it meets a high bar for national significance, has clear utility for citizens or market actors, and touches at least two of law, economics, policy, and finance. We rule out siloed, single-discipline topics and purely theoretical work without actionable public or market utility, regardless of how interesting the underlying academic question is.",
  datasetVerification: "Government data is used with source attribution; every other secondary data point requires two independent sources before use.",
  scrapingBoundary: "Public-domain datasets only, collected within each source's rate limits.",
  distributionFormat: "Open formats — CSV and JSON — with source and collection-date metadata attached to every file.",
  dashboardExpectation: "Each profile will let a reader move between the national picture and a single state, or compare states against each other directly. Profiles will roll out as they clear our data-verification standard, rather than all at once.",
  standards: 'These are commitments, not aspirations. Where a standard is not yet finalized, we say so directly rather than leaving it vague.'
};

export const outputTypes = [
  { title: 'Working papers', text: 'The full technical version, for readers who want the complete method and underlying data.' },
  { title: 'Reports', text: 'Longer-form, structured analysis meant to stand on its own without a companion paper.' },
  { title: 'Policy briefs', text: 'Short and direct, built for readers who need the conclusion and its practical implication quickly.' }
];

export const audience = [
  { title: 'Civic actors & citizens', text: 'Transparent, evidence-based data and systems-level analysis that connects issues most coverage treats in isolation, so a long-term national impact is easier to evaluate.' },
  { title: 'Market & institutional actors', text: 'Rigorous, non-partisan primary datasets and macro-level risk assessments that integrate local socio-cultural context and regulatory tail-risk, not just headline indicators.' }
];

export const team = [
  { name: 'Sanchit', role: 'Partner', text: "Background in finance and wealth management, bringing a practitioner's view of capital markets and how policy decisions move money in practice, not only on paper." },
  { name: 'Kartik', role: 'Partner', text: 'Policy and social-impact professional who runs his own think-and-do tank. Previously worked with the World Bank in Washington, D.C. and with the Maharashtra government, and studied public policy at the University of Chicago.' },
  { name: 'Srikar', role: 'Partner & CEO', text: 'Trained originally in the natural sciences, with a master’s degree in medical nanotechnology, before moving into policy research. Studied public policy at the University of Chicago and has since focused on qualitative, field-based research.' }
];

export const standards = [
  { title: 'Independence', text: 'Bharatnomy is not affiliated with any political party, government body, or advocacy organization. We choose research questions based on what we think matters, not on what serves a particular outcome.' },
  { title: 'Methodology, shown not just claimed', text: 'Every working paper and report will include a clear account of its data sources and methods, including limitations. If a number is uncertain, we say so, rather than presenting false precision.' },
  { title: 'Sourcing', text: 'We rely on primary data wherever possible — government data, original surveys, and direct fieldwork — and we cite sources plainly enough that a reader can check our work independently.' },
  { title: 'Corrections', text: 'If we get something wrong, we say so publicly with a visible correction note, not a silent edit.' },
  { title: 'Funding transparency', text: "Details of Bharatnomy's funding and ownership structure will be published here once finalized." }
];
