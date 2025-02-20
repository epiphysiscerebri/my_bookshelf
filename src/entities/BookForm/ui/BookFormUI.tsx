import { FC } from "react";
import styles from "./BookFormUI.module.css";
import { Button, TextField } from "../../../shared";
import { Box } from "@mui/material";

export const BookFormUI: FC<{
  // TODO: Заменить на отдельный тип
  name?: string;
  author?: string;
  year?: string;
  genre?: string;
  type_form?: string;
  onSave: () => void;
  onClose: () => void;
}> = ({ name, author, year, genre, onSave, onClose }) => (
  <Box
    component="form"
    noValidate
    autoComplete="off"
    className={styles.book_form}
  >
    <div className={styles.book_form__content}>
      <TextField label="Название" defaultValue={name}></TextField>
      <TextField label="Автор" defaultValue={author}></TextField>
      <TextField label="Год" defaultValue={year}></TextField>
      <TextField label="Жанр" defaultValue={genre}></TextField>
    </div>
    <div className={styles.book_form__control_panel}>
      <Button onClickBtn={onSave}>Схоранить</Button>
      <Button onClickBtn={onClose}>Отменить</Button>
    </div>
  </Box>
);
