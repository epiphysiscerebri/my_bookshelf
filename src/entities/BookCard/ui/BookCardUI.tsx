import { FC } from "react";
import styles from "./BookCardUI.module.css";
export const BookCardUI: FC<{
  // TODO: Заменить на отдельный тип
  name: string;
  author: string;
  year: string;
  genre: string;
  index: number;
  id: string;
}> = ({ name, author, year, genre, index, id }) => (
  <div className={styles.book_card}>
    <div className={styles.book_card__header}>
      <div className={styles.book_card__item__id}>
        <div className={styles.book_card__item__id__text}>{index}</div>
      </div>
      <div className={styles.book_card__header__control_panel}>
        <div>e</div>
        <input type="checkbox" />
      </div>
    </div>
    <div className={styles.book_card__content}>
      <div className={styles.book_card__item}>Название: {name}</div>
      <div className={styles.book_card__item}>Автор: {author}</div>
      <div className={styles.book_card__item}>Год: {year}</div>
      <div className={styles.book_card__item}>Жанр: {genre}</div>
    </div>
  </div>
);
