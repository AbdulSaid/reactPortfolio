import { useContext, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ThemeContext } from "../../context";

import "./contact.scss";

export default function Contact() {
  const formRef = useRef();
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.SERVICE_ID,
        process.env.TEMPLATE_ID,
        formRef.current,
        process.env.USER_ID
      )
      .then(
        (result) => {
          setMessage(true);
          console.log(result.text);
          console.log("set done to true");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  // background-color: #5d92e3;
  return (
    <div className="c">
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's discuss your project.</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src="assets/phone.png" alt="" className="c-icon" />{" "}
              416-262-4439
            </div>
            <div className="c-info-item">
              <img src="assets/email.png" alt="" className="c-icon" />{" "}
              abdulrahman.asaid@gmail.com
            </div>
            <div className="c-info-item">
              <img src="assets/address.png" alt="" className="c-icon" />{" "}
              Toronto, On
            </div>
          </div>
          <div className="c-img">
            <img src="assets/shake.svg" alt="" className="c-img-pic" />
          </div>
        </div>
        <div className="c-right">
          <form ref={formRef} onSubmit={handleSubmit}>
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Name"
              name="user_name"
            />
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Subject"
              name="user_subject"
            />
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Email"
              name="user_email"
            />
            <textarea
              style={{ backgroundColor: darkMode && "#333" }}
              rows="5"
              placeholder="Message"
              name="message"
            />
            <button>Submit</button>
            {message &&
              "Thank you for your message. I will get back to you as soon as possible"}
          </form>
        </div>
      </div>
    </div>
  );
}
