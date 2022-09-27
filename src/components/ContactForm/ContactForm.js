import React, { useRef } from "react";
import UnderLine from "../UnderLine/UnderLine";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";

function ContactForm() {
  const form = useRef();
  const navigate = useNavigate();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ub2nr8f",
        "template_oducgrf",
        form.current,
        "siYMFulaTwKQ05ef4"
      )
      .then(
        (result) => {
          alert(
            `Hello ${form.current.name.value} your message has been sent successfully we will contact you shortly`
          );
          navigate("/");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="col l5  s12">
      <UnderLine text="GET IN TOUCH" />
      <h3 className="levbitz_title">Contact Us</h3>
      <div class="row">
        <form ref={form} onSubmit={sendEmail} class="col s12">
          <div className="row">
            <div className="col l12 s12 center">
              <div className="input-field input-outlined ">
                <input name="name" id="name" type="text" />
                <label htmlFor="name">Name</label>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col l12 s12 center">
              <div className="input-field input-outlined ">
                <input name="" id="email" type="email" />
                <label htmlFor="email">Email</label>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col l12 s12 center">
              <div className="input-field input-outlined ">
                <input name="phone" id="phone" type="text" />
                <label htmlFor="phone">Phone</label>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col l12 s12">
              <small className="right"> *25 characters minimum</small>
              <div className=" input-field input-outlined l6 ">
                <textarea
                  style={{
                    height: "100px",
                    background: "#fff",
                    padding: "10px 10px",
                    resize: "vertical",
                  }}
                  // minLength
                  name="description"
                  id="description"
                  type="text"
                ></textarea>
                <label htmlFor="description">Messege</label>
              </div>
            </div>
          </div>
          <div>
            <input
              type={"submit"}
              value="send message"
              className="btn btn-large      pink lighten-1 waves-effect waves-light z-depth-0"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
