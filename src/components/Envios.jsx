import mapa from "../assets/mapa.png";

export default function Envios() {
  return (
    <div className="min-h-[85vh] mt-24 flex flex-col items-center justify-center">
      <h3 className="text-2xl font-semibold text-center">Envios</h3>
      <div className="p-4 text-center">
        <p>El envio es SIN CARGO en compras superiores a $4000</p>
        <p className="my-4">Zona de entrega</p>
        <img src={mapa} alt="mapa envios" />
      </div>
    </div>
  );
}
