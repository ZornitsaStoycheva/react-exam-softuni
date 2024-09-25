import { createContext } from "react";
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import * as authService from '../services/authService'
import usePersistedState from "../hooks/usePersistedState";

const AuthContext = createContext();

export const AuthProvider = ({
    children
}) => {

    const navigate = useNavigate();
    const [auth, setAuth ] =  usePersistedState('auth', {}
      // () => {
      //   localStorage.removeItem('token');
    
      //   return {}}
      )

  const registerSubmitHandler = async (values) => {
    const result = await authService.register(values.username, values.email, values.password, values.rePassword);

    setAuth(result);
    localStorage.setItem('token', result.user);

    navigate('/');
  }

  const loginSubmitHandler = async (values) => {
    console.log(values);
    const result = await authService.login(values.email, values.password);

    setAuth(result);
    localStorage.setItem('token', result.user);

    navigate('/');
  }

  const logoutHandler = async () => {
    setAuth({});
    localStorage.removeItem('token');

    navigate('/');
  }

  const values = {
    registerSubmitHandler,
    loginSubmitHandler,
    logoutHandler,
    user: localStorage.getItem('token'),
    username: auth.username,
    email: auth.email,
    userId: auth.userId,
    isAutenticated: !!auth.user
  }

  console.log(values)

    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    )
}

AuthContext.displayName = 'AuthContext';

export default AuthContext;