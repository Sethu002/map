/** implementation of map */

let values =[6,7,9,10,67,87,98,100,24];
function sqrvalues(array){
  return  array*array;
  
}
let sqr = values.map(sqrvalues);
console.log(sqr);