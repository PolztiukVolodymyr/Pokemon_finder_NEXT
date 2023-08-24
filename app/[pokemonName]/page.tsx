import { getPokemom } from "@/lib/pokemonAPI";
import PokemonImage from "@/components/PokemonImage";
import { Progress } from "@/components/ui/progress";

const PokemonPage = async ({ params }: { params: { pokemonName: string } }) => {
    const { pokemonName } = params;
    const pokemonObject = await getPokemom(pokemonName);

    return (
        <>
            <h1 className='text-4xl text-bold pt-4 mb-6'>
                {pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1)}
            </h1>
            <div
                className='m-4'
                style={{
                    position: "relative",
                    width: "300px",
                    height: "300px",
                }}
            >
                <PokemonImage
                    image={
                        pokemonObject.sprites.other.dream_world.front_default
                    }
                    name={pokemonName}
                />
            </div>
            <div className='flex justify-around m-4' style={{ width: "300px" }}>
                <h3>Weight: {pokemonObject.weight}</h3>
                <h3>Height: {pokemonObject.height}</h3>
            </div>

            <div className='flex-col'>
                {pokemonObject.stats.map((statObject: any) => {
                    const statName = statObject.stat.name;
                    const statValue = statObject.base_stat;

                    return (
                        <div
                            className='flex items-stretch'
                            style={{ width: "500px" }}
                            key={statName}
                        >
                            <h3 className='p-3 w-2/4'>
                                {statName}: {statValue}
                            </h3>
                            <Progress
                                className='w-2/4 m-auto'
                                value={statValue}
                            />
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default PokemonPage;
