
const PlayerCard = () => {
    return (
      <div className="h-auto lg:h-[90%] w-[90%] lg:w-[27rem] bg-[#403D39] rounded-[.200rem] shadow-gray-500 shadow-sm px-5 py-12 flex flex-col items-center gap-6 relative">
        <div className="flex lg:flex-col gap-6 w-full relative lg:items-center">
          <div className="h-20 w-20 lg:h-60 lg:w-60 rounded-full bg-white shadow-md"></div>
          <p className="font-title text-xl lg:text-3xl text-white text-center">Nome do Jogador</p>
          <a href="#" className="bi bi-gear-fill lg:hidden lg:text-4xl text-white absolute right-0 bottom-0 drop-shadow-lg hover:text-red-400 transition-all duration-200"></a>
        </div>
        <p className="font-text text-white text-xs md:text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel sint temporibus accusantium eligendi 
          ratione, suscipit doloribus eaque, nostrum fuga rerum quo deleniti voluptate illo quos modi reprehenderit veritatis dolorem unde.</p>
          <a href="#" className="bi bi-gear-fill hidden lg:block md:text-4xl text-white absolute right-5 bottom-5 drop-shadow-lg hover:text-red-400 transition-all duration-200"></a>
      </div>
    );
};

export { PlayerCard };