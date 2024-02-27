'use client';
import React from 'react';
import { TechIcons } from '@/constants/constants';
import { motion } from 'framer-motion';

export const Skills = ({ dictionary }) => {
  return (
    <section
      id='skills'
      className='flex flex-col my-0 mx-auto items-center w-full relative bg-black py-8'>
      <div className='max-w-[1440px] w-full px-10'>
        <h2 className='text-xl mb-4 sm:text-3xl text-white mr-auto'>
          {dictionary.title}
        </h2>
        <p className='text-slate-300'>{dictionary.desc}</p>

        <motion.div className='grid grid-cols-2 md:grid-cols-3  gap-6 md:gap-10 mt-10'>
          {TechIcons.map((info, idx) => {
            return (
              <motion.div
                key={idx}
                className='pointer-events-none flex flex-col items-center justify-start max-w-52 sm:max-w-xs text-center'
                initial='initial'
                animate={['initialHide', 'animate']}
                variants={{
                  initial: {
                    translateX: 0,
                    opacity: 0.3,
                  },
                  initialHide: {
                    opacity: 1,
                  },
                  animate: {
                    translateX: idx % 2 === 0 ? -100 : 100,
                    transition: {
                      duration: 5,
                      repeat: Infinity,
                      delay: idx % 2 === 0 ? 0.1 + idx / 2 : 0.2 + idx / 4,
                      repeatType: 'reverse',
                      ease: 'linear',
                    },
                  },
                }}>
                {info.image}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
