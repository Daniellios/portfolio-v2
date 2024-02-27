'use client';
import React from 'react';
import Link from 'next/link';
import { AiFillGithub } from 'react-icons/ai';
import { FaTelegram } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';

export const Footer = () => {
  return (
    <section className='bg-black w-full flex justify-center items-center p-20 pb-5'>
      <div className='max-w-[1440px] flex flex-col items-center gap-2'>
        <div className='flex items-center gap-2'>
          <Link
            className='text-white p-1'
            href='https://github.com/Daniellios'
            target='_blank'
            rel='noopener noreferrer'>
            <div className='hover:text-orange-400 hover:scale-125  cursor-pointer transition-all'>
              <AiFillGithub size='2rem' />
            </div>
          </Link>
          <Link
            className='text-white p-1'
            href='mailto:danielo49134@gmail.com'
            target='_blank'
            rel='noopener noreferrer'>
            <div className='hover:text-orange-400 hover:scale-125 cursor-pointer transition-all '>
              <SiGmail size='2rem' />
            </div>
          </Link>
          <Link
            href='https://hh.ru/resume/92b2ea36ff09bd84230039ed1f6f644f304b39'
            target='_blank'
            className='p-1'
            rel='noopener noreferrer'>
            <div className='transition-all w-8 h-8 flex bg-white items-center justify-center text-black rounded-full hover:bg-orange-400 hover:scale-125 cursor-pointer'>
              hh
            </div>
          </Link>
          <Link
            className='text-white p-1'
            href='https://t.me/DaBlinni'
            target='_blank'
            rel='noopener noreferrer'>
            <div className='hover:text-orange-400 hover:scale-125 cursor-pointer transition-all'>
              <FaTelegram size='2rem' />
            </div>
          </Link>
        </div>

        <Link
          href='#'
          className='text-gray-400 hover:text-orange-400 transition-all mt-10'>
          Designed & Built by Daniil Blinnikov
        </Link>
      </div>
    </section>
  );
};
