const User = require('./../models/User')

class UserService {
    static create(id, username, name) {
        return new User(id, username, name, "Sin bio")
    }
    
    static getInfo(user) {
        const userInfo = Object.keys(user).map((key) => {
            return user[key]
        })
        return userInfo
    }

    static updateUserUsername(user, newUsername) {
        user.setUsername = newUsername
    }

    static getAllUsernames(userList) {
        const usernames = userList.map((user) => {
            return user.getUsername
        })
        return usernames
    }
}

module.exports = UserService