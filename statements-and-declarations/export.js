// Exporting membros individuais
export const name = "John";

export function getName() {
  console.log(name);
}

export class User {}

// Exportando múltiplos membros

const john, jane = 2
export { john, jane }

// Exportando via destructuring com renaming

const person = {
    name: "John",
    age: 30,
    city: "New York"
}

export const { name: firstName, age: userAge } = person;

// Default export

export default function sayHi() {
    console.log("Hi");
}

// Re-exportando módulos

export * from "./export-module";

