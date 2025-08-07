class User {
    constructor(userName, birthDate, age, email, pwd, valid) {
        this.userName = userName;
        this.birthDate = birthDate;
        this.age = age;
        this.email = email;
        this.pwd = pwd;
        this.valid = valid;
    }
}

module.exports = User;