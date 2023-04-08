export default function Item(props) {
  const { productos, handleAgregar, handleDisminuir } = props;

  const buttonStyle =
    "bg-green-500 border-y-2 border-green-500  px-2 hover:bg-green-300 hover:border-green-300 text-white";

  return (
    <div className="flex flex-row flex-wrap justify-center m-2">
      {productos.map((producto) => (
        <div
          key={producto.id}
          className="w-[170px] h-72 bg-white p-2 flex flex-col justify-evenly items-center border m-1"
        >
          <img src={producto.img} alt="producto" className="min-h-[120px]" />
          <p className="text-center text-sm capitalize">
            {producto.nombre} x {producto.medida}
          </p>
          <p className="text-xl font-semibold">$ {producto.precio}</p>
          <div className="w-full flex justify-between items-center">
            <button
              className={buttonStyle}
              onClick={() => handleDisminuir(producto)}
            >
              -
            </button>
            <p className="border-y-2 border-green-500 w-full text-center ">
              {producto.cantidad > 0
                ? `${producto.cantidad} ${producto.medida}`
                : 0}
            </p>
            <button
              className={buttonStyle}
              onClick={() => handleAgregar(producto)}
            >
              +
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
