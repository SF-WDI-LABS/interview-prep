# Technical Interview Prep

## Tips
### Variable names

Naming variables well shows that you write readable, semantic code. Don’t name variables “string”, “array”, “number”, “integer”, “object”, “hash,” or anything that might be a reserved word in a language:
  * [JS reserved words](http://www.javascripter.net/faq/reserved.htm)

  * [Ruby reserved words]( http://www.java2s.com/Code/Ruby/Language-Basics/Rubysreservedwords.htm)

Naming a variable by the data type it will hold is far more likely to generate an error and/or confuse you as you move through a solution. Interviewers are looking to see if you’re thoughtful in naming variables. Naming a variable “string” is sure to show that you don’t prioritize clarity in naming your variables.

### Test your code

When you whiteboard, you can write a column to the right of the code to write down/track the current value of any variables that change as the code runs. If you’re looping, you can make more columns to track each pass through the loop! This will show your interviewer you understand the code you wrote. It shows that you can read and write code at a higher level.

### Come prepared

Bring 2-3 pieces of code you can fully explain! If somebody wants to look at your code, it’d be great to show that you understand how data flows through your project. Showing a single method is great, but showing what route calls it, and what impact it has on the view shows off your full stack skills!

### Know core native methods
Get to know the properties and useful native methods for strings and arrays. It’s usually safe to assume there’s a built in method for common actions, for example:

- toUpperCase, includes, charAt for strings
- slice, push, pop, includes, indexOf for arrays

Start with JS (more manageable) and assume Ruby has all of those methods and more. Resources:
  - [JS Strings docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#Methods_2)
  - [JS Arrays docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Methods_2)
  - [Ruby strings docs](https://ruby-doc.org/core-2.2.0/String.html)
  - [Ruby arrays docs](https://ruby-doc.org/core-2.2.0/Array.html)


### Pay attention to your `return` value!

Make sure that you return the type that the interviewer asks for. It looks careless to return an array when the task asks for a string.

Return breaks you out of a method. Don’t return until you have fully processed the value you want to return. If you have a return in the middle of a loop, that loop will cease to run and won’t process the input any further. Sometimes that’s what you want, but often, you want to return at the END of a  


### Know the exact syntax:
  * **for loops** - the i stands for index and is just a number to keep track of how many times you’ve gone through the loop. It doesn’t refer to the location in the string or the array that you’re scanning. `arr[i]` or `str[i]` refers to the element or character at the `i`th position of the array/string.
  * **Conditionals**, also known as if/else
      - else is not required. If you want to do something in one case and simply continue to loop if that condition isn’t true, you do not need an else.


## Interview Process Steps

1. Clarify question using a sample input and output.  This is a great time to note any edge cases you see and to make sure you understand the question correctly.
To confirm, if you were to give me the string `'apple'`, you would expect this function to return the object `{ 'a':1, 'p':2, 'l':1, 'e':1}`?
And if you were to give me a string like '! !', would you want that to output counts for all the characters (`{'!':2, ' ':1}`), or just the non-whitespace, or none of those since they aren't letters?
2. Pseudocode so you _and the interviewer_ can focus on logic first.
I'm going to start with pseudocode, and I can transition to JavaScript after.
3. Test your pseudocode with your sample input and output.
4. Check in with your interviewer.  They may have more edge cases for you to handle. They may ask you about runtime (Big O).  They may just want you to move on to syntactically-correct code.
5. Write syntactically-correct code. Take a second look at syntax after you finish a draft.
6. Test your syntactically-correct code with your input and output.
7. Your interviewer will often ask you about Big O at an earlier step. If you’re feeling confident, though, now is a good time to offer.


## Interview questions we have asked you

* isPalindrome //is the string a palindrome?
* arePermutations(str1, str2) //are these two strings permutations of one another?
* [remove duplicate characters from a string](http://thatjsdude.com/interview/js1.html#removeDuplicateChar)
* Fibonacci sequence generator - given `n`, return the `n`th Fibonacci number
* Mumbling. Given a string `abcd` return `A-Bb-Ccc-Dddd`. The `n`th letter in the alphabet will be replaced by `n` copies of itself, with the first capitalized.
* Build a bubble sort algorithm from scratch.
* Remove Duplicates from an Array
* Compare Strings.
* Factorial: given a number `n` you should be able to return `n` factorial (`n!`).
* Shorten an article’s text to a 40-character preview, but don’t include any word that is cut in the middle. (For "This string is a bit longer than 40 characters..." you would return "This string is a bit longer than 40" instead of "This string is a bit longer than 40 char".)
* I run a site where authors can submit “choose your own adventure” stories.  Design a system that will let us automatically check how many decisions a reader has to make before the quickest “happy” ending. You should design the data structure to hold the stories, as well.



## Resources
* [A few previous cohort resources](https://github.com/SF-WDI-LABS?utf8=%E2%9C%93&query=interview)
* [JS dude practice problems](http://thatjsdude.com/interview/js1.html)
* [JS dude JavaScript language specifics](http://thatjsdude.com/interview/js2.html)
* [SitePoint JavaScript interview questions](https://www.sitepoint.com/5-javascript-interview-exercises/)


## Today's challenges

1. What is `this` in JavaScript?
1. Consider the following code:

  ```js
  console.log(typeof null);
  console.log(typeof {});
  console.log(typeof []);
  console.log(typeof undefined);
  ```
  What’s the output?

1. In JavaScript, what is the prototype of `{}`? Give an example of prototypal inheritance and explain how it works.

1. From a unsorted array, check whether there are any two numbers in the array that will sum up to a given number. If there are, return true, otherwise, return false.

1. Given a string, return an array of all of the unique permutations of that string. 
