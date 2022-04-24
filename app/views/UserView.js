const UserService = require('./../services/UserService')

class UserView {
    static createUser(payload) {
        if (payload == null) {
            return {error: "payload no existe"}
        }
        if (! (payload.hasOwnProperty('name') && payload.hasOwnProperty('username') && payload.hasOwnProperty('id')) ) {
            return {error: "necesitan tener un valor válido"}
        }
        if (! (typeof(payload.id) === 'number' && typeof(payload.username) === 'string' && typeof(payload.username) === 'string')) {
            return {error: "necesitan tener un valor válido"}
        }
        return UserService.create(payload.id, payload.username, payload.name)
    }
}

module.exports = UserView