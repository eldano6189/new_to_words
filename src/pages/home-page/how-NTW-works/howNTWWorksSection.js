import Button from "../../../components/button/button";

export default function HowNTWWorksSection() {
  return (
    <>
      <div className="container-how-NTW-works" id="container-how-NTW-works">
        <h3>
          How New<span>To</span>Words Works
        </h3>
        <ul>
          <li>
            <div>
              <div className="container-number">
                <h4>1</h4>
              </div>
            </div>
            <div>
              <h4>
                <span>Input Student Spellings</span>
              </h4>
              <p>
                Once you have correctly input the spellings, click on{" "}
                <span>Accept</span> followed by the <span>Learn Now</span>{" "}
                button which will direct your student to the learning page.
              </p>
            </div>
          </li>

          <li>
            <div>
              <div className="container-number">
                <h4>2</h4>
              </div>
            </div>
            <div>
              <h4>
                <span>Learn Your Spellings</span>
              </h4>
              <p>
                <span>i</span> ) The student can click on the speaker icon{" "}
                <img src="/images/mic-icon-orange.svg" alt="Mic" /> to hear the
                word while studying the written words in the corresponding box.
              </p>
              <p>
                <span>ii</span> ) Once the student has finished studying, click
                on the <span>Take Test</span> button which will direct the
                student to the spelling test.
              </p>
            </div>
          </li>

          <li>
            <div>
              <div className="container-number">
                <h4>3</h4>
              </div>
            </div>
            <div>
              <h4>
                <span>Spelling Test</span>
              </h4>
              <p>
                <span>i</span> ) The student can click on the speaker icon{" "}
                <img src="/images/mic-icon-orange.svg" alt="Mic" /> to hear the
                correct words which can then be spelt in the corresponding box.
              </p>
              <p>
                <span>ii</span> ) Once the student has completed their spelling
                test they are prompted to click on the <span>Finish</span>{" "}
                button which will direct the student to their results.
              </p>
            </div>
          </li>

          <li>
            <div>
              <div className="container-number">
                <h4>4</h4>
              </div>
            </div>
            <div>
              <h4>
                <span>Spelling Results</span>
              </h4>
              <p>
                Once the student has received their spelling results, they’ll be
                prompted to click the <span>Learn Again</span> or{" "}
                <span>Test Again</span> button to continue their development.
              </p>
            </div>
          </li>
        </ul>
        <Button href="/input-page/inputPage" look={"full"}>
          Start Now
        </Button>
      </div>
      <style jsx>{`
        .container-how-NTW-works {
          width: 100%;
          min-height: 94vh;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          padding: 10%;
          color: white;
          background-color: var(--secondary-color);
          clip-path: polygon(0 5%, 100% 0, 100% 95%, 0 100%);
        }

        .container-how-NTW-works span {
          color: var(--main-color);
        }

        .container-how-NTW-works h3 {
          font-weight: 500;
          font-size: 5vh;
          color: white;
          text-align: center;
        }

        .container-how-NTW-works ul {
          padding-top: 3vh;
          display: flex;
          flex-wrap: wrap;
        }

        .container-how-NTW-works li {
          width: 50%;
          height: 50%;
          display: flex;
        }

        .container-how-NTW-works li img {
          transform: translateY(25%);
          height: 3vh;
          width: 3vh;
        }

        .container-how-NTW-works li div {
          padding: 1vh;
        }

        .container-number {
          width: 4.5vh;
          height: 4.5vh;
          border: 2px solid var(--main-color);
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .container-number h4 {
          color: var(--main-color);
          font-size: 4vh;
          font-weight: 300;
        }

        .container-how-NTW-works h4 {
          font-size: 3.5vh;
        }

        .container-how-NTW-works p {
          padding: 1vh 0;
          font-size: 2vh;
        }

        @media screen and (max-width: 1000px) {
          .container-how-NTW-works li {
            width: 100%;
            height: 25%;
            padding-bottom: 1vh;
          }
        }

        @media screen and (max-width: 500px) and (orientation: portrait) {
          .container-how-NTW-works {
            min-height: 100vh;
          }
          .container-how-NTW-works h3 {
            font-size: 4vh;
          }

          .container-how-NTW-works h4 {
            font-size: 2.6vh;
          }

          .container-how-NTW-works p {
            font-size: 1.5vh;
          }
        }
      `}</style>
    </>
  );
}
