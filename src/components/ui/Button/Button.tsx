import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';

import styles from './Button.module.scss';

interface IButtonProps {
    fullfilled?: boolean;
    href?: string;
}

type ButtonProps = React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
> &
    IButtonProps;

const Button: FC<ButtonProps> = ({ children, className, fullfilled, href, ...props }) => {
    return href ? (
        <Link
            className={clsx(styles.button, { [styles.fullfilled]: fullfilled }, className)}
            to={href}
        >
            {children}
        </Link>
    ) : (
        <button
            className={clsx(styles.button, { [styles.fullfilled]: fullfilled }, className)}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
