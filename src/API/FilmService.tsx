import axios from "axios";
import {IFilm} from "../types/types.tsx";

export default class FilmService {
    static async getAll() {
        try {
            const response = await axios.get<IFilm>("https://jsonplaceholder.typicode.com/photos?_limit=4");
            return response.data;
        } catch (e) {
            console.log(e)
        }
    }

    static async getByID(id: number) {
        const response = await axios.get<IFilm>("https://jsonplaceholder.typicode.com/photos/" + id);
        return response.data;
    }
}