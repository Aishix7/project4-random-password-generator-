const passwordBox = document.getElementById("password");
const copy = document.getElementById("copy");
const button = document.getElementById("generate-btn");
function generate() {
  const chars =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+[]{}|;:,.<>?/`~";
  let password = "";
  const len = 8;
  for (let i = 0; i < len; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  console.log(password); // shows password in console
  passwordBox.value = password; // shows password in input box
}
button.addEventListener("click", generate);
copy.addEventListener("click", () => {
  const pass = passwordBox.value.trim();
  if (!pass) {
    alert("no password to copy!, generate a password first");
    return;
  }

  navigator.clipboard.writeText(pass).then(() => {
    alert("password copied to clipboard!");
  });
});
