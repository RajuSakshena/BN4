import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import FormatSwitcher, { type FormatKey } from './components/FormatSwitcher';
import GridFormat from './layouts/GridFormat';
import ObservatoryFormat from './layouts/ObservatoryFormat';
import LedgerFormat from './layouts/LedgerFormat';

export default function App() {
  const [format, setFormat] = useState<FormatKey>('grid');
  return <>
    <FormatSwitcher active={format} onChange={setFormat}/>
    <AnimatePresence mode="wait">
      <motion.div key={format} className="format-stage" initial={{opacity:0,y:8}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-6}} transition={{duration:.24}}>
        {format === 'grid' && <GridFormat/>}
        {format === 'observatory' && <ObservatoryFormat/>}
        {format === 'ledger' && <LedgerFormat/>}
      </motion.div>
    </AnimatePresence>
    <div className="demo-global-note">DESIGN EXPLORATION · NOT THE FINAL LIVE WEBSITE</div>
  </>;
}
