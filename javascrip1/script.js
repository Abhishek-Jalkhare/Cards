// for(var gg = 123 ; gg < 537 ; gg++){ //gg === GUPTA GANDeee
//     console.log(gg);
// }
// var sam = 1;
// while (sam < 14) {
//   console.log(sam);
//   sam++;
// }
// var i = 1;
// for (i; i <= 10; i++) {
//   console.log(i);
// }
// while (i < 21) {
//   console.log(i++);
// }


// var Name = prompt("YOIII");
// var b = prompt("YO");
// var c = prompt("Y"); // prompt se browser se apn kuch bhi ip le skte hai
// console.log(Name , b , c);
// var age = prompt("Age dalo"); // prompt mein jo bhi dete hai woh string ki tarah store    hojata hai
// console.log(parseInt(age) + 2); // parseInt se String value integer mein convert ho jati hai
// console.log(Number("234") + 1); // Number parse Intka paapa hai
// var a = prompt("Enter the number 1");
// var b = prompt("Enter the number 2");
// console.log(Number(a) + Number(b));

// a object hai
// var a = {
//     speak: function(){
//         console.log("YOIII");
//     }
// }
// a.speak();  // object se method access
// a['speak'];// object se method access

// var human = {
//     name : "Rohit RANDI",
//     age : 132,
//     randiRona : function(){
//         console.log("Mein gupta randi randi rona krti hu");
//     },
//     randironaCure:function(){
//         console.log("Aeee Randi chup hojaa wrnaa muh mein de dunga choco")
//     }
// }
// human.randiRona();
// human.randironaCure();


// //object freeze we can not change the value of object once it is freezed
// Object.freeze(human);
// human.name = "a"; // ye nhi change hoga 

// var arr1 = [1,2,2,3,4,5];
// var arr2 = [... arr1]; // spread operator se copy hota hai
//                     // arr2 mein arr1 ki values copy
// obj1 = {
//     name : "a",
//     age : 12,
// }
// obj2 = {...obj1}; // object bhi copy kr skte hai spread operator se

var arr = [1,2,3,4,56,4];
arr.push(67); // aakhri mein add hota hai
arr.pop(); // last ee;emnt return kr ke remove


// var a = Number(prompt("Enter maths marks"))
// var b = Number(prompt("Enter hindi marks"))
// var c = Number(prompt("Enter english marks"))
// console.log((a+b+c)/3);

var age = Number(prompt("Enter your age"));
if(age >= 18) console.log("Eligible hai lwde");
else console.log("Balak hai");


arr.forEach((element,index) => {
    sum1 += element;
    console.log(index);
});
//setTimeout(function(){},time in ms) ----> delay
//var interval = setInterval(function(){}, time in ms) --- > loop( har delay ke baaf code chlega )
//clearInterval(interval) kill the interval isko timeout fun mein use krskte agr kisi particular time mein int khrm krna ho
//button:active  jb button pe click tb woh actibe state mein

