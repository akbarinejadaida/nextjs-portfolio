'use client'
import { TypeAnimation as TA } from 'react-type-animation';

import React from 'react'

interface PropType {
  sequence: Array<any>
}

export default function TypeAnimation({ sequence }: PropType) {
  return (
    <TA
      sequence={sequence}
      wrapper="span"
      speed={50}
      // style={{ fontSize: '2em', display: 'inline-block' }}
      repeat={Infinity}
    />
  )
}
