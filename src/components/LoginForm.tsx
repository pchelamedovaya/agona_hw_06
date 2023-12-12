import {FC} from 'react';
import {useNavigate} from 'react-router-dom';
import '/src/styles/LoginPage.css';

const LoginForm: FC = () => {
    const router = useNavigate();
    const handleLogin = () => {
        router('/collection');
    }
    return (
        <form className="loginPage_form">
            <label className="email_label">
                <input className="email"
                    type="email"
                    placeholder="Адрес электронной почты"
                />
            </label>
            <label className="password_label">
                <input className="password"
                    type="password"
                    placeholder="Пароль"
                />
            </label>
            <button className="loginPage_button"
                type="button"
                onClick={handleLogin}>Войти
            </button>
        </form>
    );
};

export default LoginForm;