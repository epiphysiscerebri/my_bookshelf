import { FC } from "react";
import { ListBookPageUI } from "../ui";
// TODO: моковые данные, перенести в стор
const arrBooks = [
  {
    name: "Война и мир",
    author: "Л.Н. Толстой",
    year: "1873",
    genre: "роман-эпопея",
  },
  {
    name: "Война и мир",
    author: "Л.Н. Толстой",
    year: "1873",
    genre: "роман-эпопея",
  },
  {
    name: "Война и мир",
    author: "Л.Н. Толстой",
    year: "1873",
    genre: "роман-эпопея",
  },
  {
    name: "Война и мир",
    author: "Л.Н. Толстой",
    year: "1873",
    genre: "роман-эпопея",
  },
  {
    name: "Война и мир",
    author: "Л.Н. Толстой",
    year: "1873",
    genre: "роман-эпопея",
  },
  {
    name: "Война и мир",
    author: "Л.Н. Толстой",
    year: "1873",
    genre: "роман-эпопея",
  },
  {
    name: "Война и мир",
    author: "Л.Н. Толстой",
    year: "1873",
    genre: "роман-эпопея",
  },
];

export const ListBookPage: FC = () => <ListBookPageUI booksArray={arrBooks} />;
