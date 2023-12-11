// import '/src/styles/Navbar.css';
import '/src/styles/App.css';

const Navbar = () => {
    return (
        <nav className="navigation">
            <div className="navigation_container__add">
                <div className="button_collection">
                    <img className="button_collection__img"
                         src="/public/images/button-collection.svg"
                         alt="button-collection"/>
                        <button className="button_collection__text" type="button">Коллекция</button>
                </div>
                <div className="button_add">
                    <img className="button_add__img"
                         src="/public/images/button-add.svg"
                         alt="button-add"/>
                        <button className="button_add__text" type="button">Добавить</button>
                </div>
            </div>
            <div className="navigation_container__logo">
                <img src="/public/images/Watch_Later_Logo_Short.svg" alt="Logo"/>
            </div>
            <div className="navigation_container__account">
                <div className="button-search">
                    <img className="button_search__img"
                         src="/public/images/button-search.svg"
                         alt="button-search"/>
                        <button type="button" className="button-search__text">Поиск</button>
                </div>
                <img src="/public/images/test-icon.svg" alt="icon"/>
            </div>
        </nav>
    );
};

export default Navbar;