import React from "react";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";

const Home = () => {
  const productList = [
    {
      name: "Mac book",
      price: 1200,
      imgSrc:
        "https://images.pexels.com/photos/303383/pexels-photo-303383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      id: "aldjfldsjfldf",
    },
    {
      name: "HPElite book",
      price: 800,
      imgSrc:
        "https://zacsolutions.com.pk/wp-content/uploads/2021/03/7183sMUI6JL._AC_SL1500_-1.jpg",
      id: "aldjfldfddsjfldf",
    },
    {
      name: "Dell Atom",
      price: 2200,
      imgSrc: "https://steliam.com/storage/2022/03/dell_mini_maroon.jpg",
      id: "aldjfldsjfaadffldf",
    },
  ];

  const dispatch = useDispatch();
  const addToCartHandler = (options) => {
    dispatch({ type: "addToCart", payload: options });
    dispatch({ type: "calculatePrice" });

    toast.success("added to cart");
  };
  return (
    <div className="home">
      {productList.map((i) => {
        return (
          <ProductCard
            key={i.id}
            imgSrc={i.imgSrc}
            name={i.name}
            price={i.price}
            id={i.id}
            handler={addToCartHandler}
          />
        );
      })}
    </div>
  );
};

const ProductCard = ({ name, id, price, imgSrc, handler }) => {
  return (
    <div className="productCard">
      <img src={imgSrc} alt="" />
      <p>{name}</p>
      <h4>${price}</h4>
      <button onClick={() => handler({ name, price, id, quantity: 1, imgSrc })}>
        Add to Cart
      </button>
    </div>
  );
};

export default Home;
