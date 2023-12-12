import '/src/styles/App.css';

const ButtonChoice = () => {
    return (
        <div className="container_buttons">
            <div className="wrapper_buttons">
                <div className="collectionPage_container__buttons">
                    <div className="collectionPage_buttons">
                        <button className="button_willWatch"
                                type="button"
                                >КиноПоиск</button>
                        <button className="button_alreadyWatched"
                                type="button"
                                >Вручную</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ButtonChoice;