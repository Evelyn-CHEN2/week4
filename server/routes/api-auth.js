module.exports =  {
    route: (app) => {
        const User = require('../user-class.js');
        // const bcrypt = require('bcrypt');

        app.post('/api/auth', async (req, res) => {

            let users = [
                {'userName': 'Bob', 'birthDate': '12-09-2005', 'age': 20, 'email': 'Bob@com', 'pwd': '1234'},
                {'userName': 'Tom', 'birthDate': '12-08-2004', 'age': 21, 'email': 'Tom@com', 'pwd': '1234'},
                {'userName': 'Jerry', 'birthDate': '12-02-2007', 'age': 18, 'email': 'Jerry@com', 'pwd':'1234'},
            ]
            if (!req.body) {
                res.sendStatus(400)
            }
            let user = new User(req.body.userName, req.body.birthDate, req.body.age, req.body.email, '');

            const { email, pwd } = req.body;
            const loggedUser = users.find(user => user.email === email && user.pwd === pwd);
            if (loggedUser) {
                user.valid = true;
            } else {
                user.valid = false;
            }
            res.status(200).send(user)   //Question: even if it's set to be 200, Angular still skips .next (error), and jumps to .error
        })
    }
}