import '/src/styles/App.css';

const FilmDetail = () => {
    return (
        <section className="filmDetail">
            <div className="filmDetail_container">
                <div className="filmDetail_container__img">
                    <img className="filmDetail_img" src="/public/images/test-film.png" alt="film image"/>
                </div>
                <div className="filmDetail_container__details">
                    <span className="filmDetail__name">Солнцестояние</span>
                    <div className="filmDetail__ratingAndYear">
                        <span className="filmDetail__year">2019</span>
                        <div className="filmDetail__rating_container">
                            <div className="filmDetail__rating_wrapper">
                                <span className="filmDetail__rating">9</span>
                            </div>
                        </div>
                    </div>
                    <div className="filmDetail_container__button">
                        <img src="/public/images/button-add.svg" alt="add button"/>
                        <button type="button" className="filmDetail_button__text">Буду смотреть</button>
                    </div>
                    <div className="filmDetail_description">
                        В отрезанном от цивилизованного мира шведском поселении в
                        день летнего солнцестояния проводятся уникальные обряды.
                        Именно туда отправляется группа студентов,
                        однако вскоре друзья выясняют,
                        что местные обряды не безобидны.
                    </div>
                    <div className="categories_container">
                        <div className="categories">
                            <div className="categories_detail">Ужасы</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FilmDetail;