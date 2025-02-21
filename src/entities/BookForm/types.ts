export type FormRefs = {
  name: React.RefObject<HTMLInputElement | null>;
  author: React.RefObject<HTMLInputElement | null>;
  year: React.RefObject<HTMLInputElement | null>;
  genre: React.RefObject<HTMLInputElement | null>;
};

export type BookFormProps = {
  name?: string;
  author?: string;
  year?: string;
  genre?: string;
  index?: number;
  id?: string;
  onClose: () => void;
};

export type BookFormUIProps = {
  name?: string;
  author?: string;
  year?: string;
  genre?: string;
  formRef: FormRefs;
  onSubmitClick: (e?: React.FormEvent<HTMLFormElement>) => void;
  onClose: () => void;
};
