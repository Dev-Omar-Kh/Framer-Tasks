import React, { useEffect, useState } from 'react';
import {AnimatePresence, motion} from 'framer-motion'

import './App.css';

const l5Variants = {

  hidden : {opacity : 0},
  visible : {opacity : 1 , transition : {duration : 0.5 , when : 'beforeChildren' , staggerChildren : 0.1}}

}

const l5ChVariants = {

  hidden : {y : 20 , opacity : 0},
  visible : {y : 0 , opacity : 1 , transition : {duration : 0.5}}

}

const repeatVariants = {

  hidden : {x: 50},
  visible : {x: -50 , transition : {type : 'wheel' , duration : 1.5 , repeat : Infinity , repeatType : 'mirror'}}

}

export default function App() {

  const [countL2, setCountL2] = useState(true);

  useEffect(() => {

    setTimeout(() => {

      setCountL2(false);

    } , 3000)

  } , []);

  return <React.Fragment>

    {/* ====== lesson-1 ====== */}

    <div className='container'>

      <div className="title"><p>Initial - Animate</p></div>

      <motion.button initial={{y : 20 , opacity : 0}} animate={{y : 0 , opacity : 1}}>Motion</motion.button>

    </div>

    {/* ====== lesson-2 ====== */}

    <div className='container'>

      <div className="title"><p>Exit - Animate Presence</p></div>

      <AnimatePresence>

        {countL2 && <motion.button initial={{y : 20 , opacity : 0}} animate={{y : 0 , opacity : 1}} exit={{y : 20 , opacity : 0}}>Motion</motion.button>}

      </AnimatePresence>

    </div>

    {/* ====== lesson-3 ====== */}

    <div className='container'>

      <div className="title"><p>Transition</p></div>

      <motion.button initial={{y : 100 , opacity : 0}} animate={{y : 0 , opacity : 1}} transition={{duration : 2 , delay : 1 , type : 'tween'}}>Motion</motion.button>

      <motion.button initial={{x : 50 , opacity : 0}} animate={{x : 0 , opacity : 1}} 
        transition={{duration : 2 , type : 'spring' , stiffness : 300 , mass : 1 , damping : 10}}
      >Motion-1</motion.button>

    </div>

    {/* ====== lesson-4 ====== */}

    <div className='container'>

      <div className="title"><p>Gestures</p></div>

      <motion.button initial={{y : 20 , opacity : 0}} animate={{y : 0 , opacity : 1}}
        whileHover={{scale : 1.1}}
      >Motion</motion.button>

      <motion.button initial={{y : 20 , opacity : 0}} animate={{y : 0 , opacity : 1}}
        whileTap={{scale : 0.8}}
      >Motion</motion.button>

      <motion.button initial={{y : 20 , opacity : 0}} animate={{y : 0 , opacity : 1}}
        whileInView={{rotate : 360}}
      >Motion</motion.button>

      <motion.button initial={{y : 20 , opacity : 0}} animate={{y : 0 , opacity : 1}}
        drag
        dragConstraints = {{left : 0 , right : 0 , top : 0 , bottom : 0}}
        whileDrag={{backgroundColor : 'transparent' , border : ' 1px solid cadetblue' , color : 'cadetblue'}}
      >Motion</motion.button>

      <motion.input placeholder='Focus to show action' whileFocus={{scale : 1.1}}/>

    </div>

    {/* ====== lesson-5 ====== */}

    <motion.div variants={l5Variants} initial="hidden" animate="visible" className='container'>

      <div className="title"><p>Variants</p></div>

      {[1, 2, 3, 4].map((item) => <motion.button key={item} variants={l5ChVariants}>Motion</motion.button>)}

    </motion.div>

    {/* ====== lesson-6 ====== */}

    <div className='container'>

      <div className="title"><p>Repeat</p></div>

      <motion.button variants={repeatVariants} initial='hidden' animate='visible'>Motion</motion.button>

    </div>

  </React.Fragment>

}