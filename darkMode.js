const btn = document.querySelector('button');
const divEl = document.querySelector('div');


btn.addEventListener('click',()=>{
    const body = document.body;
    body.classList.toggle('darkMode');
    btn.innerText =`${btn.innerText=='Dark Mode'?'Light Mode':'Dark Mode'}`;
    btn.style.backgroundColor = `${btn.style.backgroundColor=='white'?'black':'white'}`
    btn.style.color = `${btn.style.color=='black'?'white':'black'}`
})
