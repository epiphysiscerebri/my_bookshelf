import { FC } from "react";
import styles from "./AppHeader.module.css";

export const AppHeaderUI: FC = () => (
  <header className={styles.header}>
    <nav className={styles.menu}>
      <div className={styles.logo}>my_bookshelf</div>
      <div className={styles.link_list}>
        <div className={styles.link}>
          <span className={styles.link_text}>моя полка</span>
        </div>
        <div className={styles.link}>
          <span className={styles.link_text}>вход</span>
        </div>
      </div>
    </nav>
  </header>
);
