//task03
var tot = Number(prompt("enter no of elements:"));
var arr =[];
var a;

for(var i =0 ;i < tot ; i++){
    a = Number(prompt("enter a value"))
    arr.push(a);
}

var task = Number(prompt("select 1.add 2.multi"));

function add(arr){
    var sum = 0;
    for(j = 0;j<tot;j++){
        sum +=arr[j]
    }
    return sum;
}
function multi(arr){
    var sum = 1;
    for(j = 0;j<tot;j++){
        sum *=arr[j]
    }
    return sum;
}


if ( task== 1){
    console.log(add(arr));    
}

else if (task == 2){
    console.log(multi(arr));
    
}
