import '/src/styles/App.css';
import {IFilm} from "../types/types.tsx";
import FilmList from "../components/FilmList.tsx";
import {useEffect, useState} from "react";
import ButtonViewStatus from "../components/ButtonViewStatus.tsx";
import FilmService from "../API/FilmService.tsx";


const CollectionPage = () => {
    const [films, setFilms] = useState<IFilm[]>([]);

    useEffect(() => {
        fetchFilms();
    }, [])

    async function fetchFilms() {
        const films = await FilmService.getAll();
        // @ts-ignore
        setFilms(films)
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