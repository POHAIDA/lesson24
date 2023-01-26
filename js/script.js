class User{
    #name;
    constructor(name,login,age){
        this.#name=name;
        this.login=login;
        this.age=age;
    }
    getName(isAdmin){
        return isAdmin ? this.#name || this.login : 'Permission denied';
    }
    changeName(name,password){
        if(name===name&&password==='123'){
            console.log(`Name Changed from Mike to ${name}`)
        }else{
            console.log('Permission denied')
        }
    }
    
}
const user1 = new User('Mike','MK-18',18);
const user2 = new User('','NRG',22)

class Admin extends User{
    #isAdmin;
    constructor(name,login,age){
        super(name,login,age)
        this.#isAdmin=true;
    }
    getUserName(user){
        console.log(user.getName(this.#isAdmin))
    }
}
const admin = new Admin()

console.log(user1.getName(true))
user1.changeName('Viktor','123')
admin.getUserName(user1)

//5 завдання

class Users{
    #phone;
    constructor(name,phone){
        this.#phone=phone;
        this.name=name;
    }
    getPhone(isAdmin){
        let phone = this.#phone;
        let result=phone.split('')
        for(let i=0;i<result.length;i++){
        result=result.fill('*',4,10)
}
        if(isAdmin){
            console.log(phone)
        }else(
            console.log(result.join(''))
        )
    }
}
const user3 = new Users('Mike','067-888-88-99');
const user4 = new Users('Tom','099-888-88-99')

user3.getPhone(true)



