import { store } from '..';
import { changeLoadingStatus } from '../actions/movies-actions';

export function http(url: string): Promise<any> {
    store.dispatch(changeLoadingStatus(true));
    return fetch(url).then(
        (response) => response.json(),
        (error) => console.warn(error)
    );
}
