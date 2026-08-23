 //fetch('https://somthjing.com').then().catch().finally()
//promises are object representing the eventual completion or failure of asynchronous operation
//most of the time we consume promises rather than making them
//queue and bluebird are two library,pehle promises are not easily available then we use them now it is updated hence we do not need to implement them
const promiseOne=new Promise(function(resolve,reject){
//do async task
//async tasks are-DB calls,cryptography,network
setTimeout(function(){//setTime out se ek function hoga jo ek particular time ke baad execute hoga
    console.log('Async task is complete');
    resolve()//to connect resolve and then
    

},1000)

})
promiseOne.then(function(){//then ka seedha connection hai resolve ke saath
    console.log("Promise Consumed");
    
})

new Promise(function(resolve,reject){
    setTimeout(function() {
        console.log("Async task 2");
        resolve()
        
        
    }, 1000);


}).then(function(){
    console.log("Async 2 resolved");
    
})

const promiseThree=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"chai",email:"sanjanashah0148@gmail.com"})

    },1000)


})
promiseThree.then(function(user){
    console.log(user);

})

const promiseFour=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=false//true
        if(!error){
            resolve({username:"sanjana",password:"123"})
        }else{
            reject('ERROR:something went wrong')
        }

    },1000)
})

promiseFour.then((user)=>{
    console.log(user);
    return user.username
    

})//next line for better readibility
.then((username)=>{
    console.log(username);
    

})
.catch(function(error){
    console.log(error);
    
}).finally(()=>console.log("The promise is either resolved or rejected"))

const promiseFive=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true
        if(!error){
            resolve({username:"javascript",password:"123"})
        }else{
            reject('ERROR:JS went wrong')
        }
    },1000)
})

async function consumePromiseFive(){
    try{
    const response=await promiseFive
    console.log(response);
}catch (error){
    console.log(error);
}


}
//async aur await ka ye problem hai ki vo directly error handle nhi kr sakte hai
consumePromiseFive()

 async function getAllUser(){
     try{
         const response=await fetch('https://jsonplaceholder.typicode.com/users')
         const data=await response.json()
         console.log(data);
    
     }catch(error){
         console.log("E: ",error)
     }
    
 }

 //getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>console.log(error))

//fetch is a fetching resource from the network and returning a promise which is fulfilled once the response is available