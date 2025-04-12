let bcrypt = require("bcryptjs")

let myPassword = "helloWorld567";
let salt = 12;
let encryptedPassword = bcrypt.hashSync(myPassword, salt);

// Logic Logic 
let check = bcrypt.compareSync(myPassword, encryptedPassword)

if (check) {
    console.log("Password Has Been Matched");
} else {
    console.log("Password Has Not Been Matched");
}

console.log(`Original Password: ${myPassword} \n Encrypted Password: ${encryptedPassword}`);












