# week3-js-objects-exercises
Javascript Objects Exercises - Week 3

## Exercise 1: Create a Simple Object
*Focus on creating static objects and practicing basic property and method usage*

- [x] Create an object named *book* that represents a book with the following properties
  - [x] title 
  - [x] author
  - [x] pages
  - [x] method read() that logs the message "Currently reading [title] by [author]"

## Exercise 2: Build a Constructor Function
*Introduces constructor functions and dynamic creation of objects* 

- [x] Create a constructor function named *Animal* that represents an animal with the following properties:
  - [x] species
  - [x] name
  - [x] sound
  - [x] method makeSound() that logs the message "[name] says [sound]"
  - [x] Create two animals and call their makeSound() method

## Exercise 3: Expand the Blueprint
*Builds on constructors, adds multiple methods, and implements conditional logic to handle graduation* 

- [x] Create a constructor function named *Student* that represents a student with the following properties:
  - [x] name
  - [x] grade
  - [x] subject
  - [x] method introduce() that logs the message "Hi, I am [name], studying [subject] in grade [grade]."
  - [x] method finishesSchoolYear[] that
    - [x] adds 1 to the grade (e.g. from 10 to 11)
    - [x] if the grade reaches 12, it prints "Congratulations, [name] has graduated!" and does *not* increase the grade
  - [x] Create three students and have them introduce themselves and call finishesSchoolYear()
