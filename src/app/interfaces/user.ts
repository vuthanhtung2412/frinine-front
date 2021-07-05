export type gender = 'm'|'f'
export interface User {
    id? : number;
    name: string;
    surname?: string;
    gender ? : gender;
    birthday?: string;
    username?: string;
    nationality?: string;
    email: string;
    password: string;
}