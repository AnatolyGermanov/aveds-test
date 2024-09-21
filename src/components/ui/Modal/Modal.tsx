import React, { FC } from 'react';

import styles from './Modal.module.scss';

interface IModalProps {
    children?: React.ReactNode;
    setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const Modal: FC<IModalProps> = ({ children, setVisible }) => {
    return (
        <div className={styles.modal}>
            <div className={styles.modal__inner}>
                <button className={styles.modal__close} onClick={() => setVisible(false)}>
                    <span className="visually-hidden">Закрыть модальное окно</span>
                </button>
                {children}
            </div>
        </div>
    );
};

export default Modal;
