import { FC } from "react";
import styles from "./BookCardUI.module.css";
import { Link, Location } from "react-router-dom";

export const BookCardUI: FC<{
  // TODO: Заменить на отдельный тип
  name: string;
  author: string;
  year: string;
  genre: string;
  index: number;
  id: string;
  locationState: { background: Location };
}> = ({ name, author, year, genre, index, id, locationState }) => (
  <div className={styles.book_card}>
    <div className={styles.book_card__header}>
      <div className={styles.book_card__item__id}>
        <div className={styles.book_card__item__id__text}>{index}</div>
      </div>
      <div className={styles.book_card__header__control_panel}>
        <Link className="link" to={`/book/edit/${id}`} state={locationState}>
          <div>e</div>
        </Link>
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
