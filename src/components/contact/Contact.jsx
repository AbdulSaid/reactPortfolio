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
        "service_x6jsaah",
        "template_hpqpnio",
        formRef.current,
        "user_cNsDnIXW4XPjForsL5W1r"
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
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <h2>Contact.</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Email" />
          <textarea placeholder="Message" />
          <button type="submit">Send</button>
          {message && <span>Thanks, I will reply ASAP :)</span>}
        </form>
      </div>
    </div>
  );
}
