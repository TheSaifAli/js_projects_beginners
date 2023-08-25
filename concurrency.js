const passInput = document.querySelector('#passInput');
const passOutPut = document.querySelector('#passOutPut');
const form = document.querySelector('form');


const allowed = ['/[a-zA-Z0-9]/','salman232','29382','123456789','1223334444']

const passwordChecker =(passVlaue)=>{
    const passValue = passInput.value;
    return allowed.includes(passValue);
}

const login=(password)=>{
    return new Promise((resolve,reject)=>{
        if (passwordChecker(password))
        {
            resolve({
                status:true
            });
        }
        else
        {
            reject({
                status:false
            });
        }
    });
}
const checker =(pass)=>{
    login(pass).then(token=>{
        console.log('Approve');
        passOutPut.innerText= 'Approve';
        console.log(token);
    }).catch(value=>{
        console.log('Reject');
        passOutPut.innerText = 'Reject';
        console.log(value);
    })

}
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    checker(passInput.value);
})
