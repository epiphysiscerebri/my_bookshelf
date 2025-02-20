import { useEffect, useState } from "react";
import { BookCard, BookForm } from "../entities";
import { BookListPage } from "../pages";
import { Modal } from "../shared";
import { AppHeader } from "../widgets";
import styles from "./App.module.css";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";

// TODO: Будет браться из стора
// const dataBookCard = {
//   name: "Война и мир",
//   author: "Л.Н. Толстой",
//   year: "1873",
//   genre: "роман-эпопея",
//   id: "123213",
// };

export function App() {
  const [showModal, setShowModal] = useState<boolean>(false);
  const location = useLocation();
  const navigate = useNavigate();
  const backgroundLocation = location.state?.background;

  const closeModal = () => {
    setShowModal(false);
    navigate(backgroundLocation.pathname);
  };

  useEffect(() => {
    setShowModal(true);
  }, [backgroundLocation]);

  return (
    <div className={styles.app}>
      <AppHeader></AppHeader>

      {/* Основные страницы */}

      <Routes location={backgroundLocation || location}>
        <Route path="/" element={<BookListPage />} />
        <Route path="/login" element={<BookListPage />} />
        {/* <Route path="/book/edit/:idBook" element={<BookCard />} /> */}
      </Routes>

      {/* Модальные окна */}

      {backgroundLocation && showModal && (
        <Routes>
          <Route
            path="/book/edit/:idBook"
            element={
              <Modal title="dialog" onClose={closeModal}>
                {/* TODO: Прокидывать функции закрытия и сохранения, либо функцию сохранения просто навесить в самом компоненте формы */}
                <BookForm />
              </Modal>
            }
          />
          <Route
            path="/book/create"
            element={
              <Modal title="dialog" onClose={closeModal}>
                {/* TODO: Прокидывать функции закрытия и сохранения, либо функцию сохранения просто навесить в самом компоненте формы */}
                <BookForm />
              </Modal>
            }
          />

          {/* <Route path="/login" element={<ListBookPage />} /> */}
        </Routes>
      )}
    </div>
  );
}
