import { FC } from "react";
import { BookListUI } from "../ui";
// TODO: моковые данные, перенести в стор
const arrBooks = [
  {
    name: "Война и мир",
    author: "Л.Н. Толстой",
    year: "1873",
    genre: "роман-эпопея",
    id: "11233461",
  },
  {
    name: "Война и мир",
    author: "Л.Н. Толстой",
    year: "1873",
    genre: "роман-эпопея",
    id: "11233415",
  },
  {
    name: "Война и мир",
    author: "Л.Н. Толстой",
    year: "1873",
    genre: "роман-эпопея",
    id: "11233414",
  },
  {
    name: "Война и мир",
    author: "Л.Н. Толстой",
    year: "1873",
    genre: "роман-эпопея",
    id: "11233413",
  },
  {
    name: "Война и мир",
    author: "Л.Н. Толстой",
    year: "1873",
    genre: "роман-эпопея",
    id: "11233412",
  },
  {
    name: "Война и мир",
    author: "Л.Н. Толстой",
    year: "1873",
    genre: "роман-эпопея",
    id: "11233411",
  },
  {
    name: "Война и мир",
    author: "Л.Н. Толстой",
    year: "1873",
    genre: "роман-эпопея",
    id: "1123341",
  },
];

export const BookList: FC = () => <BookListUI booksArray={arrBooks} />;
