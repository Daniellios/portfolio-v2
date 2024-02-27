'use client';
import React, { useEffect, useRef } from 'react';
import useTranslation from 'next-translate/useTranslation';
import { AnimatePresence, motion } from 'framer-motion';
import useOnClickOutside from '@/hooks/useOnClickOutside';
import { HeaderTitles } from '@/constants/constants';
import Link from 'next/link';
import { AiFillGithub, AiOutlineClose } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from './ui/sheet';
import { useParams } from 'next/navigation';

export const Header = ({ dictionary }) => {
  const buttonRef = useRef(null);
  const wrapperRef = useRef();
  const { lang } = useParams();

  // useOnClickOutside(wrapperRef, () => setIsModalOpen(false));

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{
        y: 0,
      }}
      className='bg-black w-full px-8 py-6 flex flex-row items-center z-[40] fixed opacity-90'
      transition={{ y: { duration: 0.2 } }}>
      <div className='w-full max-w-[1980px] flex flex-row justify-end sm:justify-between'>
        <div className='hidden sm:flex items-center gap-4'>
          {HeaderTitles.map((item, index) => (
            <Link
              key={item + index}
              href={item.link}
              className='font-semibold capitalize text-[#fefefe] hover:text-orange-400 cursor-pointer transition-all ease-linear'>
              {dictionary[`title${index}`]}
            </Link>
          ))}
        </div>
        <div className='flex items-center justify-start w-full sm:w-auto'>
          <div className='flex space-x-4 uppercase items-center mr-10'>
            <Link
              href='/ru'
              locale='ru'
              className={`${
                lang === 'ru' ? 'text-orange-400' : 'text-white'
              } transition-all hover:text-orange-400 text-xl`}>
              RU
            </Link>
            <Link
              href='/en'
              locale='en'
              className={`${
                lang === 'en' ? 'text-orange-400' : 'text-white'
              } transition-all hover:text-orange-400 text-xl`}>
              EN
            </Link>
          </div>

          <div className='hidden sm:flex gap-4 justify-center items-center'>
            <Link
              className='text-white p-1'
              href='https://github.com/Daniellios'
              target='_blank'
              rel='noopener noreferrer'>
              <div className='hover:text-orange-400 scale-[1.01] cursor-pointer transition-all'>
                <AiFillGithub size='2rem' />
              </div>
            </Link>

            <Link
              href='https://hh.ru/resume/92b2ea36ff09bd84230039ed1f6f644f304b39'
              target='_blank'
              rel='noopener noreferrer'>
              <div className='transition-all w-8 h-8 flex bg-white items-center justify-center text-black rounded-full hover:bg-orange-400 scale-[1.01] cursor-pointer'>
                hh
              </div>
            </Link>
          </div>
        </div>

        <Sheet className='sm:hidden' ref={wrapperRef}>
          <SheetTrigger className='flex text-white transition-all w-7 h-7 hover:text-orange-400 cursor-pointer sm:hidden'>
            <GiHamburgerMenu size={'2.5rem'} />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetDescription>
                <div className='flex flex-col items-center justify-start gap-4'>
                  {HeaderTitles.map((item, index) => (
                    <Link
                      key={item + index}
                      href={item.link}
                      className='font-semibold capitalize text-black text-2xl hover:text-orange-400 cursor-pointer transition-all ease-linear'>
                      {dictionary[`title${index}`]}
                    </Link>
                  ))}
                </div>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </motion.div>
  );
};
