import { FC } from "react";
import styles from "./BookCardUI.module.css";
import { Link } from "react-router-dom";
import { Edit } from "@mui/icons-material";
import { Checkbox } from "../../../shared";
import { TBookCardUIProps } from "../types";

export const BookCardUI: FC<TBookCardUIProps> = ({
  name,
  author,
  year,
  genre,
  index,
  id,
  locationState,
  onClickEdit,
  onChangeCheckbox,
}) => (
  <div className={styles.book_card}>
    <div className={styles.book_card__header}>
      <div className={styles.book_card__item__id}>
        <div className={styles.book_card__item__id__text}>{index}</div>
      </div>
      <div className={styles.book_card__header__control_panel}>
        <Link className="link" to={`/book/edit/${id}`} state={locationState}>
          <div onClick={onClickEdit}>
            <Edit />
          </div>
        </Link>
        <Checkbox onChange={(e) => onChangeCheckbox(e, id)} />
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
