import { BookForm } from "../entities";
import { BookListPage } from "../pages";
import { Modal } from "../shared";
import { AppHeader } from "../widgets";
import styles from "./App.module.css";
import { Routes, Route } from "react-router-dom";

// TODO: Будет браться из стора
// const dataBookCard = {
//   name: "Война и мир",
//   author: "Л.Н. Толстой",
//   year: "1873",
//   genre: "роман-эпопея",
//   id: "123213",
// };

export function App() {
  return (
    <div className={styles.app}>
      <AppHeader></AppHeader>

      {/* Основные страницы */}

      <Routes>
        <Route path="/" element={<BookListPage />} />
        <Route path="/login" element={<BookListPage />} />
      </Routes>

      {/* Модальные окна */}
      {/* TODO: Добавить локейшон */}
      <Routes>
        <Route
          path="/book/edit/:idBook"
          element={
            <Modal
              // TODO: Тут сделать проверку, есть ли в передаваемой сущности id, если нет, тогда это create
              title="Изменить информацию о книге / Добавить книгу"
              onClose={() => console.log("close")}
            >
              {/* TODO: Прокидывать функции закрытия и сохранения, либо функцию сохранения просто навесить в самом компоненте формы */}
              <BookForm />
            </Modal>
          }
        />
        {/* <Route path="/login" element={<ListBookPage />} /> */}
      </Routes>
    </div>
  );
}
