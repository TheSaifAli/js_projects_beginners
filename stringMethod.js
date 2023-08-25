let stng = 'hey i am saif ali. I am a BoY.';

let myFun = (s)=> {
    console.log(s.toLowerCase());
}
myFun(stng);
let arr=[];
arr = stng.split(' ');
arr.forEach((value,index)=>{
    console.log(value.slice().toUpperCase());
})
