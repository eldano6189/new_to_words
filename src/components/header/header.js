import { useContext } from "react";
import Link from "next/link";
import styles from "./header.module.css";
import Hamburger from "../hamburger/hamburger";
import { DataContext } from "../../data/states/globalStates";

export default function NavBar() {
  const data = useContext(DataContext);

  return (
    <header className={styles.header}>
      <div
        className={data.navOpen ? `${styles.logo} ${styles.hide}` : styles.logo}
      >
        <Link href="/">
          <img className={styles.logoImage} src="/images/logo.svg" alt="logo" />
        </Link>
      </div>
      <ul className={styles.ul}>
        <Link href="/contact-page/contactPage">
          <li className={styles.li}>
            <img
              className={styles.contact}
              src="/images/contact-icon.svg"
              alt="contact us"
            />
          </li>
        </Link>
        <li
          className={styles.li}
          onClick={() => data.setNavOpen(!data.navOpen)}
        >
          <Hamburger />
        </li>
      </ul>
    </header>
  );
}
