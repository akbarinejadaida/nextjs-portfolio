import React from 'react'
import Link from 'next/link'

export type LinkType = {
  link: String
  name: String
}

export default function NavbarLink({ link, name }: LinkType) {
  return (
    <Link href={link}
      className='block py-2 pl-3 pr-4 text-subtitle sm:text-lg rounded md:p-0 hover:text-foreground'>
      {name}
    </Link>
  )
}
