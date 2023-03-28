import hero from "../assets/hero.png";

export default function Hero() {
  return (
    <div className="flex flex-col items-center">
      <img
        src={hero}
        alt="principal"
        className="h-[120px] w-[90%] object-cover rounded-lg z-[-1]"
      />
      <div className="absolute w-1/2">
        <h3 className="relative top-10 right-14 text-[#fff] z-[-1]">
          Arma tu pedido en nuestra tienda
        </h3>
        <button className="hidden">
          <a href="">COMPRAR</a>
        </button>
      </div>
    </div>
  );
}
