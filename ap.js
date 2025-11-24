// user se ek character lena
let char = prompt("Please enter one character:");

// us character ka ASCII code lena
let ascii = char.charCodeAt(0);

// check karna ke number hai?
if (ascii >= 48 && ascii <= 57) {
    console.log("This is a NUMBER.");
}

// check karna ke uppercase letter hai?
else if (ascii >= 65 && ascii <= 90) {
    console.log("This is an UPPERCASE LETTER.");
}

// check karna ke lowercase letter hai?
else if (ascii >= 97 && ascii <= 122) {
    console.log("This is a LOWERCASE LETTER.");
}

// agar kuch bhi nahi mila
else {
    console.log("This is NOT a number or letter.");
}
