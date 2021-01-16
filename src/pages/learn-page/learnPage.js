import Head from "next/head";
import { useContext } from "react";
import Button from "../../components/button/button";
import GrammerlyBanner from "../../components/advert-component/grammerlyBanner";
import { DataContext } from "../../data/states/globalStates";

export default function LearnPage() {
  const data = useContext(DataContext);

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

  return (
    <>
      <Head>
        <title>NewToWords - Learn your spellings</title>
      </Head>
      <section className="container-learn-page">
        <div className="learn-col-left">
          <h3>Learn Your Spellings</h3>
          <div className="container-learn-text">
            <p>
              Please ensure you have your volume up on either your speakers or
              headphones.
            </p>
            <p>
              Click on the speaker icon{" "}
              <img src="/images/mic-icon-orange.svg" alt="Mic" /> to hear your
              spelling in the corresponding box.
            </p>
            <p>
              Once you have finished studying, click on the{" "}
              <span>Take Test</span> button which will direct you to your
              spelling test.
            </p>
          </div>

          <GrammerlyBanner />

          <div className="container-btn-take-test">
            <Button href="/test-page/testPage" look={"full"}>
              Take Test
            </Button>
          </div>
        </div>
        <div className="learn-col-right">
          <ul>
            <li>
              <label>1.</label>
              <h5>{data.spellings[0]}</h5>
              <img
                src="/images/mic-icon.svg"
                alt="Mic"
                onClick={() => spellingOne()}
              />
            </li>
            <li>
              <label>2.</label>
              <h5>{data.spellings[1]}</h5>
              <img
                src="/images/mic-icon.svg"
                alt="Mic"
                onClick={() => spellingTwo()}
              />
            </li>
            <li>
              <label>3.</label>
              <h5>{data.spellings[2]}</h5>
              <img
                src="/images/mic-icon.svg"
                alt="Mic"
                onClick={() => spellingThree()}
              />
            </li>
            <li>
              <label>4.</label>
              <h5>{data.spellings[3]}</h5>
              <img
                src="/images/mic-icon.svg"
                alt="Mic"
                onClick={() => spellingFour()}
              />
            </li>
            <li>
              <label>5.</label>
              <h5>{data.spellings[4]}</h5>
              <img
                src="/images/mic-icon.svg"
                alt="Mic"
                onClick={() => spellingFive()}
              />
            </li>
            <li>
              <label>6.</label>
              <h5>{data.spellings[5]}</h5>
              <img
                src="/images/mic-icon.svg"
                alt="Mic"
                onClick={() => spellingSix()}
              />
            </li>
            <li>
              <label>7.</label>
              <h5>{data.spellings[6]}</h5>
              <img
                src="/images/mic-icon.svg"
                alt="Mic"
                onClick={() => spellingSeven()}
              />
            </li>
            <li>
              <label>8.</label>
              <h5>{data.spellings[7]}</h5>
              <img
                src="/images/mic-icon.svg"
                alt="Mic"
                onClick={() => spellingEight()}
              />
            </li>
            <li>
              <label>9.</label>
              <h5>{data.spellings[8]}</h5>
              <img
                src="/images/mic-icon.svg"
                alt="Mic"
                onClick={() => spellingNine()}
              />
            </li>
            <li>
              <label>10.</label>
              <h5>{data.spellings[9]}</h5>
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
        .container-learn-page {
          margin-top: 6vh;
          width: 100%;
          height: calc(100vh - 6vh);
          display: flex;
        }

        .learn-col-left {
          height: 100%;
          width: 50%;
          background-color: var(--secondary-color);
          padding: 5%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: flex-start;
        }

        .learn-col-left h3 {
          color: var(--main-color);
          font-size: 4vh;
          font-weight: 500;
        }

        .container-learn-text {
          width: 100%;
          height: 25%;
          display: flex;
          flex-direction: column;
        }

        .container-learn-text img {
          transform: translateY(25%);
          height: 3vh;
          width: 3vh;
        }

        .container-learn-text p {
          padding-bottom: 2vh;
          font-size: 2.2vh;
          color: var(--fourth-color);
        }

        .container-learn-text span {
          color: var(--main-color);
        }

        .container-btn-take-test {
          width: 100%;
          height: 25%;
          display: flex;
          flex-direction: column;
        }

        .learn-col-right {
          height: 100%;
          width: 50%;
          background-color: var(--fourth-color);
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
        }

        .learn-col-right ul {
          width: 80%;
          height: 80%;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
        }

        .learn-col-right ul li {
          width: 100%;
          height: 10%;
          display: flex;
          justify-content: flex-end;
          align-items: center;
        }

        .learn-col-right img {
          margin: 0 2vh;
          width: 5vh;
          height: 5vh;
          cursor: pointer;
        }

        .learn-col-right label {
          color: var(--main-color);
          height: 100%;
          width: 10%;
          font-size: 4vh;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .learn-col-right h5 {
          width: 100%;
          height: 100%;
          font-size: 4vh;
          display: flex;
          justify-content: flex-start;
          align-items: center;
        }

        @media screen and (max-width: 850px) and (orientation: portrait) {
          .container-learn-page {
            flex-direction: column;
          }

          .learn-col-left {
            height: 90vh;
            width: 100%;
          }

          .learn-col-right {
            height: 90vh;
            width: 100%;
          }

          .container-advert {
            height: 15%;
          }
        }

        @media screen and (max-width: 500px) and (orientation: portrait) {
          .learn-col-left h3 {
            font-size: 3vh;
          }

          .learn-col-left p {
            font-size: 2vh;
          }
        }
      `}</style>
    </>
  );
}
