import '/src/styles/App.css';
import {IFilm} from "../types/types.tsx";
import {FC} from "react";

interface FilmDetailProps {
    film: IFilm
}

const FilmDetail: FC<FilmDetailProps> = ({film}) => {
    return (
        <a href="#">
            <div className="filmDetail">
                <img className="filmDetail_img" src="public/images/test-film.png" alt="film image"/>
                {/*<img className="filmDetail_img" src={film.url} alt="film image"/>*/}
                <span className="filmDetail_text">{film.title}</span>
            </div>
        </a>
    );
};

export default FilmDetail;