import "./intro.css";
import Me from "../../img/laptop-1.jfif";

const Intro = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, My name is</h2>
          <h1 className="i-name">Luis Gonzales</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Web Developer</div>
              <div className="i-title-item">Biker</div>
              <div className="i-title-item">Photographer</div>
              <div className="i-title-item">Hiker</div>
              <div className="i-title-item">UI/UX Designer</div>
            </div>
          </div>
          <p className="i-desc">
            I develop and design specialized websites that are modern and stylish.<br/><br/>  
            My services will give your business the online stores and web services needed to stay competetive in the digital market. 
          </p>
        </div>
      </div>
      <div className="i-right">
        <div className="i-bg"></div>
        <img src={Me} alt="" className="i-img" />
      </div>
    </div>
  );
};

export default Intro;