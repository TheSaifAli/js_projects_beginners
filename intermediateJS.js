const firstArea = document.querySelector("textarea[name='txtarea']");
const secArea = document.querySelector("textarea[name='txtarea2']");

const checkUp = () => {
  const areaTxt = firstArea.value;
  if (firstArea.value === "") {
    alert("Please enter your email!");
  } else {
    const edata = areaTxt.match(
      /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi
    );
    const holder = [];
    for (let x = 0; x < edata.length; x++) {
      if (holder.indexOf(edata[x]) == -1) {
        holder.push(edata[x]);
      }
      secArea.value = holder.join(",");
    }
  }
};
document.querySelector("button").addEventListener("click", checkUp);

// Form validator

const myForm = document.querySelector('form');
const inputs = document.querySelectorAll('input');
const errors = document.querySelectorAll('error');
const required = ['email','username'];

const validation=(e)=>{

    let data={};
    e.preventDefault();

    errors.forEach((item)=>{
        item.classList.add('hide');
    });

    let error = false;
    inputs.forEach((ele)=>{
        let tempName = ele.getAttribute('name');
        if(tempName != null)
        {
            ele.style.borderColor = '#ddd';
            if(ele.value.length == 0 && required.includes(tempName))
            {
                addError(ele,'Required Field',tempName);
                error= true;
            }
            if(tempName == 'email')
            {
                let exp = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9]+)\w+/;
                let result = exp.test(ele.value);
                if(!result)
                {
                    addError(ele,'Invalid Email',tempName)
                    error=true;
                }
            }
            if(tempName == 'password')
            {
                let exp= /[A-Za-z0-9]+$/;
                let result = exp.test(ele.value);
                if(!result)
                {
                    addError(ele,'Only numbers and letters',tempName);
                    error=true;
                }
                if(!(ele.value.length>3 && ele.value.length<9))
                {
                    addError(ele,'Needs to be between 3-8 character',tempName);
                    error=true;
                }
            }
            if(tempName=='userName')
            {
                let exp = /[a-z0-9._-]/;
                let result= exp.test(ele.value);
                if(!result)
                {
                    addError(ele,"Please use only smallCase , number and _ score",tempName);
                    
                }
            }
            data[tempName]=ele.value;
        }
    });
    if(!error)
    {
        myForm.submit();
    }
}

const addError = (ele,mes,fieldName)=>
{
    let temp = ele.nextElementSibling;
    temp.classList.remove('hide');
    temp.textContent= `${fieldName.toUpperCase()} ${mes}`;
    ele.style.ringColor='red';
    ele.focus();
}

myForm.addEventListener('submit',validation);

// Math Quiz

function app () {
    const game ={};
    const val1 = document.querySelector('.val1');
    const val2 = document.querySelector('.val2');
    const quizBtn = document.querySelector("#quizBtn")
    const quizOutput = document.querySelector('.quizOutput');
    const answer = document.querySelector('#quizInput');
   
    const init =()=>{
        quizBtn.addEventListener('click',()=>{
            if(answer.value=='')
            {
                alert('Enter Value!!!!');
            }
            else{
                checker();
            }
        });
        loadQuestion();
    }
    const ranValue=(min,max)=>{
        return Math.floor(Math.random()*(max-min+1)+min);
    }
    const loadQuestion =()=>{
        game.val1 = ranValue(1,100);
        game.val2 =ranValue(1,100);
        game.answer= game.val1 + game.val2;
        val1.textContent= game.val1;
        val2.textContent= game.val2;
    }
    const checker =()=>{
        quizOutput.innerHTML+=`<div style='color:${answer.value == game.answer?'green':'red'}'>${game.val1} + ${game.val2} = ${game.answer} (${answer.value}) </div>`;
        answer.value = '';
        loadQuestion(); 
    }
    return {
        init:init()
    };
};
window.onload= app;