 const User={
     username:"Sanjana",
     loginCount:8,
     SignedIn:true,
     getUserdetails:function(){
         console.log("Got user deatils from database");
         console.log(`Username:${this.username}`);
         console.log(this);

    }

 }
 console.log(User.username);
 console.log(User.getUserdetails());

function User(Username,loginCount,isLoggedIn){
    this.username=Username;
    this.loginCount=loginCount;
    this.isLoggedIn=isLoggedIn

    this.greeting=function(){
        console.log(`Welcome ${this.username}`);
        

    }


    return this
}

const userOne=new User("Sanjana",12,true)
const userTwo=new User("chaiaurcode",11,false)//the value got overwrite
console.log(userOne);
//as u use new keyword a empty object is created
//a constructor funtion is called due to new keyword
// const promiseOne=new Promise()
// const date=new Date()


//constructor function is refernce abt khud ki property
//contructor function har baar ek anaya keyword deta hai