/** 
-  Type Inference in Typescript is the ability of the ts compiler to automatically determine the type of a variable or expression based on the value assigned to it. 
- This means that you don't always have to explicitly specify the type of a variable, as TypeScript can infer it from the context.
**/
// Example 1: Basic Type Inference
let message = "Hello, TypeScript!"; // TypeScript infers the type of 'message' as string
console.log(message);

// Example 2: Function Return Type Inference
function add(a: number, b: number) {
    return a + b; // TypeScript infers the return type as number
}
const result = add(5, 10);
console.log(result);

// Example 3: Array Type Inference
let numbers = [1, 2, 3, 4]; // TypeScript infers the type of 'numbers' as number[]
console.log(numbers);

// Example 4: Object Type Inference
let person = {
    name: "Alice",
    age: 30
}; // TypeScript infers the type of 'person' as { name: string; age: number }
console.log(person);

// Example 5: Contextual Typing
const names = ["Alice", "Bob", "Charlie"]; // TypeScript infers the type of 'names' as string[]
names.forEach(name => {
    console.log(name.toUpperCase()); // TypeScript knows 'name' is a string
});

// Example 6: Type Inference with Generics
function identity<T>(arg: T): T {
    return arg; // TypeScript infers the type of 'arg' based on the argument passed
}
const output = identity("Hello, Generics!"); // TypeScript infers the type of 'output' as string
console.log(output);

// Example 7: Type Inference with Union Types
let value: number | string = 42; // TypeScript infers the type of 'value' as number | string
value = "Now I'm a string!";
console.log(value);

// Example 8: Type Inference with Default Parameters
function greet(name: string = "Guest") {
    console.log(`Hello, ${name}!`); // TypeScript infers the type of 'name' as string
}
greet(); // Uses default parameter
greet("Alice"); // Passes a specific name

// Example 9: Type Inference with Destructuring
const user = { id: 1, username: "user123" };
const { id, username } = user; // TypeScript infers the types of 'id' and 'username'
console.log(`User ID: ${id}, Username: ${username}`);

// Example 10: Type Inference with Conditional Types
type Status = "success" | "error";
function handleResponse(status: Status) {
    if (status === "success") {
        console.log("Operation was successful!");
    } else {
        console.log("An error occurred.");
    }
}
handleResponse("success");
handleResponse("error");