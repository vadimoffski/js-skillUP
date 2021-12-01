let massage = "Welcome!";
let path = prompt("Enter your password");
const ADMIN_PASSWORD = "adminpass";

if (path === ADMIN_PASSWORD) {
  alert(massage);
} else {
  alert("Access denied, wrong password!");
}
