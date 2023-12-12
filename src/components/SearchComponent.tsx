import '/src/styles/Search.css';

const SearchComponent = () => {
    return (
        <div className="search_title">
            <div className="search_input">
                <input className="input"
                       placeholder="Введите название фильма, например, Титаник"/>
            </div>
        </div>
    );
};

export default SearchComponent;