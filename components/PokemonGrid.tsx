'use client'
import {useState } from 'react'
import { PokemonCard } from './PokemonCard'




interface PokemonGridPorps {
  pokemonList: any
}

export const PokemonGrid = ({pokemonList}: PokemonGridPorps) => {
  const [searchText, setSearchText] = useState('')

  //filter the text
  const searchFilter = (pokemonList:any) => {
    return pokemonList.filter(
      (pokemon: any) => pokemon.name.toLowerCase().includes(searchText.toLowerCase())
    )
  }

  //save the filtered array of objects
  const filteredPokemonList = searchFilter(pokemonList)

 

  return (
    <>
    <div className='w-full flex flex-col items-center justify-center'>
        <h3 className='text-2xl py-6 text-center'>Search For Your Pokemon!</h3>
        <div className='grid w-full max-w-sm items-center gap-1.5'>
          <form className='flex flex-col'>
            <label htmlFor="pokemonName" className='mb-3'>Pokemon Name:</label>
              <input 
                className='p-3 rounded-lg'
                type="text" 
                value={searchText}
                id="pokemonName"
                autoComplete='off'
                placeholder='Charizard, Pikachu, etc.'
                onChange={(e) => setSearchText(e.target.value)}
              />
          </form>
          <h3 className='text-3xl pt-12 pb-6 text-center'>Pokemon Collection</h3>
           <div className='flex flex-wrap items-center justify-between w-[450px]'>
            {filteredPokemonList.map((pokemon: any) => {
                return <PokemonCard name={pokemon.name} key={pokemon.name}/>
            })}
          
          </div> 
      
          

        </div>
    </div>
    </>
  )
}
