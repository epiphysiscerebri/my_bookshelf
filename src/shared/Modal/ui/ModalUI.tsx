import { FC } from "react";

import styles from "./ModalUI.module.css";
import { ModalOverlayUI } from "../../ModalOverlay";

export const ModalUI: FC<{
  title: string;
  onClose: () => void;
  children: React.ReactNode;
}> = ({ title, onClose, children }) => (
  <>
    <div className={styles.modal}>
      <div className={styles.header}>
        {title}
        <button className={styles.button} type="button" onClick={onClose}>
          {/* <div onClick={onClose} /> */}
        </button>
      </div>
      <div className={styles.content}>{children}</div>
    </div>
    <ModalOverlayUI onClick={onClose} />
  </>
);
