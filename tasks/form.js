const form = document.getElementById("companyForm");
const nameInput = document.getElementById("companyName");
const mottoInput = document.getElementById("companyMotto");
const imageInput = document.getElementById("companyImage");
const output = document.getElementById("output");
const resultLogo = document.getElementById("resultLogo");
const resultName = document.getElementById("resultName");
const resultMotto = document.getElementById("resultMotto");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = nameInput.value.trim();
  const motto = mottoInput.value.trim();
  const file = imageInput.files[0];

  if (!file) {
    alert("Please upload a company logo.");
    return;
  }

  const reader = new FileReader();
  reader.onload = (event) => {
    resultLogo.innerHTML = `<img src="${event.target.result}" alt="Company Logo">`;
    resultName.textContent = name;
    resultMotto.textContent = motto;
    output.classList.remove("hidden");
  };

  reader.readAsDataURL(file);
  form.reset();
});
