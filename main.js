
const generateBtn = document.getElementById("generate");
const numberEls = document.querySelectorAll(".number");

generateBtn.addEventListener("click", () => {
    const numbers = [];
    while (numbers.length < 6) {
        const randomNumber = Math.floor(Math.random() * 45) + 1;
        if (!numbers.includes(randomNumber)) {
            numbers.push(randomNumber);
        }
    }

    numbers.sort((a, b) => a - b);

    numberEls.forEach((el, index) => {
        el.textContent = numbers[index];
    });
});
