import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";

export default function Layout(props) {
  const { children } = props;

  const productosCarrito = useSelector((state) => state.carrito.productos);

  return (
    <>
      <Header></Header>
      {children}
      <Link to="/cart">
        <div className="fixed bottom-4 right-6 bg-orange-400 w-1/8 p-4 flex justify-center hover:bg-orange-500 text-3xl rounded-full">
          <FaShoppingCart />
          {productosCarrito.length > 0 ? (
            <span className="absolute bottom-10 right-0 py-1 px-2.5 text-xs text-white bg-[#009033] rounded-full">
              {productosCarrito.length}
            </span>
          ) : null}
        </div>
      </Link>
      <Footer></Footer>
    </>
  );
}
