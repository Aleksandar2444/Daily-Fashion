import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./layout/header/Header";
import Footer from "./layout/footer/Footer";
import ProductsPage from "./pages/productsPage/ProductsPage";
import ProductsDetailsPage from "./pages/productDetailsPage/ProductDetailsPage";
import NotFoundPage from "./pages/notFoundPage/NotFoundPage";
import CartPage from "./pages/cartPage/CartPage";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "./state/slices/productsSlice";

function App() {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.products.status);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
    }
  }, [dispatch, status]);

  return (
    <>
      <div className="app">
        <Header title="Daily Fashion" />
        <Routes>
          <Route path="/" element={<Navigate to="/products" />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:id" element={<ProductsDetailsPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer>
          <p>This app uses React-Vite</p>
        </Footer>
      </div>
    </>
  );
}

export default App;
