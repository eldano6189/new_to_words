export default function BenefitsNTW() {
  return (
    <>
      <div className="container-benefits-NTW">
        <h3>
          The Benefits of New<span>To</span>Words
        </h3>
        <ul>
          <li>
            <img src="/images/tick-orange.svg" alt="Ticks" />
            <p>
              <span>Instant Results</span> - New<span>To</span>Words provide
              instant test results without requesting personal information from
              students.
            </p>
          </li>

          <li>
            <img src="/images/tick-orange.svg" alt="Ticks" />
            <p>
              <span>Student Progress</span> - The progress bar in the navigation
              encourages students to produce consistent spelling results.
            </p>
          </li>

          <li>
            <img src="/images/tick-orange.svg" alt="Ticks" />
            <p>
              <span>Speaker Function</span> - The speaker function{" "}
              <img src="/images/mic-icon-orange.svg" alt="Mic" /> accomidates
              both auditory and visual learners during their development.
            </p>
          </li>

          <li>
            <img src="/images/tick-orange.svg" alt="Ticks" />
            <p>
              <span>Compatible</span> - The New<span>To</span>Words platform is
              completely compatible on any device with an internet connection.
            </p>
          </li>

          <li>
            <img src="/images/tick-orange.svg" alt="Ticks" />
            <p>
              <span>Privacy</span> - This platform doesn’t collect or demand
              personal data, this enables students to learn with complete
              anonymity.
            </p>
          </li>
        </ul>
      </div>
      <style jsx>{`
        .container-benefits-NTW {
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
          clip-path: polygon(0 0, 100% 5%, 100% 100%, 0 95%);
        }

        .container-benefits-NTW span {
          color: var(--main-color);
        }

        .container-benefits-NTW h3 {
          font-weight: 500;
          font-size: 5vh;
          color: white;
          text-align: center;
        }

        .container-benefits-NTW ul {
          height: auto;
          width: auto;
          padding-top: 3vh;
          display: flex;
          flex-direction: column;
        }

        .container-benefits-NTW li {
          width: 100%;
          min-height: 6vh;
          padding: 2vh;
          display: flex;
          justify-content: flex-start;
          align-items: center;
        }

        .container-benefits-NTW li img {
          transform: translateY(25%);
          height: 3vh;
          width: 3vh;
        }

        .container-benefits-NTW p {
          font-size: 2.2vh;
          font-weight: 300;
          padding-left: 2vh;
        }

        @media screen and (max-width: 500px) and (orientation: portrait) {
          .container-benefits-NTW p {
            font-size: 1.5vh;
          }
        }
      `}</style>
    </>
  );
}
