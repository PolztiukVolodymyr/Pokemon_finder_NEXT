import Link from "next/link";

interface PokemonProps {
    name: string;
}

const PokemomCard = ({ name }: PokemonProps) => {
    return (
        <Link
            href={name}
            className='group rounded-lg border border-transparent px-5 py-4 m-3 dark:border-gray-500 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30'
        >
            <h2 className={`text-2xl font-semibold`}>
                {name.charAt(0).toUpperCase() + name.slice(1)}
            </h2>
        </Link>
    );
};

export default PokemomCard;
