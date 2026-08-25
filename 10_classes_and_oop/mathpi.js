Object.getOwnPropertydescriptor(Math,"PI")

// const descriptor=Object.getOwnPropertydescriptor(Math,"PI")
 console.log(descriptor);

// Object.getOwnPropertyDescriptor(Math, "PI");

// const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");

// console.log(descriptor);

 const chai={
     name:'ginger chai',
     price:250,
     isAvailable:true
 }
console.log(Object.getOwnPropertyDescriptor(chai,"name"));

 Object.defineProperty(chai,'name',{
//     writable:false,
//     enumerable:false
// });
// console.log(Math.PI);
// Math.PI=5
// console.log(Math.PI);


//that means the value of math.pi doesnt changes no matter watever the situation is

Object.defineProperty(chai,'name',{
    //writable:false
    enumerable:false,
})
console.log(Object.getOwnPropertyDescriptor(Chai,"name"));
for(let[key,value]of Object.entries(chai)){
    if(typeof value!=='function'){

    
    console.log(`${key }:${value}`)
    }
}
