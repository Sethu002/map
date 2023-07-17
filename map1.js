/** calculation of cubic value only for odd numbers in arrray */
arr=[1,2,3,4,5,6,7,8,9,10];
function cubevalue(side){
      if(side%2!=0)
    return side*side*side;
}
let cube = arr.map(cubevalue);
console.log(cube)