module.exports = (app) => {
    const user = require('../controller/userController');
    const city = require('../controller/userController');

    app.post('/user',user.create);
    app.get('/user/:userName/:password',user.getUser);
    app.post('/email',user.email);
    app.delete('/user/:userName',user.delete);
    app.post('/auth',user.auth);

    app.get('/citys',city.list);

}
