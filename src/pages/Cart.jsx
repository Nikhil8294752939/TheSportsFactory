import { useCart } from "../context/CartContext";
import "../Styles/Cart.css";

export default function Cart() {
  const { cartItems, removeFromCart, updateQty } = useCart();

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const totalItems = cartItems.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  if (cartItems.length === 0) {
    return <h2 className="empty-cart">Your cart is empty</h2>;
  }

  return (
    <div className="cart-page">
      <h1>Shopping Cart</h1>

      <div className="cart-container">
        {/* LEFT ITEMS */}
        <div className="cart-items">
          {cartItems.map((item) => (
            <div className="cart-item" key={item._id}>
              <img src={item.image} alt={item.name} />

              <div className="cart-info">
                <h3>{item.name}</h3>
                <p>₹{item.price}</p>

                <select
                  value={item.quantity}
                  onChange={(e) =>
                    updateQty(item._id, Number(e.target.value))
                  }
                >
                  {[1, 2, 3, 4, 5].map((q) => (
                    <option key={q} value={q}>
                      {q}
                    </option>
                  ))}
                </select>

                <button onClick={() => removeFromCart(item._id)}>
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT SUMMARY */}
        <div className="cart-summary">
          <h2>Order Summary</h2>
          <p>Total Items: {totalItems}</p>
          <p className="total">Total: ₹{total}</p>
          <button className="checkout-btn">Proceed to Checkout</button>
        </div>
      </div>
    </div>
  );
}
