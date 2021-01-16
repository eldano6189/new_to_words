import { useEffect, useContext, useState } from "react";
import { DataContext } from "../../data/states/globalStates";

export default function ProgressBar() {
  const data = useContext(DataContext);
  const [progress, setProgress] = useState(0);

  //adds progress to bar
  useEffect(() => {
    if (data.score === 10) {
      setProgress((prevState) => prevState + 25);
    }
  }, [data.score]);

  //load progress from local storage
  useEffect(() => {
    const loadProgress = sessionStorage.getItem("Progress");
    if (loadProgress) {
      setProgress(JSON.parse(loadProgress));
    }
  }, []);

  //save progress to local storage
  useEffect(() => {
    sessionStorage.setItem("Progress", JSON.stringify(progress));
  }, [progress]);

  return (
    <>
      <div className="progress-bar-container">
        <div className="progress-bar" style={{ width: `${progress}%` }}>
          <p>{progress}%</p>
        </div>
      </div>
      <style jsx>{`
        .progress-bar-container {
          height: 1vh;
          width: 80%;
          margin: 0.5vh 0;
          background-color: rgba(0, 0, 0, 0.39);
          overflow: hidden;
          position: relative;
        }

        .progress-bar {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100%;
          background-color: white;
          overflow: hidden;
        }

        .progress-bar-container p {
          font-size: 1vh;
          color: var(--secondary-color);
        }
      `}</style>
    </>
  );
}
