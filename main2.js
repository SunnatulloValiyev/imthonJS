const kirishText = document.querySelector(".title-text .kirish");
const kirishForm = document.querySelector("form.kirish");
const royxatdanOtishForm = document.querySelector("form.royxatdan-otish");
const kirishBtn = document.querySelector("label.kirish");
const royxatdanOtishBtn = document.querySelector("label.royxatdan-otish");
const royxatdanOtishLink = document.querySelector(".signup-link a");

// Ro'yxatdan o'tish va kirish formasining o'zgarishlari
royxatdanOtishBtn.onclick = () => {
  royxatdanOtishForm.style.marginLeft = "-100%"; 
  kirishText.classList.remove("active");
  document.querySelector(".title-text .royxatdan-otish").classList.add("active");
};

kirishBtn.onclick = () => {
  royxatdanOtishForm.style.marginLeft = "0%"; 
  kirishText.classList.add("active");
  document.querySelector(".title-text .royxatdan-otish").classList.remove("active");
};

royxatdanOtishLink.onclick = (event) => {
  event.preventDefault();
  royxatdanOtishBtn.click(); 
};

// Email va parolni tekshirish
function validateEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

function validatePassword(password) {
  return password.length >= 6;  
}

// Kirish formasini tekshirish
kirishForm.addEventListener("submit", (event) => {
  event.preventDefault(); 

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  console.log("Kirish Email:", email);
  console.log("Kirish Password:", password);

  const storedEmail = localStorage.getItem("registeredEmail");
  const storedPassword = localStorage.getItem("registeredPassword");

  if (email === storedEmail && password === storedPassword) {
    window.location.href = "library.html"; 
  } else {
    alert("Email yoki parol noto'g'ri!");
  }
});

// Ro'yxatdan o'tish formasini tekshirish
royxatdanOtishForm.addEventListener("submit", (event) => {
  event.preventDefault(); 

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  console.log("Ro'yxatdan o'tish Email:", email);
  console.log("Ro'yxatdan o'tish Password:", password);

  if (!validatePassword(password)) {
    alert("Parol kamida 6 ta belgidan iborat bo'lishi kerak!");
    return;
  }

  try {
    localStorage.setItem("registeredEmail", email);
    localStorage.setItem("registeredPassword", password);

    console.log("Ro'yxatdan o'tish ma'lumoti saqlandi!");

    window.location.href = "library.html";
  } catch (error) {
    console.error("LocalStorage xatosi:", error);
    alert("Ma'lumot saqlanmadi. Brauzerda LocalStorage ni tekshiring.");
  }
});
