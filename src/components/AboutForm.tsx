import '/src/styles/AboutForm.css';
import AddFotoComponent from "./AddFotoComponent.tsx";

const AboutForm = () => {
    return (
        <form className="aboutForm">
            <AddFotoComponent></AddFotoComponent>
            <label className="name_label">
                <input className="name"
                    type="text"
                    placeholder="Имя"
                />
            </label>
            <label className="about_label">
                <input className="about"
                    type="text"
                    placeholder="О себе"
                />
            </label>
            <label className="genre_label">
                <input className="genre"
                    type="text"
                    placeholder="Любимые жанры"
                />
            </label>
        </form>
    );
};

export default AboutForm;