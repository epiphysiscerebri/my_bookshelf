import { Location } from "react-router-dom";
import { TBook } from "../../types";

export type BookListUIProps = {
  books: TBook[];
  locationState: Location;
  onClickDeleteBtn: () => void;
};
