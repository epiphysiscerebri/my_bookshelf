import { FC } from "react";
import styles from "./AppHeader.module.css";
import { Link } from "react-router-dom";

export const AppHeaderUI: FC = () => (
  <header className={styles.header}>
    <nav className={styles.menu}>
      <div className={styles.logo}>my_bookshelf</div>
      <div className={styles.link_list}>
        <Link to={"/"} className={styles.link}>
          <span className={styles.link_text}>моя полка</span>
        </Link>
        <Link to={"/login"} className={styles.link}>
          <span className={styles.link_text}>выход</span>
        </Link>
      </div>
    </nav>
  </header>
);
