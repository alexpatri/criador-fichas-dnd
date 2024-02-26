
const CaracterCard = () => {
    return ( 
        <div className="h-[40%] lg:h-[32%] w-[27vw] max-w-[10rem] lg:min-w-28 lg:w-[14%] bg-white shadow-md shadow-gray-500 rounded-[.200rem] hover:cursor-pointer hover:scale-[.96] transition-all duration-300">
            <div className="h-2/3 lg:h-2/3 w-full flex items-center justify-center bg-[#7e7870] rounded-t-[.200rem]">
              <i className="bi bi-person-fill text-white text-7xl lg:text-9xl"></i>
            </div>
            <div className="h-1/3 w-full py-3 px-2 flex flex-col justify-center">
              <p className="text-xs lg:text-sm font-text">Nome do Personagem</p>
              <div className="flex lg:block gap-2">
                <p className="text-xs lg:text-sm font-text">Raça</p>
                <p className="text-xs lg:text-sm font-text">Classe</p>
              </div>
            </div>
          </div>
    );
};

export { CaracterCard };