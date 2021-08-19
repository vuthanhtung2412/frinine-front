export type gender = 'm'|'f';
export interface User {
	id?: string;
	name: string;
	surname?: string;
	gender ?: gender;
	birthday?: string;
	username?: string;
	nationality?: string;
	email: string;
	telephone ?: string;
	password?: string;
	role ? : string
}
export class AnonymousUser implements User{
	birthday: string;
	email: string;
	gender: gender;
	id: string;
	name: string;
	nationality: string;
	password: string;
	surname: string;
	telephone: string;
	username: string;

	constructor() {
		this.birthday= '';
		this.email= '';
		this.gender= 'm';
		this.id= '';
		this.name= '';
		this.nationality= '';
		this.password= '';
		this.surname= '';
		this.telephone= '';
		this.username= '';
	}

}