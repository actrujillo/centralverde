import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../containers/Home";
import Layout from "../components/Layout";
import Productos from "../components/Productos";
import ComoComprar from "../components/ComoComprar";
import Envios from "../components/Envios";
import Cart from "../components/Cart";
import Nosotros from "../components/Nosotros";

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/productos" element={<Productos />} />
            <Route path="/como-comprar" element={<ComoComprar />} />
            <Route path="/envios" element={<Envios />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/nosotros" element={<Nosotros />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
