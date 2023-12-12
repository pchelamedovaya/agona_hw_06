import '/src/styles/App.css';
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {IFilm} from "../types/types.tsx";
import FilmService from "../API/FilmService.tsx";

const FilmDetail = () => {
    const params = useParams();
    const [film, setFilm] = useState<IFilm>()

    useEffect(() => {
        if (params.id) {
            fetchFilmByID(Number(params.id));
        }
    }, [params.id])

    async function fetchFilmByID(id: number) {
        const film = await FilmService.getByID(id);
        setFilm(film)
    }

    return (
        <section className="filmDet">
            <div className="filmDetail_container">
                <div className="filmDetail_container__img">
                    <img className="filmDetail_img" src={film && film.url} alt="film image"/>
                    {/*<img className="filmDetail_img" src="/public/images/test-film.png" alt="film image"/>*/}
                </div>
                <div className="filmDetail_container__details">
                    <span className="filmDetail__name">{film && film.title.slice(0, 10)}</span>
                    {/*<span className="filmDetail__name">Солнцестояние</span>*/}
                    <div className="filmDetail__ratingAndYear">
                        {/*<span className="filmDetail__year">{film && film.year}</span>*/}
                        <span className="filmDetail__year">2019</span>
                        <div className="filmDetail__rating_container">
                            <div className="filmDetail__rating_wrapper">
                                {/*<span className="filmDetail__rating">{film && film.rating}</span>*/}
                                <span className="filmDetail__rating">9</span>
                            </div>
                        </div>
                    </div>
                    <div className="filmDetail_container__button">
                        <img src="/public/images/button-add.svg" alt="add button"/>
                        <button type="button" className="filmDetail_button__text">Буду смотреть</button>
                    </div>
                    {/*<div className="filmDetail_description">{film && film.description}</div>*/}
                    <div className="filmDetail_description">{film && film.title}</div>
                    <div className="categories_container">
                        <div className="categories">
                            {/*<div className="categories_detail">{film && film.category}</div>*/}
                            <div className="categories_detail">Ужасы</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FilmDetail;