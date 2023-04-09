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
    <div className="min-h-[85vh] mt-24 flex items-center justify-center md:mt-32">
      <div className="flex flex-col md:w-4/6">
        <h3 className="text-2xl font-semibold text-center md:text-4xl md:my-6">¿Cómo comprar?</h3>
          {Info.map((ite) => (
            <div key={ite.id} className="flex flex-col p-4 items-center md:mb-6">
              <i className="text-3xl text-[#009033] bg-[#cde3ce] p-4 rounded-full md:text-4xl md:p-6 md:mb-2">
                {ite.icon}
              </i>
              <p className="text-center mt-2 md:text-2xl">{ite.text}</p>
            </div>
          ))}
      </div>
    </div>
  );
}
