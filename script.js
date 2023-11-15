"use strict";

// 1 uzduotis
// let paz = 6;

// switch(paz) {
//   case 1:
//     console.log("Neigiamas, pazymys")
//     break;
//   case 2:
//     console.log("Neigiamas, pazymys")
//     break;
//   case 3:
//     console.log("Neigiamas, pazymys")
//     break;
//   case 4:
//     console.log("Teigiamas, bet reikia pasistengti")
//     break;
//   case 5:
//     console.log("Teigiamas, bet reikia pasistengti")
//     break;
//   case 6:
//     console.log("Vidutiniskai, ar tikrai tau to gana?")
//     break;
//   case 7:
//     console.log("Vidutiniskai, ar tikrai tau to gana?")
//     break;
//   case 8:
//     console.log("Pagirk save")
//     break;
//   case 9:
//     console.log("Pagirk save")
//     break;
//   case 10:
//     console.log("Super")
//     break;
//     default:
//       console.log("Pateikta neteisinga reiksme")
// }

// 2 uzduotis
// let month = prompt("Iveskite menesio pavadinima ir jis jums pavers skaitine reiksme:")

// switch(month) {
//   case "sausis":
//     console.log(month + " priklauso ziemai")
//     break;
//   case "vasaris":
//     console.log(month + " priklauso ziemai")
//     break;
//   case "kovas":
//     console.log(month + " priklauso pavasariui")
//     break;
//   case "balandis":
//     console.log(month + " priklauso pavasariui")
//     break;
//   case "geguze":
//     console.log(month + " priklauso pavasariui")
//     break;
//   case "birzelis":
//     console.log(month + " priklauso vasarai")
//     break;
//   case "liepa":
//     console.log(month + " priklauso vasarai")
//     break;
//   case "rugpjutis":
//     console.log(month + " priklauso vasarai")
//     break;
//   case "rugsejis":
//     console.log(month + " priklauso rudeniui")
//     break;
//   case "spalis":
//     console.log(month + " priklauso rudeniui")
//     break;
//   case "lapkritis":
//     console.log(month + " priklauso rudeniui")
//     break;
//   case "gruodis":
//     console.log(month + " priklauso ziemai")
//     break;
//     default:
//     console.log("Blogai ivesta ivestis")
// }

// 3 uzduotis

// let dayTime = prompt("Kiek valandu ?")

// if (dayTime >= 6 && dayTime <= 11) {
//   console.log("Labas rytas")
// } else if (dayTime >= 12 && dayTime <= 18) {
//   console.log("Laba diena")
// } else if (dayTime >= 19 && dayTime <= 21) {
//   console.log("Labas vakaras")
// } else {
//   console.log("Miego laikas")
// }

// switch(dayTime) {
//   case dayTime >= 6 && dayTime <= 11:
//     console.log("Labas rytas")
//     break;
//   case dayTime >= 12 && dayTime <= 18:
//     console.log("Laba diena")
//     break;
//   case dayTime >= 19 && dayTime <= 21:
//     console.log("Labas vakaras")
//     break;
//   default:
//     console.log("Labas ir viso gero")
// }

// 4 uzduotis
// const date = new Date();
// const day = date.getDay();
// console.log(date, day)

// switch(day) {
//   case 1:
//     console.log("Pirmadienis")
//     break;
//   case 2:
//     console.log("Antradienis")
//     break;
//   case 3:
//     console.log("Treciadienis")
//     break;
//   case 4:
//     console.log("Ketvirtadienis")
//     break;
//   case 5:
//     console.log("Penktadienis")
//     break;
//   case 6:
//     console.log("Sestadienis")
//     break;
//   case 7:
//     console.log("Sekmadienis")
//     break;
// }

// 5 uzduotis
// let age = 18;
// let haveDriverLicense = true;
// let isAdult = true;

// if (isAdult && age >= 18) {
//   if (haveDriverLicense) {
//     console.log("Yra suauges ir turi vairuotojo pazymejima")
//   } else {
//     console.log("Yra suauges ir neturi vairuotojo pazymejimo")
//   }
// } else {
//   console.log("Yra mazvaikis ir faktas, kad neturi vairuotojo pazymejimo")
// }

// 6 uzduotis

// const sk = 44;
// if (sk === 0) {
//   console.log("Skaicius lygus 0")
// } else if ( sk % 2 == 0) {
//   console.log("Skaicius yra lyginis")
// } else {
//   console.log("Skaicius yra nelyginis")
// }

// 7 uzduotis

// const admin = true;
// const online = false;

// if (online) {
//   if (admin) {
//     console.log("Vartotojas yra prisijunges ir yra adminas")
//   } else {
//     console.log("Yra prisijunges, bet nera adminas")
//   }
// } else {
//   console.log("Vartotojas nera prisijunges")
// }

// 8 uzduotis
const online = true;
const type = "admin";
const isOwner = true;

if (online) {
  if (type === "admin") {
    console.log("Adminas gali patvirtinti")
  } else if (isOwner){
    console.log("Gali sukurti is istrinti skelbima")
  }
  else {
    console.log("Negali redaguoti")
  }
} else {
  console.log ("Turi pirma prisijungti")
}

// 9 uzduotis

// let sk = prompt("Iveskite skaiciu")
// if(sk > 50) {
//   console.log(`Skaicius ${sk} didesnis uz 50`)
// } else if (sk < 50) {
//   console.log(`Skaicius ${sk} mazenis uz 50`)
// } else {
//   console.log(`Skaicius ${sk} lygus 50`)
// }

// 10 uzduotis
// const aritmetika = prompt("Iveskite kokia norite atlikti operacija (+, -, *, /)")
// let sk1 = parseInt(prompt("Iveskite sk1"));
// let sk2 = parseInt(prompt("Iveskite sk2"));
//  if (aritmetika == "+") {
//    console.log(sk1 + sk2);
//  } else if (aritmetika == "-") {
//    console.log(sk1 - sk2)
//  } else if (aritmetika == "*") {
//    console.log(sk1 * sk2)
//  } else {
//    console.log(sk1 / sk2)
//  }
