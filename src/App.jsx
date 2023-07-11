import Products from "./components/Products";
import Nav from "./components/Nav";
import { Route, Routes } from "react-router-dom";
import ProductDetail from "./components/ProductDetail";
import CartDetail from "./components/CartDetail";

const App = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path={"/"} element={<Products />} />
        <Route path={"/productDetail"} element={<ProductDetail />} />
        <Route path={"/cartDetail"} element={<CartDetail />} />
      </Routes>
    </>
  );
};

export default App;
