import AuthContext from '../../context/authContext';
import useForm  from '../../hooks/useForm'
import { useContext, useState } from 'react';

export default function Login() {
    const LoginFormKeys = {
        email: 'email',
        password: 'password'
    }

    const { loginSubmitHandler } = useContext(AuthContext);
    const [errors, setErors] = useState({});
    const { values, onChange, onSubmit } = useForm(loginSubmitHandler, {
        [LoginFormKeys.email]: '',
        [LoginFormKeys.password]: ''
    });

    const emailValidation = () => {

        if(!values[LoginFormKeys.email].trim()) {
            setErors(state => ({
                ...state,
                email : 'Email is required'
            }))
        } else if(values[LoginFormKeys.email].length < 4){
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

        if(!values[LoginFormKeys.password].trim()) {
            setErors(state => ({
                ...state,
                password : 'Password is required'
            }))
        } else if(values[LoginFormKeys.password].length < 4){
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

    return (
        <section className="login-section">

        <form className="login" onSubmit={onSubmit}>
        
            <header>
                <h1>Login</h1>
            </header>
    
            <div className="field">
                <input type="email" 
                name={LoginFormKeys.email}
                id="login-email" 
                placeholder="Email" required 
                onChange={onChange}
                onBlur={emailValidation}
                value={values[LoginFormKeys.email]} />
                {errors.email && <p style={{color: 'red', marginTop: '0.5em'}}>{errors.email}</p>}
                <label htmlFor="login-email">Email</label>
            </div>
    
            <div className="field">
                <input type="password" 
                name={LoginFormKeys.password} 
                id="login-password" 
                placeholder="Password" required 
                onChange={onChange}
                onBlur={passwordValidation}
                value={values[LoginFormKeys.password]} />
                {errors.password && <p style={{color: 'red', marginTop: '0.5em'}}>{errors.password}</p>}
                <label htmlFor="login-password">Password</label>
            </div>
    
            <input type="submit" value="Login" />
    
        </form>
    </section>
    )
}