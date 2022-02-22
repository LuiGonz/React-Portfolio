import "./contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import { useContext, useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import { ContextTheme } from "../../context";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false)
  const themeContact = useContext(ContextTheme);
  const ModeDark = themeContact.state.ModeDark;
  

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_2ThauZen22', 'template_r9lgm4u', formRef.current, 'user_lMpIZQ3ERaiQjmbUFChIp')
      .then((result) => {
          console.log(result.text);
          setDone(true);
          console.log(done);
      }, (error) => {
          console.log(error.text);
      }); 
  };

  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Ready to develop your website?</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              +1 (484) 626 6650
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Email} alt="" />
              privacynow20@gmail.com
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Address} alt="" />
              Bethlehem, Pennsylvania
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>What are your website goals?</b> I'm available for freelance work if a suitable project crosses my path. 
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
              <input style={{backgroundColor: ModeDark && "skyblue", borderRadius: ".5em"}} type="text" placeholder="Name" name="user_name" />
              <input style={{backgroundColor: ModeDark && "skyblue", borderRadius: ".5em"}} type="text" placeholder="Subject" name="user_subject" />
              <input style={{backgroundColor: ModeDark && "skyblue", borderRadius: ".5em"}} type="text" placeholder="Email" name="user_email" />
              <textarea style={{backgroundColor: ModeDark && "skyblue", borderRadius: ".5em"}} rows="5" placeholder="Message" name="user_message" />
              <button type="submit" style={{backgroundColor: ModeDark && "rgb(0, 165, 168)", borderRadius: ".5em"}}>Submit</button>
              <p className="thank-you" style={{color: "royalblue", borderRadius: ".5em"}}><br />{done && "Thank you! I will reach out to you as soon as possible."}</p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;