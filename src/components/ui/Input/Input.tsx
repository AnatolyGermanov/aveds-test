import React, { FC, forwardRef } from 'react';
import clsx from 'clsx';

import styles from './Input.module.scss';

const Input: FC<
    React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
> = forwardRef(({ className, ...props }, ref) => {
    return <input className={clsx(styles.input, className)} ref={ref} {...props} />;
});

export default Input;
