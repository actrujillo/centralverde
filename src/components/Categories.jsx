import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { categorySelection } from "../redux/categoriaSlice";

export default function Categories() {
  const categories = [
    { id: 1, titulo: "verduras", img: "🥕" },
    { id: 2, titulo: "frutas", img: "🍉" },
    { id: 3, titulo: "almacen", img: "🥛" },
    { id: 4, titulo: "bebidas", img: "🍺" },
  ];

  const dispatch = useDispatch();

  return (
    <div className="lg:w-1/2">
      <h3 className="titulo-home lg:text-center lg:text-4xl">Categorias</h3>
      <div className="flex justify-evenly lg:flex-wrap">
        {categories.map((cat) => (
          // <Link key={cat.id} to={`/${cat.titulo}`}>
          <div className="lg:w-1/2 flex items-center justify-center">
            <Link
              key={cat.id}
              to="/productos"
              onClick={() => dispatch(categorySelection(cat.titulo))}
            >
              <div className="flex flex-col items-center">
                <span className="bg-[#c4e3ce] p-4 rounded-full hover:bg-[#009033] md:p-5 md:text-4xl">
                  {cat.img}
                </span>
                {/* <img src={cat.img} alt="imagen de la categoria" /> */}
                <h4 className="text-sm mt-2 text-[#134c27] font-semibold capitalize md:text-lg">
                  {cat.titulo}
                </h4>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
