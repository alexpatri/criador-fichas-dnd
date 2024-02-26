
const NavBar = () => {
    return (
        <nav className="bg-red-900 h-12 w-full rounded-[.200rem] shadow-gray-500 shadow-sm text-white flex items-center justify-around text-center font-title">
            <ul><a href="#" className="py-2 relative group">
                Personagens
                <span className="absolute bottom-0 left-0 w-0 h-[.125rem] bg-white transition-all duration-300 ease-in-out group-hover:w-full"></span>
                </a></ul>
            <ul><a href="#" className="py-2 relative group">
                Campanhas
                <span className="absolute bottom-0 left-0 w-0 h-[.125rem] bg-white transition-all duration-300 ease-in-out group-hover:w-full"></span>
                </a></ul>
        </nav>
    );
};

export { NavBar };