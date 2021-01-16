import { useContext } from "react";
import { DataContext } from "../../data/states/globalStates";
import styles from "./hamburger.module.css";

export default function Hamburger() {
  const data = useContext(DataContext);

  return (
    <button
      className={
        data.navOpen ? `${styles.hamburger} ${styles.active}` : styles.hamburger
      }
    >
      Menu
    </button>
  );
}
