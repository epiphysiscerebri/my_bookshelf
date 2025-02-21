import { FC } from "react";
import styles from "./AppHeader.module.css";
import { Link } from "react-router-dom";

export const AppHeaderUI: FC = () => (
  <header className={styles.header}>
    <nav className={styles.menu}>
      <Link to={"/"} className={styles.link}>
        <div className={styles.logo}>my_bookshelf</div>
      </Link>
      {/* <div className={styles.link_list}>
        <Link to={"/"} className={styles.link}>
          <span className={styles.link_text}>моя полка</span>
        </Link>
      </div> */}
    </nav>
  </header>
);
