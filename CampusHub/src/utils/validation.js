export function checkEmail(email) {
  return email.includes("@");
}

export function checkPassword(password) {
  return password.length >= 6;
}