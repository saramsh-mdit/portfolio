---
title: "Typescript Beginner's Guide For JavaScript Developers."
description: "Typescript Beginner's Guide For JavaScript Developers."
pubDate: 'Jul 22 2022'
heroImage: '/ts-guide.webp'
---

I will use TS for Typescript and JS for JavaScript or (ES6) interchangeability.

### Basic Introduction:

It’s JavaScript on steroids or a superset of JS. It is just JavaScript with types added to it. And types aren’t mandatory. Don’t be like me and think JS is just working fine so I don’t need TS It will just add complexity to the top of my project. The reality is so opposite now I love typescript. I don’t use TS to its fullest but there are two things that I love the most about it. It catches bugs and errors (especially type errors, undefined and null errors) and shows documentation and hints to solve them. Auto Import is so amazing and TS compiles down to any version of ES.

That’s enough of buttering of TS, and learning how to setup. I generally use “ts-node” to run .ts file on the desktop.

**Step 1:** Install Node.js if you haven’t at this point of your life else directly Install Typescript globally.

```plaintext
// For NPM:
npm install -g typescript
//For Yarn:
yarn add –g typescript
```

**To add TS to an existing project:**

```plaintext
npm install typescript --save-dev
yarn add typescript –dev
```

\*\*Step 2: \*\*Create .ts extension file to write your ts code here. **Basic of TS:** The basic syntax for type definition while variable declaration. let/const variable\_name : type;

Example:

```plaintext
let isBeginner: boolen = true;
let total: number = 0;
let name: string = 'Saramsh';
let sentence: string =` My Name is ${name}. I am a beginner in TS.`;
let n: null = null;
let u: undefined = undefined;

//array defining methods
let list1: number[] = [1,2,3];
let list2: Array<number> = [1,2,3];

//tuple
let person1: [string, number] = ['Chris', 22] ;
```

**Uni- Type And Multi types**

```plaintext
//Multi Type
let multiType: numer | boolean;
multiType = 20;
multiType = true;

//Uni Type
let anyType: any;
anyType =20;
anyType = true;
```

Intellisense is supported in multitype but not in uni-type.

You can use any for any type of data but its strongly recommended not to do that. You will lose the main reason why you are using typescript but often you can use it if something is bothering you with a few types.

```plaintext
let name: any;
name = “your_name”;
```

**Functions:** We have to define the types of the parameters in the functions. We can also define the types of data if a function returns any.

```plaintext
functions add(num1: number, num2: number) {
return num1 + num2;
}

add(5,10);
add(5,'10'); //shows error

//optional parameter
functions add(num1: number, num2?: number) {
if(num2 )return num1 + num2;
   else return num1;
}

add(5);
add(5,10);

//default parameter
functions add(num1: number, num2: number = 10) {
if(num2 )return num1 + num2;
   else return num1;
}
add(5); //result = 15
let add = (a: number, b: number): number => {
    
    return a+b;
}

add (5,6)
```

By default, parameters are required.

**Other Method Using Interface**

```plaintext
// use ? to make the parameter optional
interface Person {firstName: string, lastName?: string}

function fullName(person: Person) {
	console.log(`${person.firstName} ${person.lastName}`);
}

let p = {
	firstName: 'Bruce', 
	lastName: 'Wayne'
}
fullName(p);
```

For More Detail watch youtube videos by [Code Evolution](https://www.youtube.com/watch?v=NjN00cM18Z4&ab_channel=ProgrammingwithMosh), Code Camp, [Mosh](https://www.youtube.com/watch?v=NjN00cM18Z4&ab_channel=ProgrammingwithMosh), and Arcademind or read the official [Typescript Docs](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html).

**Step 3:** I use ts-node npm package to run ts code to install ts-node.

```plaintext
npm i  ts-node -d
yarn add –d ts-node
```

To Run the file ts-node “filepath”. Other way is use typescript compiler to compile it to js then run it on node.

```plaintext
npx tsc
```

This script will create a .js file for your .ts file. Which you can run it in node.

NOTE: You can install types for your favorite npm packages by installing types. Syntax:

```plaintext
npm i @types/package_name
```

Example:

```plaintext
npm i @types/node  @types/express @types/react
```

You can ignore types by adding a comment on top of the line of code.

```plaintext
//@ts-ignore
```

### Conclusion:

*Use typescript it’s not mandatory but what it brings to the table is more than worth it. It will improve your coding experience a lot. I want every JS developer to try TS and make their life a little less miserable. Give it a shot it’s not that hard to learn and don’t use it if you don’t like it. You can always use JS in TS too.*