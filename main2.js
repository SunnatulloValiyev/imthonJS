const kirishText = document.querySelector(".title-text .kirish");
const kirishForm = document.querySelector("form.kirish");
const royxatdanOtishForm = document.querySelector("form.royxatdan-otish");
const kirishBtn = document.querySelector("label.kirish");
const royxatdanOtishBtn = document.querySelector("label.royxatdan-otish");
const royxatdanOtishLink = document.querySelector("form .signup-link a");

royxatdanOtishBtn.onclick = () => {
  kirishForm.style.marginLeft = "-50%";
  kirishText.style.marginLeft = "-50%";
  document.querySelector(".title-text .kirish").classList.remove("active");
  document.querySelector(".title-text .royxatdan-otish").classList.add("active");
};

kirishBtn.onclick = () => {
  kirishForm.style.marginLeft = "0%";
  kirishText.style.marginLeft = "0%";
  document.querySelector(".title-text .royxatdan-otish").classList.remove("active");
  document.querySelector(".title-text .kirish").classList.add("active");
};

royxatdanOtishLink.onclick = () => {
  royxatdanOtishBtn.click();
  return false;
};


function validatePassword(password) {
  return password.length >= 6; 
}

kirishForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const email = document.getElementById("kirish-email").value.trim();
  const password = document.getElementById("kirish-password").value.trim();

  const storedEmail = localStorage.getItem("registeredEmail");
  const storedPassword = localStorage.getItem("registeredPassword");

  if (storedEmail && storedPassword && email === storedEmail && password === storedPassword) {
    alert("Kirish muvaffaqiyatli!");
    window.location.href = "index.html"; 
  }

});
  
royxatdanOtishForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const email = document.getElementById("royxatdan-email").value.trim();
  const password = document.getElementById("royxatdan-password").value.trim();


  if (!validatePassword(password)) {
    alert("Parol kamida 6 ta belgidan iborat bo'lishi kerak!");
    return;
  }

  localStorage.setItem("registeredEmail", email);
  localStorage.setItem("registeredPassword", password);

  alert("Ro'yxatdan o'tish muvaffaqiyatli!");
  window.location.href = "index.html"; 
});
