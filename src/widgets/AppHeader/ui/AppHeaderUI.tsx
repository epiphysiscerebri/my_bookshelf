import { FC } from "react";
import styles from "./AppHeader.module.css";
import { Link } from "react-router-dom";

export const AppHeaderUI: FC = () => (
  <header className={styles.header}>
    <nav className={styles.header__menu}>
      <Link to={"/"} className={styles.header__link}>
        <div className={styles.header__logo}>my_bookshelf</div>
      </Link>
      {/* <div className={styles.header__link-list}>
        <Link to={"/"} className={styles.header__link}>
          <span className={styles.header__link-text}>моя полка</span>
        </Link>
      </div> */}
    </nav>
  </header>
);
