function multipleBy5(num){
    this.num=num
    return num*5
}

multipleBy5.power=2

console.log(multipleBy5(5));
console.log(multipleBy5.power);
console.log(multipleBy5.prototype);//prototype is an empty parenthesis

function createUser(username,score){
    this.username=username
    this.score=score
    
}
//js classes ke through constructor function nahi deti hai new key word ke through deti hai