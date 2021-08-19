var index = 1; 
var check = function () {
 var imgs = ["/image/abc.jpg","/image/km.jpg"];
   document.getElementById('img').src = imgs[index];
   index++;
   if(index==2) {
       index = 0;
   }
} 
function compareEquality(a, b) {
  if (a === b) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

console.log(compareEquality(10, "10"));