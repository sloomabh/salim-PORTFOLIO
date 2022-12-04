import "./contact.styles.scss";
import React, { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_das4s3h",
        "template_einidob",
        form.current,
        "3vi6w8y9stbOIG9x9"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  /*********************************************** */
  return (
    <section className="contact" id="contact">
      <div className="max-width">
        <h2 className="title">Contact me</h2>

        <div className="contact-content">
          <div className="column left">
            <div className="text">Get in Touch</div>
            <p>
              I am looking forward to hearing back from you, Please feel free to
              contact me with any questions and thank you very much for your
              consediration.
            </p>
            <div className="icons">
              <div className="row">
                <i className="fas fa-user"></i>
                <div className="info">
                  <div className="head">Name</div>
                  <div className="sub-title">Salim Ben Halima</div>
                </div>
              </div>
              <div className="row">
                <i className="fas fa-map-marker-alt"></i>
                <div className="info">
                  <div className="head">Address</div>
                  <div className="sub-title">Shinagawa ,Tokyo , Japan</div>
                </div>
              </div>
              <div className="row">
                <i className="fas fa-envelope"></i>
                <div className="info">
                  <div className="head">Email</div>
                  <div className="sub-title">salimbenhalima95@gmail.com</div>
                </div>
              </div>
              <div className="row">
                <i className="fa-solid fa-phone"></i>
                <div className="info">
                  <div className="head">Phone number</div>
                  <div className="sub-title"> +81-090-7049-8756</div>
                </div>
              </div>
            </div>
            <div className="contact_icons">
              <a
                href="https://api.whatsapp.com/send?phone=+8109070498756"
                className="btn"
                target="_blank"
              >
                <i className="fa-brands fa-whatsapp"></i>
              </a>

              <a
                href="https://github.com/sloomabh"
                className="btn"
                target="_blank"
              >
                <i className="fa-brands fa-github"></i>
              </a>

              <a
                href="https://www.linkedin.com/in/salim-ben-halima-31012b18a/"
                className="btn"
                target="_blank"
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </div>
          </div>

          <div className="column right">
            <div className="text">Message me</div>
            <form ref={form} onSubmit={sendEmail}>
              <div className="fields">
                <div className="field name">
                  <input type="text" name="name" placeholder="Name" required />
                </div>
                <div className="field email">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </div>
              </div>
              <div className="field">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  required
                />
              </div>
              <div className="field textarea">
                <textarea
                  placeholder="Message.."
                  name="message"
                  required
                ></textarea>
              </div>
              <div className="button-area">
                <button type="submit">Send message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
