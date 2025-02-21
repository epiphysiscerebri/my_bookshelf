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
    className={styles["book-form"]}
    onSubmit={onSubmitClick}
  >
    <div className={styles["book-form__content"]}>
      <TextField inputRef={formRef.name} label="Название" defaultValue={name} />
      <TextField
        inputRef={formRef.author}
        label="Автор"
        defaultValue={author}
      />
      <TextField inputRef={formRef.year} label="Год" defaultValue={year} />
      <TextField inputRef={formRef.genre} label="Жанр" defaultValue={genre} />
    </div>
    <div className={styles["book-form__control-panel"]}>
      <Button type_button="submit">Сохранить</Button>
      <Button type_button="button" onClickBtn={onClose}>
        Отменить
      </Button>
    </div>
  </Box>
);
