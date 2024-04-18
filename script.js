const textInput = document.getElementById('text-input');
const checkButton = document.getElementById('check-btn');
const result = document.getElementById('result');

checkButton.addEventListener("click", () => {
  const replaced = textInput.value.replace(/[^A-Za-z0-9]/g, "");

  if (textInput.value === "") {
    alert("Please input a value");
  } else if (textInput.value.length === 1) {
    result.innerText = `${textInput.value} is a palindrome`;
    result.classList.remove('hidden');
  } else if (replaced.toLowerCase() === [...replaced.toLowerCase()].reverse().join("")) {
    result.innerText = `${textInput.value} is a palindrome`;
    result.classList.remove('hidden');
  } else {
    result.innerText = `${textInput.value} is not a palindrome`;
    result.classList.remove('hidden');
  }
});