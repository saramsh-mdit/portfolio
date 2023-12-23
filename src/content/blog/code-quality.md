---
title: 'Increase code quality “Blazing Fast”'
description: 'Increase code quality “Blazing Fast”'
pubDate: 'Jul 08 2022'
heroImage: '/blog_placeholder.jpg'
---

I have been coding for the past 2 yrs and these are some simple things I have observed to increase readability “blazing fast”. Code readability increases maintainability and code quality.

### 1\. Decrease the Code Size

We have all been through some code where we have to scroll to the infinite to find that one function. So to avoid that keep your code between 100–500 lines of code per file. Split the file into multiple files and separate the files into their proper directory and filename. Any code with more than 500 lines is really hard to read, scroll and understand.

> **Split the files and keep 100–500 lines of code per file.**

### 2\. Name Variables Properly

There is no strict rule for naming a variable but there are some most used methods for consistency. Make functions, classes, constants, and Interface properly based on functionality.

Don’t name variables like (a,b, i, j,k, one, s1, p1) or something similar, and use camelCase for variable names compose of multiple words.

**For Constants:** Use all uppercase names.

```plaintext
const DATABASE = "ANIME";
const _USERNAME = "BLEACH";
const PASSWORD_FOR_BLEACH = "RANGIKU";
```

**For Interface:** The interface name starts with I (for interface).

```plaintext
interface IShape {
    area: number
}
```

**For Classes:** Class names should start with a capital letter. I use the same method for functions that are exported.

```plaintext
class Shape extends IShape {
    //...
}

export function GetAll() {
    //...
}
```

> **Keep variable’s name meaningful and consistent.**

### 3\. DRY (Do Not Repeat Yourself)

Programming at its core is to solve repetitive problems. Reduce the copy paste past as much as possible. “Every piece of knowledge must have a single, unambiguous, authoritative representation within a system.” We can achieve DRY by creating functions and classes to make sure that any logic should be written in only one place.

**Do not repeat yourself, use functions or classes to reduce code repetition.**

### 4\. KISS (Keep It Simple, Stupid)

A simple design makes service and maintenance a lot easier. Try not to make the code any more complex than necessary.

> **Keep your code as simple as possible.**

### 5\. Be Empathetic

Try to write the code from the maintainer's point of view. We should help each other out by increasing the code by making it better than you found.

> **Contribute to making code better than you found it.**

### 6\. Comments.

Good code is code that does not need any documentation. Try not to comment everywhere and let the variable names and function names document themselves but there are exceptions. Add comments for places where it’s complex to understand. Better Comments Extension can help on this one.

> **Less amount of comments the better.**

### 7\. Use Prettier or Code Formatter’s.

Consistently using the same style throughout your code makes it easier to read. Code that is easy to read is easier to understand by you as well as by potential collaborators. Therefore, adhering to a coding style reduces the risk of mistakes and makes it easier to work together on software.

**Use code formatter.**

> **Using a readme.md file to add more detail about your project is a really good way to increase the maintainability of the code.**

### Want to learn more

Learn more about SOLID design principles and the book clean code by uncle bob.

Article on SOLID Principles: \[https://blog.bitsrc.io/solid-principles-in-typescript-153e6923ffdb\]