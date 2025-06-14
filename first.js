//1
let a = {};
a.p1 = 30
a.p2 = "Hello world!"

//2
let b = {
    p1: 30,
    p2: "ABC",
    p3:{
        name: "AR5"
    }
};

//3
function makeUser(name, age) {
    return {
        name: name,
        age: age
    }
}

let usr3 = makeUser("ARG5", 37)

//4
function User(name, age) {
    this.name = name
    this.age = age
}

let usr4 = new User("AR5", 37)

console.log("Finish")

//5