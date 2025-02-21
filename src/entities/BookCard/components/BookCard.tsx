import { FC } from "react";
import { BookCardUI } from "../ui";
import { Location } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  selectBookCard,
  selectBookCardsWillDelete,
} from "../../../store/slices";

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
  const dispatch = useDispatch();
  const handleEditClick = () => {
    dispatch(selectBookCard({ name, author, year, genre, index, id }));
  };
  const handleSelectCard = (
    e: React.ChangeEvent<HTMLInputElement>,
    id: string
  ) => dispatch(selectBookCardsWillDelete({ id, checked: e.target.checked }));

  return (
    <BookCardUI
      name={name}
      author={author}
      year={year}
      genre={genre}
      index={index}
      id={id}
      locationState={{ background: locationState }}
      onClickEdit={handleEditClick}
      onChangeCheckbox={handleSelectCard}
    />
  );
};
