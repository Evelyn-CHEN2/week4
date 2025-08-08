export class User {
    userName: string;
    birthDate: string;
    age: number; 
    email: string;
    pwd: string;
    valid: boolean;

    constructor(userName: string, birthDate: string, age: number, email:string, pwd: string, valid: boolean) {
        this.userName = userName;
        this.birthDate = birthDate;
        this.age = age;
        this.email = email;
        this.pwd = pwd;
        this.valid = valid;
    }
}


// export interface User {
//     userName: string;
//     birthDate: string;
//     age: number; 
//     email: string;
//     pwd: string;
//     valid: boolean;
// }
