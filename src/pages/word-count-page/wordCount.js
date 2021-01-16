import Head from "next/head";
import { useState, useEffect, useRef } from "react";
import TotalsBox from "./totals-box/totalsBox";
import GrammerlyBanner from "../../components/advert-component/grammerlyBanner";

export default function CalculationSection() {
  const textInput = useRef();

  const [userInput, setUserInput] = useState("");
  const [characters, setCharacters] = useState(0);
  const [whiteSpace, setWhiteSpace] = useState(0);
  const [sentences, setSentences] = useState(0);
  const [paragraphs, setParagraphs] = useState(0);
  const [words, setWords] = useState(0);

  function calcText() {
    setUserInput(textInput.current.value);
  }

  //Counts all characters
  useEffect(() => {
    setCharacters(userInput.length);
  }, [userInput]);

  //Counts all characters but not spaces
  useEffect(() => {
    const removespaces = userInput.replace(/\s/g, "");
    setWhiteSpace(removespaces.length);
  }, [userInput]);

  //Counts all words
  useEffect(() => {
    const wordSplit = userInput.trim().split(/\s+/).length;
    if (userInput.length !== 0) {
      setWords(wordSplit);
    }
  }, [userInput]);

  //Counts all sentences
  useEffect(() => {
    const sentenceSplit =
      userInput.replace(/([.?!])\s*/g, "$1|").split("|").length - 1;
    if (userInput.length !== 0) {
      setSentences(sentenceSplit);
    }
  }, [userInput]);

  //Counts all paragraphs
  useEffect(() => {
    const paragraphsSplit = userInput.replace(/\n$/gm, "").split(/\n/).length;
    if (userInput.length !== 0) {
      setParagraphs(paragraphsSplit);
    }
  }, [userInput]);

  //Reset all counters
  useEffect(() => {
    if (userInput.length === 0) {
      setWords(0);
      setWhiteSpace(0);
      setCharacters(0);
      setSentences(0);
      setParagraphs(0);
    }
  }, [userInput]);

  return (
    <>
      <Head>
        <title>NewToWords - Word Counter</title>
      </Head>
      <div className="container-calculation-section">
        <div className="container-totals">
          <h3>Word Counter</h3>
          <div className="container-input-text">
            <h3>Please use the box to type or paste your text</h3>
            <h4>
              Once you have correctly input the words, click on the{" "}
              <span>Check Now</span> button which will check your words,
              characters, sentences, and paragraphs.
            </h4>
          </div>

          <GrammerlyBanner />

          <div className="container-totals-boxes">
            <TotalsBox text={"Words"} number={words} />
            <TotalsBox text={"Characters"} number={characters} />
            <TotalsBox text={"Without Spaces"} number={whiteSpace} />
            <TotalsBox text={"Sentences"} number={sentences} />
            <TotalsBox text={"Paragraphs"} number={paragraphs} />
            <button className="full" onClick={() => calcText()}>
              Check Now
            </button>
          </div>
        </div>
        <div className="container-text-input">
          <textarea
            ref={textInput}
            placeholder="Type or paste your text here!"
          ></textarea>
        </div>
      </div>
      <style jsx>{`
        .container-calculation-section {
          margin-top: 6vh;
          width: 100%;
          height: calc(100vh - 6vh);
          display: flex;
        }

        .container-totals {
          padding: 5%;
          height: 100%;
          width: 50%;
          background-color: var(--secondary-color);
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;
          align-items: flex-start;
        }

        .container-totals span {
          color: var(--main-color);
        }

        .container-totals h3 {
          color: var(--main-color);
          font-size: 4vh;
          font-weight: 500;
        }

        .container-input-text {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          width: 100%;
          height: 25%;
        }

        .container-input-text h3 {
          color: var(--fourth-color);
          font-size: 3.2vh;
          font-weight: 500;
          padding-top: 4vh;
        }

        .container-input-text h4 {
          color: var(--fourth-color);
          font-size: 2.5vh;
          font-weight: 300;
          padding-top: 4vh;
        }

        .container-text-input {
          padding: 5%;
          height: 100%;
          width: 50%;
          background-color: var(--fourth-color);
        }

        .container-text-input textarea {
          padding: 5%;
          width: 100%;
          height: 100%;
          resize: none;
          outline: none;
          border: 1px solid var(--secondary-color);
        }

        .container-totals-boxes {
          width: 100%;
          height: 25%;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          flex-wrap: wrap;
        }

        @media screen and (max-width: 850px) and (orientation: portrait) {
          .container-calculation-section {
            flex-direction: column;
          }

          .container-totals {
            height: 90vh;
            width: 100%;
          }

          .container-text-input {
            height: 90vh;
            width: 100%;
          }
        }

        @media screen and (max-width: 500px) and (orientation: portrait) {
          .box-text h3 {
            font-size: 1.5vh !important;
          }
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
      `}</style>
    </>
  );
}
