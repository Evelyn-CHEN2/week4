export class User {
    name: string;
    email: string;
    password: string;
    avatar?: string;

    constructor(name: string, email:string, password: string, avatar?: string) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.avatar = avatar;
    }
    getUser(): { name: string; email: string; avatar?: string } {
        return {
            name: this.name,
            email: this.email,
            avatar: this.avatar,
        };
    }
}
