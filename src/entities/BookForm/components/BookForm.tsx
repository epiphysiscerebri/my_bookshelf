import { FC, useRef } from "react";
import { BookFormUI } from "../ui";
import {
  createBookCard,
  getBooksSelector,
  editBookCard,
} from "../../../store/slices";
import { useDispatch, useSelector } from "../../../store/store";
import { FormRefs } from "../types";
import { BookFormProps } from "../types";

export const BookForm: FC<BookFormProps> = ({
  name,
  author,
  year,
  genre,
  index,
  id,
  onClose,
}) => {
  const formData: FormRefs = {
    name: useRef<HTMLInputElement | null>(null),
    author: useRef<HTMLInputElement | null>(null),
    year: useRef<HTMLInputElement | null>(null),
    genre: useRef<HTMLInputElement | null>(null),
  };

  const booksListLength = useSelector(getBooksSelector).length;
  const dispatch = useDispatch();

  const handleSubmit = (e?: React.FormEvent<HTMLFormElement>) => {
    e?.preventDefault();
    // TODO: Переделать условие на более элегантное
    if (
      !formData.name.current ||
      !formData.author.current ||
      !formData.year.current ||
      !formData.genre.current ||
      !formData.name.current.value ||
      !formData.author.current.value ||
      !formData.year.current.value ||
      !formData.genre.current.value
    ) {
      return;
    }

    if (id) {
      dispatch(
        editBookCard({
          name: formData.name.current.value,
          author: formData.author.current.value,
          year: formData.year.current.value,
          genre: formData.genre.current.value,
          index: index,
          id: id.toString().slice(2),
        })
      );
    } else {
      dispatch(
        createBookCard({
          name: formData.name.current.value,
          author: formData.author.current.value,
          year: formData.year.current.value,
          genre: formData.genre.current.value,
          index: booksListLength,
          id: Math.random().toString().slice(2),
        })
      );
    }
    handleClickClose();
  };

  const handleClickClose = () => onClose();
  return (
    <BookFormUI
      formRef={formData}
      name={name}
      author={author}
      year={year}
      genre={genre}
      onSubmitClick={handleSubmit}
      onClose={handleClickClose}
    />
  );
};
