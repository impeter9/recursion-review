// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  var arr = [];
  var currentElement = document.body;
  var getCurrentElement = function (currentElement){
    if (currentElement.classList.contains(className)){
      arr.push(currentElement);
    }
    for (let i=0; i<currentElement.childNodes.length; i++){
      if (currentElement.childNodes[i].classList === undefined){
        continue;
      }
      getCurrentElement(currentElement.childNodes[i])
    }
  }
  getCurrentElement(currentElement);
  return arr;
};
