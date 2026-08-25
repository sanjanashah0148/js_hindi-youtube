class User{
    constructor(email,password){
        this.email=email;
        this.password=password
    }
    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email=value
    }
    get password(){
        return `${this._password}Sanjana`
    }
    
    set password(value){
        this._password=value
    }
}

const Sanjana=new User("sanjana@gmail.com","abc")
console.log(Sanjana.password);

