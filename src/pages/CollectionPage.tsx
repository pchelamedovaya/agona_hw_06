import '/src/styles/App.css';
import {IFilm} from "../types/types.tsx";
import FilmList from "../components/FilmList.tsx";
import {useEffect, useState} from "react";
import axios from "axios";


const CollectionPage = () => {
    const [films, setFilms] = useState<IFilm[]>([]);

    useEffect(() => {
        fetchFilms();
    }, [])

    async function fetchFilms() {
        try {
            const response = await axios.get<IFilm>("https://jsonplaceholder.typicode.com/photos?_limit=4");
            // @ts-ignore
            setFilms(response.data)
        } catch (e) {
            alert(e)
        }
    }

    return (
        <section className="collectionPage">
            <div className="collectionPage_container">
                <div className="collectionPage_container__text">Коллекция</div>
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

                <FilmList films={films}/>
            </div>
        </section>
    );
};

export default CollectionPage;