//Type Script Hello World!
// function log(message) {
//     console.log(message);
// }
// var message = "Hello World!";
// log(message);

// Declaring Variables in typescript
// So here when we declare a variable using var what happens is that
// That variable is scoped to the nearest function 
// in this case it is doSomething function
// And hence the output of the program is as follows:
// Command to execute: tsc main.ts | node main.js
// Output:
// 0
// 1
// 2
// 3
// 4
// Finally: 5
/*function doSomething() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log('Finally: ' + i);
}
doSomething();*/

// To avoid this kind of behaviour we can declare variable using let keyword
// So here in the below example we get error when we try to access i in 
// console.log(i) statement
// So when we use let keyword to declare a variable it is scoped to the
// nearest block in this case it is the for block.
// Now typescript will throw this error during compilation
// But it will still go ahead and create a main.js file with code same as in
// above example as it is a valid javascript code.
function doSomething() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
    }
    // console.log(i);
}