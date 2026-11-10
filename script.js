
// ===============================
// SELECT HTML ELEMENTS
// ===============================

const modal = document.getElementById("authModal");

const closeModal = document.getElementById("closeModal");

const loginTab = document.getElementById("loginTab");
const signupTab = document.getElementById("signupTab");

const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");

const authTitle = document.getElementById("authTitle");
const authDescription = document.getElementById("authDescription");


// ===============================
// OPEN MODAL
// ===============================

function openModal(mode = "login") {

    modal.classList.add("active");

    document.body.style.overflow = "hidden";

    switchForm(mode);
}


// ===============================
// CLOSE MODAL
// ===============================

function closeAuthModal() {

    modal.classList.remove("active");

    document.body.style.overflow = "";

}


// ===============================
// SWITCH BETWEEN FORMS
// ===============================

function switchForm(mode) {

    const isLogin = mode === "login";

    loginForm.classList.toggle("hidden", !isLogin);

    signupForm.classList.toggle("hidden", isLogin);

    loginTab.classList.toggle("active", isLogin);

    signupTab.classList.toggle("active", !isLogin);

    authTitle.textContent = isLogin
        ? "Welcome Back"
        : "Create Your Account";

    authDescription.textContent = isLogin
        ? "Login to access your account."
        : "Join NEXORA and start your journey.";

}


// ===============================
// NAVIGATION BUTTONS
// ===============================

document.getElementById("navLogin").addEventListener(
    "click",
    () => openModal("login")
);

document.getElementById("navSignup").addEventListener(
    "click",
    () => openModal("signup")
);

document.getElementById("heroSignup").addEventListener(
    "click",
    () => openModal("signup")
);

document.getElementById("contactSignup").addEventListener(
    "click",
    () => openModal("signup")
);


// ===============================
// AUTHENTICATION BUTTONS
// ===============================

loginTab.addEventListener("click", () => {
    switchForm("login");
});

signupTab.addEventListener("click", () => {
    switchForm("signup");
});

closeModal.addEventListener("click", closeAuthModal);


// Close modal when clicking outside it

modal.addEventListener("click", (event) => {

    if (event.target === modal) {
        closeAuthModal();
    }

});


// Close modal with Escape key

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {
        closeAuthModal();
    }

});


// ===============================
// LOGIN FORM
// ===============================

loginForm.addEventListener("submit", (event) => {

    event.preventDefault();

    const email = document.getElementById("loginEmail").value;

    const password = document.getElementById("loginPassword").value;

    const message = document.getElementById("loginMessage");

    if (password.length < 8) {

        message.style.color = "#D93025";

        message.textContent =
            "Password must contain at least 8 characters.";

        return;
    }

    message.style.color = "#159B62";

    message.textContent =
        `Login form validated for ${email}.`;

});


// ===============================
// SIGNUP FORM
// ===============================

signupForm.addEventListener("submit", (event) => {

    event.preventDefault();

    const name = document.getElementById("signupName").value;

    const email = document.getElementById("signupEmail").value;

    const password = document.getElementById("signupPassword").value;

    const confirmPassword =
        document.getElementById("confirmPassword").value;

    const terms = document.getElementById("terms");

    const message = document.getElementById("signupMessage");


    if (password.length < 8) {

        message.style.color = "#D93025";

        message.textContent =
            "Password must contain at least 8 characters.";

        return;

    }


    if (password !== confirmPassword) {

        message.style.color = "#D93025";

        message.textContent = "Passwords do not match.";

        return;

    }


    if (!terms.checked) {

        message.style.color = "#D93025";

        message.textContent =
            "Please accept the Terms and Conditions.";

        return;

    }


    message.style.color = "#159B62";

    message.textContent =
        `Welcome ${name}! Your form has been validated.`;

    console.log({
        name,
        email,
        status: "Form validated"
    });

});
