import { FC } from "react";
import { BookCard } from "../../../entities";
import styles from "./ListBookPageUI.module.css";

export const ListBookPageUI: FC<{
  // TODO: заменить на тип
  booksArray: { name: string; author: string }[];
}> = ({ booksArray }) => (
  <div className={styles.container_content}>
    <div className={styles.control_panel}>
      <div className={styles.control_panel__btn}>
        <span className={styles.control_panel__btn__text}>Добавить</span>
      </div>
      <div className={styles.control_panel__btn}>
        <span className={styles.control_panel__btn__text}>Удалить</span>
      </div>
    </div>
    <div className={styles.container_books}>
      {booksArray.map((book) => (
        <BookCard name={book.name} author={book.author} />
      ))}
    </div>
  </div>
);
