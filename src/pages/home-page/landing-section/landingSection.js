import Button from "../../../components/button/button";

export default function LandingSection() {
  return (
    <>
      <div className="container-landing">
        <div className="landing-text">
          <h1>
            Welcome to New<span>To</span>Words
          </h1>
          <h2>
            We believe that great education is powerful, hard work is important,
            <br />
            and consistent results are essential.
          </h2>
          <div className="landing-buttons">
            <Button href="/input-page/inputPage" look={"full"}>
              Start Now
            </Button>
            <Button href="#container-how-NTW-works" look={"hollow"}>
              Learn More
            </Button>
          </div>
        </div>
      </div>
      <style jsx>{`
        .container-landing {
          width: 100%;
          height: 94vh;
          display: flex;
          justify-content: center;
          align-items: flex-start;
          flex-direction: column;
          padding: 10%;
          z-index: 1;
        }

        .landing-text span {
          color: var(--main-color);
        }

        .landing-text h1 {
          font-weight: 500;
          font-size: 7vh;
          color: white;
        }

        .landing-text h2 {
          font-size: 3vh;
          font-weight: 400;
          padding-top: 3vh;
          color: white;
        }

        .landing-buttons {
          padding-top: 3vh;
        }

        @media screen and (max-width: 500px) and (orientation: portrait) {
          .landing-text h1 {
            font-size: 4vh;
          }

          .landing-text h2 {
            font-size: 2vh;
            padding: 2vh 0;
          }

          .landing-buttons {
            padding: 2vh 0;
          }
        }
      `}</style>
    </>
  );
}
