import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from "../../Provider/AuthProvider";
import Loading from "../Loader/loading";

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext);

    if (loading) {
        return <Loading />;
    }

    if (user && user?.email) {
        return children;
    }

    return <Navigate to={"/auth/login"} />;
};

export default PrivateRoutes;
