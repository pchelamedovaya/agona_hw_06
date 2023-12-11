import '/src/styles/App.css';
import {IFilm} from "../types/types.tsx";
import {FC} from "react";
import {Link} from "react-router-dom";

interface FilmListDetailProps {
    film: IFilm
}

const FilmListDetail: FC<FilmListDetailProps> = ({film}) => {
    return (
        <Link to={`/collection/${film.id}`}>
            <div className="filmDetail">
                {/*<img className="filmDetail_img" src="public/images/test-film.png" alt="film image"/>*/}
                <img className="filmDetail_img" src={film.url} alt="film image"/>
                <span className="filmDetail_text">{film.title}</span>
            </div>
        </Link>
    );
};

export default FilmListDetail;