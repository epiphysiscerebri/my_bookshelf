import { FC } from "react";
import { ListBookPageUI } from "../ui";
// TODO: моковые данные, перенести в стор
const arrBooks = [
  { name: "a", author: "AA" },
  { name: "b", author: "bb" },
  { name: "c", author: "c" },
  { name: "c", author: "c" },
  { name: "c", author: "c" },
  { name: "c", author: "c" },
  { name: "c", author: "c" },
  { name: "c", author: "c" },
  { name: "c", author: "c" },
  { name: "c", author: "c" },
];

export const ListBookPage: FC = () => <ListBookPageUI booksArray={arrBooks} />;
