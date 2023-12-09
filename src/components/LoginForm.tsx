import {FC} from 'react';
import {useNavigate} from 'react-router-dom';
import '/src/styles/App.css';

const LoginForm: FC = () => {
    const router = useNavigate();
    const handleLogin = () => {
        router('/collection');
    }
    return (
        <form className="loginPage_form">
            <label className="email_label">
                <input
                    type="email"
                    className="email"
                    placeholder="Адрес электронной почты"
                />
            </label>
            <label className="password_label">
                <input
                    type="password"
                    className="password"
                    placeholder="Пароль"
                />
            </label>
            <button
                type="button"
                className="loginPage_button"
                onClick={handleLogin}>Войти
            </button>
        </form>
    );
};

export default LoginForm;