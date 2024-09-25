import AuthContext from '../../context/authContext';
import useForm  from '../../hooks/useForm'
import { useContext, useState, } from 'react';
import { zodResolver } from "@hookform/resolvers/zod";

const RegisterFormKeys = {
    username: 'username',
    email: 'email',
    password: 'password',
    rePassword: 'rePassword'
}

export default function Register() {

    const { registerSubmitHandler } = useContext(AuthContext);
    const [errors, setErors] = useState({});
    const { values, onChange, onSubmit } = useForm(registerSubmitHandler, {
        [RegisterFormKeys.username]: '',
        [RegisterFormKeys.email]: '',
        [RegisterFormKeys.password]: '',
        [RegisterFormKeys.rePassword]: '',
    });

    const usernameValidation = () => {

        if(!values[RegisterFormKeys.username].trim()) {
            setErors(state => ({
                ...state,
                username : 'Username is required'
            }))
        } else if(values[RegisterFormKeys.username].length < 4){
            setErors(state => ({
                ...state,
                username: 'Username must be at least 4 characters long.'
            }))
        } else {
            setErors(state => ({
                ...state,
                username: ''
            }))
        }
    }
    

    const emailValidation = () => {

        if(!values[RegisterFormKeys.email].trim()) {
            setErors(state => ({
                ...state,
                email : 'Email is required'
            }))
        } else if(values[RegisterFormKeys.email].length < 4){
            setErors(state => ({
                ...state,
                email: 'Email must be at least  characters long.'
            }))
        } else {
            setErors(state => ({
                ...state,
                email: ''
            }))
        }
    }
    
    const passwordValidation = () => {

        if(!values[RegisterFormKeys.password].trim()) {
            setErors(state => ({
                ...state,
                password : 'Password is required'
            }))
        } else if(values[RegisterFormKeys.password].length < 4){
            setErors(state => ({
                ...state,
                password: 'Password must be at least  characters long.'
            }))
        } else {
            setErors(state => ({
                ...state,
                password: ''
            }))
        }
    }

    const repeatPasswordValidation = () => {

        if(!values[RegisterFormKeys.rePassword].trim()) {
            setErors(state => ({
                ...state,
                rePassword : 'Repeat Password is required'
            }))
        } else if(values[RegisterFormKeys.rePassword].length < 4){
            setErors(state => ({
                ...state,
                rePassword: 'Repeat Password must be at least  characters long.'
            }))
        } else if (values[RegisterFormKeys.password] !== values[RegisterFormKeys.rePassword]) {
            setErors(state => ({
                ...state,
                rePassword: 'Password missmatch!'
            }))
        } else {
            setErors(state => ({
                ...state,
                rePassword: 'Password missmatch!'
            }))
        }
    }

    return (
        <section className="register-section">

        <form className="register" onSubmit={onSubmit}>
        
            <header>
                <h1>Register</h1>
            </header>
    
            <div className="field">
                <input type="text" 
                name={RegisterFormKeys.username}
                id="register-username" 
                placeholder="Username" required 
                onChange={onChange}
                onBlur={usernameValidation}
                value={values[RegisterFormKeys.username]} />
                {errors.username && <p style={{color: 'red',  marginTop: '0.5em'}}>{errors.username}</p>}
                <label htmlFor="register-email">Username</label>
            </div>

            <div className="field">
                <input type="email" 
                name={RegisterFormKeys.email}
                id="register-email" 
                placeholder="Email" required 
                onChange={onChange}
                onBlur={emailValidation}
                value={values[RegisterFormKeys.email]}/>
                {errors.email && <p style={{color: 'red', marginTop: '0.5em'}}>{errors.email}</p>}
                <label htmlFor="register-email">Email</label>
            </div>
    
            <div className="field">
                <input type="password" 
                name={RegisterFormKeys.password}
                id="login-password" 
                placeholder="Password" required 
                onChange={onChange}
                onBlur={passwordValidation}
                value={values[RegisterFormKeys.password]}/>
                {errors.password && <p style={{color: 'red', marginTop: '0.5em'}}>{errors.password}</p>}
                <label htmlFor="login-password">Password</label>
            </div>
    
            <div className="field">
                <input type="password" 
                name={RegisterFormKeys.rePassword}
                id="rePpassword" 
                placeholder="Repeat Password" required 
                onChange={onChange}
                onBlur={repeatPasswordValidation}
                value={values[RegisterFormKeys.rePassword]}/>
                {errors.rePassword && <p style={{color: 'red',  marginTop: '0.5em'}}>{errors.rePassword}</p>}
                <label htmlFor="rePassword">Repeat Password</label>
            </div>

            <input type="submit" value="Register" />
    
        </form>
    </section>
    )
}