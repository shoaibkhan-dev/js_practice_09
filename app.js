// document.getElementById("images").addEventListener('click', function(e){
//     console.log("clicked inside the ul")
//     e.timeStamp()
// }, true)

// document.getElementById("shoaib").addEventListener('click', function(e){
//     console.log("clicked shoaib")
// }, true)


// const students = [
//     {id: "A1", name: "Ali"},
//     {id: "A2", name: "Aslam"},
//     {id: "A3", name: "Ahmad"},
//     {id: "A4", name: "shoaib"},
//     {id: "A5", name: "irfan"},
//     {id: "A6", name: "abubakkar"},
//     {id: "A7", name: "umer"},
//     {id: "A8", name: "usman"},
//     {id: "A9", name: "hassan"},
//     {id: "A10", name: "hussain"},
// ];

// function searchStudent(event){
//   event.preventDefault();
//   const idField = document.getElementById("id-field");
//   const showResultElement = document.getElementById("show-result");
//   const foundStudent = students.find(function(item){
//     if(item.id === idField.value){
//         returntrue;
//     } else {
//         false;
//     }
//   });
//   if (foundStudent){
//     showResultElement.innerText = "id found";
//   } else {
//     showResultElement.innerText = "id not found"
//   }

// }

// for(let i = 1; i <= 10; i++){
//     console.log(i)
//    for(let j = 1; j <= 10; j++)
//     console.log(i * j + " = " + i + i+j)
// }

// function increment() {
//     count++;
//     console.log(count++);
// }

// function decrement() {
//     count--;
//     console.log(count--);
// }

// function popup(){
//     console.log(popup)
// }

// increment()
// decrement()
// popup()

const user = {
    name: "shoaib",
    lastName : "khan",
    age : 23,
    location : "peshawar"
}

console.log(user.lastName);
console.log(user["location"]);
user.age = 25;
console.log(user["age"]);
Object.freeze();
user.age = 30;
console.log(user.age)

function Person(fName, lName, age){
    this.fName = fName;
    this.lName = lName;
    this.age = age;
    this.fullName = function(){
        console.log(this.fName + " " + lName + " is going")
    }
}

let person1 = new Person ("shoaib", "khan", 23);
let person2 = new Person ("Zabi", "Ullah", 21);
let person3 = new Person ("Irfan", "khan", 20);

console.log(person1.fullName())

