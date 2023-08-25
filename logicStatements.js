const ngText = document.querySelector('#ngInput');
const ngameBtn = document.querySelector('#ngameBtn');
const ngoutput = document.querySelector('#ngoutput');

ngameBtn.addEventListener('click',()=>{
    const dynamicNumber = Math.floor(Math.random()*100);
    const userValue = ngText.value;
    if(userValue ==='')
    {
        alert('Please give the input!');
    }
    else if(userValue>dynamicNumber)
    {
        ngoutput.innerText = `User Value ${userValue} is Greater than Dynamic Value ${dynamicNumber}`;
    }
    else if(userValue===dynamicNumber)
    {
        ngoutput.innerText = `User Value ${userValue} is Equal to Dynamic Value ${dynamicNumber}`;
    }
    else{
        ngoutput.innerText = `User Value ${userValue} is less than Dynamic Value ${dynamicNumber}`
    }

    ngText.value ='';
})

// Friend Checker game

const fcgText = document.querySelector('#fcgInput');
const fcgameBtn = document.querySelector('#fcgameBtn');
const fcgoutput = document.querySelector('#fcgoutput');
const frndList = ['Saif','Shaiban','Saifullah','Saqib','Sudais','Saim','Uzaib','Momin'];

fcgameBtn.addEventListener('click',()=>{
    const fcgValue = fcgText.value;
    
    if(fcgValue === '')
    {
        alert("Enter Friend's name!!!!");
    }
    else{
    switch(fcgValue)
    {
       case `${frndList.filter((frnd)=>{if (frnd === fcgValue){
        return frnd;
       }})}`  : fcgoutput.innerText = `${fcgValue} is my Friend`;
            break;
        default: 
        fcgoutput.innerText =`I don't Know ${fcgValue}`;
    }
}
    fcgText.value = '';
})


// Rock paper scissor game

let arr = ['Rock','Paper','Scissors'];

let userInput = document.querySelector('#rpsInput'); 
const rpsBtnEl = document.querySelector('#rpsUserBtn')
const result = document.querySelector('#rpsoutput');

rpsBtnEl.addEventListener('click',()=>{
    let computer = Math.floor(Math.random()*3);
    const userValue = userInput.value;
    if(userValue==='')
    {
        alert('Input your Choice please!!!!');
    }
    else{
    if(userValue === arr[computer])
    {
        result.innerText=`User choice: ${userValue}\nComputer choice: ${arr[computer]}\nResult: Its a tie`
    }
    else if ((userValue === arr[0] && arr[computer]===arr[2]) || (userValue===arr[2] && arr[computer]===arr[1]) || (userValue===arr[1] && arr[computer]===arr[0]))
    {
        result.innerText=`User choice: ${userValue}\nComputer choice: ${arr[computer]}\nResult: User Win`;
    }
    else{
        result.innerText=`User choice: ${userValue}\nComputer choice: ${arr[computer]}\nResult: Computer Win`;
    }
}
    userInput.value='';
})
