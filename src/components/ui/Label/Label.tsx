import clsx from 'clsx';
import React, { FC } from 'react';

import styles from './Label.module.scss';

const Label: FC<
    React.DetailedHTMLProps<React.LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>
> = ({ children, className, ...props }) => {
    return (
        <label className={clsx(styles.label, className)} {...props}>
            {children}
        </label>
    );
};

export default Label;
