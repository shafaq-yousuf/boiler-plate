import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { del } from "../redux/reducer/cardSlice";

const CartScreen = () => {
  const dt = useSelector((data) => data.card);
  const dispatch = useDispatch();
  const removeFromCart = (x) => {
    dispatch(del(x));
    console.log(x);
  };
  return (
    <>
      <h2>Cart</h2>
      <div className="container">
        {dt.map((x, y) => {
          return (
            <div className="row" key={y}>
              <div className="col-md-4">
                <div className="card">
                  <img
                    src={x.image}
                    className="card-img-top"
                    alt="..."
                    height="400px"
                    width="200px"
                  />
                  <div className="card-body">
                    <h4 className="card-title">{x.title}</h4>
                    <p className="card-text">{x.description}</p>
                    <h6>Price : {x.price}/-</h6>
                    <button
                      className="btn btn-primary rounded"
                      onClick={() => removeFromCart(x)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default CartScreen;
