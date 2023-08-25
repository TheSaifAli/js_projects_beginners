// let arr =['Beautiful','Ugly','Smart','Clever','Gorgeous','Friendly','Happy','Sad'];

// function inputtedName(){
//     let name = prompt("Enter Your Name");
//     let rndmVal = Math.floor(Math.random()*arr.length);
//     console.log(`Hi ${name}, you are very ${arr[rndmVal]}`);
// }

// inputtedName();

// let num1 =10;
// let num2=20;
// let operator = '';

// function calc(a,b,op){
//     if (op === '+')
//     {return (a+b)}
//     else if(op ==='-')
//     {
//         return (a-b);
//     }
//     else{
//         return (a+b);
//     }
// }
// console.log(calc(num1,num2,operator));
// console.log(calc(53,43,""));

const fun1 = ()=> {
    console.log('One');
}
const fun2 = ()=> {
    console.log('Two');
}
const fun3 = ()=> {
    console.log('Three');
    fun1();
    fun2();
}
const fun4 = ()=> {
    console.log('Four');
    setTimeout(fun3);
    setTimeout(fun1);
    
}
fun4();