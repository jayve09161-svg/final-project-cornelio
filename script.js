const STORAGE_KEY = "lostFoundUser";

const DEMO_USER = {
    name: "Userjv",
    email: "userjv@example.com"
};

const signInButton = document.getElementById("google-signin-btn");
const authStatus = document.getElementById("auth-status");

function getSavedUser() {
    try {
        const savedUser = localStorage.getItem(STORAGE_KEY);
        return savedUser ? JSON.parse(savedUser) : null;
    } catch (error) {
        return null;
    }
}

function requireLogin() {
    if (!getSavedUser()) {
        window.location.replace("index.html");
    }
}

if (signInButton && getSavedUser()) {
    window.location.replace("app.html");
}

if (signInButton) {
    signInButton.addEventListener("click", function () {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(DEMO_USER));
        } catch (error) {
            authStatus.textContent = "Sign-in failed. Please allow browser storage.";
            return;
        }

        authStatus.textContent = "Signing in as " + DEMO_USER.name + "...";

        setTimeout(function () {
            window.location.href = "app.html";
        }, 1000);
    });
}