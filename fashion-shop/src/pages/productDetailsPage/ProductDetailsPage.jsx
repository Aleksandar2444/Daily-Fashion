import { useEffect, useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import ProductDetailsPanel from "../../components/productDetailsPanel/ProductDetailsPanel";
import { useSelector } from "react-redux";
import Spinner from "../../components/spinner/Spinner";

const ProductDetailsPage = () => {
  const { id: productId } = useParams();

  const products = useSelector((state) => state.products.value);
  const status = useSelector((state) => state.products.status);

  const [selectedProduct, setSelectedProduct] = useState({});

  useEffect(() => {
    if (productId && status === "succeeded") {
      setSelectedProduct((prevSelectedProduct) => {
        return products.find((product) => product.id === Number(productId));
      });
    }
  }, [products, productId, status]);

  let content;

  if (status === "loading") {
    content = <Spinner />;
  } else if (status === "succeeded") {
    content = <ProductDetailsPanel product={selectedProduct} />;
  } else if (status === "failed") {
    content = <h1>Sorry ... something went wrong</h1>;
  }

  return (
    <>
      {!selectedProduct && <Navigate to="/not-found" />}
      <section className="page">
        <div className="page__heading">
          <h2>Product Details</h2>
        </div>
        <div className="page__content">{content}</div>
      </section>
    </>
  );
};

export default ProductDetailsPage;
