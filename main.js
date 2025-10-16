
// Exercise 1: Create a Simple Object

const book = {
    title: 'book',
    author: 'author',
    pages: 300,
    read: function() {
        console.log('Currently reading ' + this.title + ' by ' + this.author);
    }
};

//Dot notation to call read method from book object
book.read();
// YAYYYYYYYYYYYYYY

// Exercise 2: Build a Constructor Function

function Animal(species, name, sound) {
    this.species = species;
    this.name = name;
    this.sound = sound;
    this.makeSound = function() {
        console.log(`${this.name} says ${this.sound}.`);
    };
}
const animal1 = new Animal("Cat", "Bella", "Myeaaah");
const animal2 = new Animal("Cat", "Zoie", "MAAAAAAA");

animal1.makeSound();
animal2.makeSound();

//Exercise 3: Expand the Blueprint

function Student(name, grade, subject) {
    this.name = name;
    this.grade = grade;
    this.subject = subject;

    this.introduce = function() {
        console.log(`Hi, i am ${this.name}, studying ${this.subject} in grade ${this.grade}`);
    };

    this.finishesSchoolYear = function() {
        if (this.grade < 12) {
            this.grade +=1;
            console.log()
        } else {
            console.log(`Congratulations, ${this.name} has graduated!`)
        }
    
    };
}

const student1 = new Student("Derek", 20, "no one knows");
const student2 = new Student("Scott", 10, "lacrosse");
const student3 = new Student("Stiles", 10, "general hijinks");

student1.introduce();
student2.introduce();
student3.introduce();

student1.finishesSchoolYear();
student2.finishesSchoolYear();
student3.finishesSchoolYear();

student1.introduce();
student2.introduce();
student3.introduce();