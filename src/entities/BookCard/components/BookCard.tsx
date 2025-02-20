import { FC } from "react";
import { BookCardUI } from "../ui";
import { Location } from "react-router-dom";

export const BookCard: FC<{
  // TODO: Заменить на отдельный тип
  name: string;
  author: string;
  year: string;
  genre: string;
  index: number;
  id: string;
  locationState: Location;
}> = ({ name, author, year, genre, index, id, locationState }) => {
  return (
    <BookCardUI
      name={name}
      author={author}
      year={year}
      genre={genre}
      index={index}
      id={id}
      locationState={{ background: locationState }}
    />
  );
};
