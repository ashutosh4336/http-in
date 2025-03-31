import styles from '@/styles/Codes.module.scss';

export const Modal = ({ isOpen, onClose, data }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalHeader}>
          <h2>
            {data.code} - {data.title}
          </h2>
          <button className={styles.closeButton} onClick={onClose}>
            &times;
          </button>
        </div>
        <div className={styles.modalContent}>
          <span
            className={styles.category}
            style={{ backgroundColor: data.color }}
          >
            {data.category}
          </span>
          <p className={styles.description}>{data.description}</p>
          <p className={styles.details}>{data.details}</p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
