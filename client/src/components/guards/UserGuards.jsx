import { useContext } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "../../context/authContext"

export default function UserGuards (props) {
    const { userId } = useContext(AuthContext);

    if (userId) {
        return <Navigate to='/' />
    }

    return (
        <>
        {props.children}
        </>
    )
}