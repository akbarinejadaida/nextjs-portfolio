import React from 'react'
import Image from 'next/image'
import Tab, { TabItem } from './tab'

const tabItems: TabItem[] = [
  {
    key: 'Skills',
    content: (
      <ul className='text-sm list-disc pl-2'>
        <li>NextJs</li>
        <li>ReactJs</li>
        <li>VueJs</li>
        <li>Tailwind</li>
        <li>SCSS</li>
        <li>NestJs</li>
        <li>Rest API</li>
        <li>Graphql</li>
      </ul>
    )
  },
  {
    key: 'Education',
    content: (
      <div className="flex flex-col text-sm">
        <span>Bachelor in Computer Engineering | September 2019 - June 2023</span>
        <span>Shiraz University, Shiraz, Fars, Iran</span>
      </div>
    )
  },
  {
    key: 'Experiences',
    content: (
      <div className="flex flex-col text-sm">
        <span>Full Stack Developer | November 2019 – October 2023</span>
        <span>Evoteam, Shiraz, Fars, Iran</span>

        <ul className='text-sm list-disc pl-2 my-4'>
          <li>Contributed to onboarding new team members</li>
          <li>Led a team of developers, ensuring the successful delivery of a Storybook with 2 design systems</li>
          <li>Led cross-functional teams in Agile environments, ensuring successful project delivery</li>
          <li>Collaborated with designers, product managers, team members, and stakeholders for project success</li>
        </ul>
      </div>
    )
  }
]

export default function AboutSection() {
  return (
    <section>
      <div className='md:grid md:grid-cols-2 gap-8 items-start py-8 sm:py-16'>
        <Image src={'/images/about-image.png'} alt='about me image' width={500} height={500}></Image>

        <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
          <h2 className=''>About Me</h2>

          <p className='text-sm lg:text-base'>
            Over the past 4 years, I've immersed myself in the dynamic world of web development, specializing in Vue.js, React, Next.js, Tailwind CSS, and Nest.js. Whether it's crafting intuitive user interfaces or architecting robust backend systems, I thrive on tackling challenges and unraveling complex problems.
            With each project I undertake, I bring not just technical expertise, but also a relentless drive to push boundaries and deliver solutions that exceed expectations.
          </p>

          <Tab items={tabItems} />
        </div>
      </div>
    </section>
  )
}
