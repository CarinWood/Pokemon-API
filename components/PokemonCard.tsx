import React from 'react'
import Link from 'next/link'

//The link is pointing on for example pikachu -> localhost:3000/pikachu

interface PokemonCardProps {
    name: string
}
 
export const PokemonCard = ({ name }: PokemonCardProps) => {
  return (
    <Link
    href={name}
    key={name+"Card"}
    className="group rounded-lg border border-transparent dark:border-gray-500 px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
    target="_blank"
    rel="noopener noreferrer"
  >
    <h2 className={`mb-3 text-2xl font-semibold`}>
      {name}
     
    </h2>
   
  </Link>
  )
}
