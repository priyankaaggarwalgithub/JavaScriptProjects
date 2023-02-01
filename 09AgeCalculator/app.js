const container = document.querySelector(".container");
const error = container.lastElementChild;

function getAge() {
  return document.getElementById("dob").value;
}

function calcAge() {
  let userDate = new Date(getAge());
  let diff = Date.now() - userDate.getTime();
  let ageAsDate = new Date(diff);
  return ageAsDate;
}

function displayAge() {
  if (calcAge().getFullYear() - 1970 < 0) {
    error.style.display = "block";
    document.querySelector(".age").style.display = "none";
  } else {
    error.style.display = "none";
    document.querySelector(".age").style.display = "block";
    document.getElementById("days").innerText = calcAge().getDate();
    document.getElementById("months").innerText = calcAge().getMonth();
    document.getElementById("years").innerText = calcAge().getFullYear() - 1970;
  }
}

document.getElementById("dob").addEventListener("input", displayAge);