import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';

import './assets/styles/styles.scss';

import Layout from './Layouts/Layout';
import Home from './pages/Home/Home';
import Profile from './pages/Profile/Profile';
import Contacts from './pages/Contacts/Contacts';
import RequireAuth from './hoc/RequireAuth';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/profile',
                element: (
                    <RequireAuth>
                        <Profile />,
                    </RequireAuth>
                ),
            },
            {
                path: '/contacts',
                element: <Contacts />,
            },
        ],
    },
]);

function App() {
    return (
        <Provider store={store}>
            <RouterProvider router={router} />;
        </Provider>
    );
}

export default App;
