'use client'

import { cn } from '@/lib/utils';
import React, { ReactNode, useState, useTransition } from 'react'

export type TabItem = {
  key: string;
  content: ReactNode
}

type PropType = {
  items: Array<TabItem>
  className?: string
}

export default function Tab({ items, className = '' }: PropType) {
  const [state, setState] = useState(0)
  const [isPending, startTransition] = useTransition()

  function handleTabChange(id: number) {
    startTransition(() => {
      setState(id)
    })
  }

  return (
    <div className={cn(className)}>
      <div className='flex flex-row justify-start mt-8 mb-5'>
        {
          items.map((item, index) => (
            <button onClick={() => handleTabChange(index)}
              className={cn("mr-3 font-semibold text-subtitle hover:text-foreground", { 'border-b border-purple-500 text-foreground': state == index })}>
              {item.key}
            </button>
          ))
        }
      </div>

      {
        items[state].content
      }
    </div>
  )
}
