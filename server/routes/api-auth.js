module.exports =  {
    route: (app) => {
        const User = require('../user-class.js');
        // const bcrypt = require('bcrypt');

        app.post('/api/auth', async (req, res) => {

            let users = [
                {'userName': 'Bob', 'birthDate': '12-09-2005', 'age': 20, 'email': 'Bob@com', 'pwd': '1234'},
                {'userName': 'Tom', 'birthDate': '12-08-2004', 'age': 21, 'email': 'Tom@com', 'pwd': '1234'},
                {'userName': 'Jerry', 'birthDate': '12-02-2007', 'age': 18, 'email': 'Jerry@com', 'pwd': '1234'},
            ]
            if (!req.body) {
                res.status(400).send('No data provided');
                return;
            }

            const { email, pwd } = req.body;
            const loggedUser = users.find(user => user.email === email && user.pwd === pwd);
            if (!loggedUser) {
                res.status(401).send('Invalid email or password');
                return;
            } else {
                const user = new User(loggedUser.userName, loggedUser.birthDate, loggedUser.age, loggedUser.email, '', true)
                return res.status(200).send(user);
            }
        })
    }
}