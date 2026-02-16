// 20260214/15/16

// var hexColors = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"]
// function changeColor(){
// // var hexCode = document.getElementById('hex-code')
//     var hexCode = '';
//     for(i = 0 ; i< 6 ; i ++){
//         var randomIndex = [Math.floor( Math.random() * hexColors.length)]
//         hexCode +=  hexColors[randomIndex]
//     }
//     // console.log(hexCode)
// //   var hexColor =  Math.floor( Math.random() * hexColors.length)
// //   hexCode.textContent = '#' + hexCode
//   document.getElementById('hex-code').innerHTML = hexCode
// }


var hexColors = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"]
function changeColor(){
//  var hexCode = document.getElementById('hex-code')
    var hexCode = '';
    for(i = 0 ; i< 6 ; i ++){
        var randomIndex = [Math.floor( Math.random() * hexColors.length)]
        console.log(randomIndex)
        hexCode +=  hexColors[randomIndex]
        console.log(hexCode)
    }
    // console.log(hexCode)
//   var hexColor =  Math.floor( Math.random() * hexColors.length)
//   hexCode.textContent = '#' + hexCode
  document.getElementById('hex-code').innerHTML =  hexCode
  document.getElementsByTagName('body')[0].style.background = '#' +hexCode
}


