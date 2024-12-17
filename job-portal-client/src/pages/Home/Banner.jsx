import React from 'react';
import { easeIn, motion } from "motion/react";
import team1 from '../../assets/Team/happyteam1.jpg';
import team2 from '../../assets/Team/happyteam2.jpg';

const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-96">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="flex-1">
          <motion.img
            src={team2}
            animate={{y:[50, 100, 50]}}
            transition={{duration:10, repeat:Infinity}}
            className="
            max-w-sm  w-72 rounded-t-[40px] 
            rounded-br-[40px] shadow-2xl
            border-l-[6px] border-b-[6px] border-blue-600
            "
          />
          <motion.img
            src={team1}
            animate={{x:[100, 150, 100]}}
            transition={{duration:10, delay:5, repeat:Infinity}}
            className="
            max-w-sm  w-72 rounded-t-[40px] 
            rounded-br-[40px] shadow-2xl
            border-l-[6px] border-b-[6px] border-blue-600
            "
          />
        </div>
        <div className="flex-1">
          <motion.h1
            animate={{ x: 50 /*,color: ["blue"]*/ }}
            transition={{
              duration: 2,
              delay: 1,
              ease: easeIn,
              repeat: Infinity,
            }}
            className="text-5xl font-bold"
          >
            Latest{" "}
            <motion.span
              animate={{ color: ["#ecff33", "#33ffe3", "#ff6133"] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              Job
            </motion.span>{" "}
            For You!
          </motion.h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;