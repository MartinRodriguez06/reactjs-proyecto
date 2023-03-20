import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import CartContainer from "./components/CartContainer/CartContainer";
import { CartContextProvider } from "./context/CartContext";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";



function App() {
  return (
    <div className="border border-5 row">
      <BrowserRouter>
        <CartContextProvider>
          <NavBar />
          <Routes>
            <Route
              path="/"
              element={<ItemListContainer saludo="Bienvenidos a nuestra LibreriaOnline" />}
            />
            <Route
              path="/categoria/:idCategoria"
              element={<ItemListContainer saludo="Bienvenidos a nuestra LibreriaOnline" />}
            />
            <Route path="/detalle/:idProducto" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<CartContainer />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </CartContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
