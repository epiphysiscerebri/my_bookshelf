import { FC } from "react";
import { BookCard } from "../../../entities";
import styles from "./BookListUI.module.css";
import { Location } from "react-router-dom";
import { Button } from "../../../shared";
import { Link } from "react-router-dom";

export const BookListUI: FC<{
  // TODO: заменить на тип
  books: {
    name: string;
    author: string;
    year: string;
    genre: string;
    id: string;
  }[];
  locationState: Location;
  onClickDeleteBtn: () => void;
}> = ({ books, locationState, onClickDeleteBtn }) => {
  return (
    <div className={styles.container_content}>
      <div className={styles.control_panel}>
        <Link
          className="link"
          to={`/book/create`}
          state={{ background: locationState }}
        >
          <Button type_button="button">Добавить</Button>
        </Link>
        <Button type_button="button" onClickBtn={onClickDeleteBtn}>
          Удалить
        </Button>
      </div>
      <div className={styles.container_books}>
        {books.map((book, index) => (
          <BookCard
            key={book.id}
            name={book.name}
            author={book.author}
            year={book.year}
            genre={book.genre}
            index={index + 1}
            id={book.id}
            locationState={locationState}
          />
        ))}
      </div>
    </div>
  );
};
