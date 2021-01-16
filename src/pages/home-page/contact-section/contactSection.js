import React from "react";
import Button from "../../../components/button/button";

export default function ContactSection() {
  return (
    <>
      <div className="container-contact" id="container-contact">
        <h3>
          Contact New<span>To</span>Words
        </h3>
        <form name="contact" method="post" data-netlify="true">
          <input type="hidden" name="form-name" value="contact" />
          <input type="email" name="email" required placeholder="* Email" />
          <textarea name="message" required placeholder="* Message" />
          <button type="submit" className="full">
            Send
          </button>
        </form>
      </div>
      <style jsx>{`
        .container-contact {
          width: 100%;
          height: 94vh;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          padding: 10%;
          background-color: var(--secondary-color);
          clip-path: polygon(0 5%, 100% 0, 100% 95%, 0 100%);
        }

        .container-contact span {
          color: var(--main-color);
        }

        .container-contact h3 {
          font-weight: 500;
          font-size: 5vh;
          color: white;
          text-align: center;
        }

        .container-contact form {
          display: flex;
          justify-content: center;
          align-items: flex-end;
          flex-direction: column;
          width: 100%;
          height: 50vh;
          padding-top: 3vh;
        }

        .container-contact input {
          width: 100%;
          margin: 0 1% 1vh 1%;
          background-color: #c4c4c444;
          border: none;
          outline: none;
          color: white;
          padding: 1vh;
        }

        .container-contact textarea {
          resize: none;
          width: 100%;
          height: 100%;
          margin: 0 1% 1vh 1%;
          background-color: #c4c4c444;
          border: none;
          outline: none;
          color: white;
          padding: 1vh;
        }

        .full {
          background-color: var(--main-color);
          width: 16vh;
          height: 5vh;
          margin: 0 1% 0 0;
          color: white;
          font-weight: 300;
          font-size: 2vh;
          border: 3px solid var(--main-color);
          transition: all 0.3s ease;
        }

        .full:hover {
          color: white;
          background-color: var(--secondary-color);
          border: 3px solid var(--main-color);
        }

        @media screen and (max-width: 500px) and (orientation: portrait) {
          .container-contact h3 {
            font-size: 4vh;
          }
        }
      `}</style>
    </>
  );
}
