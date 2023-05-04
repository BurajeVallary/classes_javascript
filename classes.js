// Question1

// You are working on a web application for a car rental company. They want to keep track
// of their car inventory and rental information. Your task is to create a JavaScript class or
// function constructor for representing cars in their inventory and another one for
// representing rental information.



// 1) Create a Car class or function constructor that has the following properties:
// a. make (string): The make of the car, e.g., "Toyota".
// b. model (string): The model of the car, e.g., "Camry".
// c. year (number): The year the car was manufactured, e.g., 2020.
// d. isAvailable (boolean): Indicates if the car is currently available for rent.


class Car {
  constructor(make, model, year, isAvailable) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.isAvailable = isAvailable;
  }

  toggleAvailability() {
    this.isAvailable = !this.isAvailable;
  }
}



const cars = new Car("V8", "Navy", 2018, true);
console.log(cars.make); 
console.log(cars.year); 
console.log(cars.isAvailable);

cars.toggleAvailability();
console.log(cars.isAvailable); 




// Create a Rental class or function constructor that has the following properties:
// ● car (Car object): The car that has been rented.
// ● renterName (string): The name of the person who rented the car.
// ● rentalStartDate (Date object): The start date of the rental period.
// ● rentalEndDate (Date object): The end date of the rental period.
// The Rental class or function constructor should also have a method called
// calculateRentalDuration that returns the rental duration in days.


class Rental{
    constructor(car,renterName,rentalStartDate,rentalEndDate){
        this.car = car
        this.renterName = renterName
        this.rentalStartDate = rentalStartDate
        this.rentalEndDate = rentalEndDate
        
    }
    calculateRentalDuration() {
        const startdate = new Date(this.rentalStartDate);
        const enddate = new Date(this.rentalEndDate);
        const xtime = Math.abs(enddate - startdate);
        const xdays = Math.ceil(xtime / (1000*60*60*24));
        return xdays;
      }
}
const Cars = new Car("V8", "Navy", 2018, true);
const rental = new Rental(Cars, "Vallary Buraje", "2023-12-11", "2023-11-12");
console.log(rental.renterName); 
console.log(rental.calculateRentalDuration()); 




// Create an instance of the Car class or function constructor for a car in the
// inventory. Then, create an instance of the Rental class or function constructor for
// a rental involving the car you created. Finally, calculate the rental duration using
// the calculateRentalDuration method.



//  Car class
const car = new Car("Mazda", "Demio", 2019, true);

//  Rental class involving the car created
const rentals = new Rental(car, "Vallary Buraje", "2023-12-11", "2023-11-12");

// Calculate the rental duration using the calculateRentalDuration method
const rentalDuration = rentals.calculateRentalDuration();

console.log(`The rental duration is ${rentalDuration} days.`); 




// Question 2
// You are building a simple quiz app that contains multiple-choice questions. Your task is
// to create two JavaScript classes: Question and Quiz. The Question class will represent
// individual questions, and the Quiz class will manage a collection of questions and the
// user's progress.


// 1. Create a Question class with the following properties:
// ● text(string): The text of the question.
// ● options(array): An array containing the multiple-choice options.
// ● correctAnswer(string): The correct answer to the question.
// The Question class should also have a method called checkAnswer that takes a
// user's answer as a parameter and returns true if the answer is correct and false
// otherwise.


class Question {
    constructor(text,options,correctAnswer){
        this.text = text
        this.options = options
        this.correctAnswer = correctAnswer
    }

    checkAnswer(userAnswer){
        return userAnswer ===this.correctAnswer
    }
}


const   quiz  = new Question(
  "What city is known as The Eternal city?"
     ["Rome", "Paris", "France", "China"],
     "Rome"
)

console.log(quiz.text); 
console.log(quiz.options); 
console.log(quiz.correctAnswer); 
console.log(quiz.checkAnswer("Rome")); 
console.log(quiz.checkAnswer("China")); 



// Create a Quiz class with the following properties:
// ● questions(array):An array of Question objects.
// ● currentQuestionIndex(number): The index of the current question in the
// questions array.
// ● score(number): The user’s current score.
// The Quiz class should have the following methods:
// ● addQuestion: Takes a Question object as a parameter and adds it to the
// questions array.
// ● nextQuestion: Advances to the next question in the quiz by incrementing the
// currentQuestionIndex.
// ● submitAnswer: Takes a user's answer as a parameter, checks if the answer is
// correct using the checkAnswer method of the Question class, and updates the
// score if the answer is correct.



class Quiz {
  constructor(questions,currentQuestionIndex,score) {
    this.questions = [];
    this.currentQuestionIndex = 0;
    this.score = 0;
  }

  addQuestion(question) {
    this.questions.push(question);
  }

  nextQuestion() {
    this.currentQuestionIndex++;
  }

  submitAnswer(userAnswer) {
    const currentQuestion = this.questions[this.currentQuestionIndex];
    if (currentQuestion.checkAnswer(userAnswer)) {
      this.score++;
    }
  }
}


const quizs = new Quiz();

const quiz1 = new Question(
 "What is the capital of Kenya?"
  ["Nairobi", "Eldoret", "Nakuru", "Meru"],
  "Nairobi"
);
const quiz2 = new Question(
  "What is the largest continent in the world?",
  ["Asia", " Europe", "Africa", "South America"],
  "Asia"
);

quizs.addQuestion(quiz1);
quizs.addQuestion(quiz2);

quizs.submitAnswer("Nairobi");
quizs.nextQuestion();
quizs.submitAnswer("Asia");

console.log(quiz1.score); 