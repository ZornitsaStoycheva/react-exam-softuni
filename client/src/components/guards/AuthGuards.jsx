import { useContext } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "../../context/authContext"

export default function AuthGuard (props) {
    const { isAutenticated } = useContext(AuthContext);

    if (!isAutenticated) {
        return <Navigate to='/auth/login' />
    }

    return (
        <>
        {props.children}
        </>
    )
}