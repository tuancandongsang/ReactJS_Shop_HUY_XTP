import { Table } from "antd";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  clearCart,
  decreaseCart,
  getTotals,
  inputAmountCart,
  removeFromCart,
} from "./cartSlice";
import "./styles.scss";

Cart.prototype = {};
function Cart(props) {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };
  const handleInputAmountCart = (product) => {
    dispatch(inputAmountCart(product));
  };
  const handleDecreaseCart = (product) => {
    dispatch(decreaseCart(product));
  };
  const handleRemoveFromCart = (product) => {
    dispatch(removeFromCart(product));
  };
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  const dataSource = cart.cartItems;

  const columns = [
    {
      title: "SẢN PHẨM",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "GIÁ",
      dataIndex: "price",
      key: "price",
      render: (price) => <>${price}</>,
    },
    {
      title: "SỐ LƯỢNG",
      key: "cartQuantity",
      render: (record) => (
        <div className="cart-quantity">
          <button onClick={() => handleDecreaseCart(record)}>-</button>
          <input
            type="number"
            value={record.cartQuantity}
            onChange={(e) => {
              handleInputAmountCart({
                ...record,
                cartQuantity: e.target.value,
              });
            }}
          />
          <button onClick={() => handleAddToCart(record)}>+</button>
        </div>
      ),
    },
    {
      title: "TỔNG",
      key: "total",
      render: (record) => <>${record.price * record.cartQuantity}</>,
    },
  ];

  return (
    <>
      <div className="cart-page">
        <div className="container">
          <h1 className="text-center p-5">Giỏ hàng của bạn</h1>
          <div className="cart-table">
            <Table
              dataSource={dataSource}
              columns={columns}
              pagination={false}
              rowKey="id"
            />
          </div>
          <h5 className="text m-5" style={{ float: "right" }}>
            TỔNG HOÁ ĐƠN: ${cart.cartTotalAmount}
          </h5>
          <div className="cart-btn">
            <div className="row">
              <div className="col-lg-6">
                <div className="coupon-input">
                  <input type="text" placeholder="Enter cupone code" />
                </div>
              </div>
              <div className="col-lg-5 offset-lg-1 text-left text-lg-right">
                <div className="site-btn clear-btn">Clear Cart</div>
                <div className="site-btn update-btn">Update Cart</div>
              </div>
            </div>
          </div>
        </div>
        <div className="shopping-method">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="shipping-info">
                  <h5>Choose a shipping</h5>
                  <div className="chose-shipping">
                    <div className="cs-item">
                      <input type="radio" name="cs" id="one" />
                      <label htmlFor="one" className="active">
                        Free Standard shhipping
                        <span>Estimate for New York</span>
                      </label>
                    </div>
                    <div className="cs-item">
                      <input type="radio" name="cs" id="two" />
                      <label htmlFor="two">Next Day delievery $10</label>
                    </div>
                    <div className="cs-item last">
                      <input type="radio" name="cs" id="three" />
                      <label htmlFor="three">In Store Pickup - Free</label>
                    </div>
                  </div>
                </div>
                <div className="total-info">
                  <div className="total-table">
                    <table>
                      <thead>
                        <tr>
                          <th>Total</th>
                          <th>Subtotal</th>
                          <th>Shipping</th>
                          <th className="total-cart">Total Cart</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="total">$29</td>
                          <td className="sub-total">$29</td>
                          <td className="shipping">$10</td>
                          <td className="total-cart-p">$39</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="row">
                    <div className="col-lg-12 text-right">
                      <a
                        href="http://localhost:3000/"
                        className="primary-btn chechout-btn"
                      >
                        Proceed to checkout
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Cart;
