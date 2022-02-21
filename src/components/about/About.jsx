import "./about.css";
import Crystal from "../../img/crystal.jpg";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card">
          <img className="a-img" src={Crystal} alt="crstal-img"/>
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-desc">
          I am a motivated Front End Web Developer with a Full Stack Web Development Certificate from the University of Pennsylvania acquired Feburary 2022.
          My training is in designing, building, and maintaining websites from conception to production. The experience I have working in a fast-paced and diverse team environment developing 
          solutions gives me the confidence I will exceed expectations. <br/> <br/> 

          Upenn Bootcamp training consisted of frontend and backend programming languages such as JavaScript, Node.js, Express, MySQL, Sequelize, Rect, 
          MongoDB, Mongoose, HTML, and CSS. I enjoy the challenges that come with learning new languages and programs along with biking, photograhy, and hiking. 
        </p>
      </div>
    </div>
  );
};

export default About;