import {IFilm} from "../types/types.tsx";
import {FC} from "react";
import '/src/styles/App.css';
import FilmDetail from "./FilmDetail.tsx";

interface FilmListProps {
    films: IFilm[]
}
const FilmList: FC<FilmListProps> = ({films}) => {
    return (
        <div className="collectionPage_container__films">
            <div className="collectionPage_container__filmsDetail">
                {films.map(film =>
                    <FilmDetail key={film.id} film={film}/>
                )}
            </div>
        </div>
    );
};

export default FilmList;