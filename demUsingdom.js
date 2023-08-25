const menus = document.querySelectorAll('.title');
const openText = document.querySelectorAll('.myText');

menus.forEach(el=>{
    el.addEventListener('click',(e)=>{
        remover();
        el.nextElementSibling.classList.toggle('active');
    })
})

const remover =()=>{
    openText.forEach(ele=>{
        ele.classList.remove('active');
    })
}

// Interactive Voting System

const myArray = ['Saif','Salman','Shahrukh'];
const inputEl = document.querySelector('#addFriend');
const btnEl = document.querySelector('#addNew');
const output = document.querySelector('#output');

btnEl.addEventListener('click',()=>{
    const newFriend = inputEl.value;
    if(newFriend==='')
    {
        alert('Enter friend name Please!..');
    }
    else
    {
    adder(newFriend,myArray.length,0);
    myArray.push(newFriend);
    }
    inputEl.value = '';
})

const build=()=>{
    myArray.forEach((item,index)=>{
        adder(item,index,0);
    })
}
window.onload = build;
const adder=(name,index,counter)=>{
    const tr= document.createElement('tr');
    const td1 = document.createElement('td');
    td1.textContent = index+1;
    const td2 = document.createElement('td');
    td2.textContent= name;
    const td3 = document.createElement('td');
    td3.textContent=counter;
    tr.append(td1);
    tr.append(td2);
    tr.append(td3);

    tr.onclick = function(){
        let val = Number(tr.lastChild.textContent);
        val++;
        tr.lastChild.textContent= val;
    }
    output.appendChild(tr);

}
