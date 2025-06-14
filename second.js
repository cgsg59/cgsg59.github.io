//1
// let a = {};
// a.p1 = 30;
// a.p2 = "Heloo word!";

// // import { truncate } from "node:fs/promises";

// //2
// let b = {
//     p1: 30,
//     p2: "ABC",
//     p3: {
//         name: "AR5"
//     }
// }

// for (let val in b) {
//     console.log(val)
// }

// const c = [1, 2, 3, 3, 44, 5, 2, 2]
// c.abc = "ABC";

// for (let val in c) {
//     console.log(val)
// }

// for (let val of c) {
//     console.log(val)
// }

// //3
// function makeUser(name, age) {
//         return {
//             name: name,
//             age: age
//         }
// }

// let usr3 = makeUser("AR5", 30)

// //4 
// function User(name, age) {
//     this.name = name
//     this.age = age
// }

// let usr4 = new User("AR5", 37)

// console.log("Finish")

// function DB(name, age) {
//     this.searchAge = 5;
//     this.users = [1, 30, 5, 2, 3, 50, 20, 30, 2];

//     this.setSearchAge = function (age) {
//         this.searchAge = age;
//     }
//     this.getUsersByAge= function () {
//         // let ret = [];

//         // for (let i = 0; i < this.users.length; ++i) {
//         //     if (this.users[i] == this.searchAg) {
//         //         ret.push(this.searchAg);
//         //     }
//         // }
        
//         // function f () {} 
//         // ()
//         // const ret = this.users.filter(function (elem){
//         //     return elem == _this.searchAge;
//         // });
//         const ret = this.users.filter((elem) => {
//             return elem == _this.searchAge;
//         });

//         return ret;
//     };
// }

// let db = new DB();

// db.setSearchAge(30);
// const ret = db.getUsersByAge();
// console.log(ret);

// let vehicle = {
//     canBeCommunicated: true
// }

// let friend = {
//     canBeCommunicated: true
// }

// let enemy = {
//     hpBar: 100
// }

// friend._proto_ = vehicle;
// console.log(friend.canBeCommunicated);

// class Base() {
//     constructor(source) {
//         this.source = source
//     }
// }

// class Shader extends Base{
//     constructor(source, type) {
//         super(source)
//         this.type = type
//     }

//     logSource = () => {
//         console.log(this.source)
//     }
// }

// const obj = new Shader("Empty", 1);
// obj.logSource();

// 1 error return code
// function load(resource, error) {
//     if (false) {
//         return resource;
//     } else {
//         error = "...";
//     }
// }

// let error = {
//     str: ""
// }

// 2 try - catch

function f(errorFlag) {
    if (errorFlag) {
        throw new Error("Error happened");
    }
}

try {
    // f(false);
    // f(false);
    // f(false);
    // f(false);
    f(false);
    f(false);
    f(true);
    // f(false);
    // f(false);
    // f(false);
    // f(false);
    // f(false);
    // f(false);
    ffff();
} catch (err) {
    if (err instanceof ReferenceError) {
        console.log(err.message);
    } else {
        // console.log(err.message);
        throw err;
    }
}