/* console.log("Hello from nodeJs!"); */

const fs = require("fs");

fs.writeFileSync("hello.txt", "Hello from Shelim NodeJs!");

const person = {
    name: "Shelim",
    age: 35,
    greet(){
        console.log("Hello my name is " + this.name)
    }
};

/* console.log(person);

person.greet(); */

const hobbies = ['Football', 'Cricket', 'Carrom'];

//for (let hobby of hobbies){
  //  console.log(hobby);
//}

/* console.log(hobbies);

console.log(hobbies.map(hobby => "Hobby: " + hobby )); */

/* Spread operator */

const newArr = [...hobbies];

/* console.log(newArr); */


const newObj = {...person};

console.log(newObj);

/* Rest Operator */

const toArr = (...arg) => {
      return arg;
}

console.log(toArr(1,2,3,4));