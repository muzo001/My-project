let ism = prompt("Ism");
let username = prompt("Username ");
let yil = prompt("Yoshinigiz");
let parol = prompt("Parol");
let kod = prompt("Maxfiy kodni ");
console.log(ism.trim());
if (ism.length >= 4) {
  console.log("Ism To'g'ri");
} else {
  console.log("Noto'g'ri");
}
console.log(username.trim());
if (username.length >= 4) {
  console.log("Username To'g'ri");
} else {
  console.log("Username Noto'g'ri ");
}
console.log(yil);
if (yil < 12) {
  console.log("Yoshingiz kichk");
}
if (yil > 100) {
  console.log("Yoshingiz katta");
} else {
  console.log("Yoshingiz o'rtacha");
}

console.log(parol);
if (parol.length >= 4) {
  console.log("Parol To'g'ri");
} else {
  console.log("Parol Noto'g'ri");
}

console.log(kod);

if (kod.length >= 3) {
  console.log("kod To'g'ri");
} else {
  console.log("kod Noto'g'ri");
}
