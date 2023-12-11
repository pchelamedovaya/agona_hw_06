import '/src/styles/App.css';

const ButtonViewStatus = () => {
    return (
        <div className="container_buttons">
            <div className="wrapper_buttons">
                <div className="collectionPage_container__buttons">
                    <div className="collectionPage_buttons">
                        <button type="button" className="button_willWatch">Буду смотреть</button>
                        <button type="button" className="button_alreadyWatched">Просмотрено</button>
                    </div>
                </div>
                <button type="button" className="button-menu">
                    <img src="public/images/menu.svg" alt="menu"/>
                </button>
            </div>
        </div>
    );
};

export default ButtonViewStatus;