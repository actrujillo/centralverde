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
      <Link to="/cart" className="lg:hidden">
        <div className="fixed bottom-3 right-4 bg-orange-400 w-1/8 p-4 flex justify-center hover:bg-orange-500 text-3xl rounded-full md:p-5">
          <FaShoppingCart className="md:text-[3rem]" />
          {productosCarrito.length > 0 ? (
            <span className="absolute bottom-10 right-0 py-1 px-2.5 text-xs text-white bg-[#009033] rounded-full md:bottom-16 md:py-1 md:px-3 md:text-lg">
              {productosCarrito.length}
            </span>
          ) : null}
        </div>
      </Link>
      <Footer></Footer>
    </>
  );
}
