import Hero from "../components/Hero";
import ComoComprar from "../components/ComoComprar";
import Productos from "../components/Productos";
import Envios from "../components/Envios";
import SearchBar from "../components/SearchBar";
import Categories from "../components/Categories";
import Ofertas from "../components/Ofertas";

export default function Home() {
  return (
    <>
      <div className="mt-24 w-[100vw] min-h-[85vh]">
        <SearchBar />
        <Hero />
        <Categories />
        <Ofertas />
      </div>
    </>
  );
}
