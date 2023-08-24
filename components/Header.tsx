import Link from "next/link";

const Header = () => {
    return (
        <div className='z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex'>
            <Link href='/'>
                <h2 className='text-2xl text-bold'>Pokemon Finder</h2>
            </Link>
        </div>
    );
};

export default Header;
