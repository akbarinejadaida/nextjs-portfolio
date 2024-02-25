import React from 'react'
import { CodeBracketIcon, EyeIcon } from '@heroicons/react/24/outline'
import Link from 'next/link';

export type ProjectCardType = {
  id: number;
  image: String;
  title: String;
  description: String;
  tag: Array<String>;
  gitUrl: String;
  previewUrl: String;
}

export default function ProjectCard({ image, title, description, gitUrl, previewUrl }: ProjectCardType) {
  return (
    <div>
      <div className='h-52 md:h-72 rounded-t-xl relative group' style={{ background: `url(${image})`, backgroundSize: 'cover' }} >
        <div className='absolute items-center justify-center top-0 left-0 right-0 w-full h-full bg-shadow opacity-0 hidden group-hover:opacity-80 group-hover:flex transition-all duration-500'>
          <Link href={gitUrl} className='h-12 w-12 border-2 relative rounded-full border-subtitle m-1 hover:border-foreground group/link'>
            <CodeBracketIcon className='h-7 w-7 cursor-pointer text-subtitle absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group-hover/link:text-foreground' />
          </Link>

          <Link href={previewUrl} className='h-12 w-12 border-2 relative rounded-full border-subtitle m-1 group/link hover:border-foreground'>
            <EyeIcon className='h-7 w-7 cursor-pointer text-subtitle absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group-hover/link:text-foreground' />
          </Link>
        </div>
      </div>

      <div className='text-foreground rounded-b-xl bg-shadow py-6 px-4'>
        <h5>
          {title}
        </h5>

        <p className='text-subtitle'>
          {description}
        </p>
      </div>
    </div>
  )
}
