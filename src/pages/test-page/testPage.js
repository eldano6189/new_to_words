import Head from "next/head";
import { useRef, useContext } from "react";
import Button from "../../components/button/button";
import GrammerlyBanner from "../../components/advert-component/grammerlyBanner";
import { DataContext } from "../../data/states/globalStates";

export default function TestPage() {
  const data = useContext(DataContext);
  const Testone = useRef();
  const Testtwo = useRef();
  const Testthree = useRef();
  const Testfour = useRef();
  const Testfive = useRef();
  const Testsix = useRef();
  const Testseven = useRef();
  const Testeight = useRef();
  const Testnine = useRef();
  const Testten = useRef();

  //Asking the questions
  function spellingOne() {
    const spellOne = data.spellings[0];
    let spelling = new SpeechSynthesisUtterance(spellOne);
    speechSynthesis.speak(spelling);
  }

  function spellingTwo() {
    const spellTwo = data.spellings[1];
    let spelling = new SpeechSynthesisUtterance(spellTwo);
    speechSynthesis.speak(spelling);
  }

  function spellingThree() {
    const spellThree = data.spellings[2];
    let spelling = new SpeechSynthesisUtterance(spellThree);
    speechSynthesis.speak(spelling);
  }

  function spellingFour() {
    const spellFour = data.spellings[3];
    let spelling = new SpeechSynthesisUtterance(spellFour);
    speechSynthesis.speak(spelling);
  }

  function spellingFive() {
    const spellFive = data.spellings[4];
    let spelling = new SpeechSynthesisUtterance(spellFive);
    speechSynthesis.speak(spelling);
  }

  function spellingSix() {
    const spellSix = data.spellings[5];
    let spelling = new SpeechSynthesisUtterance(spellSix);
    speechSynthesis.speak(spelling);
  }

  function spellingSeven() {
    const spellSeven = data.spellings[6];
    let spelling = new SpeechSynthesisUtterance(spellSeven);
    speechSynthesis.speak(spelling);
  }

  function spellingEight() {
    const spellEight = data.spellings[7];
    let spelling = new SpeechSynthesisUtterance(spellEight);
    speechSynthesis.speak(spelling);
  }

  function spellingNine() {
    const spellNine = data.spellings[8];
    let spelling = new SpeechSynthesisUtterance(spellNine);
    speechSynthesis.speak(spelling);
  }

  function spellingTen() {
    const spellTen = data.spellings[9];
    let spelling = new SpeechSynthesisUtterance(spellTen);
    speechSynthesis.speak(spelling);
  }

  function FinishedTest() {
    data.setAnswers([
      Testone.current.value.toLowerCase(),
      Testtwo.current.value.toLowerCase(),
      Testthree.current.value.toLowerCase(),
      Testfour.current.value.toLowerCase(),
      Testfive.current.value.toLowerCase(),
      Testsix.current.value.toLowerCase(),
      Testseven.current.value.toLowerCase(),
      Testeight.current.value.toLowerCase(),
      Testnine.current.value.toLowerCase(),
      Testten.current.value.toLowerCase(),
    ]);
  }

  return (
    <>
      <Head>
        <title>NewToWords - Test your Spelling</title>
      </Head>
      <section className="container-test-page">
        <div className="test-col-left">
          <h3>Spelling Test</h3>
          <div className="container-test-text">
            <p>
              Please ensure you have your volume up on either your speakers or
              headphones.
            </p>
            <p>
              Click on the speaker icon{" "}
              <img src="/images/mic-icon-orange.svg" alt="Mic" /> to hear your
              spellings and then proceed to answer in the corresponding box.
            </p>
            <p>
              Once you have completed your spellings, click on the{" "}
              <span>Finish</span> button which will direct you to your results.
            </p>
          </div>

          <GrammerlyBanner />

          <div className="container-finish">
            <Button
              href="/results-page/resultPage"
              look={"full"}
              click={() => FinishedTest()}
            >
              Finish
            </Button>
          </div>
        </div>
        <div className="test-col-right">
          <ul>
            <li>
              <label>1.</label>
              <input
                type="text"
                ref={Testone}
                autoCapitalize="off"
                autoComplete="off"
                spellCheck="false"
                autoCorrect="off"
              />
              <img
                src="/images/mic-icon.svg"
                alt="Mic"
                onClick={() => spellingOne()}
              />
            </li>
            <li>
              <label>2.</label>
              <input
                type="text"
                ref={Testtwo}
                autoCapitalize="off"
                autoComplete="off"
                spellCheck="false"
                autoCorrect="off"
              />
              <img
                src="/images/mic-icon.svg"
                alt="Mic"
                onClick={() => spellingTwo()}
              />
            </li>
            <li>
              <label>3.</label>
              <input
                type="text"
                ref={Testthree}
                autoCapitalize="off"
                autoComplete="off"
                spellCheck="false"
                autoCorrect="off"
              />
              <img
                src="/images/mic-icon.svg"
                alt="Mic"
                onClick={() => spellingThree()}
              />
            </li>
            <li>
              <label>4.</label>
              <input
                type="text"
                ref={Testfour}
                autoCapitalize="off"
                autoComplete="off"
                spellCheck="false"
                autoCorrect="off"
              />
              <img
                src="/images/mic-icon.svg"
                alt="Mic"
                onClick={() => spellingFour()}
              />
            </li>
            <li>
              <label>5.</label>
              <input
                type="text"
                ref={Testfive}
                autoCapitalize="off"
                autoComplete="off"
                spellCheck="false"
                autoCorrect="off"
              />
              <img
                src="/images/mic-icon.svg"
                alt="Mic"
                onClick={() => spellingFive()}
              />
            </li>
            <li>
              <label>6.</label>
              <input
                type="text"
                ref={Testsix}
                autoCapitalize="off"
                autoComplete="off"
                spellCheck="false"
                autoCorrect="off"
              />
              <img
                src="/images/mic-icon.svg"
                alt="Mic"
                onClick={() => spellingSix()}
              />
            </li>
            <li>
              <label>7.</label>
              <input
                type="text"
                ref={Testseven}
                autoCapitalize="off"
                autoComplete="off"
                spellCheck="false"
                autoCorrect="off"
              />
              <img
                src="/images/mic-icon.svg"
                alt="Mic"
                onClick={() => spellingSeven()}
              />
            </li>
            <li>
              <label>8.</label>
              <input
                type="text"
                ref={Testeight}
                autoCapitalize="off"
                autoComplete="off"
                spellCheck="false"
                autoCorrect="off"
              />
              <img
                src="/images/mic-icon.svg"
                alt="Mic"
                onClick={() => spellingEight()}
              />
            </li>
            <li>
              <label>9.</label>
              <input
                type="text"
                ref={Testnine}
                autoCapitalize="off"
                autoComplete="off"
                spellCheck="false"
                autoCorrect="off"
              />
              <img
                src="/images/mic-icon.svg"
                alt="Mic"
                onClick={() => spellingNine()}
              />
            </li>
            <li>
              <label>10.</label>
              <input
                type="text"
                ref={Testten}
                autoCapitalize="off"
                autoComplete="off"
                spellCheck="false"
                autoCorrect="off"
              />
              <img
                src="/images/mic-icon.svg"
                alt="Mic"
                onClick={() => spellingTen()}
              />
            </li>
          </ul>
        </div>
      </section>
      <style jsx>{`
        .container-test-page {
          margin-top: 6vh;
          width: 100%;
          height: calc(100vh - 6vh);
          display: flex;
        }

        .test-col-left {
          height: 100%;
          width: 50%;
          background-color: var(--secondary-color);
          padding: 5%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: flex-start;
        }

        .test-col-left h3 {
          color: var(--main-color);
          font-size: 4vh;
          font-weight: 500;
        }

        .container-test-text {
          width: 100%;
          height: 25%;
          display: flex;
          flex-direction: column;
        }

        .container-test-text img {
          transform: translateY(20%);
          height: 3vh;
          width: 3vh;
        }

        .container-test-text p {
          padding-bottom: 2vh;
          font-size: 2.2vh;
          color: var(--fourth-color);
        }

        .container-test-text span {
          color: var(--main-color);
        }

        .container-finish {
          width: 100%;
          height: 25%;
          display: flex;
          flex-direction: column;
        }

        .test-col-right {
          height: 100%;
          width: 50%;
          background-color: var(--fourth-color);
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
        }

        .test-col-right ul {
          width: 80%;
          height: 80%;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
        }

        .test-col-right ul li {
          width: 100%;
          height: 10%;
          display: flex;
          justify-content: flex-end;
          align-items: center;
        }

        .test-col-right img {
          margin: 0 2vh;
          width: 5vh;
          height: 5vh;
          cursor: pointer;
        }

        .test-col-right label {
          color: var(--main-color);
          height: 100%;
          width: 10%;
          font-size: 4vh;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .test-col-right input {
          border: 2px solid var(--secondary-color);
          height: 80%;
          width: 90%;
          font-size: 4vh;
        }

        @media screen and (max-width: 850px) and (orientation: portrait) {
          .container-test-page {
            flex-direction: column;
          }

          .test-col-left {
            height: 90vh;
            width: 100%;
          }

          .test-col-right {
            height: 90vh;
            width: 100%;
          }

          .container-advert {
            height: 15%;
          }
        }

        @media screen and (max-width: 500px) and (orientation: portrait) {
          .test-col-left h3 {
            font-size: 3vh;
          }

          .test-col-left p {
            font-size: 2vh;
          }
        }
      `}</style>
    </>
  );
}
