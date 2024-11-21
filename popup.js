// Function to hash the password using SHA-1
async function sha1(password) {
    const encoder = new TextEncoder();
    const data = encoder.encode(password);
    const hashBuffer = await crypto.subtle.digest('SHA-1', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    return hashHex;
}

// Function to check if password is compromised using HIBP API
async function checkPasswordHIBP(password) {
    const hash = await sha1(password);
    const prefix = hash.slice(0, 5);
    const suffix = hash.slice(5);

    try {
        const response = await fetch(`https://api.pwnedpasswords.com/range/${prefix}`);
        const data = await response.text();
        const isCompromised = data.includes(suffix.toUpperCase());

        return isCompromised ? "Password has been compromised!" : "Password is safe!";
    } catch (error) {
        return "Error checking password security";
    }
}

// Modified generatePassword function to check with HIBP
async function generatePassword() {
    const length = document.getElementById('password-length').value || 12;
    const includeUppercase = document.getElementById('include-uppercase').checked;
    const includeNumbers = document.getElementById('include-numbers').checked;
    const includeSymbols = document.getElementById('include-symbols').checked;

    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+~`|}{[]:;?><,./-=';

    let characters = lowercase;
    if (includeUppercase) characters += uppercase;
    if (includeNumbers) characters += numbers;
    if (includeSymbols) characters += symbols;

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }

    document.getElementById('password').value = password;

    const securityStatus = await checkPasswordHIBP(password);
    document.getElementById('password-security').innerText = securityStatus;
}

// Function to copy the password to the clipboard
function copyPassword() {
    const password = document.getElementById('password');
    navigator.clipboard.writeText(password.value).then(() => {
        alert("Password copied to clipboard!");
    });
}

// Display content after loading
document.addEventListener('DOMContentLoaded', () => {
    const loadingScreen = document.getElementById('loading-screen');
    const mainContent = document.getElementById('main-content');
    loadingScreen.style.display = 'none';
    mainContent.style.display = 'block';

    document.getElementById('generate-btn').addEventListener('click', generatePassword);
    document.getElementById('copy-btn').addEventListener('click', copyPassword);
});
