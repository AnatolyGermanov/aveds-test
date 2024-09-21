import React, { useState } from 'react';

import styles from './Home.module.scss';

import H1 from '../../components/ui/H1/H1';
import Button from '../../components/ui/Button/Button';
import ServiceCard from '../../components/ServiceCard/ServiceCard';

import image1 from '../../assets/images/services/cardiogram.svg';
import image2 from '../../assets/images/services/stethoscope.svg';
import image3 from '../../assets/images/services/medical-history.svg';
import Modal from '../../components/ui/Modal/Modal';
import AuthForm from '../../components/AuthForm/AuthForm';

const services_list = [
    {
        image: image1,
        title: 'Онлайн-прием',
        description: 'Рыба текст',
    },
    {
        image: image2,
        title: 'Экстренный случай',
        description: 'Рыба текст',
    },
    {
        image: image3,
        title: 'Лечение рака',
        description: 'Рыба текст',
    },
];

const Home = () => {
    const [visibleModal, setVisibleModal] = useState<boolean>(false);

    return (
        <>
            <section className="section container">
                <H1 className="section__title">Место получения медицинской помощи</H1>

                <div className="section__actions">
                    <Button type="button" fullfilled onClick={() => setVisibleModal(true)}>
                        Войти
                    </Button>
                    <Button href="contacts">Контакты</Button>
                </div>

                <ul className={styles.services}>
                    <h2 className="visually-hidden">Услуги</h2>
                    {services_list.map((value, index) => {
                        return (
                            <li key={index}>
                                <ServiceCard {...value} />
                            </li>
                        );
                    })}
                </ul>
            </section>
            {visibleModal && (
                <Modal setVisible={setVisibleModal}>
                    <AuthForm setVisible={setVisibleModal} />
                </Modal>
            )}
        </>
    );
};

export default Home;
