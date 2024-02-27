import React from 'react';
import { WavyBackground } from './ui/wavy-background';

export const Hero = ({ dictionary }) => {
  return (
    <WavyBackground className='mx-auto pb-40 overflow-x-hidden'>
      <p className='text-2xl md:text-3xl lg:text-5xl text-white font-bold inter-var text-center'>
        {dictionary.welcome}
      </p>

      <p className='text-2xl md:text-3xl lg:text-5xl text-white font-bold inter-var text-center'>
        {dictionary.fullName}
      </p>
      <p className='text-2xl md:text-3xl mt-4 text-white font-normal inter-var text-center'>
        {dictionary.description}
      </p>
    </WavyBackground>
  );
};
