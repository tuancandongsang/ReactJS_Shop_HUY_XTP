import { Button, Rate, Spin } from "antd";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import ProductService from "../../api/ProductService";
import StorageKeys from "../../constants/storage-key";
import { addToCart } from "../Cart/cartSlice";
import "./styles.scss";

ProductDetails.propTypes = {
  id: PropTypes.string,
};

function ProductDetails({ id }) {
  const [spinner, setSpinner] = useState(false);
  const [product, setProduct] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const history = useHistory();
  const dispatch = useDispatch();
  useEffect(() => {
    setSpinner(true);
    ProductService.get(id).then((res) => {
      setProduct(res.data);
      setSpinner(false);
    });
  }, [id]);

  const handleAddToCart = (product, quantity) => {
    if (localStorage.getItem(StorageKeys.TOKEN) === null) {
      history.replace("/login");
    } else {
      dispatch(
        addToCart({
          ...product,
          cartQuantity: quantity,
        })
      );
      history.replace("/cart");
    }
  };
  return (
    <>
      <div className="container p-5">
        <div className="row">
          {spinner && (
            <Spin tip="Loading..." style={{ color: "#1e1e1e" }}></Spin>
          )}
          <div className="col-lg-6">
            <div className="product-slider owl-carousel">
              <div className="product-img">
                <figure>
                  <img src={product.image} alt="product" />
                  <div className="p-status">new</div>
                </figure>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="product-content">
              <h2>Dotted Blue Shirt</h2>
              <div className="pc-meta">
                <h5>${product.price}</h5>
                <Rate allowHalf defaultValue={2.5} />
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse ultrices gravida. Risus commodo viverra
                maecenas accumsan lacus vel facilisis.
              </p>
              <ul className="tags">
                <li>
                  <span>Category :</span> {product.gender}'s Wear
                </li>
                <li>
                  <span>Tags :</span> man, shirt, dotted, elegant, cool
                </li>
              </ul>
              <div className="product-quantity">
                <button
                  onClick={() => {
                    if (quantity > 1) {
                      setQuantity((pre) => (pre -= 1));
                    }
                  }}
                >
                  -
                </button>
                <input
                  type="number"
                  value={quantity}
                  onChange={(e) => {
                    setQuantity(e.target.value);
                  }}
                />
                <button onClick={() => setQuantity((pre) => (pre += 1))}>
                  +
                </button>
              </div>
              <Button
                onClick={() => handleAddToCart(product, quantity)}
                className="primary-btn pc-btn"
              >
                Add to cart
              </Button>
              <ul className="p-info">
                <li>Product Information</li>
                <li>Reviews</li>
                <li>Product Care</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default ProductDetails;
