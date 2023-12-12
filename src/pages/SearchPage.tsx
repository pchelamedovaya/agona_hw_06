import ButtonChoice from "../components/ButtonChoice.tsx";
import SearchComponent from "../components/SearchComponent.tsx";
import '/src/styles/SearchPage.css';
import FilmList from "../components/FilmList.tsx";
import {useEffect, useState} from "react";
import {IFilm} from "../types/types.tsx";
import FilmService from "../API/FilmService.tsx";
import {Link} from "react-router-dom";

const SearchPage = () => {
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
        <section className="searchPage">
            <div className="searchPage_container">
                <div className="searchPage_container__text">Поиск</div>
                    <ButtonChoice></ButtonChoice>
                    <SearchComponent></SearchComponent>
                <div className="searchPage_recom">
                    <div className="search_recommendations_container">
                        <span className="search_recommendations__text">Рекомендации</span>
                        <Link className="search_recommendations__all" to="#">Все</Link>
                    </div>
                    <FilmList films={films}></FilmList>
                </div>
            </div>
        </section>
    );
};

export default SearchPage;