---
title: C++ Programming Tutorial
description: This is a C++ tutorial for learning C++ programming.
slug: cpp-programming-tutorial
date: 02/07/2025
author: Asad Ali
image: /cpp.avif
---

Welcome to this comprehensive C++ programming tutorial! Whether you're starting from scratch or looking to enhance your C++ skills, this guide will walk you through fundamental concepts and advanced features of the language.

## Introduction to C++

C++ is a powerful, general-purpose programming language that extends the C language with object-oriented features. It's widely used in system programming, game development, embedded systems, and performance-critical applications.

### Why Learn C++?

- **Performance**: Offers low-level memory manipulation and high performance.
- **Versatility**: Used in systems programming, games, embedded systems, and more.
- **Rich Standard Library**: Extensive standard template library (STL).
- **Industry Demand**: Highly valued in performance-critical industries.

## Setting Up C++

To start programming in C++, you'll need to set up your development environment:

1. **Install Compiler**: 
   - Windows: Install MinGW or Visual Studio
   - Linux: Install GCC (`sudo apt-get install build-essential`)
   - macOS: Install Xcode Command Line Tools
2. **Choose an IDE**: Popular options include Visual Studio, CLion, or Code::Blocks
3. **Verify Installation**: Run `g++ --version` in terminal

## C++ Basics

Let's start with the fundamental concepts:

### Hello World Program

```cpp
#include <iostream>

int main() {
    std::cout << "Hello, World!" << std::endl;
    return 0;
}
```

### Variables and Data Types

```cpp
#include <iostream>
#include <string>

int main() {
    std::string name = "Alice";
    int age = 25;
    double height = 5.7;
    bool isStudent = true;
    
    std::cout << "Name: " << name << "\n"
              << "Age: " << age << "\n"
              << "Height: " << height << std::endl;
    
    return 0;
}
```

### Control Structures

```cpp
#include <iostream>

int main() {
    int age = 18;
    
    if (age >= 18) {
        std::cout << "You are an adult." << std::endl;
    } else {
        std::cout << "You are a minor." << std::endl;
    }

    // For loop
    for (int i = 0; i < 5; i++) {
        std::cout << "Count: " << i << std::endl;
    }
    
    return 0;
}
```

### Functions

```cpp
#include <iostream>
#include <string>

void greet(const std::string& name) {
    std::cout << "Hello, " << name << "!" << std::endl;
}

int add(int a, int b) {
    return a + b;
}

int main() {
    greet("Alice");
    std::cout << "Sum: " << add(5, 3) << std::endl;
    return 0;
}
```

### Exception Handling

```cpp
#include <iostream>
#include <stdexcept>

int main() {
    try {
        int* arr = new int[1000000000000]; // Will likely cause exception
    } catch (const std::bad_alloc& e) {
        std::cerr << "Memory allocation failed: " << e.what() << std::endl;
    }
    
    return 0;
}
```

## Intermediate C++

### Classes and Objects

```cpp
#include <iostream>
#include <string>

class Student {
private:
    std::string name;
    int age;

public:
    Student(const std::string& n, int a) : name(n), age(a) {}
    
    void displayInfo() const {
        std::cout << "Name: " << name << ", Age: " << age << std::endl;
    }
};

int main() {
    Student student("Alice", 20);
    student.displayInfo();
    return 0;
}
```

### Memory Management

```cpp
#include <iostream>
#include <memory>

int main() {
    // Raw pointer
    int* ptr = new int(42);
    std::cout << *ptr << std::endl;
    delete ptr;
    
    // Smart pointer
    std::unique_ptr<int> smartPtr = std::make_unique<int>(42);
    std::cout << *smartPtr << std::endl;
    // No need to delete, automatically managed
    
    return 0;
}
```

### Templates

```cpp
#include <iostream>

template<typename T>
T max(T a, T b) {
    return (a > b) ? a : b;
}

int main() {
    std::cout << max(10, 20) << std::endl;     // Integer
    std::cout << max(3.14, 2.72) << std::endl; // Double
    return 0;
}
```

## Advanced C++

### STL Containers

```cpp
#include <iostream>
#include <vector>
#include <map>
#include <algorithm>

int main() {
    // Vector
    std::vector<int> numbers = {1, 2, 3, 4, 5};
    
    // Map
    std::map<std::string, int> ages;
    ages["Alice"] = 25;
    ages["Bob"] = 30;
    
    // Using algorithms
    std::sort(numbers.begin(), numbers.end());
    
    for (const auto& num : numbers) {
        std::cout << num << " ";
    }
    
    return 0;
}
```

### Lambda Expressions

```cpp
#include <iostream>
#include <vector>
#include <algorithm>

int main() {
    std::vector<int> numbers = {1, 2, 3, 4, 5};
    
    auto square = [](int n) { return n * n; };
    
    std::transform(numbers.begin(), numbers.end(), 
                  numbers.begin(), square);
                  
    for (int num : numbers) {
        std::cout << num << " ";
    }
    
    return 0;
}
```

### Move Semantics

```cpp
#include <iostream>
#include <string>

class Resource {
    std::string data;
public:
    // Constructor
    Resource(const std::string& d) : data(d) {}
    
    // Move constructor
    Resource(Resource&& other) noexcept 
        : data(std::move(other.data)) {}
    
    // Move assignment
    Resource& operator=(Resource&& other) noexcept {
        if (this != &other) {
            data = std::move(other.data);
        }
        return *this;
    }
};
```

### Multithreading

```cpp
#include <iostream>
#include <thread>
#include <mutex>

std::mutex mtx;

void print_numbers(int id) {
    for (int i = 0; i < 5; i++) {
        std::lock_guard<std::mutex> lock(mtx);
        std::cout << "Thread " << id << ": " << i << std::endl;
    }
}

int main() {
    std::thread t1(print_numbers, 1);
    std::thread t2(print_numbers, 2);
    
    t1.join();
    t2.join();
    
    return 0;
}
```

## Modern C++ Features (C++11 and beyond)

### Smart Pointers

```cpp
#include <iostream>
#include <memory>

class Resource {
public:
    Resource() { std::cout << "Resource acquired\n"; }
    ~Resource() { std::cout << "Resource destroyed\n"; }
};

int main() {
    // Unique pointer
    auto uniquePtr = std::make_unique<Resource>();
    
    // Shared pointer
    auto sharedPtr1 = std::make_shared<Resource>();
    auto sharedPtr2 = sharedPtr1;
    
    return 0;
}
```

### Range-based for Loop

```cpp
#include <iostream>
#include <vector>

int main() {
    std::vector<int> numbers = {1, 2, 3, 4, 5};
    
    for (const auto& num : numbers) {
        std::cout << num << " ";
    }
    
    return 0;
}
```

## Conclusion

Congratulations on completing this C++ tutorial! Remember that C++ is a complex language with many features, and mastery comes through practice and experience. Continue exploring the language's capabilities and build challenging projects to enhance your skills.

Happy coding!