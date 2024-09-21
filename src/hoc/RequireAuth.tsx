import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { IStoreState } from '../store/store';
import { Navigate } from 'react-router-dom';

interface IRequireAuthProps {
    children: React.ReactNode;
}

const RequireAuth: FC<IRequireAuthProps> = ({ children }) => {
    const isAuth = useSelector((state: IStoreState) => state.auth.isAuth);

    if (!isAuth) {
        return <Navigate to="/" />;
    }

    return <>{children}</>;
};

export default RequireAuth;
