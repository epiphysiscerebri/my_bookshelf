import { FC } from "react";
import { BookCardUI } from "../ui";

export const BookCard: FC<{
  // TODO: Заменить на отдельный тип
  name: string;
  author: string;
  year: string;
  genre: string;
  index: number;
}> = ({ name, author, year, genre, index }) => (
  <BookCardUI
    name={name}
    author={author}
    year={year}
    genre={genre}
    index={index}
  />
);
