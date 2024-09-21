import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { IStoreState } from '../../store/store';

import H1 from '../../components/ui/H1/H1';
import Button from '../../components/ui/Button/Button';
import { logout } from '../../store/slices/auth';

const Profile = () => {
    const dispatch = useDispatch();
    const userName = useSelector((state: IStoreState) => state.auth.user?.name);

    return (
        <section className="section container">
            <H1 className="section__title">Привет, {userName}</H1>

            <div className="section__actions">
                <Button fullfilled onClick={() => dispatch(logout())}>
                    Выйти из аккаунта
                </Button>
                <Button href='/contacts'>Перейти в контакты</Button>
            </div>
        </section>
    );
};

export default Profile;
