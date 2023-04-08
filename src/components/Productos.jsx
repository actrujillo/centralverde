import { useCallback, useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { disminuirProducto, agregarProducto } from "../redux/carritoSlice";
import { categorySelection } from "../redux/categoriaSlice";
import Item from "./Item";

export default function Productos() {
  const selectedCategory = useSelector((state) =>
    state.categoria.selectedCategory.replace(/["']/g, "")
  );

  const dispatch = useDispatch();

  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch(`../../src/data/${selectedCategory}.json`)
      .then((res) => res.json())
      .then((data) => setProductos(data));
  }, [selectedCategory]);

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

  const productosCarrito = useSelector((state) => state.carrito.productos);

  const productosCantidad = productos.map((producto) => {
    const productoEnCarrito = productosCarrito.find(
      (produ) => produ.id === producto.id
    );
    const cantidad = productoEnCarrito ? productoEnCarrito.cantidad : "0";
    return { ...producto, cantidad };
  });

  const handleSelected = (e) => {
    dispatch(categorySelection(e.target.value));
  };

  const handleClickTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="min-h-[85vh] mt-24 flex flex-col items-center justify-center">
      <h3 className="text-2xl font-semibold text-center">Productos</h3>
      <p className="p-4 text-center">
        Nuestros productos son seleccionados periodicamente para poder ofrecer
        la mejor calidad y frescura que nos destacan.
      </p>
      <h4 className="text-center p-2 m-1 bg-[#009033] text-[#fcfcfc] uppercase">
        Si tu compra supera los $4000 el envio es GRATIS!
      </h4>
      <div className="flex justify-center items-center py-2">
        <p className="uppercase font-semibold">categoria: </p>
        <select
          name=""
          value={selectedCategory}
          id=""
          onChange={handleSelected}
          className="capitalize"
        >
          <option value="verduras">verduras</option>
          <option value="frutas">frutas</option>
          <option value="almacen">almacen</option>
          <option value="bebidas">bebidas</option>
        </select>
      </div>

      <div>
        <Item
          productos={productosCantidad}
          handleDisminuir={handleDisminuir}
          handleAgregar={handleAgregar}
        />
      </div>
      <button
        className="pb-2 italic text-sm hover:underline"
        onClick={handleClickTop}
      >
        Volver arriba
      </button>
    </div>
  );
}
