import { FaSearch } from "react-icons/fa";

export default function SearchBar() {
  return (
    <>
      <>
        <div className="flex justify-start items-center p-2 m-4 bg-gray-100 text-gray-400 text-sm rounded-lg w-[90%]">
          <FaSearch className="ml-2"/>
          <input
            type="text"
            placeholder="Buscar producto"
            className="bg-gray-100 ml-4 w-full h-full text-black"
          />
        </div>
      </>
    </>
  );
}
