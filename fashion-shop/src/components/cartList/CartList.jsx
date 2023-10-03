import CartListItem from "../cartListItem/CartListItem";
import "./CartList.css";
import { useSelector } from "react-redux/es/exports";

const CartList = () => {
  const cartProducts = useSelector((state) =>
    state.products.value.filter((product) => product.isInCart)
  );

  return (
    <>
      {cartProducts.length > 0 ? (
        <ol className="cartList">
          {cartProducts.map((product) => (
            <CartListItem key={product.id} product={product} />
          ))}
        </ol>
      ) : (
        <h3 className="cartList__heading">
          No products added in cart...please buy something!
        </h3>
      )}
    </>
  );
};

export default CartList;
