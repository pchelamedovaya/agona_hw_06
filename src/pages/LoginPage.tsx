import LoginForm from "../components/LoginForm.tsx";
import '/src/styles/App.css';
import {Link} from "react-router-dom";

const LoginPage = () => {
    return (
        <section className="loginPage">
            <div className="loginPage_container">
                <img className="logo"
                     src="public/images/Watch_Later_Logo_Full.svg"
                     alt="Logo"/>
                <LoginForm></LoginForm>
                <span className="loginPage_info">Еще не зарегистрированы?
                  <Link to="/"> Регистрация</Link>
              </span>
            </div>
        </section>
    );
};

export default LoginPage;