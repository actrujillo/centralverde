import { Squash as Hamburger } from "hamburger-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import logo from "../assets/logo.png";

export default function Header() {

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
      <div className="shadow w-full fixed top-0 left-0">
        <div className="md-flex items-center justify-between bg-white py-4 md-px-10 px-7">
          <div className="font-bold text-2xl cursor-pointer flex items-center text-gray-800">
            <Link to="/">
              <img src={logo} alt="logo" className="h-12" />
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
            className={` shadow md:flex md:items-center md:pb-0 pb-0 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-0 transition-all duration-500 ease-in ${
              open ? "top-20" : "top-[-490px]"
            }`}
          >
            {Links.map((link, index) => (
              <li
                key={index}
                className="md:ml-8 text-base md:text-xl md:my-0 w-full hover:bg-green-200 duration-300"
                onClick={handleClick}
              >
                <Link to={link.to} className="block text-gray-800 p-4">
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
