// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  if (obj === null) {
    return 'null';
  } else if (typeof obj === 'string'){
    return '\"'+obj+'\"';
  } else if (Array.isArray(obj)) {
    if (!obj.length) {
      return '[]';
    } else {
      let returnString = '[';
      for (let i = 0; i < obj.length; i++){
        returnString += stringifyJSON(obj[i]) + ',';
      }
      return returnString.slice(0,returnString.length-1) + ']';
    }
  } else if (typeof obj === 'object') {
    if (!Object.keys(obj).length) {
      return '{}';
    } else {
      let returnString = '{';
      for (let key in obj){
        if (typeof obj[key] === 'function'){
          continue;
        } else if (obj[key] === undefined) {
          continue;
        }
        returnString += stringifyJSON(key) + ':' + stringifyJSON(obj[key]) + ',';
      }
      returnString = returnString.slice(0,returnString.length-1) + '}';
      if (returnString === '}'){
        returnString = '{}';
      }
      return returnString;
    }
  } else if (typeof obj === 'function'){
    return '';
  } else if (obj === undefined) {
    return '';
  } else {
    return obj.toString();
  }
};