import { Movie } from './movie';

export type Payload = Movie[] | Movie | string | number | boolean | null;

export interface Action {
    type: string;
    payload: Payload;
}
