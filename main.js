const generateBtn = document.getElementById("generate");
const numberEls = document.querySelectorAll(".number");
const themeToggleBtn = document.getElementById("theme-toggle");
const body = document.body;

// Check for saved theme preference
const currentTheme = localStorage.getItem("theme");
if (currentTheme === "dark") {
    body.classList.add("dark-mode");
    themeToggleBtn.textContent = "Light Mode";
}

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

themeToggleBtn.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    
    let theme = "light";
    if (body.classList.contains("dark-mode")) {
        theme = "dark";
        themeToggleBtn.textContent = "Light Mode";
    } else {
        themeToggleBtn.textContent = "Dark Mode";
    }
    
    localStorage.setItem("theme", theme);
});
