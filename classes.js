// class Person {
//      fullName(fName,lName){
//         return fName+' '+lName;
//     }
// }
// let frnd1 = new Person();
// let frnd2 = new Person();

// console.log(frnd1.fullName('Saifullah','Islam'));

// class Animal{

// }
// Animal.prototype.Legs = '5';

// let anObj = new Animal();
// console.log(anObj.Legs);

// Tracking App

const fnameEl= document.querySelector('#fname');
const lnameEl= document.querySelector('#lname');
const yearEl= document.querySelector('#years');
const getbtnEl= document.querySelector('#getDetail');
const addbtnEl= document.querySelector('#addEmployee');
const tableEl = document.querySelector('#table');

const workers = []

class TrackingEmployee {
    constructor(fName,lName,years){
        this.fName=fName;
        this.lName=lName;
        this.years=years;
    }
}

TrackingEmployee.prototype.showDetail = function(){
    const tableRow = document.createElement('tr');
    tableRow.classList.add('trtdStyle')
    const tableDatafname = document.createElement('td');
    tableDatafname.classList.add('trtdStyle');
    const tableDatalname = document.createElement('td');
    tableDatalname.classList.add('trtdStyle');
    const tableDatayear = document.createElement('td');
    tableDatayear.classList.add('trtdStyle');
    tableDatafname.innerText=`${this.fName}`;
    tableDatalname.innerText=`${this.lName}`;
    tableDatayear.innerText=`${this.years}`;
tableRow.appendChild(tableDatafname);
tableRow.appendChild(tableDatalname);
tableRow.appendChild(tableDatayear);
table.appendChild(tableRow);
};

addbtnEl.addEventListener('click',()=>{
    if(fnameEl.value==='' || lnameEl.value==='' || yearEl.value==='')
    {
        alert('Please Enter the Detail!!!!!!!!!');
    }
    else{
    const fvalue = fnameEl.value;
    const lvalue =lname.value;
    const yvalue =yearEl.value;
    const emp1=new TrackingEmployee(fvalue,lvalue,yvalue);
    workers.push(emp1);
    }

    fnameEl.value = '';
    lnameEl.value = '';
    yearEl.value = '';

})
getbtnEl.addEventListener('click',()=>{    
    workers.map((worker)=>{
        worker.showDetail();
    })
})