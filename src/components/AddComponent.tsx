import '/src/styles/Search.css';
const AddComponent = () => {
    return (
        <div className="search_title">
            <div className="search_title__text">Название</div>
            <div className="searchAdd_input">
                <input placeholder="Например, Титаник"/>
            </div>
        </div>
    );
};

export default AddComponent;