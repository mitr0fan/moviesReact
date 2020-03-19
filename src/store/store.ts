import { createStore } from "redux";
import { changeMoviesState } from "../reducers/movies-reducer";

const store = createStore(changeMoviesState);

export default store;