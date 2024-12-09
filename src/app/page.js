"use client"

import data from './data/data.json';
import clsx from 'clsx';
import { useState } from 'react';
import image4 from './images/1.webp';
import image3 from './images/2.webp';
import image2 from './images/3.webp';
import image1 from './images/4.webp';
import Image from 'next/image';
import Link from 'next/link';

// NOTE: This SVG arrow is the arrow that Stanford already has in use.
const Arrow = ({classes}) => (
  <svg className={classes} width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.1094 9.79688L12.9375 17.0156L12.1406 17.8125L10.5469 16.2188L11.3438 15.4219L16.5938 10.125H1.125H0V7.875H1.125H16.5938L11.3438 2.625L10.5469 1.82812L12.1406 0.234375L12.9375 1.03125L20.1094 8.20312L20.9062 9L20.1094 9.79688Z" fill="#8C1515"/>
  </svg>
);

const LinkItem = ({title, description, url = "#", last, showDescription, showUnderline, gridCols}) => {
  return (
    <li className={clsx(
        'group text-long flex flex-row gap-4 items-center w-full space-y-0 border-[#cabb91] border-solid transition-all hover:cursor-pointer hover:bg-[#f8f4ea]',
        {'border-b': !last}, 
        // NOTE: Logic for spacing.
        {'p-4':gridCols === 1 && showDescription}, 
        {'px-4 py-2':gridCols === 1 && !showDescription}, 
        {'p-4':gridCols === 2 && showDescription}, 
        {'px-4 py-2':gridCols === 2 && !showDescription}, 
        {'px-4 py-3':gridCols === 3 && showDescription}, 
        {'px-4 py-2':gridCols === 3 && !showDescription}
      )}>
      <div className='flex-grow font-normal'>
        <p className={
          clsx('text-xl m-0 text-[#4d4f53] group-hover:text-stanford text-balance')
        }>
          <a href="#" className={clsx(
            "text-[#4d4f53]",
            "group-hover:text-stanford group-hover:decoration-stanford",
            // NOTE: logic for font weight.
            {'font-bold':showDescription},
            {'!font-normal':!showDescription},
            {'underline decoration-1 underline-offset-4':showUnderline},
            )}>{title}</a>
        </p>
        {showDescription && <p className='text-lg m-0 text-[#4d4f53]'>{description}</p>}
      </div>
      <Arrow classes="ml-auto transition-all w-[22px] flex-shrink-0 opacity-0 -translate-x-8 group-hover:opacity-100 group-hover:translate-x-0"/>
    </li> 
  )
}

export default function Home() {
  const [showImage, setShowImage] = useState(false);
  const [showDescription, setShowDescription] = useState(true);
  const [gridCols, setGridCols] = useState(1);
  const [showUnderline, setShowUnderline] = useState(false);

  return (
    <div>
      <div className={clsx(
            'grid gap-12', 
            {'grid-cols-1':gridCols === 1},
            {'grid-cols-2':gridCols === 2},
            {'grid-cols-3':gridCols === 3}
          )}>

          {Object.keys(data).map((key, index) => (
            <div key={key} className='mt-16 -ml-4'>
              
              {(showImage && gridCols > 1 ) &&
                <div className='aspect-video mb-4'>
                  <Image src={[image1, image2, image3, image4][index % 4]} alt={key} objectFit='cover' className='w-full h-full object-cover' unoptimized />
                </div>
              }
              
              <div className='flex flex-row gap-4 items-center border-b border-[#cabb91] border-solid pb-4 pr-0 pl-4'>
                
                {(showImage && gridCols === 1 ) && 
                  <div className='aspect-video bg-slate-500 min-w-[100px]'>
                    <Image src={[image1, image2, image3, image4][index % 4]} alt={key} objectFit='cover' className='w-full h-full object-cover max-w-[200px]' unoptimized />
                  </div>
                }
                
                <h2 className={clsx(
                  '!font-bold text-stanford normal-case !my-0 text-balance',
                  {'text-3xl':gridCols < 3},
                  {'text-2xl':gridCols === 3}
                )}>{key}</h2>

              </div>
              
              <ul className="mt-0">
                {data[key].map((item, itemIndex) => (
                  <LinkItem 
                    key={itemIndex} 
                    title={item.title} 
                    description={item.description} 
                    url={item.url} 
                    last={itemIndex === data[key].length - 1} 
                    showDescription={showDescription}
                    showUnderline={showUnderline}
                    gridCols={gridCols}
                  />
                ))}
              </ul>

            </div>
          ))}
        </div>)

      {/* Controls */}
      <section className='fixed bottom-8 left-8 right-8 bg-slate-600 text-white px-8 py-4 rounded-lg flex flex-row gap-8 items-center'>
        <div className='font-bold uppercase'>Settings</div>
          <div>
            <label htmlFor='showImage' className='font-bold mr-2'>Image</label>
            <input 
              type='checkbox' 
              id='showImage' 
              className='bg-slate-800 text-white rounded-lg p-2'
              onChange={(e) => setShowImage(e.target.checked)}
            />
          </div>
          <div>
            <label htmlFor='showDescription' className='font-bold mr-2'>Description</label>
            <input 
              type='checkbox' 
              id='showDescription'
              checked={showDescription} 
              className='bg-slate-800 text-white rounded-lg p-2'
              onChange={(e) => setShowDescription(e.target.checked)}
            />
          </div>

          <div>
            <label htmlFor='showUnderline' className='font-bold mr-2'>Underline links</label>
            <input 
              type='checkbox' 
              id='showUnderline'
              checked={showUnderline} 
              className='bg-slate-800 text-white rounded-lg p-2'
              onChange={(e) => setShowUnderline(e.target.checked)}
            />
          </div>
          <div>
            <label htmlFor='gridCols' className='font-bold mr-2'>Grid Columns</label>
            <input 
              type='number' 
              id='gridCols' 
              className='bg-slate-800 text-white rounded-lg p-2'
              defaultValue={gridCols}
              min={1}
              max={3}
              onChange={(e) => setGridCols(Number(e.target.value))}
            />
          </div>
          <Link href="/round-1" className="bg-slate-400 inline-block rounded px-4 py-2 text-slate-900 hover:text-slate-900 ml-auto">Visit Round 1</Link>
      </section>
    </div>
  );
}
