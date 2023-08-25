const divEl = document.querySelector('#divvy');

const changeColor =()=>{
    divEl.style.backgroundColor='blue';
    divEl.innerHTML='<h1>onmouseover</h1>'
    console.dir(event.target);
}

divEl.addEventListener('dblclick',()=>{
    divEl.style.backgroundColor='pink';
    divEl.innerHTML='<h1>dblclick</h1>'
})
divEl.addEventListener('mousedown',()=>{
    divEl.style.backgroundColor='green';
    divEl.innerHTML='<h1>mousedown</h1>'
})
divEl.addEventListener('mouseup',()=>{
    divEl.style.backgroundColor='yellow';
    divEl.innerHTML='<h1>mouseup</h1>'
})
divEl.addEventListener('mouseenter',()=>{
    divEl.style.backgroundColor='black';
    divEl.innerHTML='<h1>mouseenter</h1>'
})
divEl.addEventListener('mouseleave',()=>{
    divEl.style.backgroundColor='orange';
    divEl.innerHTML='<h1>mouseleave</h1>'
})


