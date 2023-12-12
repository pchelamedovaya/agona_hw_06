import '/src/styles/AccountPage.css';
import AboutForm from "../components/AboutForm.tsx";

const AccountPage = () => {
    return (
        <section className="accountPage">
            <div className="accountPage_container">
                <div className="accountPage_container__text">Профиль</div>
                <AboutForm></AboutForm>
            </div>
        </section>
    );
};

export default AccountPage;