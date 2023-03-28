export default function Item(props) {
  const { productos, handleAgregar, handleDisminuir } = props;

  return (
    <div className="flex flex-row flex-wrap justify-center m-2">
      {productos.map((producto) => (
        <div
          key={producto.id}
          className="w-[170px] h-72 bg-white p-2 flex flex-col justify-evenly items-center border m-1"
        >
          <img src={producto.img} alt="producto" className="min-h-[100px]" />
          <p className="text-center text-sm capitalize">{producto.nombre}</p>
          <p className="text-xl font-semibold">$ {producto.precio}</p>
          <div className="flex items-center justify-center w-full">
            <p>{producto.cantidad > 0 && `${producto.cantidad}`}</p>
            <span>{producto.medida}</span>
          </div>
          <button
            onClick={() => handleAgregar(producto)}
            className="bg-green-400 py-1 px-6 hover:bg-green-300 rounded"
          >
            Agregar
          </button>
          <button onClick={() => handleDisminuir(producto)}>menos</button>
        </div>
      ))}
    </div>
  );
}
