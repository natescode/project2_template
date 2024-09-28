/**
 * @author Nathan Hedglin
 * @class User for Database
 * @description A generic user model
 */
export class UserModel {
    Id: number
    Username: string
    Password: string
    IsAdmin: boolean

    constructor(username: string, password: string, isAdmin: boolean) {
        this.Id = Math.random()
        this.Username = username
        this.Password = password
        this.IsAdmin = isAdmin
    }
}