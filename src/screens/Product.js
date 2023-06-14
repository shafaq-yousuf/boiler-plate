import React, { useEffect, useState } from "react";
import { Get } from "./apiHandle";
import { useDispatch } from "react-redux";
import { add } from "../redux/reducer/cardSlice";
import { useNavigate } from "react-router-dom";
import Loader from "../components/Loader";

const Product = () => {
  const [loader, setLoader] = useState(false);
  const [model, setModel] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const getApiData = () => {
    setLoader(true);
    Get("products")
      .then((res) => {
        setModel([...res.data]);
        setLoader(false);
      })
      .catch((err) => {
        setLoader(false);
        console.log(err);
      });
  };

  useEffect(() => {
    getApiData();
  }, []);
  const addtocart = (x) => {
    console.log(x);
    dispatch(add(x));
  };
  const navigateToCart = () => {
    navigate("/Cart");
  };
  return (
    <>
      {loader ? (
        <Loader />
      ) : (
        <div>
          <h1 className="text-center">Products</h1>
          <button className="btn btn-primary" onClick={navigateToCart}>
            Cart
          </button>
          <div className="container">
            {model.map((x, y) => {
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
                          onClick={() => addtocart(x)}
                        >
                          Add To Cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default Product;
