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

  const totalCart = (
    <span className="my-2 font-semibold md:text-2xl">
      Total: ${productosCarrito.total}
    </span>
  );

  return (
    <>
      <div className="min-h-[85vh] mt-24 flex flex-col items-center justify-start md:mt-40">
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
              <h3 className="font-semibold md:text-3xl">Mi Carrito</h3>
              <button
                className="text-2xl mr-2 hover:text-gray-600 md:text-4xl md:flex md:items-center"
                onClick={() => handleClearCart()}
              >
                <span className="hidden md:block text-xl mr-2">
                  Vaciar carrito
                </span>
                <IoTrashOutline />
              </button>
            </div>
            <ProductoCart productosCarrito={productosCarrito} />
            {totalCart}
            <button
              className="w-11/12 py-2 mb-4 rounded-md bg-green-500 hover:bg-green-400 text-white md:text-xl"
              onClick={() => setFormVisible(true)}
            >
              Confirmar pedido
            </button>
          </>
        ) : (
          <>
            <div className="w-11/12">
              <button
                className="flex mb-4 text-sm items-center md:text-xl"
                onClick={() => setFormVisible(false)}
              >
                <AiOutlineArrowLeft className="mr-1" />
                Volver a carrito
              </button>
              <Form productosCarrito={productosCarrito} />
            </div>
            {totalCart}
          </>
        )}
        <Link to="/" className="text-sm underline hover:italic md:text-lg">
          Seguir comprando
        </Link>
      </div>
    </>
  );
}
