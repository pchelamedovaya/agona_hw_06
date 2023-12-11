import '/src/styles/App.css';
import {IFilm} from "../types/types.tsx";
import FilmList from "../components/FilmList.tsx";
import {useEffect, useState} from "react";
import ButtonViewStatus from "../components/ButtonViewStatus.tsx";
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
                <ButtonViewStatus></ButtonViewStatus>
                <FilmList films={films}/>
            </div>
        </section>
    );
};

export default CollectionPage;