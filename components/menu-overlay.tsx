import React from 'react'
import NavbarLink, { LinkType } from './navbar-link'

type PropType = {
  links: Array<LinkType>
}

export default function MenuOverlay({ links }: PropType) {
  return (
    <ul className='flex flex-col py-4 items-center fixed top-14 left-0 right-0 bg-background opacity-95'>
      {
        links.map((item, index) => (
          <li key={index}>
            <NavbarLink link={item.link}
              name={item.name} />
          </li>
        ))
      }
    </ul>
  )
}
