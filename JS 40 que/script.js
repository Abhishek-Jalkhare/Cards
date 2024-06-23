// var n = Number(prompt("enter the number"));
// while(n > 0) console.log(n--);

//var n = Number(prompt("enter the number"));
var sum1 = 0;
var arr = [10, 30, -50, -40, 60, 40, 10];
// for (let index = 0; index < arr.length; index++) {
//   sum += arr[index];
// }

arr.forEach((element,index) => {
    sum1 += element;
    console.log(index);
});
console.log(sum1);
var op = "";   
var arr = ["mango", "apple", "banana" ];
arr.forEach(element => {
    op += element; 
});
console.log(op);
// for (let index = 0; index < arr.length; index++) {
//   sum += arr[index];
// }
