import hero from "../assets/hero.png";

export default function Hero() {
  return (
    <div className="flex flex-col items-center lg:w-1/2 lg:mt-8">
      <img
        src={hero}
        alt="principal"
        className="h-[120px] lg:h-[280px] w-[90%] object-cover rounded-lg z-[-1] md:h-[250px] lg:ml-24"
      />
      <div className="absolute w-1/2 lg:w-[25%]">
        <h3 className="relative top-10 lg:top-12 right-14 lg:right-14 text-[#fff] z-[-1] md:text-[2rem] md:w-4/6 md:leading-[1.6em] md:right-32 lg:font-semibold">
          Arma tu pedido en nuestra tienda
        </h3>
      </div>
    </div>
  );
}
