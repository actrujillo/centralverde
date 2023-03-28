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

  return (
    <>
      <form className="flex flex-col">
        <label>Nombre completo *</label>
        <input type="text" name="name" onChange={handleInput} />

        <label>Telefono *</label>
        <input type="number" name="telefono" onChange={handleInput} />

        <span>Forma de entrega *</span>
        <input
          name="entrega"
          type="radio"
          value="Retiro en persona"
          onChange={handleEntrega}
        />
        <label>Retiro en persona</label>
        <input
          name="entrega"
          type="radio"
          value="Envio a domicilio"
          onChange={handleEntrega}
        />
        <label>Envio a domicilio</label>

        {envio ? (
          <>
            <label>Dirección *</label>
            <input
              type="text"
              name="direccion"
              placeholder="Av Mitre 1000 6°A, Avellaneda"
              onChange={handleInput}
            />
            <label>Referencias</label>
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

        <span>¿Cómo abonás? *</span>
        <input
          name="metodo"
          type="radio"
          value="Efectivo"
          onChange={handleInput}
        />
        <label>Efectivo</label>
        <input
          name="metodo"
          type="radio"
          value="Mercado Pago"
          onChange={handleInput}
        />
        <label>Mercado Pago</label>
        {!requerido && <span>Complete los campos obligatorios</span>}
        <button type="button" onClick={handleSubmit}>
          Finalizar compra
        </button>
      </form>
    </>
  );
}
