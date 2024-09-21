import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import styles from './Header.module.scss';

import Button from '../ui/Button/Button';
import Modal from '../ui/Modal/Modal';
import AuthForm from '../AuthForm/AuthForm';

import logo from '../../assets/images/logo.svg';
import { IStoreState } from '../../store/store';
import { logout } from '../../store/slices/auth';

const Header = () => {
    const dispatch = useDispatch();
    const [visibleModal, setVisibleModal] = useState<boolean>(false);
    const isAuth = useSelector((state: IStoreState) => state.auth.isAuth);

    return (
        <>
            <header className={styles.header}>
                <Link className={styles.header__logo} to="/">
                    <img src={logo} alt="Logo" width="54" height="23" loading="lazy" />
                </Link>

                <Link className={styles.header__link} to="/contacts">
                    Контакты
                </Link>

                {isAuth ? (
                    <Button
                        type="button"
                        className={styles.header__button}
                        onClick={() => dispatch(logout())}
                    >
                        Выйти
                    </Button>
                ) : (
                    <Button
                        type="button"
                        className={styles.header__button}
                        onClick={() => setVisibleModal(true)}
                    >
                        Войти
                    </Button>
                )}
            </header>
            {visibleModal && (
                <Modal setVisible={setVisibleModal}>
                    <AuthForm setVisible={setVisibleModal} />
                </Modal>
            )}
        </>
    );
};

export default Header;
