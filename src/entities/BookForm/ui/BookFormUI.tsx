import { FC } from "react";
import styles from "./BookFormUI.module.css";
export const BookFormUI: FC<{
  // TODO: Заменить на отдельный тип
  name?: string;
  author?: string;
  year?: string;
  genre?: string;
  index?: number;
  id?: string;
  type_form?: string;
  onSave: () => void;
  onClose: () => void;
}> = ({ name, author, year, genre, index, id, type_form, onSave, onClose }) => (
  <div className={styles.book_form}>
    <div className={styles.book_form__content}>
      <div className={styles.book_form__item}>
        Название: <input type="text" value={name} />
      </div>
      <div className={styles.book_form__item}>
        Автор:
        <input type="text" value={author} />
      </div>
      <div className={styles.book_form__item}>
        Год:
        <input type="text" value={year} />
      </div>
      <div className={styles.book_form__item}>
        Жанр:
        <input type="text" value={genre} />
      </div>
    </div>
    <div className={styles.book_form__control_panel}>
      <div className={styles.book_form__control_panel__item} onClick={onSave}>
        Отменить
      </div>
      <div className={styles.book_form__control_panel__item} onClick={onClose}>
        Схоранить
      </div>
    </div>
  </div>
);
