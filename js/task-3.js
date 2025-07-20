const inp = document.querySelector("#name-input");
const output = document.querySelector("#name-output")
inp.addEventListener("input", (event) => {
    const trimmedValue = event.currentTarget.value.trim();
  output.textContent = trimmedValue === "" ? "Anonymous" : trimmedValue;
});

