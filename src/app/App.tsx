import { useEffect, useState } from "react";
import { BookForm } from "../entities";
import { BookListPage, NotFound404 } from "../pages";
import { Modal } from "../shared";
import { AppHeader } from "../widgets";
import styles from "./App.module.css";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "../store/store";
import { getSelectedBookCard } from "../store/slices";

export function App() {
  const [showModal, setShowModal] = useState<boolean>(false);
  const location = useLocation();
  const navigate = useNavigate();
  const backgroundLocation = location.state?.background;

  const selectedBookCard = useSelector(getSelectedBookCard);

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
        <Route path="*" element={<NotFound404 />} />
      </Routes>

      {/* Модальные окна */}

      {backgroundLocation && showModal && (
        <Routes>
          <Route
            path="/book/edit/:idBook"
            element={
              <Modal title="Изменить книгу" onClose={closeModal}>
                <BookForm {...selectedBookCard} onClose={closeModal} />
              </Modal>
            }
          />
          <Route
            path="/book/create"
            element={
              <Modal title="Добавить книгу" onClose={closeModal}>
                <BookForm onClose={closeModal} />
              </Modal>
            }
          />
        </Routes>
      )}
    </div>
  );
}
