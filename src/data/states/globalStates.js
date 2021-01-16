import { createContext, useState, useEffect } from "react";

export const DataContext = createContext(null);

export default function Data({ children }) {
  const [navOpen, setNavOpen] = useState(false);
  const [spellings, setSpellings] = useState([null]);
  const [slider, setSlider] = useState(false);
  const [answer, setAnswers] = useState([null]);
  const [score, setScore] = useState(0);
  const [total, setTotal] = useState(null);

  //load spellings from local storage
  useEffect(() => {
    const loadSpellings = localStorage.getItem("Spellings");
    if (loadSpellings) {
      setSpellings(JSON.parse(loadSpellings));
    }
  }, []);

  //save spellings to local storage
  useEffect(() => {
    localStorage.setItem("Spellings", JSON.stringify(spellings));
  }, [spellings]);

  return (
    <DataContext.Provider
      value={{
        navOpen,
        setNavOpen,
        spellings,
        setSpellings,
        slider,
        setSlider,
        answer,
        setAnswers,
        score,
        setScore,
        total,
        setTotal,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
