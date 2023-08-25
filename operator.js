//navigation

const mtokLink = document.querySelector("#mtokLink");
const bmiLink = document.querySelector("#bmiLink");
const bmiCalContainer = document.querySelector("#bmiCalContainer");

mtokLink.addEventListener("click", () => {
  milesToKiloContainer.classList.remove("hide");
  mtokLink.classList.add("mtokStyle");
  bmiLink.classList.remove("bmiStyle");
  bmiCalContainer.classList.add("hide");
});
bmiLink.addEventListener("click", () => {
  milesToKiloContainer.classList.add("hide");
  bmiLink.classList.add("bmiStyle");
  mtokLink.classList.remove("mtokStyle");
  bmiCalContainer.classList.remove("hide");
});

//Miles to Kilometer

const inputEl = document.getElementById("milesInput");
const btnEl = document.querySelector("#convertBtn");
const milesOutput = document.getElementById("milesOutput");
const kmOutput = document.getElementById("kmOutput");
const milesToKiloContainer = document.querySelector("#milesToKiloContainer");
btnEl.addEventListener("click", () => {
  if (inputEl.value === "") alert("Please Enter the value!..");
  else {
    let mileValue = parseInt(inputEl.value);
    let kilometer = mileValue * 1.60934;
    milesOutput.innerText = mileValue;
    kmOutput.innerText = kilometer.toFixed(2);
    inputEl.value = "";
  }
});



//BMI calculator

const cmText = document.querySelector("#cmInput");
const kgText = document.querySelector("#kgInput");
const bmiBtn = document.querySelector("#bmiBtn");
const bmiOutput = document.querySelector("#bmiOutput");
const bmiStatus = document.querySelector("#bmiStatus");

bmiBtn.addEventListener("click", () => {
  if (cmText.value === "" || kgText.value === "")
    alert("Enter the value Please!");
  const height = cmText.value;
  const weight = kgText.value;
  const bmi = weight / (((height / 100) * height) / 100);
  bmiOutput.innerText = bmi.toFixed(2);
  if (bmi <= 18.5) bmiStatus.innerText = "Underweight";
  else if (bmi > 18.5 && bmi < 24.9) bmiStatus.innerText = "Normal Weight";
  else if (bmi > 25 && bmi < 29.9) bmiStatus.innerText = "Overweight";
  else bmiStatus.innerText = "Obesity";
  cmText.value = "";
  kgText.value = "";
});
