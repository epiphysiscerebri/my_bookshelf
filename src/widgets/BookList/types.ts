import { Location } from "react-router-dom";

export type BookListUIProps = {
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
};
