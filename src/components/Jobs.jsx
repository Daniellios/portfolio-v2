'use client';
import React from 'react';
import { Jobs } from '@/constants/constants';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { IoMdArrowDropright } from 'react-icons/io';

export const Expierience = ({ dictionary }) => {
  return (
    <section
      id='experience'
      className='flex flex-col my-0 mx-auto items-center w-full relative bg-black py-8'>
      <div className='max-w-[1440px] w-full px-10'>
        <h2 className='text-xl sm:text-3xl text-white mb-10'>
          {dictionary.title}
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-8'>
          {Jobs.map((job, jIdx) => (
            <Card key={job.id + jIdx} className='bg-black border-none p-0'>
              <CardHeader className='p-0'>
                <CardTitle className='text-white text-center text-[28px] leading-8 tracking-normal'>
                  {dictionary[`j${jIdx}T`]}
                </CardTitle>
                <CardTitle className='text-orange-400 text-center text-[24px] leading-8 tracking-normal'>
                  @ {job.company}
                </CardTitle>
                <CardTitle className='text-white text-center text-base leading-8 tracking-normal'>
                  {dictionary[`j${jIdx}D`]}
                </CardTitle>

                <CardContent className='flex flex-col gap-4'>
                  {job.tasks.map((task, tIdx) => {
                    return (
                      <li
                        key={job.id + task.length}
                        className='text-white flex gap-1 text-[1em] list-none text-left items-center justify-start'>
                        <div className='felx justify-center items-center text-orange-400'>
                          <IoMdArrowDropright />
                        </div>
                        {dictionary[`j${jIdx}TASK${tIdx}`]}
                      </li>
                    );
                  })}
                </CardContent>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
