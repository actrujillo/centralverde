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

  return (
    <>
      {productosCarrito.productos
        // .filter((item) => item.cantidad > 0)
        .map((item) => (
          <div key={item.id} className="flex">
            <h3>{item.nombre}</h3>
            <h3>{item.titulo}</h3>
            <button onClick={() => handleDisminuir(item)}>-</button>
            <p>
              {item.cantidad}
              {item.medida}
            </p>
            <button onClick={() => handleAgregar(item)}>+</button>
            <button onClick={() => handleDelete(item)}>elimi</button>

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
