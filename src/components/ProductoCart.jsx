import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import {
  agregarProducto,
  disminuirProducto,
  eliminarProducto,
} from "../redux/carritoSlice";

export default function ProductoCart(props) {
  const { productosCarrito } = props;

  // const [deleteItem, setDeleteItem] = useState(null);
  const dispatch = useDispatch();

  const handleAgregar = useCallback(
    (producto) => {
      dispatch(agregarProducto({ ...producto }));
    },
    [dispatch]
  );

  const handleDisminuir = useCallback(
    (producto) => {
      dispatch(disminuirProducto(producto));
    },
    [dispatch]
  );

  const handleDelete = (producto) => {
    dispatch(eliminarProducto(producto));
  };

  const buttonStyle =
    "bg-green-500 border-y-1 border-green-500 px-2  hover:bg-green-300 hover:border-green-300 text-white";

  return (
    <>
      {productosCarrito.productos
        // .filter((item) => item.cantidad > 0)
        .map((item) => (
          <div
            key={item.id}
            className="flex w-11/12 justify-center items-center my-2 border-2"
          >
            <div className="w-1/3 h-[120px] bg-white p-2 border-r-2 flex items-center md:items-stretch md:justify-center">
              <img src={item.img} alt="producto en carrito" />
            </div>
            <div className="w-2/3 h-[120px] px-2 bg-green-50 flex flex-col justify-evenly md:text-xl">
              <h3 className="capitalize md:font-semibold">{item.nombre}</h3>
              <div className="flex justify-between">
                <p className="">${item.precio * item.cantidad}</p>
                <button
                  onClick={() => handleDelete(item)}
                  className="px-2 border border-gray-800 text-gray-800 rounded-full"
                >
                  x
                </button>
              </div>
              <div className="flex flex-row justify-evenly w-32">
                <button
                  onClick={() => handleDisminuir(item)}
                  className={buttonStyle}
                >
                  -
                </button>
                <p className="border-y-2 border-green-500 w-full text-center">
                  {item.cantidad}
                </p>
                <button
                  onClick={() => handleAgregar(item)}
                  className={buttonStyle}
                >
                  +
                </button>
              </div>
            </div>

            {/* MODAL PARA ELIMINAR UN ITEM
            {deleteItem && (
              <div className="flex flex-col">
                <h3>Estás por eliminar {item.nombre} de tu pedido</h3>
                <button onClick={() => handleDelete(item)}>Si, eliminar</button>
                <button onClick={() => setDeleteItem(null)}>Cancelar</button>
              </div>
            )} */}
          </div>
        ))}
    </>
  );
}
