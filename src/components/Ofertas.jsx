import { useCallback } from "react";
import { FaPlusSquare } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { agregarProducto } from "../redux/carritoSlice";

export default function Ofertas() {
  const Ofertas = [
    {
      id: 1,
      descuento: "10%",
      nombre: "Papa x 3kg",
      img: "https://tgardenfruitnveg.com.au/wp-content/uploads/2020/08/6pro-2-1.png",
      medida: "uni",
      precio: 100,
    },
    {
      id: 2,
      descuento: "20%",
      nombre: "Cebolla x 2kg",
      img: "https://tgardenfruitnveg.com.au/wp-content/uploads/2020/08/6pro-2-1.png",
      medida: "uni",
      precio: 100,
    },
    {
      id: 3,
      descuento: "30%",
      nombre: "Banana x 2kg",
      img: "https://tgardenfruitnveg.com.au/wp-content/uploads/2020/08/6pro-2-1.png",
      medida: "uni",
      precio: 50,
    },
    {
      id: 4,
      descuento: "40%",
      nombre: "Tomate x 3kg",
      img: "https://tgardenfruitnveg.com.au/wp-content/uploads/2020/08/6pro-2-1.png",
      medida: "uni",
      precio: 50,
    },
  ];

  const dispatch = useDispatch();

  const handleAgregar = useCallback(
    (item) => {
      dispatch(agregarProducto(item));
    },
    [dispatch]
  );

  return (
    <>
      <h3 className="titulo-home lg:text-center lg:p-0 lg:m-0 lg:text-4xl">Ofertas</h3>
      <div className="flex justify-center flex-wrap lg:w-full">
        {Ofertas.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center justify-center border w-[40%] p-2 mb-4 mx-2 h-[200px] bg-[#fefefe] lg:w-1/5"
          >
            <div className="flex w-full justify-end">
              <span className="bg-orange-600 text-[#fcfcfc] px-2 text-[10px] rounded-[10px] tracking-widest md:text-lg md:px-6">
                {item.descuento}
              </span>
            </div>
            <img src={item.img} alt="producto" className="h-20" />
            <h3 className="text-[#134c27] font-semibold py-2 md:text-xl">
              {item.nombre}
            </h3>
            <div className="flex justify-between w-full pl-1">
              <span className="font-semibold md:text-2xl">$ {item.precio}</span>
              <button
                className="text-[#009033] text-xl hover:text-green-400 md:text-3xl"
                onClick={() => handleAgregar(item)}
              >
                <FaPlusSquare />
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
