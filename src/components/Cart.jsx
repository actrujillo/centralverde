import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { vaciarCarrito } from "../redux/carritoSlice";
import Form from "./Form";
import ProductoCart from "./ProductoCart";

export default function Cart() {
  const productosCarrito = useSelector((state) => state.carrito);

  const [formVisible, setFormVisible] = useState(false);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(vaciarCarrito());
  };

  return (
    <>
      <div className="min-h-[85vh] mt-24 flex flex-col items-center justify-center">
        {productosCarrito.productos.length === 0 ? (
          <div className="p-4">
            <h3>No tienes ningún artículo en tu carrito de compras.</h3>
            <p>
              Haga clic<Link to="/"> aquí</Link> para continuar comprando.
            </p>
          </div>
        ) : !formVisible ? (
          <>
            <ProductoCart productosCarrito={productosCarrito} />
            <button onClick={() => handleClearCart()}>Vaciar carrito</button>
            <button onClick={() => setFormVisible(true)}>
              Confirmar Pedido
            </button>
          </>
        ) : (
          <>
            <button onClick={() => setFormVisible(false)}>Atras</button>
            <Form productosCarrito={productosCarrito} />
          </>
        )}
        <div className="p-4">
          <span>Total: ${productosCarrito.total}</span>
          <Link to="/">Continuar comprando</Link>
        </div>
      </div>
    </>
  );
}
