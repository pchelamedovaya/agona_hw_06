import '/src/styles/AddFotoComponent.css';

const AddFotoComponent = () => {
    return (
        <button className="addButton">
            <img
                src="/public/images/add_foto.svg"
                alt="добавить фото"/>
            <div className="addButton_text">Загрузить фото</div>
        </button>
    );
};

export default AddFotoComponent;