const docTitle = document.title;
window.addEventListener('blur',()=>{
    document.title ='Come Back!'

});
window.addEventListener('focus',()=>{
    document.title = docTitle;
});


const sText =document.getElementById('sText');
const rText =document.getElementById('rText');
const outputEl = document.getElementById('output');
const toggleBtn = document.getElementById('toggleBtn');



const lookup = ()=>{
    let s = outputEl.textContent;
    let inputValue = new RegExp(sText.value,"g");
    let repValue = rText.value;
    if(s.match(inputValue))
    {
        outputEl.innerText= s.replace(inputValue,repValue);
    }
    else
        alert('Searched String didnt found');

    sText.value='';
    rText.value='';
}
document.querySelector('#repBtn').addEventListener('click',lookup);

toggleBtn.addEventListener('click',()=>{
    document.getElementById('container').classList.toggle('hide');
})



// let text = 'I love React and  JavaScript';

// console.log(text.match(/javascript|node js | react/gi)); // i for case-insensitive and g for global match

// let character = 'd3Däé';
// console.log(character.match(/[a-zA-Z0-9]/g));


// let specialChar = "I'm 29 years old.";
// console.log(specialChar.match(/\s/g));// any type of character by dot(.)function
// // \d for digit and \s for whitespace

// let beginnigText = 'In the end ne or at the beginning?';
// console.log(beginnigText.match(/\bth/gi));

// let grouptext = 'I love JavaScript';
// console.log(grouptext.match(/(love|dislike)\s(javascript|spiders)/gi));


// let repeatingBlock = 'You are doing great!';
// console.log(repeatingBlock.match(/n?g/gi));

// let plusSign = '123123123a';
// console.log(plusSign.match(/(123)*a/));

// practical regex