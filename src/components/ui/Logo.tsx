import { cn } from '@/lib/utils'
import React from 'react'
import Link from 'next/link'

const Logo = ({className}:{className?:string}) => {
  return (
    <Link href={"/"}>
        <h2 className={cn("text-2xl text-shop_dark_green font-black tracking-wider uppercase hover:text-lightGreen hoverEffect group font-sans ",className)}>
            Shopcar<span>t</span>
        </h2>
    </Link>
  )
}

export default Logo