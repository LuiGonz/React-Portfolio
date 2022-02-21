import "./productList.css";
import Product from "../product/Product";
import {products} from "../../data";

const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Design & Develop</h1>
        <p className="pl-desc">
          Select the design and style you envision your website to be.
        </p>
      </div>
      <div className="pl-list">
        {products.map((item) => (
          <Product key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;