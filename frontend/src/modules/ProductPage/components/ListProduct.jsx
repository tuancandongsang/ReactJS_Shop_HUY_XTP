import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import ProductService from "../../../api/ProductService";
import "./styles.scss";

ListProduct.propTypes = {
  gender: PropTypes.string,
};

function ListProduct({ gender }) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    ProductService.getList().then((res) => {
      const data = res.data
        .sort((a, b) => b.mtime - a.mtime)
        .map((dt) => {
          return {
            id: dt.id,
            name: dt.name,
            price: dt.price,
            image: dt.image,
          };
        });
      setProducts(data);
    });
  }, []);

  return (
    <>
      <div className="container p-5">
        <div className="row">
          <div className="col-lg-12 text-center mb-5">
            <div className="section-title">
              <h2>Related Products</h2>
            </div>
          </div>
        </div>
        <div className="row">
          {products.map((p) => {
            return (
              <div className="col-lg-3 col-sm-6 p-3" key={p.id}>
                <div className="single-product-item">
                  <figure>
                    <a href="http://localhost:3000/men">
                      <img src={p.image} alt="" />
                    </a>
                    <div className="p-status">new</div>
                  </figure>
                  <div className="product-text">
                    <h6>{p.name}</h6>
                    <p>${p.price}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
export default ListProduct;
