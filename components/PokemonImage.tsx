import Image from "next/image";

const PokemonImage = ({ image, name }: { image: string; name: string }) => {
    return (
        <Image
            src={image}
            alt={"Picture of " + name}
            width={200}
            height={200}
        />
    );
};

export default PokemonImage;
