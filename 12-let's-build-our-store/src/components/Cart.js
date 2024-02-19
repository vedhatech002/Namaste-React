import { useSelector, useDispatch } from "react-redux";
import CartCard from "./CartCard";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const CartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <section className="w-6/12 mx-auto">
      <div>
        <h1 className="text-xl font-bold text-center my-6">Cart Items</h1>
        <button
          onClick={handleClearCart}
          className=" mx-[18rem]
          bg-orange-500 text-white font-semibold px-4 py-1 rounded"
        >
          Clear Cart
        </button>
      </div>
      <div className=" mx-auto my-12 ">
        {CartItems.length === 0 ? (
          <h1>Cart is emply please order items</h1>
        ) : (
          CartItems.map((foodObj) => (
            <CartCard data={foodObj} key={foodObj.id} />
          ))
        )}
      </div>
    </section>
  );
};

export default Cart;
