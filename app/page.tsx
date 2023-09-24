import Image from 'next/image'
import { PokemonGrid } from '@/components/PokemonGrid'
import { PokemonCard } from '@/components/PokemonCard'
import { getPokemonList } from '@/lib/PokemonAPI'

export default async function Home() {
  const pokemonList = await getPokemonList();


  return (
  <>
    <PokemonGrid pokemonList={pokemonList}/>
      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
       
      </div>
  </>
      
  
  )
}
