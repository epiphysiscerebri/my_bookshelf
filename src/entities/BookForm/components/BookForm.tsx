import { FC } from "react";
import { BookFormUI } from "../ui";

export const BookForm: FC<{
  // TODO: Заменить на отдельный тип
  name?: string;
  author?: string;
  year?: string;
  genre?: string;
  index?: number;
  id?: string;
  onSave?: () => void;
  onClose?: () => void;
}> = ({ name, author, year, genre /*onSave, onClose*/ }) => (
  // TODO: Сделать вывод формы по условию
  <BookFormUI
    name={name}
    author={author}
    year={year}
    genre={genre}
    type_form="edit"
    // TODO: Функции прокидываются сюда
    onSave={() => console.log("save")}
    onClose={() => console.log("close")}
  />
);
