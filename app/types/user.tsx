export class User {
    id: number
    email: string
    first_name: string
    last_name: string
    password: string

    static userInfo(id: number, email: string, first_name: string, last_name: string) {
        const userInfo = new User()
        userInfo.id = id
        userInfo.email = email
        userInfo.first_name = first_name
        userInfo.last_name = last_name
        return userInfo
    }

    static userLogin(email: string, password: string) {
        const userLogin = new User()
        userLogin.email = email
        userLogin.password = password
        return userLogin
    }

    static userRegister(email: string, first_name: string, last_name: string, password: string) {
        const userRegister = new User()
        userRegister.email = email
        userRegister.first_name = first_name
        userRegister.last_name = last_name
        userRegister.password = password
        return userRegister
    }
}