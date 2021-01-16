import { useContext } from "react";
import { DataContext } from "../../data/states/globalStates";

export default function ToggleSwitch({ left, right }) {
  const data = useContext(DataContext);

  return (
    <>
      <div
        className="container-toggle"
        onClick={() => data.setSlider(!data.slider)}
      >
        <p>{left}</p>
        <div className={data.slider ? "slider-left" : "slider-right"}></div>
        <p>{right}</p>
      </div>
      <style jsx>{`
        .container-toggle {
          position: relative;
          overflow: hidden;
          background-color: var(--main-color);
          width: 26vh;
          height: 4vh;
          margin: 0 1% 0 0;
          color: white;
          font-weight: 300;
          font-size: 2vh;
          border: 3px solid var(--main-color);
          display: flex;
          align-items: center;
          justify-content: space-between;
          cursor: pointer;
        }

        .slider-left {
          opacity: 0.9;
          width: 13vh;
          height: 100%;
          background-color: var(--secondary-color);
          position: absolute;
          transform: translateX(100%);
          transition: all 0.3s ease;
        }

        .slider-right {
          opacity: 0.8;
          width: 13vh;
          height: 100%;
          background-color: var(--secondary-color);
          position: absolute;
          transform: translateX(0%);
          transition: all 0.3s ease;
        }

        .container-toggle p {
          height: 100%;
          width: 50%;
          font-weight: 500;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      `}</style>
    </>
  );
}
