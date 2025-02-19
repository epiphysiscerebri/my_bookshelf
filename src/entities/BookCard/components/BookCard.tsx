import { FC } from "react";
import { BookCardUI } from "../ui";

export const BookCard: FC<{
  name: string;
  author: string;
}> = ({ name, author }) => <BookCardUI name={name} author={author} />;
