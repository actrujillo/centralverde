import { FaCartArrowDown, FaComments, FaDollarSign } from "react-icons/fa";

export default function ComoComprar() {
  const Info = [
    {
      id: 1,
      icon: <FaCartArrowDown />,
      text: "Elegí los productos que quieras añadir al carrito de compras.",
    },
    {
      id: 2,
      icon: <FaComments />,
      text: "Comunicate a través de nuestro Whatsapp y coordina la entrega y el pago.",
    },
    {
      id: 3,
      icon: <FaDollarSign />,
      text: "Aboná tu pedido con transferencia o en efectivo.",
    },
  ];

  return (
    <div className="min-h-[85vh] mt-24 flex items-center justify-center">
      <div className="flex flex-col">
        <h3 className="text-2xl font-semibold text-center">¿Cómo comprar?</h3>
          {Info.map((ite) => (
            <div key={ite.id} className="flex flex-col p-4 items-center">
              <i className="text-3xl text-[#009033] bg-[#cde3ce] p-4 rounded-full">
                {ite.icon}
              </i>
              <p className="text-center mt-2">{ite.text}</p>
            </div>
          ))}
      </div>
    </div>
  );
}
