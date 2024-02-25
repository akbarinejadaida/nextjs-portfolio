import React from 'react'
import Image from 'next/image'
import TypeAnimation from '@/components/type-animation'

const sequence = [
  'Aida', 1000, 'Full-Stack Developer', 1500
]

export default function Hero() {
  return (
    <section>
      <div className='grid grid-cols-1 sm:grid-cols-12'>
        <div className='col-span-7 place-self-center text-center sm:text-left'>
          <h1 className='mb-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold'>
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>Hello, I'm{' '}</span>
            <br />
            <TypeAnimation sequence={sequence} />
          </h1>

          <p className='text-subtitle text-base sm:text-lg lg:text-xl mb-6'>
            Hello, I'm Aida Akbarinezhad, a passionate Full-Stack Developer skilled in transforming innovative ideas into tangible realities using code.
            {/* With four years of experience in web development, I specialize in Vue.js, React, Next.js, Tailwind CSS, and Nest.js. My expertise lies in designing user-friendly interfaces and building robust backend systems. I relish tackling complex challenges and unearthing creative solutions, turning abstract concepts into functional digital realities. */}
          </p>

          <div>
            <button className='px-6 py-3 w-full rounded-full sm:w-fit mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white'>
              Hire Me
            </button>

            <button className='p-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-foreground mt-3'>
              <span className='block bg-background hover:bg-slate-800 rounded-full px-5 py-2'>
                Download Resume
              </span>
            </button>
          </div>
        </div>

        <div className='col-span-5 place-self-center mt-4 lg:mt-0'>
          <div className='rounded-full bg-shadow w-[250px] h-[250px] lg:w-[250px] lg:h-[250px] relative'>
            <Image src='/images/hero-image.png'
              alt='hero image'
              className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
              width={300}
              height={300} />
          </div>
        </div>
      </div>
    </section>
  )
}
