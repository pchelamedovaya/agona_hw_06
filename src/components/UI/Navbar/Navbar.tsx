// import '/src/styles/Navbar.css';
import '/src/styles/App.css';
import {Link, useNavigate} from "react-router-dom";
import {useState} from "react";

const Navbar = () => {
    const router = useNavigate();
    const [collectionActive, setCollectionActive] = useState(false);
    const [addActive, setAddActive] = useState(false);
    const [searchActive, setSearchActive] = useState(false);
    const [accountActive, setAccountActive] = useState(false);
    const collectionImgSrc = collectionActive
        ? "/public/images/button-collection-active.svg"
        : "/public/images/button-collection.svg";
    const addImgSrc = addActive
        ? "/public/images/button-add-active.svg"
        : "/public/images/button-add.svg";
    const searchImgSrc = searchActive
        ? "/public/images/button-search-active.svg"
        : "/public/images/button-search.svg";

    const routeCollection = () => {
        router('/collection')
        setCollectionActive(true);
        setAddActive(false);
        setSearchActive(false);
        setAccountActive(false);
    }
    const routeSearch = () => {
        router('/search')
        setSearchActive(true);
        setCollectionActive(false);
        setAddActive(false);
        setAccountActive(false);
    }
    const routeAdd = () => {
        router('/add')
        setAddActive(true);
        setCollectionActive(false);
        setSearchActive(false);
        setAccountActive(false);
    }
    const clickToAccount = () => {
        setAccountActive(true);
        setAddActive(false);
        setCollectionActive(false);
        setSearchActive(false);
    }

    return (
        <nav className="navigation">
            <div className="navigation_container__add">
                <div className={`button_collection${collectionActive ? ' active' : ''}`}>
                    <img className="button_collection__img"
                        src={collectionImgSrc}
                        alt="button-collection"/>
                        <button className={`button_collection__text${collectionActive ? ' active' : ''}`}
                        type="button"
                        onClick={routeCollection}
                        >Коллекция</button>
                </div>
                <div className={`button_add${addActive ? ' active' : ''}`}>
                    <img className="button_add__img"
                        src={addImgSrc}
                        alt="button-add"/>
                        <button className={`button_add__text${addActive ? ' active' : ''}`}
                        type="button"
                        onClick={routeAdd}
                        >Добавить</button>
                </div>
            </div>
            <div className="navigation_container__logo">
                <img
                    src="/public/images/Watch_Later_Logo_Short.svg"
                    alt="Logo"/>
            </div>
            <div className="navigation_container__account">
                <div className={`button-search${searchActive ? ' active' : ''}`}>
                    <img className="button_search__img"
                        src={searchImgSrc}
                        alt="button-search"/>
                         <button className={`button_search__text${searchActive ? ' active' : ''}`}
                         type="button"
                         onClick={routeSearch}
                         >Поиск</button>
                </div>
                <Link to={'/account'}
                    onClick={clickToAccount}>
                    <img className={`account_img${accountActive ? ' active' : ''}`}
                        src="/public/images/test-icon.svg"
                        alt="icon"/>
                </Link>
            </div>
        </nav>
    );
};
export default Navbar;