import React, { useContext, useState } from "react";
import { Context } from "../Context";
import CartItem from "../components/CartItem";

function Cart() {
  const { cartItems } = useContext(Context);
  const [buttonText, setButtonText] = useState("Place Order");

  const cartItemElements = cartItems.map((item) => (
    <CartItem key={item.id} item={item} />
  ));

  const total = cartItems.length * 5.99;
  const totalCostDisplay = total.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });

  function placeOrder() {
    setButtonText("Ordering...");
    setTimeout(() => {
      cartItems.splice(0, cartItems.length);
      setButtonText("Place Order");
      console.log("order placed" + cartItems.length);
    }, 3000);
  }

  return (
    <main className="cart-page">
      <h1>Check out</h1>
      {cartItemElements}
      <p className="total-cost">Total: {totalCostDisplay} </p>
    {  cartItems.length > 0 ?
                <div className="order-button">
                    <button onClick={placeOrder}>{buttonText}</button>
                </div> :
                <p>You have no items in your cart.</p>}
    </main>
  );
}

export default Cart;
