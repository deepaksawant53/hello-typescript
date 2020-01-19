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
/*function doSomething() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
    }
    // console.log(i);
}*/
// Variables in typescript
// So in the below example if we first assign a number value to count
// and then if we go ahead and try to assign a string value to count
// It will show you an error in typescript
// Again if we use tsc to compile this code, it will get successfully compiled
// into js code. But typescript compiler will show you an error.
// Here if we hover mouse over count variable we will see that 
// count variable has type number.
/*let count = 5;
count = 'a';*/
// In this example when we declare a variable without assigning any value
// typescript will give it type any.
// So the rule is when we dont know the type of variable ahead of time
// At that time we should use type as any.
/*let a;
a = 1;
a = true;
a = 'a';*/
// So in type script we have following different types
let a: number;
let b: boolean;
let c: string;
let d: any;
let e: number[] = [1, 2, 3];
let f: any[] = [1, true, 'a', false];
// In case of enum the get numbered by default in the order they are declared
// So below enum will have values Red = 0, Green = 1 and Blue = 2
// In future if someone add a new value in between Green and Blue then value of Blue will change to 4
// enum Color {Red, Green, Blue}
// To prevent this kind of problems it is better to give values to enum explicitly as shown below
enum Color {Red = 0, Green = 1, Blue = 2};