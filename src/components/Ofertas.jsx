import { useCallback } from "react";
import { FaPlusSquare } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { agregarProducto } from "../redux/carritoSlice";

export default function Ofertas() {
  const Ofertas = [
    {
      id: 1,
      descuento: "10%",
      titulo: "Papa x 3kg",
      img: "https://tgardenfruitnveg.com.au/wp-content/uploads/2020/08/6pro-2-1.png",
      medida: "uni",
      precio: 100,
      promo: "2 kg",
    },
    {
      id: 2,
      descuento: "20%",
      titulo: "Cebolla",
      img: "https://tgardenfruitnveg.com.au/wp-content/uploads/2020/08/6pro-2-1.png",
      medida: "uni",
      precio: 100,
      promo: "4 kg",
    },
    {
      id: 3,
      descuento: "30%",
      titulo: "Banana",
      img: "https://tgardenfruitnveg.com.au/wp-content/uploads/2020/08/6pro-2-1.png",
      medida: "uni",
      precio: 50,
      promo: "3 kg",
    },
    {
      id: 4,
      descuento: "40%",
      titulo: "Tomate",
      img: "https://tgardenfruitnveg.com.au/wp-content/uploads/2020/08/6pro-2-1.png",
      medida: "uni",
      precio: 50,
      promo: "3 kg",
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
      <h3 className="titulo-home">Ofertas</h3>
      <div className="flex justify-center flex-wrap">
        {Ofertas.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center justify-center border w-[40%] p-2 mb-4 mx-2 h-[200px] bg-[#fefefe]"
          >
            <div className="flex w-full justify-end">
              <span className="bg-orange-600 text-[#fcfcfc] px-2 text-[10px] rounded-[10px] tracking-widest">
                {item.descuento}
              </span>
            </div>
            <img src={item.img} alt="producto" className="h-20" />
            <h3 className="text-[#134c27] font-semibold">{item.titulo}</h3>
            <p className="text-xs">{item.promo}</p>
            <div className="flex justify-between w-full pl-1">
              <span className="font-semibold">$ {item.precio}</span>
              <button
                className="text-[#009033] text-xl hover:text-green-400"
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
