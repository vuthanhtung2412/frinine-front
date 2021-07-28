export type gender = 'm'|'f'
export interface User {
    id? : string;
    name: string;
    surname?: string;
    gender ? : gender;
    birthday?: string;
    username?: string;
    nationality?: string;
    email: string;
    telephone ?: string
    password?: string;
}