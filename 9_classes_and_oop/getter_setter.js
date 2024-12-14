class User {
    constructor(email,password){
        this.email = email
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }

    set email(value){
        this._email = value
    }
    
    get password(){
        return `${this._password}shuvam`
    }

    set password(value){
        this._password = value
    }
}

const shuvam = new User("s@example.ai","abc")
console.log(shuvam.email)
console.log(shuvam.password)