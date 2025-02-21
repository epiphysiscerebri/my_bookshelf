import { FC, useEffect } from "react";
import { BookListUI } from "../ui";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "../../../store/store";
import {
  getBooks,
  getBooksSelector,
  deleteBookCards,
} from "../../../store/slices";

export const BookList: FC = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const books = useSelector(getBooksSelector);
  useEffect(() => {
    dispatch(getBooks());
  }, []);

  const handleDeleteClick = () => {
    dispatch(deleteBookCards());
  };

  return (
    <BookListUI
      books={books}
      locationState={location}
      onClickDeleteBtn={handleDeleteClick}
    />
  );
};
