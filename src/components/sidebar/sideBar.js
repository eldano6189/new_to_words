import { useContext } from "react";
import ActiveLink from "../link/link";
import ProgressBar from "../progress-bar/progressBar";
import { DataContext } from "../../data/states/globalStates";

export default function SideBar() {
  const data = useContext(DataContext);

  return (
    <>
      <div className="container-complete-sidebar">
        <div
          className={data.navOpen ? "dimmer" : "dimmer off"}
          onClick={() => data.setNavOpen(!data.navOpen)}
        ></div>
        <div
          className={
            data.navOpen ? "container-sidebar" : "container-sidebar open"
          }
        >
          <div className="container-sidebar-top">
            <p>Student Progress</p>
            <ProgressBar />
          </div>
          <ul className="container-links">
            <li>
              <p>Pages</p>
            </li>
            <ActiveLink href="/">
              <li
                className="nav-link"
                onClick={() => data.setNavOpen(!data.navOpen)}
              >
                <img src="/images/home-icon.svg" alt="Home" />
                <p>Home Page</p>
              </li>
            </ActiveLink>
            <ActiveLink href="/input-page/inputPage">
              <li
                className="nav-link"
                onClick={() => data.setNavOpen(!data.navOpen)}
              >
                <img src="/images/input-spell-icon.svg" alt="Input" />
                <p>Input Student Spellings</p>
              </li>
            </ActiveLink>
            {data.spellings.length > 1 ? (
              <ActiveLink href="/learn-page/learnPage">
                <li
                  className="nav-link"
                  onClick={() => data.setNavOpen(!data.navOpen)}
                >
                  <img src="/images/learn-icon.svg" alt="Input" />
                  <p>Learn Your Spellings</p>
                </li>
              </ActiveLink>
            ) : null}
            {data.spellings.length > 1 ? (
              <ActiveLink href="/test-page/testPage">
                <li
                  className="nav-link"
                  onClick={() => data.setNavOpen(!data.navOpen)}
                >
                  <img src="/images/test-spell-icon.svg" alt="Input" />
                  <p>Spelling Test</p>
                </li>
              </ActiveLink>
            ) : null}
            <ActiveLink href="/word-count-page/wordCount">
              <li
                className="nav-link"
                onClick={() => data.setNavOpen(!data.navOpen)}
              >
                <img src="/images/word-count-icon.svg" alt="Home" />
                <p>Word Counter</p>
              </li>
            </ActiveLink>
            <li>
              <p>Links</p>
            </li>
            <a
              href="https://newtonumbers.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link"
            >
              <li>
                <img src="/images/numbers-icon.svg" alt="Input" />
                <p>NewToNumbers</p>
              </li>
            </a>
            <a
              href="https://grammarly.go2cloud.org/aff_c?offer_id=3&aff_id=65777"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link"
            >
              <li>
                <img src="/images/grammarly.svg" alt="gram" />
                <p>Grammarly</p>
              </li>
            </a>
          </ul>
          <div className="container-copyright">
            <p>&copy; Copyright 2020, NewToWords</p>
          </div>
        </div>
      </div>
      <style jsx>{`
        .dimmer {
          position: fixed;
          top: 0;
          left: 0;
          height: 100vh;
          width: 100%;
          background-color: rgba(0, 0, 0, 0.452);
          transition: all 0.3s ease;
          z-index: 8;
        }

        .off {
          pointer-events: none;
          opacity: 0;
        }

        .container-sidebar {
          position: fixed;
          display: flex;
          flex-direction: column;
          top: 0;
          left: 0;
          width: 20.8vw;
          min-width: 400px;
          height: 100vh;
          background-color: var(--secondary-color);
          transition: all 0.3s ease 0.2s;
          z-index: 10;
        }

        .open {
          transform: translateX(-100%);
          transition: all 0.3s ease;
        }

        .container-sidebar-top {
          width: 100%;
          height: 6vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          padding: 0 2vw;
          min-width: 400px;
          background-color: var(--main-color);
        }

        .container-sidebar-top p {
          font-size: 1.8vh;
          font-weight: 300;
          color: white;
        }

        .container-links {
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .nav-link {
          border-left: 1vh solid transparent;
          background-color: transparent;
        }

        .active-link {
          border-left: 1vh solid var(--main-color);
          background-color: black;
        }

        .active-link p {
          color: white;
        }

        .container-links li {
          width: 100%;
          height: 6vh;
          padding: 0 2vh 0 3vh;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          color: var(--third-color);
          font-size: 2vh;
          cursor: pointer;
        }

        .container-links li:nth-of-type(1) {
          opacity: 1;
        }

        .container-links li img {
          height: 3vh;
          width: 3vh;
          margin: 0 2vh;
        }

        .container-links li p {
          font-size: 2vh;
          transition: all 0.3s ease;
        }

        .container-links li:hover > p {
          color: var(--main-color);
        }

        .container-copyright {
          width: 100%;
          height: 6vh;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          padding: 0 2vh 0 3vh;
        }

        .container-copyright p {
          font-size: 1.4vh;
          color: var(--main-color);
        }

        @media screen and (max-width: 530px) {
          .container-sidebar {
            width: calc(100% - 12vh);
            min-width: 0;
          }

          .container-sidebar-top {
            width: 100% - 12vh;
            min-width: 0;
          }
        }
      `}</style>
    </>
  );
}
