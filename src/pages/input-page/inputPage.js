import Head from "next/head";
import { useContext, useRef } from "react";
import Button from "../../components/button/button";
import Toggle from "../../components/toggle-switch/toggleSwitch";
import GrammerlyBanner from "../../components/advert-component/grammerlyBanner";
import { DataContext } from "../../data/states/globalStates";

export default function InputPage() {
  const data = useContext(DataContext);
  const one = useRef();
  const two = useRef();
  const three = useRef();
  const four = useRef();
  const five = useRef();
  const six = useRef();
  const seven = useRef();
  const eight = useRef();
  const nine = useRef();
  const ten = useRef();

  function AddSpellings() {
    data.setSpellings([
      one.current.value.toLowerCase(),
      two.current.value.toLowerCase(),
      three.current.value.toLowerCase(),
      four.current.value.toLowerCase(),
      five.current.value.toLowerCase(),
      six.current.value.toLowerCase(),
      seven.current.value.toLowerCase(),
      eight.current.value.toLowerCase(),
      nine.current.value.toLowerCase(),
      ten.current.value.toLowerCase(),
    ]);
    data.setSlider(false);
  }

  return (
    <>
      <Head>
        <title>NewToWords - Input Spellings</title>
      </Head>
      <section className="container-input-page">
        <div className="col-left">
          <h3>Input Student Spellings</h3>
          <div className="container-input-text">
            <h3>Please use the text box to input the spellings</h3>
            <h4>
              Once you have correctly input the spellings, click on the{" "}
              <span>Learn Now</span> button which will direct your student to
              the learning page.
            </h4>
          </div>

          <GrammerlyBanner />

          <div className="container-disclaimer">
            <p>
              Clicking the <span>Accept</span> button will save the spellings to
              local storage for next time this platform is used.
            </p>
            <div className="container-toggle-switch">
              <Toggle left={"Accept"} right={"Decline"} />
            </div>
            {data.slider === false ? (
              <Button href="/input-page/inputPage" look={"full"}>
                Learn Now
              </Button>
            ) : (
              <Button
                href="/learn-page/learnPage"
                look={"full"}
                click={() => AddSpellings()}
              >
                Learn Now
              </Button>
            )}
          </div>
        </div>
        <div className="col-right">
          <ul>
            <li>
              <label>1.</label>
              <input type="text" ref={one} />
            </li>
            <li>
              <label>2.</label>
              <input type="text" ref={two} />
            </li>
            <li>
              <label>3.</label>
              <input type="text" ref={three} />
            </li>
            <li>
              <label>4.</label>
              <input type="text" ref={four} />
            </li>
            <li>
              <label>5.</label>
              <input type="text" ref={five} />
            </li>
            <li>
              <label>6.</label>
              <input type="text" ref={six} />
            </li>
            <li>
              <label>7.</label>
              <input type="text" ref={seven} />
            </li>
            <li>
              <label>8.</label>
              <input type="text" ref={eight} />
            </li>
            <li>
              <label>9.</label>
              <input type="text" ref={nine} />
            </li>
            <li>
              <label>10.</label>
              <input type="text" ref={ten} />
            </li>
          </ul>
        </div>
      </section>
      <style jsx>{`
        .container-input-page {
          margin-top: 6vh;
          width: 100%;
          height: calc(100vh - 6vh);
          display: flex;
        }

        .col-left {
          height: 100%;
          width: 50%;
          background-color: var(--secondary-color);
          padding: 5%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: flex-start;
        }

        .col-left h3 {
          color: var(--main-color);
          font-size: 4vh;
          font-weight: 500;
        }

        .container-input-text {
          width: 100%;
          height: 25%;
          display: flex;
          flex-direction: column;
        }

        .container-input-text span {
          color: var(--main-color);
        }

        .container-input-text h3 {
          color: var(--fourth-color);
          font-size: 3.2vh;
          font-weight: 500;
        }

        .container-input-text h4 {
          color: var(--fourth-color);
          font-size: 2.5vh;
          font-weight: 300;
          padding-top: 4vh;
        }

        .container-disclaimer {
          width: 100%;
          height: 25%;
          display: flex;
          flex-direction: column;
        }

        .container-disclaimer p {
          color: var(--fourth-color);
          font-weight: 300;
          font-size: 1.5vh;
        }

        .container-disclaimer span {
          color: var(--main-color);
        }

        .container-toggle-switch {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          padding: 2vh 0;
        }

        .col-right {
          height: 100%;
          width: 50%;
          background-color: var(--fourth-color);
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
        }

        .col-right ul {
          width: 80%;
          height: 80%;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
        }

        .col-right ul li {
          width: 100%;
          height: 10%;
          display: flex;
          justify-content: flex-end;
          align-items: center;
        }

        .col-right label {
          color: var(--main-color);
          height: 100%;
          width: 10%;
          font-size: 4vh;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .col-right input {
          border: 2px solid var(--secondary-color);
          height: 80%;
          width: 90%;
          font-size: 4vh;
        }

        @media screen and (max-width: 850px) and (orientation: portrait) {
          .container-input-page {
            flex-direction: column;
          }

          .col-left {
            height: 90vh;
            width: 100%;
          }

          .col-right {
            height: 90vh;
            width: 100%;
          }

          .container-advert {
            height: 15%;
          }
        }

        @media screen and (max-width: 500px) and (orientation: portrait) {
          .col-left h3 {
            font-size: 3vh;
          }

          .col-left h4 {
            font-size: 2vh;
            padding: 2vh 0;
          }
        }
      `}</style>
    </>
  );
}
