import { Squash as Hamburger } from "hamburger-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";

export default function Header() {
  const productosCarrito = useSelector((state) => state.carrito.productos);

  // CAMBIAR ESTOS LINKS Y TEXTOS PARA MEJORAR EL SEO!!!
  const Links = [
    { to: "/", text: "Inicio" },
    { to: "/como-comprar", text: "¿Como comprar?" },
    { to: "/nosotros", text: "Nosotros" },
    { to: "/envios", text: "Envios" },
  ];

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  useEffect(() => {
    if (open) {
      const handleClose = (e) => {
        if (!e.target.closest("#menu")) {
          setOpen(false);
        }
      };
      document.addEventListener("click", handleClose);
      return () => document.removeEventListener("click", handleClose);
    }
  }, [open]);

  return (
    <>
      <div className="shadow w-full fixed top-0 left-0 md:flex">
        <div className="flex items-center justify-between bg-white py-4 md-px-10 px-7 w-full">
          <div className="font-bold text-2xl cursor-pointer flex items-center text-gray-800 md:w-1/5">
            <Link to="/">
              <img src={logo} alt="logo" className="h-12 md:h-20" />
            </Link>
          </div>
          <div
            id="menu"
            className="absolute right-8 top-4 cursor-pointer md:hidden"
            onClick={handleClick}
          >
            <Hamburger toggled={open} toggle={setOpen} />
          </div>
          <ul
            className={`shadow md:shadow-none md:flex md:items-center md:pb-0 pb-0 md:m-0 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-4/5 md:pl-0 pl-0 transition-all duration-500 ease-in ${
              open ? "top-20" : "top-[-490px]"
            }`}
          >
            {Links.map((link, index) => (
              <li
                key={index}
                className="md:ml-8 text-base md:text-xl md:my-0 w-full hover:bg-green-200 duration-300 md:hover:bg-white"
                onClick={handleClick}
              >
                <Link
                  to={link.to}
                  className="block text-gray-800 p-4 md:hover:text-gray-400 md:duration-300"
                >
                  {link.text}
                </Link>
              </li>
            ))}
            <li className="hidden text-4xl lg:block">
              <Link to="/cart">
                <FaShoppingCart />
                {productosCarrito.length > 0 ? (
                  <span className="absolute bg-green-600 px-2 py-0 text-white text-base top-8 right-4 rounded-full">
                    {productosCarrito.length}
                  </span>
                ) : null}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
