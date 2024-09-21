import React, { FC, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import styles from './AuthForm.module.scss';
import users from '../../users.json';

import { login } from '../../store/slices/auth';

import Label from '../ui/Label/Label';
import Input from '../ui/Input/Input';
import Button from '../ui/Button/Button';

interface IAuthForProps {
    setVisible?: React.Dispatch<React.SetStateAction<boolean>>;
}

const AuthForm: FC<IAuthForProps> = ({ setVisible }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [formMessage, setFormMessage] = useState<string>('');
    const loginField = useRef<HTMLInputElement>(null);
    const passwordField = useRef<HTMLInputElement>(null);

    const validateLogin = (value: string) => {
        if (value.length === 0) {
            setFormMessage('Введите логин');
            return false;
        }

        setFormMessage('');
        return true;
    };

    const validatePassword = (value: string) => {
        if (value.length === 0) {
            setFormMessage('Введите пароль');
            return false;
        }

        if (value.length < 8) {
            setFormMessage('Пароль должен быть больше 8 символов');
            return false;
        }

        setFormMessage('');
        return true;
    };

    const auth = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const loginValue = loginField.current?.value;
        const passwordValue = passwordField.current?.value;

        if (!loginValue || !passwordValue) {
            setFormMessage('Что-то пошло не так! Перезагрузи страницу.');
            return;
        }

        if (!validateLogin(loginValue)) return;

        if (!validatePassword(passwordValue)) return;

        const user = users.find((value) => value.login === loginValue);

        if (!user) {
            setFormMessage('Пользователь не найден!');
            return;
        }

        if (user.password !== passwordValue) {
            setFormMessage('Неправильный пароль!');
            return;
        }

        dispatch(login({ isAuth: true, user }));

        if (setVisible) setVisible(false);

        navigate('/profile');
    };

    return (
        <form className={styles.form} onSubmit={auth}>
            <h2 className={styles.form__title}>Авторизация</h2>

            <div className={styles.form__field}>
                <Label htmlFor="login">Логин</Label>
                <Input
                    id="login"
                    ref={loginField}
                    onChange={(event) => validateLogin(event.target.value)}
                />
            </div>
            <div className={styles.form__field}>
                <Label htmlFor="password">Пароль</Label>
                <Input
                    id="password"
                    type="password"
                    ref={passwordField}
                    onChange={(event) => validatePassword(event.target.value)}
                />
            </div>

            <div className={styles.form__message}>
                <p>{formMessage}</p>
            </div>

            <Button type="submit" fullfilled>
                Войти
            </Button>
        </form>
    );
};

export default AuthForm;
