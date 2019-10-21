// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
) {
  var arr = [];
  var currentElement = document.body;
  for (let i=0; i<currentElement.childNodes.length; i++){
    if (currentElement.classList.includes(className)){
      arr.push(currentElement);
    }
    if (currentElement.childNodes.length === 0){
      continue
    }
    getElementsByClassName(currentElement.childNodes[i])
  }
  return arr;
};
