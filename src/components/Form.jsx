import { useState } from "react";

export default function Form(props) {
  const { productosCarrito } = props;

  console.log(productosCarrito);

  const [form, setForm] = useState({
    name: "",
    telefono: "",
    entrega: "",
    direccion: "",
    referencias: "",
    metodo: "",
  });
  const [envio, setEnvio] = useState(false);
  const [requerido, setRequerido] = useState(true);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleEntrega = (e) => {
    e.target.value === "Envio a domicilio" ? setEnvio(true) : setEnvio(false);
    handleInput(e);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, telefono, entrega, metodo, direccion, referencias } = form;

    if (!form.name || !form.telefono || !form.entrega || !form.metodo) {
      setRequerido(false);
      return;
    }

    const pedido = Object.values(productosCarrito.productos)
      .map((producto) => {
        const { cantidad, medida, nombre } = producto;
        return `-${cantidad} ${medida} ${nombre}`;
      })
      .join("\n");

    let message =
      `_¡Hola! Te paso el resumen de mi pedido:_\n\n` +
      `*Nombre:* ${name} \n` +
      `*Teléfono:* ${telefono} \n` +
      `*Forma de pago:* ${metodo} \n` +
      `*Total:* $ ${productosCarrito.total} \n` +
      `*Entrega:* ${entrega} \n`;

    if (entrega === "Envio a domicilio" && direccion) {
      message += `*Direccion:* ${direccion}\n`;
    }
    if (referencias) {
      message += `*Referencias:* ${referencias}\n\n`;
    }

    message += `_Mi pedido es:_ * \n${pedido}*\n\n`;
    message += `*TOTAL: $ ${productosCarrito.total}*\n\n`;
    message += `_Espero tu respuesta para confirmar mi pedido_`;
    console.log(message);

    const phoneNumber = "1159939383";
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  // console.log(form);
  const titleStyle = "text-xs font-semibold mt-2";

  const divStyle = "flex flex-row flex-wrap";

  return (
    <>
      <form className="flex flex-col">
        <label className={titleStyle}>Nombre completo *</label>
        <input type="text" name="name" onChange={handleInput} />

        <label className={titleStyle}>Telefono *</label>
        <input type="number" name="telefono" onChange={handleInput} />

        <span className={titleStyle}>Forma de entrega *</span>
        <div className={divStyle}>
          <div className="w-full my-1 flex items-center">
            <input
              name="entrega"
              type="radio"
              value="Retiro en persona"
              onChange={handleEntrega}
            />
            <label className="ml-2">Retiro en persona</label>
          </div>
          <div className="w-full mb-1 flex items-center">
            <input
              name="entrega"
              type="radio"
              value="Envio a domicilio"
              onChange={handleEntrega}
            />
            <label className="ml-2">Envio a domicilio</label>
          </div>
        </div>

        {envio ? (
          <>
            <label className={titleStyle}>Dirección *</label>
            <input
              type="text"
              name="direccion"
              placeholder="Av Mitre 1000 6°A, Avellaneda"
              onChange={handleInput}
            />
            <label className={titleStyle}>Referencias</label>
            <input
              type="text"
              placeholder="Entre calles, timbre, casa sin numero, etc."
              name="referencias"
              onChange={handleInput}
            />
          </>
        ) : (
          ((form.direccion = ""), (form.referencias = ""))
        )}

        <span className={titleStyle}>¿Cómo abonás? *</span>
        <div className={divStyle}>
          <div className="w-full my-1 flex items-center">
            <input
              name="metodo"
              type="radio"
              value="Efectivo"
              onChange={handleInput}
            />
            <label className="ml-2">Efectivo</label>
          </div>
          <div className="w-full mb-1 flex items-center">
            <input
              name="metodo"
              type="radio"
              value="Mercado Pago"
              onChange={handleInput}
            />
            <label className="ml-2">Mercado Pago</label>
          </div>
        </div>

        {!requerido && <span className="text-xs text-red-600 my-1">*Complete los campos obligatorios</span>}
        <button
          type="button"
          onClick={handleSubmit}
          className="w-11/12 py-2 my-2 rounded-md bg-green-500 hover:bg-green-400 text-white"
        >
          Finalizar compra
        </button>
      </form>
    </>
  );
}
