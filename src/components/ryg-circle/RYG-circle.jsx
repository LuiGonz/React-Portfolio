import "./RYG-circle.css";

const Product = ({img,link}) => {
  return (
    <div className="RYG">
      <div className="RYG-browser">
        <div className="RYG-circle-1"></div>
        <div className="RYG-circle-2"></div>
        <div className="RYG-circle-3"></div>
      </div>
      <a href={link} target="_blank" rel="noreferrer">
        <img src={img} alt="" className="RYG-img" />
      </a>
    </div>
  );
};

export default Product;