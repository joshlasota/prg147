document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("myForm");
    const output = document.getElementById("output");
    const lightModeBtn = document.getElementById("lightMode");
    const darkModeBtn = document.getElementById("darkMode");
    const increaseFontBtn = document.getElementById("increaseFont");
    const decreaseFontBtn = document.getElementById("decreaseFont");

    lightModeBtn.addEventListener("click", () => {
        document.body.classList.remove("dark-mode");
    });

    darkModeBtn.addEventListener("click", () => {
        document.body.classList.add("dark-mode");
    });

    increaseFontBtn.addEventListener("click", () => {
        document.body.style.fontSize = "1.2em";
    });

    decreaseFontBtn.addEventListener("click", () => {
        document.body.style.fontSize = "0.8em";
    });

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const formData = new FormData(form);
        let formValues = "";
        for (let pair of formData.entries()) {
            formValues += `${pair[0]}: ${pair[1]}<br>`;
        }
        output.innerHTML += formValues;
        form.reset();
    });
});
