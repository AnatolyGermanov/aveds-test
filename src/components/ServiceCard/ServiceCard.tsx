import React, { FC } from 'react';

import styles from './ServiceCard.module.scss';

interface IServiceCardProps {
    image: string;
    title: string;
    description: string;
}

const ServiceCard: FC<IServiceCardProps> = ({ image, title, description }) => {
    return (
        <article className={styles.card}>
            <div className={styles.card__image}>
                <img src={image} alt="" />
            </div>
            <h3 className={styles.card__title}> {title} </h3>
            <div className={styles.card__divider}></div>
            <div className={styles.card__description}>
                <p> {description} </p>
            </div>
        </article>
    );
};

export default ServiceCard;
