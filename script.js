function firstNameChanged() {
  let firstNameInput = document.getElementById("firstNameInput")
  console.log('First name changed to ', firstNameInput.value)
}

function add() {
  console.log("adding numbers together");
  const firstNum = document.getElementById("firstNum")
  const secondNum =document.getElementById("secondNum")
  const a = Number(firstNum.value)
  const b = Number(secondNum.value)
  const addedValue = a + b
  const answer = document.getElementById("answer")
  answer.value = addedValue
}

function subtract() {
  console.log("subtract numbers together");
  const firstNum = document.getElementById("firstNum")
  const secondNum =document.getElementById("secondNum")
  const a = Number(firstNum.value)
  const b = Number(secondNum.value)
  const addedValue = a - b
  const answer = document.getElementById("answer")
  answer.value = addedValue
}

