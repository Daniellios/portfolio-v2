'use client';
import React from 'react';
import { projects } from '@/constants/constants';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './ui/card';
import Link from 'next/link';

export const Projects = ({ dictionary }) => {
  return (
    <section
      id='projects'
      className='bg-black flex w-full justify-center flex-col items-center py-8'>
      <div className='max-w-[1440px] w-full'>
        <h2 className='text-xl mb-10 sm:text-3xl text-white mr-auto pl-10'>
          {dictionary.title}
        </h2>

        <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 w-full it px-10 max-w-[1440px]'>
          {projects.map(({ id, images, isGame, tags, source, visit }, idx) => (
            <Card key={id + idx} className='bg-transparent h-[500px]'>
              <CardContent>
                <img
                  src={images[0]}
                  alt='project image'
                  className='rounded-t-lg overflow-hidden h-52 w-full '
                />
              </CardContent>
              <CardHeader>
                <CardTitle className='text-white'>
                  {dictionary[`p${idx}`]}
                </CardTitle>
                <CardDescription className='text-slate-300'>
                  {dictionary[`d${idx}`]}
                </CardDescription>
              </CardHeader>
              <CardFooter className='flex gap-2 pb-4 flex-wrap mt-auto'>
                {tags.map((tag, i) => (
                  <li className='list-none text-white p-0' key={i}>
                    {tag}
                  </li>
                ))}
              </CardFooter>

              {isGame ? (
                <CardFooter className='flex gap-2 pb-4 mt-auto'>
                  <Link
                    href={source}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='hover:border-orange-400 inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-300 bg-[linear-gradient(110deg,#030200,45%,#31261e,55%,#030100)] bg-[length:200%_100%] px-6 font-medium text-slate-200 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-200 focus:ring-offset-2 focus:ring-offset-slate-50'>
                    Play!
                  </Link>
                </CardFooter>
              ) : (
                <CardFooter className='flex gap-2 pb-4 mt-auto'>
                  <Link
                    href={source}
                    className='hover:border-orange-400 inline-flex h-12 animate-shimmer items-center
                    justify-center rounded-md border border-slate-300
                    bg-[linear-gradient(110deg,#030200,45%,#31261e,55%,#030100)]
                    bg-[length:200%_100%] px-6 font-medium text-slate-200
                    transition-colors focus:outline-none focus:ring-2
                    focus:ring-slate-200 focus:ring-offset-2
                    focus:ring-offset-slate-50'>
                    Code
                  </Link>
                  <Link
                    target='_blank'
                    rel='noopener noreferrer'
                    href={visit}
                    className='hover:border-orange-400 inline-flex h-12 animate-shimmer items-center
                    justify-center rounded-md border border-slate-300
                    bg-[linear-gradient(110deg,#030200,45%,#31261e,55%,#030100)]
                    bg-[length:200%_100%] px-6 font-medium text-slate-200
                    transition-colors focus:outline-none focus:ring-2
                    focus:ring-slate-200 focus:ring-offset-2
                    focus:ring-offset-slate-50'>
                    Visit
                  </Link>
                </CardFooter>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
