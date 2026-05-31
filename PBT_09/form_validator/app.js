const nameInput = document.getElementById("name");
const nameStatus = document.getElementById("nameStatus");

const emailInput = document.getElementById("email");
const emailError = document.getElementById("emailError");

const passwordInput = document.getElementById("password");
const strengthFill = document.getElementById("strengthFill");
const strengthText = document.getElementById("strengthText");

const confirmInput =
document.getElementById("confirmPassword");

const confirmError =
document.getElementById("confirmError");

const phoneInput =
document.getElementById("phone");

const submitBtn =
document.getElementById("submitBtn");

const form =
document.getElementById("registerForm");

let validName = false;
let validEmail = false;
let validPassword = false;
let validConfirm = false;
let validPhone = false;

/* Họ tên */

nameInput.addEventListener("input", () => {

    const value =
    nameInput.value.trim();

    validName =
    value.length >= 2 &&
    value.length <= 50;

    nameStatus.textContent =
    validName ? "✅" : "❌";

    checkForm();
});

/* Email */

emailInput.addEventListener("input", () => {

    const regex =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    validEmail =
    regex.test(emailInput.value);

    emailError.textContent =
    validEmail
    ? ""
    : "Email không hợp lệ";

    checkForm();
});

/* Password Strength */

passwordInput.addEventListener("input", () => {

    const password =
    passwordInput.value;

    let score = 0;

    if(password.length >= 8) score++;

    if(/[a-zA-Z]/.test(password)
    && /\d/.test(password))
    score++;

    if(
        /[a-z]/.test(password)
        &&
        /[A-Z]/.test(password)
        &&
        /\d/.test(password)
        &&
        /[^A-Za-z0-9]/.test(password)
    ){
        score++;
    }

    switch(score){

        case 1:
            strengthFill.style.width="33%";
            strengthFill.style.background="red";
            strengthText.textContent="Yếu";
            validPassword=false;
            break;

        case 2:
            strengthFill.style.width="66%";
            strengthFill.style.background="orange";
            strengthText.textContent="Trung bình";
            validPassword=true;
            break;

        case 3:
            strengthFill.style.width="100%";
            strengthFill.style.background="green";
            strengthText.textContent="Mạnh";
            validPassword=true;
            break;

        default:
            strengthFill.style.width="0%";
            strengthText.textContent="";
            validPassword=false;
    }

    validateConfirm();
    checkForm();
});

/* Confirm Password */

confirmInput.addEventListener(
"input",
validateConfirm
);

function validateConfirm(){

    validConfirm =
    passwordInput.value ===
    confirmInput.value &&
    confirmInput.value !== "";

    confirmError.textContent =
    validConfirm
    ? ""
    : "Mật khẩu không khớp";

    checkForm();
}

/* Phone */

phoneInput.addEventListener("input", () => {

    let value =
    phoneInput.value
    .replace(/\D/g,"")
    .substring(0,10);

    if(value.length > 4){
        value =
        value.replace(
        /(\d{4})(\d+)/,
        "$1-$2"
        );
    }

    if(value.length > 9){
        value =
        value.replace(
        /(\d{4})-(\d{3})(\d+)/,
        "$1-$2-$3"
        );
    }

    phoneInput.value = value;

    validPhone =
    value.replace(/-/g,"").length
    === 10;

    checkForm();
});

/* Enable Submit */

function checkForm(){

    submitBtn.disabled = !(
        validName &&
        validEmail &&
        validPassword &&
        validConfirm &&
        validPhone
    );

}

/* Submit */

form.addEventListener(
"submit",
e => {

    e.preventDefault();

    const modal =
    document.createElement("div");

    modal.className = "modal";

    modal.innerHTML = `
    <div class="modal-content">

        <span class="close">&times;</span>

        <h2>Đăng ký thành công!</h2>

        <hr><br>

        <p><b>Họ tên:</b>
        ${nameInput.value}</p>

        <p><b>Email:</b>
        ${emailInput.value}</p>

        <p><b>Điện thoại:</b>
        ${phoneInput.value}</p>

    </div>
    `;

    document.body.appendChild(modal);

    modal
    .querySelector(".close")
    .addEventListener("click",()=>{

        modal.remove();

    });

    modal.addEventListener("click",e=>{

        if(e.target===modal){
            modal.remove();
        }

    });

});