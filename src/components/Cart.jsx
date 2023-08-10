import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
  const { cartItems, subtotal, tax, shipping, total } = useSelector(
    (state) => state.cart
  );
  const dispatch = useDispatch();

  const increment = (id) => {
    dispatch({
      type: "addToCart",
      payload: { id },
    });
    dispatch({ type: "calculatePrice" });
  };
  const decrement = (id) => {
    dispatch({
      type: "decrement",
      payload: id,
    });
    dispatch({ type: "calculatePrice" });
  };
  const delethandler = (id) => {
    dispatch({
      type: "deleteFromCart",
      payload: id,
    });
    dispatch({ type: "calculatePrice" });
  };
  return (
    <div className="cart">
      <main>
        {cartItems.length > 0 ? (
          cartItems.map((i) => {
            return (
              <CartItem
                imgSrc={i.imgSrc}
                name={i.name}
                price={i.price}
                qty={i.quantity}
                id={i.id}
                key={i.id}
                decrement={decrement}
                increment={increment}
                delethandler={delethandler}
              />
            );
          })
        ) : (
          <h1>No Items yet.</h1>
        )}
      </main>
      <aside>
        <h2>Subtotal:${subtotal}</h2>
        <h2>Shipping:${shipping}</h2>
        <h2>Tax:${tax}</h2>
        <h2>Total:${total}</h2>
      </aside>
    </div>
  );
};

const CartItem = ({
  imgSrc,
  price,
  name,
  qty,
  decrement,
  increment,
  delethandler,
  id,
}) => {
  return (
    <div className="cartitem">
      <img src={imgSrc} alt="item" />

      <article>
        <h3>{name}</h3>
        <p>${price}</p>
      </article>
      <div>
        <button onClick={() => decrement(id)}>-</button>
        <p>{qty}</p>
        <button onClick={() => increment(id)}>+</button>
      </div>
      <AiFillDelete onClick={() => delethandler(id)} />
    </div>
  );
};

export default Cart;
