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
    name: useRef<HTMLInputElement>(null),
    author: useRef<HTMLInputElement>(null),
    year: useRef<HTMLInputElement>(null),
    genre: useRef<HTMLInputElement>(null),
  };

  const booksListLength = useSelector(getBooksSelector).length;
  const dispatch = useDispatch();

  const handleSubmit = (e?: React.FormEvent<HTMLFormElement>) => {
    e?.preventDefault();

    if (Object.values(formData).some((ref) => !ref.current?.value)) {
      return;
    }

    if (id) {
      dispatch(
        editBookCard({
          name: formData.name.current!.value,
          author: formData.author.current!.value,
          year: formData.year.current!.value,
          genre: formData.genre.current!.value,
          index,
          id: id.toString().slice(2),
        })
      );
    } else {
      dispatch(
        createBookCard({
          name: formData.name.current!.value,
          author: formData.author.current!.value,
          year: formData.year.current!.value,
          genre: formData.genre.current!.value,
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
