//DATABASE

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-analytics.js";
import { getDatabase,ref,onChildAdded } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
 var firebaseConfig = {
  apiKey: "AIzaSyBqBRxZfLrcMiI7QEJxaD6hI2e4BLPOXRg",
  authDomain: "quizappwithfirebase-85006.firebaseapp.com",
  projectId: "quizappwithfirebase-85006",
  storageBucket: "quizappwithfirebase-85006.appspot.com",
  messagingSenderId: "1040515716274",
  appId: "1:1040515716274:web:ec9a820c8fe259013ce5ab",
  measurementId: "G-066X8NKFCR"
};

// Initialize Firebase
var app = initializeApp(firebaseConfig);
var analytics = getAnalytics(app);
var DATABASE=getDatabase();

var loader=document.getElementById("loader");
var showQuestion=document.getElementById("showQuestion");


function getDataFromDatabase(){
loader.style.display="block"
showQuestion.style.display="none"

  var reference= ref(DATABASE,'questions/') //questions/
  onChildAdded(reference,function(data){
    console.log(data.val())
    questions.push(data.val())
    loader.style.display="none"
    showQuestion.style.display="block"
    renderQuestion()
  })
}
getDataFromDatabase()



var questions = [
    // {
    //   question: "What is the Full Form Of HTML?",
    //   options: [
    //     "HyperText Makeup Language",
    //     "HyperText Markup Language",
    //     "HyperText Markup Lame",
    //     "HyperTate Markup Language",
    //   ],
    //   answer: "HyperText Markup Language",
    // },
    // {
    //   question: "CSS stands for?",
    //   answer: "Cascading Style Sheet",
    //   options: [
    //     "Common Style Sheet",
    //     "Colorful Style Sheet",
    //     "Computer Style Sheet",
    //     "Cascading Style Sheet",
    //   ],
    // },
    // {
    //   question: "PHP stands for?",
    //   answer: "Hypertext Preprocessor",
    //   options: [
    //     "Hypertext Preprocessor",
    //     "Hypertext Programming",
    //     "Hypertext Preprogramming",
    //     "Hometext Preprocessor",
    //   ],
    // },
    // {
    //   question: "SQL stands for?",
    //   answer: "Structured Query Language",
    //   options: [
    //     "Stylish Question Language",
    //     "Stylesheet Query Language",
    //     "Statement Question Language",
    //     "Structured Query Language",
    //   ],
    // },
    // {
    //   question: "When was JavaScript launched?",
    //   answer: "1995",
    //   options: ["1996", "1995", "1994", "None of the Above"],
    // },
  ];

  // RENDER
  var currentQuestion=document.getElementById("currentQuestion");
  var totalQuestion=document.getElementById("totalQuestion");
  var question=document.getElementById("question");
  var answerParent=document.getElementById("answerParent");

  var indexNumber = 0;
  var score=0;

  function renderQuestion(){
    currentQuestion.innerHTML=indexNumber+1;
    totalQuestion.innerHTML=questions.length;
    // console.log(currentQuestion);
    var obj=questions[indexNumber];
    question.innerHTML=obj.question;
    answerParent.innerHTML="";
    for(var i=0; i<obj.options.length; i++){
        answerParent.innerHTML+=`<div class="col-md-4">
        <div class="py-2">
        <button onclick="checkQuestion('${obj.options[i]}','${obj.correctAnswer}')" class="btn btn-dark fs-4 rounded-pill w-100">${obj.options[i]}</button></div>
    </div>`


    }
}
  renderQuestion();

  //NEXT QUESTION
window.nextQuestion=function(){
if(indexNumber+1 == questions.length){
alert("Your Score is "+score)
}
else{
  indexNumber++;
  renderQuestion()
}
}


//CHECK QUESTION
window.checkQuestion=function(a,b){
  if(a==b){
      score++
     
  }
  nextQuestion();
}


  




  
  
  