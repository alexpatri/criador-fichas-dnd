import { PlayerCard } from "@/components/playerCard";
import { NavBar } from "@/components/navBar";
import { PlusButton } from "@/components/pulsButton";
import { CaracterCard } from "@/components/characterCard";

const Home = () => {
  return (
    <main className="h-screen w-screen flex flex-col lg:flex-row items-center lg:py-0 py-8 lg:px-40 gap-8">
      <PlayerCard/>
      <div className="h-[90%] w-[90%] lg:w-full relative">
        <NavBar/>
        <section className="h-[90%] pt-4 lg:pt-0 w-full absolute bottom-0 flex flex-row justify-between md:justify-normal md:gap-4">
        <CaracterCard/>
        <CaracterCard/>
        <CaracterCard/>
        </section>
        <PlusButton/>
      </div>
    </main>
  );
}

export default Home;