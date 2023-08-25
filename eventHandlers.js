const myArray = [];
const container = document.querySelector('#container');
const ownanalyticsOutput = document.querySelector('#ownanalyticsOutput');



container.addEventListener('click',(e)=>{
    const element = e.target;
    if(element.id)
    {
        const temp ={};
        temp.content = element.textContent;
        temp.id= element.id;
        temp.tagName= element.tagName;
        temp.className = element.className;
        console.log(element)
        myArray.push(temp);
        myArray.map((data)=>{
            ownanalyticsOutput.innerText= `${Object.keys(data)}:\n${Object.values(data)}`;
        })
    }
})


// start rating sytem

const srsystemOutput = document.querySelector('.srsystemOutput');
const starsUl = document.querySelector('.stars');
const stars = document.querySelectorAll('.star');

stars.forEach((star,index)=>{
    star.starValue= index+1;
    star.addEventListener('click',(e)=>{
        srsystemOutput.innerHTML=`You Rated this ${e.target.starValue} stars`;
        stars.forEach((star,index)=>{
            if(index<e.target.starValue)
            {
                star.classList.add('orange');
            }
            else
            {
                star.classList.remove('orange');
            }
        })
    })
})

// Mouse Pointer Tracker

const mainElement = document.querySelector('.mainElement');


mainElement.addEventListener('mouseover',()=>{
    mainElement.classList.add('active');
});
mainElement.addEventListener('mouseout',(e)=>{
    e.target.classList.remove('active');
});
mainElement.addEventListener('mousemove',()=>{
   const html = `X: ${event.clientX} Y: ${event.clientY}`;
   document.querySelector('#mpTrackerOutput').innerHTML= html;
});

// Box click speed game

const bcsOutput = document.querySelector('.bcsOutput');
const bcsMsg = document.querySelector('.bcsMessage');
bcsMsg.textContent= 'Press Box to start the game';
const bcsboxEl = document.createElement('div');
bcsboxEl.classList.add('bcsBox');
bcsOutput.appendChild(bcsboxEl);

const game={
    timer:0,
    start:null
}

bcsboxEl.addEventListener('click',(e)=>{
    bcsboxEl.textContent='';
    bcsboxEl.style.display='none';
    game.timer=setTimeout(addBox,ranNum(3000));
    if(!game.start)
    {
        bcsMsg.textContent='Loading....';
    }
    else{
        const cur = new Date().getTime();
        const dur = (cur - game.start)/1000;
        bcsMsg.textContent=`It took ${dur.toFixed(2)} second to click`;
    }
});

const addBox=()=>{
    bcsMsg.textContent='Click it...';
    game.start = new Date().getTime();
    bcsboxEl.style.display='block';
    bcsboxEl.style.left=ranNum(100)+'px';
    bcsboxEl.style.top=ranNum(100)+'px';
}
const ranNum=(max)=>{
    return Math.floor(Math.random()*max);
}