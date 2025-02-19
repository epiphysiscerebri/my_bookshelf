import { ListBookPage } from "../pages";
import { AppHeader } from "../widgets";
import styles from "./App.module.css";
import { Routes, Route } from "react-router-dom";

export function App() {
  return (
    <div className={styles.app}>
      <AppHeader></AppHeader>

      {/* Основные страницы */}

      <Routes>
        <Route path="/" element={<ListBookPage />} />
        <Route path="/login" element={<ListBookPage />} />
      </Routes>

      {/* Модальные окна */}

      {/* <Routes>
        <Route path="/" element={<ListBookPage />} />
        <Route path="/login" element={<ListBookPage />} />
      </Routes> */}
    </div>
  );
}
