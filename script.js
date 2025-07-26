const checkBtn = document.getElementById("check-btn");
const result = document.getElementById("result");

checkBtn.addEventListener("click", () => {
  const userInput = document.getElementById("text-input").value;

  if (userInput === '') {
    alert("Please input a value");
    return
  }

  if (checkPalindrome(userInput)) {
    result.innerHTML = `<p>${userInput} is a palindrome</p>`;
  } else {
    result.innerHTML = `<p>${userInput} is not a palindrome</p>`;
  };
  result.classList.remove("hidden");
});

const checkPalindrome = (userInput) => {
  let lwrCaseInput = userInput.replace(/[^A-Za-z0-9]/gi, '').toLowerCase();
  let str = lwrCaseInput.split('').reverse().join('');
  if (lwrCaseInput === str) {
    return true;
  }
  return false;
  
};
