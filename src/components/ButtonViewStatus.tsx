import '/src/styles/App.css';

const ButtonViewStatus = () => {
    return (
        <div className="container_buttons">
            <div className="wrapper_buttons">
                <div className="collectionPage_container__buttons">
                    <div className="collectionPage_buttons">
                        <button
                            className="button_willWatch"
                            type="button"
                            >Буду смотреть</button>
                        <button className="button_alreadyWatched"
                                type="button"
                            >Просмотрено</button>
                    </div>
                </div>
                <button className="button-menu"
                        type="button" >
                    <img
                        src="public/images/menu.svg"
                        alt="menu"/>
                </button>
            </div>
        </div>
    );
};

export default ButtonViewStatus;