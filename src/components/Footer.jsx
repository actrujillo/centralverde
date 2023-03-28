import { FaWhatsapp, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="bg-gray-800 text-[#fcfcfc] flex justify-center w-[100vw] p-4">
      <div className="flex justify-center items-center w-1/3 text-xl">
        <h3 className="mx-2 uppercase text-xs">Contacto</h3>
        <a href="" className="mr-2">
          <FaWhatsapp />
        </a>
        <a href="">
          <FaInstagram />
        </a>
      </div>
    </div>
  );
}
