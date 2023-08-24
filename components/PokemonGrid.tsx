"use client";
import { useState } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import PokemonCard from "@/components/PokemomCard";

interface PokemonGridProps {
    pokemonList: any;
}

const PokemonGrid = ({ pokemonList }: PokemonGridProps) => {
    const [searchText, setSearchText] = useState("");

    const searchFilter = (pokemonList: any) => {
        return pokemonList.filter((pokemon: any) =>
            pokemon.name.toLowerCase().includes(searchText.toLowerCase())
        );
    };

    const filteredPokemonList = searchFilter(pokemonList);

    return (
        <>
            <div className='flex flex-col items-center'>
                <h3 className='text-2xl py-6 text-center'>
                    Search For Your Pokemon!
                </h3>
                <div className='grid w-full max-w-sm items-center gap-1.5'>
                    <Label htmlFor='pokemonName'>Pokemon Name</Label>
                    <Input
                        type='text'
                        value={searchText}
                        autoComplete='off'
                        id='pokemonName'
                        placeholder='Enter popemon name...'
                        onChange={(e) => setSearchText(e.target.value)}
                    />
                </div>
                <h3 className='text-3xl pt-12 pb-6 text-center'>
                    Pokemon Collection
                </h3>
                <div className='mb-32 grid text-center lg:mb-0 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 lg:text-left'>
                    {filteredPokemonList.map((pokemon: any) => {
                        return (
                            <PokemonCard
                                name={pokemon.name}
                                key={pokemon.name + "card"}
                            />
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default PokemonGrid;
