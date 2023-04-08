import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { vaciarCarrito } from "../redux/carritoSlice";
import Form from "./Form";
import ProductoCart from "./ProductoCart";
import { IoTrashOutline } from "react-icons/io5";
import { AiOutlineArrowLeft } from "react-icons/ai";

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
            <div className="flex justify-between w-11/12">
              <h3 className="font-semibold">Mi Carrito</h3>
              <button
                className="text-2xl mr-2 hover:text-gray-600"
                onClick={() => handleClearCart()}
              >
                <IoTrashOutline />
              </button>
            </div>
            <ProductoCart productosCarrito={productosCarrito} />
            <span className="my-2 font-semibold">
              Total: ${productosCarrito.total}
            </span>
            <button
              className="w-11/12 py-2 mb-4 rounded-md bg-green-500 hover:bg-green-400 text-white"
              onClick={() => setFormVisible(true)}
            >
              Confirmar pedido
            </button>
          </>
        ) : (
          <>
            <div className="w-11/12">
              <button
                className="flex mb-4 text-sm items-center"
                onClick={() => setFormVisible(false)}
              >
                <AiOutlineArrowLeft className="mr-1" />
                Volver a carrito
              </button>
              <Form productosCarrito={productosCarrito} />
            </div>
            <span className="my-2 font-semibold">
              Total: ${productosCarrito.total}
            </span>
          </>
        )}
        <Link to="/" className="text-sm underline hover:italic">
          Seguir comprando
        </Link>
      </div>
    </>
  );
}
