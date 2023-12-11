import {IFilm} from "../types/types.tsx";
import {FC} from "react";
import '/src/styles/App.css';
import FilmListDetail from "./FilmListDetail.tsx";

interface FilmListProps {
    films: IFilm[]
}
const FilmList: FC<FilmListProps> = ({films}) => {
    return (
        <div className="collectionPage_container__films">
            <div className="collectionPage_container__filmsDetail">
                {films.map(film =>
                    <FilmListDetail key={film.id} film={film}/>
                )}
            </div>
        </div>
    );
};

export default FilmList;