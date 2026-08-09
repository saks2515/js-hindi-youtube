
// ===============================
// GLOBAL SCOPE
// ===============================

// var c = 300;
let a = 300;

console.log("Global a:", a);


// ===============================
// BLOCK SCOPE
// ===============================

if (true) {
    let a = 10;
    const b = 20;

    console.log("Inside block a:", a);
    console.log("Inside block b:", b);
}

// The 'a' outside the block is still 300
console.log("Outside block a:", a);

// b is not accessible here
// console.log(b); // Error


// ===============================
// NESTED FUNCTION / SCOPE
// ===============================

function one() {

    const username = "hitesh";

    function two() {

        const website = "youtube";

        // Inner function can access
        // variable from outer function
        console.log("Username:", username);
        console.log("Website:", website);
    }

    two();

    // website cannot be accessed here
    // console.log(website); // Error
}

one();


// ===============================
// NESTED BLOCK SCOPE
// ===============================

if (true) {

    const username = "hitesh";

    if (username === "hitesh") {

        const website = "youtube";

        console.log(username + website);
    }

    // website cannot be accessed here
    // console.log(website); // Error
}

// username cannot be accessed here
// console.log(username); // Error




// // ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))

function addone(num){
    return num + 1
}

// addTwo(5)
// const addTwo = function(num){     
//     return num + 2
// }

