// document.getElementById("images").addEventListener('click', function(e){
//     console.log("clicked inside the ul")
//     e.timeStamp()
// }, true)

// document.getElementById("shoaib").addEventListener('click', function(e){
//     console.log("clicked shoaib")
// }, true)


const students = [
    {id: "A1", name: "Ali"},
    {id: "A2", name: "Aslam"},
    {id: "A3", name: "Ahmad"},
    {id: "A4", name: "shoaib"},
    {id: "A5", name: "irfan"},
    {id: "A6", name: "abubakkar"},
    {id: "A7", name: "umer"},
    {id: "A8", name: "usman"},
    {id: "A9", name: "hassan"},
    {id: "A10", name: "hussain"},
];

function searchStudent(event){
  event.preventDefault();
  const idField = document.getElementById("id-field");
  const showResultElement = document.getElementById("show-result");
  const foundStudent = students.find(function(item){
    if(item.id === idField.value){
        returntrue;
    } else {
        false;
    }
  });
  if (foundStudent){
    showResultElement.innerText = "id found";
  } else {
    showResultElement.innerText = "id not found"
  }

}

for(let i = 1; i <= 10; i++){
    console.log(i)
   for(let j = 1; j <= 10; j++)
    console.log(i * j + " = " + i + i+j)
}

