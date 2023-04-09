export default function Nosotros() {
  return (
    <div className="min-h-[85vh] mt-24 flex flex-col items-center justify-center md:mt-32">
      <h3 className="text-2xl font-semibold text-center md:text-4xl md:my-4">
        Nosotros
      </h3>
      <div className="p-4 text-justify md:text-2xl md:p-6 md:mb-2 md:w-11/12 md:leading-10">
        <p className="mb-4 md:mb-8">
          En <span className="text-[#009033] font-semibold">Central Verde</span>
          , somos una familia comprometida en brindarte productos frescos y de
          alta calidad. Ofrecemos envío a domicilio y preparación de pedidos
          para que los retires en nuestra tienda, siempre con la atención y el
          servicio que mereces.
        </p>
        <p>
          Nos enorgullece ser tu proveedor de alimentos diarios y estamos
          comprometidos en hacer de tus compras una experiencia satisfactoria y
          confiable.
        </p>
      </div>
      <span className="italic text-xl md:text-3xl md:mt-6">
        ¡Gracias por elegirnos!
      </span>
    </div>
  );
}
