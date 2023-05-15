const UserController = require('../controllers/user.controller')

module.exports = app => {
    app.post('/api/users/register', UserController.register);
    app.post('/api/users/login', UserController.login);
    app.post('/api/users/logout', UserController.logout);
    app.get('/api/users', UserController.findAllUsers);
    app.get('/api/users/:id', UserController.findOneUser);
    app.put('/api/users/:id', UserController.updateUser);
    app.patch('/api/users/:id', UserController.updateUser);
    app.delete('/api/users/:id', UserController.deleteUser);
}