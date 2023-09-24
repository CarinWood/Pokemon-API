import React from 'react'
import { getPokemon } from '@/lib/PokemonAPI';
import Image from 'next/image';

export default async function PokemonPage ({ params }: {params: {pokemonName: string}}) {
    const {pokemonName} = params;

    const pokemonObject = await getPokemon(pokemonName)

    console.log(pokemonObject)
  
    return (
    <>
        <h1 className='text-4xl text-bold pt-4 text-center'>
            {pokemonObject.name}

        </h1>
        <div className='w-full flex justify-center items-center'>
            <Image 
            src={pokemonObject.sprites.front_default} 
            width={200} 
            height={200} 
            alt="picture of pokemon" />
        </div>   
    </>
  )
}
