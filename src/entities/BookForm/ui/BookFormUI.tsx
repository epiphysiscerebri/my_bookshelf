import { FC } from "react";
import styles from "./BookFormUI.module.css";
import { Button, TextField } from "../../../shared";
import { Box } from "@mui/material";
import { BookFormUIProps } from "../types";

export const BookFormUI: FC<BookFormUIProps> = ({
  name,
  author,
  year,
  genre,
  formRef,
  onSubmitClick,
  onClose,
}) => (
  <Box
    component="form"
    noValidate
    autoComplete="off"
    className={styles.book_form}
    onSubmit={onSubmitClick}
  >
    <div className={styles.book_form__content}>
      {/* TODO: Пропустить через цикл поя формы, чтобы могла выводиться любое кол-во */}
      <TextField
        inputRef={formRef.name}
        label="Название"
        defaultValue={name}
      ></TextField>
      <TextField
        inputRef={formRef.author}
        label="Автор"
        defaultValue={author}
      ></TextField>
      <TextField
        inputRef={formRef.year}
        label="Год"
        defaultValue={year}
      ></TextField>
      <TextField
        inputRef={formRef.genre}
        label="Жанр"
        defaultValue={genre}
      ></TextField>
    </div>
    <div className={styles.book_form__control_panel}>
      <Button type_button="submit">Схоранить</Button>
      <Button type_button="button" onClickBtn={onClose}>
        Отменить
      </Button>
    </div>
  </Box>
);
