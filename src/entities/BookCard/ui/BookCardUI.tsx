import { FC } from "react";

export const BookCardUI: FC<{
  name: string;
  author: string;
}> = ({ name, author }) => (
  <>
    <div>Это название: {name}</div>
    <div>Это автор: {author}</div>
  </>
);
