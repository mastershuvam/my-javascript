class user{
    constructor(username){
        this.username = username
    }

    LogMe(){
        console.log(`username:${this.username}`)
    }

    static createId(){
        return `123`
    }
}

const shuvam = new user("shuvam")
//console.log(shuvam.createId())

class Teacher extends user{
    constructor(username,email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphon","i@phon.com")
console.log(iphone.createId())