---
title: TypeScript Programming Tutorial
description: This is a TypeScript tutorial for learning TypeScript programming.
slug: typescript-programming-tutorial
date: 02/07/2025
author: Asad Ali
image: /typescript.jpg
---

Welcome to this comprehensive TypeScript programming tutorial! TypeScript extends JavaScript by adding static types and other features while maintaining full compatibility with JavaScript code.

## Introduction to TypeScript

TypeScript is a strongly typed programming language that builds on JavaScript. It adds optional static typing, classes, and interfaces to help you build robust applications.

### Why Learn TypeScript?

- **Type Safety**: Catch errors at compile time instead of runtime
- **Better IDE Support**: Enhanced code completion and refactoring
- **Object-Oriented Features**: Classes, interfaces, and modules
- **JavaScript Compatibility**: All JavaScript code is valid TypeScript
- **Modern Development**: Used in Angular, Deno, and many modern frameworks

## Setting Up TypeScript

To get started with TypeScript:

1. **Install Node.js**: Download from [nodejs.org](https://nodejs.org/)
2. **Install TypeScript**:
```bash
npm install -g typescript
```
3. **Verify Installation**:
```bash
tsc --version
```
4. **Choose an IDE**: VS Code provides excellent TypeScript support

## TypeScript Basics

### Basic Types

```typescript
// Basic types
let isDone: boolean = false;
let decimal: number = 6;
let color: string = "blue";
let list: number[] = [1, 2, 3];
let tuple: [string, number] = ["hello", 10];

// Enum
enum Color {
    Red,
    Green,
    Blue
}
let c: Color = Color.Green;

// Any and void
let notSure: any = 4;
function warnUser(): void {
    console.log("Warning!");
}

// Null and undefined
let u: undefined = undefined;
let n: null = null;

// Never
function error(message: string): never {
    throw new Error(message);
}
```

### Interfaces

```typescript
interface Person {
    firstName: string;
    lastName: string;
    age?: number;  // Optional property
    readonly id: number;  // Read-only property
}

function greet(person: Person) {
    console.log(`Hello, ${person.firstName} ${person.lastName}`);
}

const john: Person = {
    firstName: "John",
    lastName: "Doe",
    id: 1
};

// Interface extending another interface
interface Employee extends Person {
    employeeId: string;
    department: string;
}
```

### Classes

```typescript
class Animal {
    private name: string;
    protected age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    public move(distance: number = 0): void {
        console.log(`${this.name} moved ${distance}m.`);
    }
}

class Dog extends Animal {
    bark(): void {
        console.log('Woof! Woof!');
    }

    // Override move method
    move(distance: number = 5): void {
        console.log('Running...');
        super.move(distance);
    }
}
```

### Functions

```typescript
// Function type
type MathFunc = (x: number, y: number) => number;

// Function with type annotations
function add(x: number, y: number): number {
    return x + y;
}

// Optional and default parameters
function buildName(firstName: string, lastName?: string): string {
    return lastName ? `${firstName} ${lastName}` : firstName;
}

// Rest parameters
function sum(...numbers: number[]): number {
    return numbers.reduce((total, num) => total + num, 0);
}

// Function overloads
function process(x: number): number;
function process(x: string): string;
function process(x: any): any {
    return x;
}
```

## Advanced TypeScript

### Generics

```typescript
// Generic function
function identity<T>(arg: T): T {
    return arg;
}

// Generic interface
interface GenericResponse<T> {
    data: T;
    status: number;
    message: string;
}

// Generic class
class GenericBox<T> {
    private content: T;

    constructor(value: T) {
        this.content = value;
    }

    getValue(): T {
        return this.content;
    }
}

// Generic constraints
interface Lengthwise {
    length: number;
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
    console.log(arg.length);
    return arg;
}
```

### Type Manipulation

```typescript
// Union types
type StringOrNumber = string | number;
let value: StringOrNumber = "hello";
value = 42; // OK

// Intersection types
type Employee = Person & { employeeId: string };

// Type aliases
type Point = {
    x: number;
    y: number;
};

// Mapped types
type Readonly<T> = {
    readonly [P in keyof T]: T[P];
};

// Conditional types
type NonNullable<T> = T extends null | undefined ? never : T;

// Utility types
interface Todo {
    title: string;
    description: string;
    completed: boolean;
}

type TodoPreview = Pick<Todo, "title" | "completed">;
type TodoReadonly = Readonly<Todo>;
```

### Decorators

```typescript
// Class decorator
function sealed(constructor: Function) {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}

// Method decorator
function log(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    
    descriptor.value = function(...args: any[]) {
        console.log(`Calling ${propertyKey} with:`, args);
        return originalMethod.apply(this, args);
    };
    
    return descriptor;
}

@sealed
class Example {
    @log
    add(x: number, y: number): number {
        return x + y;
    }
}
```

### Async/Await with Types

```typescript
interface User {
    id: number;
    name: string;
}

async function fetchUser(id: number): Promise<User> {
    const response = await fetch(`/api/users/${id}`);
    if (!response.ok) {
        throw new Error('User not found');
    }
    return response.json();
}

// Error handling with types
try {
    const user = await fetchUser(1);
    console.log(user.name);
} catch (error) {
    if (error instanceof Error) {
        console.error(error.message);
    }
}
```

## Modern TypeScript Features

### Nullish Coalescing and Optional Chaining

```typescript
interface Settings {
    theme?: {
        darkMode?: boolean;
    };
}

const settings: Settings = {};

// Optional chaining
const isDarkMode = settings?.theme?.darkMode ?? false;
```

### Template Literal Types

```typescript
type EventName = 'click' | 'focus' | 'blur';
type Handler = `on${Capitalize<EventName>}`;  // 'onClick' | 'onFocus' | 'onBlur'

// Template literal with union types
type Color = 'red' | 'blue';
type Size = 'small' | 'large';
type Style = `${Color}-${Size}`;  // 'red-small' | 'red-large' | 'blue-small' | 'blue-large'
```

### Type Assertions

```typescript
// Type assertions
let someValue: unknown = "this is a string";
let strLength: number = (someValue as string).length;

// Const assertions
const colors = ['red', 'green', 'blue'] as const;
type Color = typeof colors[number];  // 'red' | 'green' | 'blue'
```

## Best Practices

### Configuration

```typescript
// tsconfig.json
{
    "compilerOptions": {
        "target": "ES2020",
        "module": "commonjs",
        "strict": true,
        "esModuleInterop": true,
        "skipLibCheck": true,
        "forceConsistentCasingInFileNames": true
    }
}
```

### Type Organization

```typescript
// Organizing types in a separate file (types.ts)
export interface User {
    id: number;
    name: string;
    email: string;
}

export type UserRole = 'admin' | 'user' | 'guest';

export interface AuthState {
    user: User | null;
    role: UserRole;
    isAuthenticated: boolean;
}
```

## Conclusion

Congratulations on completing this TypeScript tutorial! TypeScript adds powerful features to JavaScript while maintaining compatibility. Keep practicing and exploring the type system to build more robust applications.

Next steps:
1. Build a TypeScript project
2. Learn TypeScript with React or Angular
3. Explore advanced type features
4. Practice writing clean, type-safe code

Happy coding!