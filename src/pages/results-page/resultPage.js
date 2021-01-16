import Head from "next/head";
import { useContext, useEffect } from "react";
import Button from "../../components/button/button";
import GrammerlyBanner from "../../components/advert-component/grammerlyBanner";
import { DataContext } from "../../data/states/globalStates";

export default function ResultPage() {
  const data = useContext(DataContext);

  useEffect(() => {
    data.setScore(1);
    let totalCorrect = 0;
    for (let i = 0; i <= 9; i++) {
      if (data.spellings[i] === data.answer[i]) {
        totalCorrect++;
        data.setScore(totalCorrect);
      }
    }
  }, [data]);

  return (
    <>
      <Head>
        <title>NewToWords - Results</title>
      </Head>
      <section className="container-result-page">
        <div className="result-col-left">
          <h3>Spelling Results</h3>
          <div className="container-result-text">
            {data.score === 10 ? (
              <p>
                Congratulations! You have completed the New
                <span>To</span>
                Words spelling test and achieved a perfect result of{" "}
                <span>{data.score === 1 ? "0" : data.score}</span> /{" "}
                <span>{data.spellings.length}</span>
              </p>
            ) : (
              <p>
                You have completed the New
                <span>To</span>
                Words spelling test and achieved a result of{" "}
                <span>{data.score === 1 ? "0" : data.score}</span> /{" "}
                <span>{data.spellings.length}</span>
                <br />
                <br />
                Independent studies indicate that repetition can drastically
                increase a students performance during their development stages.
                It’s recommended that students who achieve a result of{" "}
                {data.score} continue to utilise the learning section to
                increase their chances of success.
              </p>
            )}
          </div>

          <GrammerlyBanner />

          <div className="container-actions">
            <p>
              Click on the <span>Learn Again</span> button to continue studying
              your spellings, or <span>Test Again</span> to{" "}
              {data.score < 10 ? "improve" : "repeat"} your previous score.
            </p>
            <div className="container-button">
              <Button
                href="/learn-page/learnPage"
                look={"full"}
                click={() => data.setScore(0)}
              >
                Learn Again
              </Button>

              <Button
                href="/test-page/testPage"
                look={"full"}
                click={() => data.setScore(0)}
              >
                Test Again
              </Button>
            </div>
          </div>
        </div>
        <div className="result-col-right">
          <ul>
            <li>
              <label>1.</label>
              <h5>{data.answer[0]}</h5>
              {data.answer[0] === data.spellings[0] ? (
                <img src="/images/tick.svg" alt="Tick" />
              ) : (
                <img src="/images/cross.svg" alt="Cross" />
              )}
            </li>
            <li>
              <label>2.</label>
              <h5>{data.answer[1]}</h5>
              {data.answer[1] === data.spellings[1] ? (
                <img src="/images/tick.svg" alt="Tick" />
              ) : (
                <img src="/images/cross.svg" alt="Cross" />
              )}
            </li>
            <li>
              <label>3.</label>
              <h5>{data.answer[2]}</h5>
              {data.answer[2] === data.spellings[2] ? (
                <img src="/images/tick.svg" alt="Tick" />
              ) : (
                <img src="/images/cross.svg" alt="Cross" />
              )}
            </li>
            <li>
              <label>4.</label>
              <h5>{data.answer[3]}</h5>
              {data.answer[3] === data.spellings[3] ? (
                <img src="/images/tick.svg" alt="Tick" />
              ) : (
                <img src="/images/cross.svg" alt="Cross" />
              )}
            </li>
            <li>
              <label>5.</label>
              <h5>{data.answer[4]}</h5>
              {data.answer[4] === data.spellings[4] ? (
                <img src="/images/tick.svg" alt="Tick" />
              ) : (
                <img src="/images/cross.svg" alt="Cross" />
              )}
            </li>
            <li>
              <label>6.</label>
              <h5>{data.answer[5]}</h5>
              {data.answer[5] === data.spellings[5] ? (
                <img src="/images/tick.svg" alt="Tick" />
              ) : (
                <img src="/images/cross.svg" alt="Cross" />
              )}
            </li>
            <li>
              <label>7.</label>
              <h5>{data.answer[6]}</h5>
              {data.answer[6] === data.spellings[6] ? (
                <img src="/images/tick.svg" alt="Tick" />
              ) : (
                <img src="/images/cross.svg" alt="Cross" />
              )}
            </li>
            <li>
              <label>8.</label>
              <h5>{data.answer[7]}</h5>
              {data.answer[7] === data.spellings[7] ? (
                <img src="/images/tick.svg" alt="Tick" />
              ) : (
                <img src="/images/cross.svg" alt="Cross" />
              )}
            </li>
            <li>
              <label>9.</label>
              <h5>{data.answer[8]}</h5>
              {data.answer[8] === data.spellings[8] ? (
                <img src="/images/tick.svg" alt="Tick" />
              ) : (
                <img src="/images/cross.svg" alt="Cross" />
              )}
            </li>
            <li>
              <label>10.</label>
              <h5>{data.answer[9]}</h5>
              {data.answer[9] === data.spellings[9] ? (
                <img src="/images/tick.svg" alt="Tick" />
              ) : (
                <img src="/images/cross.svg" alt="Cross" />
              )}
            </li>
          </ul>
        </div>
      </section>
      <style jsx>{`
        .container-result-page {
          margin-top: 6vh;
          width: 100%;
          height: calc(100vh - 6vh);
          display: flex;
        }

        .result-col-left {
          height: 100%;
          width: 50%;
          background-color: var(--secondary-color);
          padding: 5%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: flex-start;
        }

        .result-col-left h3 {
          color: var(--main-color);
          font-size: 4vh;
          font-weight: 500;
        }

        .container-result-text {
          width: 100%;
          height: 25%;
          display: flex;
          flex-direction: column;
        }

        .container-result-text p {
          font-size: 2.2vh;
          color: var(--fourth-color);
        }

        .container-result-text span {
          color: var(--main-color);
        }

        .container-actions {
          width: 100%;
          height: 25%;
          display: flex;
          justify-content: space-evenly;
          flex-direction: column;
        }

        .container-actions p {
          color: var(--fourth-color);
          font-size: 2.2vh;
        }

        .container-actions span {
          color: var(--main-color);
        }

        .result-col-right {
          height: 100%;
          width: 50%;
          background-color: var(--fourth-color);
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
        }

        .result-col-right ul {
          width: 80%;
          height: 80%;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
        }

        .result-col-right ul li {
          width: 100%;
          height: 10%;
          display: flex;
          justify-content: flex-end;
          align-items: center;
        }

        .result-col-right h5 {
          width: 100%;
          height: 100%;
          font-size: 4vh;
          display: flex;
          justify-content: flex-start;
          align-items: center;
        }

        .result-col-right img {
          margin: 0 2vh;
          width: 5vh;
          height: 5vh;
          cursor: pointer;
        }

        .result-col-right label {
          color: var(--main-color);
          height: 100%;
          width: 10%;
          font-size: 4vh;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .result-col-right input {
          border: 2px solid var(--secondary-color);
          height: 80%;
          width: 90%;
          font-size: 4vh;
          text-transform: lowercase;
        }

        @media screen and (max-width: 850px) and (orientation: portrait) {
          .container-result-page {
            flex-direction: column;
          }

          .result-col-left {
            height: 90vh;
            width: 100%;
          }

          .result-col-right {
            height: 90vh;
            width: 100%;
          }

          .container-advert {
            height: 15%;
          }
        }

        @media screen and (max-width: 500px) and (orientation: portrait) {
          .result-col-left h3 {
            font-size: 3vh;
          }

          .result-col-left p {
            font-size: 2vh;
          }
        }
      `}</style>
    </>
  );
}
