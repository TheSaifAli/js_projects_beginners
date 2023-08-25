// let maxValue=10;
// let choice = false;
// let rndmNum = Math.floor(Math.random()*maxValue + 1);

// let i=0;
// while(i == 0 )
// {
//     let input = parseInt(prompt("Enter No. between 1-5"));
//     if(input === rndmNum)
//     {
//         console.log("Guess Correct");
//         break;
//     }
//     else if(input === (maxValue - 1) || (input === (maxValue + 1)))
//     {
//         console.log("Your Guess was High")
//     }
//     else{
//         console.log("Your guess was so low");
//     }
// }

const tableInputEl = document.querySelector('#mulInput');
const tableBtnEl = document.querySelector('#mulBtn');
const tableEl = document.querySelector('#mulTable');
const myTable = [];
tableBtnEl.addEventListener('click',()=>{
    
    const tableCounter = tableInputEl.value;
    for(let x=1; x<=10; x++){

    const tableHead= document.createElement('th');
    for(let y = 1; y<=10; y++){
        const tableData =document.createElement('td');
        tableData.innerText= x*y;
        tableEl.appendChild(tableData);
    }
    
    tableHead.innerText=x;
    tableHead.style.border='1px solid black';
    tableEl.appendChild(tableHead);

      if(x==tableCounter)
      {
        break;
      }
    myTable.push(temp);
    }
    myTable.map((table)=>{
        console.log(table);
    })
    
    
    
    
});