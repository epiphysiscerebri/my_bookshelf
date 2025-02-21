import { Location } from "react-router-dom";
export type TBookCardProps = {
  name: string;
  author: string;
  year: string;
  genre: string;
  index: number;
  id: string;
  locationState: Location;
};

export type TBookCardUIProps = {
  name: string;
  author: string;
  year: string;
  genre: string;
  index: number;
  id: string;
  locationState: { background: Location };
  onClickEdit: () => void;
  onChangeCheckbox: (
    e: React.ChangeEvent<HTMLInputElement>,
    id: string
  ) => void;
};
