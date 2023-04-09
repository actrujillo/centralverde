export default function Item(props) {
  const { productos, handleAgregar, handleDisminuir } = props;

  const buttonStyle =
    "bg-green-500 border-y-2 border-green-500 px-2 hover:bg-green-300 hover:border-green-300 text-white";

  return (
    <div className="flex flex-row flex-wrap justify-center m-2">
      {productos.map((producto) => (
        <div
          key={producto.id}
          className="w-[170px] h-72 bg-white p-2 flex flex-col justify-evenly items-center border m-1 md:w-[200px] md:h-[350px]"
        >
          <img src={producto.img} alt="producto" className="min-h-[120px] md:h-40 md:w-40 object-contain" />
          <p className="text-center text-sm capitalize min-h-[40px] md:text-lg md:h-14">
            {producto.nombre} x {producto.medida}
          </p>
          <p className="text-xl font-semibold md:text-2xl">$ {producto.precio}</p>
          <div className="w-full flex justify-between items-center md:text-xl">
            {producto.cantidad > 0 ? (
              <>
                <button
                  className={buttonStyle}
                  onClick={() => handleDisminuir(producto)}
                >
                  -
                </button>{" "}
                <p className="border-y-2 border-green-500 w-full text-center">
                  {producto.cantidad} {producto.medida}
                </p>
                <button
                  className={buttonStyle}
                  onClick={() => handleAgregar(producto)}
                >
                  +
                </button>
              </>
            ) : (
              <button
                className="bg-green-500 w-full border-y-2 border-green-500 px-2 rounded hover:bg-green-400 hover:border-green-400 text-white"
                onClick={() => handleAgregar(producto)}
              >
                Agregar
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
