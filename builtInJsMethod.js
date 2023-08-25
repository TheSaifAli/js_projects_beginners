const wcInputEl = document.querySelector("#wcInput");
const wcBtnEl = document.querySelector("#wcBtn");
const wcOutput = document.querySelector("#wcOutput");

wcBtnEl.addEventListener("click", (e) => {
  e.preventDefault();
  if (wcInputEl.value === "") {
    alert("Enter String Please!!");
  } else {
    wcInputValue = wcInputEl.value;
    const max = wcInputValue.length;
    let temp = "";
    for (let i = 0; i < max; i++) {
      let index = Math.floor(Math.random() * wcInputValue.length);

      temp += wcInputValue[index];
      wcInputValue =
        wcInputValue.substr(0, index) + wcInputValue.substr(index + 1);
    }
    wcOutput.innerText = temp;
  }
  wcInputEl.value='';
});
