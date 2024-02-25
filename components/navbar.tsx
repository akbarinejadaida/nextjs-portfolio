import React from 'react'
import Link from 'next/link'
import NavbarLink, { LinkType } from '@/components/navbar-link'
import Menu from '@/components/menu'

const links: LinkType[] = [
  {
    name: 'About',
    link: '#about'
  },
  {
    name: 'Projects',
    link: '#projects'
  },
  {
    name: 'Contact',
    link: '#contact'
  }
]

export default function Navbar() {
  return (
    <nav className='fixed top-0 left-0 right-0 z-10 bg-background opacity-95'>
      <div className='flex flex-wrap items-center justify-between mx-auto p-4 md:p-8'>
        <Link className='text-2xl md:text-5xl font-semibold' href={'/'}>LOGO</Link>

        <div className='block md:hidden'>
          <Menu links={links} />
        </div>

        <div className='menu hidden md:block md:w-auto' id='navbar'>
          <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0'>
            {
              links.map((item, index) => (
                <li key={index}>
                  <NavbarLink link={item.link}
                    name={item.name} />
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    </nav>
  )
}
