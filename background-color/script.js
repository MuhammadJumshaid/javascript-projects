var index = 0;

function changeBgColor(){
const colors =  ["red", "purple", "yellow", "blue", "orange", "green", "black"]
  document.getElementsByTagName("body")[0].style.background = colors[index++];
  if(index > colors.length-1){
    index = 0
    }
}


// function changeBgColor(){
// const colors =  ["red", "purple", "yellow", "blue", "orange", "green", "black"]
// const body =  document.getElementsByTagName("body")
// console.log(body) // HTMLCollection [body]
// body[0].style.background = colors[index++];
// console.log(body[1])

//   if(index > colors.length-1){
//     index = 0
//     }
// }


