module.exports =  {
    route: (app) => {
        const User = require('../user-class.js');
        // const bcrypt = require('bcrypt');

        app.post('/api/login', async (req, res) => {

            let users = [
                {'userName': 'Bob', 'birthDate': '12-09-2005', 'age': 20, 'email': 'Bob@com', 'pwd': '1234', 'valid':false},
                {'userName': 'Tom', 'birthDate': '12-08-2004', 'age': 21, 'email': 'Tom@com', 'pwd': '1234', 'valid':false},
                {'userName': 'Jerry', 'birthDate': '12-02-2007', 'age': 18, 'email': 'Jerry@com', 'pwd':'1234', 'valid':false},
            ]
            if (!req.body) {
                return res.sendStatus(400)
            }

            
            const { email, pwd } = req.body;
            const loggedUser = users.find(user => user.email === email && user.pwd === pwd);
            if (loggedUser){
                let user = new User(loggedUser.userName, loggedUser.birthDate, loggedUser.age, loggedUser.email, '', true);
                res.send(user);
            }
        })
    }
}