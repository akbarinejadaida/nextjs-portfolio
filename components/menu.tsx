'use client'

import React, { useState } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import { LinkType } from './navbar-link'
import MenuOverlay from './menu-overlay'

type PropType = {
  links: Array<LinkType>
}

export default function Menu({ links }: PropType) {
  const [navbarOpen, setNavbarOpen] = useState(false)

  return (
    <>
      {!navbarOpen ?
        (
          <button onClick={() => setNavbarOpen(true)} className='flex items-center p-2 border rounded-full border-slate-200 text-slate-200 hover:text-foreground hover:border-foreground'>
            <Bars3Icon className='h-5 w-5' />
          </button>
        ) :
        (
          <button onClick={() => setNavbarOpen(false)} className='flex items-center p-2 border rounded-full border-slate-200 text-slate-200 hover:text-foreground hover:border-foreground'>
            <XMarkIcon className='h-5 w-5' />
          </button>
        )
      }

      {navbarOpen ? <MenuOverlay links={links} /> : null}
    </>
  )
}
