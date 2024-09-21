import React, { FC } from 'react';
import clsx from 'clsx';

import styles from './H1.module.scss';

interface IH1Props {
    children?: React.ReactNode;
    className?: string;
}

const H1: FC<IH1Props> = ({ children, className }) => {
    return <h1 className={clsx(styles.h1, className)}> {children} </h1>;
};

export default H1;
