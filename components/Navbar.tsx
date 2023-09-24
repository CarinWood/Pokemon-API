'use client'

import Link from 'next/link'
import React from 'react'

export const Navbar = () => {
  return (
    <main className="flex flex-col items-center justify-between p-24">
        <div className="z-10 max-w-5xl w-full items-center justify-between text-sm lg:flex">
                <Link href="/">
                    <h2 className='text-2xl text-bold'>Pokémon Finder</h2>
                </Link>
        </div>
    </main>
  )
}
