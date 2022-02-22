import "./webProdList.css";
import Product from "../ryg-circle/RYG-circle";
import {products} from "../../data";

const WebProdList = () => {
  return (
    <div className="web-list">
      <div className="web-list-texts">
        <h1 className="web-list-title">Design & Develop</h1>
        <p className="web-list-desc">
          Select the design and style you envision your website to be.
        </p>
      </div>
      <div className="web-list-list">
        {products.map((item) => (
          <Product key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
    </div>
  );
};

export default WebProdList;