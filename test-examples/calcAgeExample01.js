let test_birthday = '1990/07/17';

let today = new Date();

let birthday = test_birthday.split('/');
birthday = new Date(birthday[0], birthday[1], birthday[2]);

let age = today.getFullYear() - birthday.getFullYear();
let m = today.getMonth() - birthday.getMonth();
let d = today.getDate() - birthday.getDate();

if (m < 0 || (m === 0 && d < 0)) {
    age--;
}

console.log(`[Right] print the really age ${age}`);

// let userAge = new Date().getTime() - Date.parse(test_birthday);
// console.log(`[Wrong] print the really age ${userAge / (365 * 24 * 60 * 60 * 1000)}`);