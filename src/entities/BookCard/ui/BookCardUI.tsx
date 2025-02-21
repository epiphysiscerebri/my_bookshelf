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
  <div className={styles["book-card"]}>
    <div className={styles["book-card__header"]}>
      <div className={styles["book-card__id"]}>
        <div className={styles["book-card__id-text"]}>{index}</div>
      </div>
      <div className={styles["book-card__control-panel"]}>
        <Link className="link" to={`/book/edit/${id}`} state={locationState}>
          <div onClick={onClickEdit}>
            <Edit />
          </div>
        </Link>
        <Checkbox onChange={(e) => onChangeCheckbox(e, id)} />
      </div>
    </div>
    <div className={styles["book-card__content"]}>
      <div className={styles["book-card__item"]}>Название: {name}</div>
      <div className={styles["book-card__item"]}>Автор: {author}</div>
      <div className={styles["book-card__item"]}>Год: {year}</div>
      <div className={styles["book-card__item"]}>Жанр: {genre}</div>
    </div>
  </div>
);
