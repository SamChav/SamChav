
// CTRL / START
// var container = document.createElement('div');

// document.body.append(container);


// for (var i = 1; i < 8; i++) {
//   for (var j = 1; j < 8; j++) {
//     var div = document.createElement("div");
//     div.style.width = "11.1%";
//     div.style.float = "left";
//     div.style.paddingBottom = "11.1%";
//     div.style.border = "1px solid black";

//     if (i % 2 === 1) {
//       if (j % 2 === 1) {
//         div.style.background = "red";
//       } else {
//         div.style.background = "black";
//       }
//     } else {
//       if (j % 2 === 1) {
//         div.style.background = "red";
//       } else {
//         div.style.background = "black";
//       }
//     }
//     container.append(div);
//   }
  
// }
// CTRL / END


// //CTRL / START FOR MULTI COLOR CHECKBOARD
// //random color up to 255 for function
// function randomColor() {
//     var r = Math.floor(Math.random() * 255);
//     var b = Math.floor(Math.random() * 255);
//     var g = Math.floor(Math.random() * 255);
//     console.log('rgb(' + r + ', ' + g + ', ' + b + ')');
// return 'rgb(' + r + ', ' + g + ', ' + b + ')';
// }
// //just the container - move to top??
// var container = document.createElement('div');
// document.body.append(container);
// //loop twice, 8 * 8 = 64? I show one extra square?? might be my computer
// for (var i = 1; i < 8; i++) {
//   for (var j = 1; j < 8; j++) {

//     var div = document.createElement("div");
//     div.style.width = "11.1%";
//     div.style.float = "left";
//     div.style.paddingBottom = "11.1%";
//     div.style.border = "1px solid black";
//     //call function as the background, but run as 1 whole function would be better??
//     div.style.background = randomColor();    
//     container.append(div);

//   }  
// }
// //CTRL / END POINT FOR MULTICOLOR CHECKBOARD



// //CTRL / START POINT FOR GRADIENT CHECKBOARD
// //container
// var container = document.createElement('div');
// //append to container
// document.body.append(container);
// //function takes top end of math random
// function gradient() {
// var cOne = Math.ceil(Math.random() * 100);
// var cTwo = Math.ceil(Math.random() * 100);
// var cThree = Math.ceil(Math.random() * 100);
// var cFour = Math.ceil(Math.random() * (255 - 150) + 150);
// var cFive = Math.ceil(Math.random() * (255 - 150) + 150);
// var cSix = Math.ceil(Math.random() * (255 - 150) + 150);
// //loop
// for (var i = 1; i < 64; i++) {  
//   //div element
//     var div = document.createElement("div");
//     //follow instructions for width, float, padding
//     div.style.width = "11.1%";
//     div.style.float = "left";
//     div.style.paddingBottom = "11.1%";   
//     //append div element to the container
//     container.append(div);
// //differentiate between 'cells'
//     if (i % 2 === 0) {
//       div.style.background = `rgb(${cOne},${cTwo},${cThree})`
//     } else {
//       div.style.background = `rgb(${cFour},${cFive},${cSix})`
//     }
//     //color scheme
//     cOne += 2;
//     cTwo += 2;
//     cThree +=2;
//     cFour -=2;
//     cFive -=2;
//     cSix -=2;
    
//   }

// }
// //invoke
// gradient();
// //had to get help with this one, real interesting solution using math.random to evaluate to really awesome color scheme!
// //ctrl / END POINT FOR GRADIENT