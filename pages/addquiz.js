//DATABASE

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-analytics.js";
import { getDatabase,set,ref,push } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js";
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
var db=getDatabase()


var question=document.getElementById("question");
var option=document.getElementById("option");
var optionsParent=document.getElementById("optionsParent");
var correctAnswerElement=document.getElementById("correctAnswer");

var options=[];
var correctAnswer;

function renderOptions(){
    optionsParent.innerHTML = "";
for (var i=0; i<options.length;i++){
    optionsParent.innerHTML += `<li onclick="setCorrectAnswer('${options[i]}')" class="p-2 bg-light fs-5 rounded shadow my-2">${options[i]}</li>`
}
}
// ADD QUESTION
window.addQuestion=function(){
options.push(option.value)
console.log(options);
renderOptions();
}

//CORRECT ANSWER
window.setCorrectAnswer=function(a){
correctAnswer=a;
correctAnswerElement.innerHTML=correctAnswer;

}

window.submitQuestion=function(){
    var obj ={
        question: question.value,
        option: options,
        correctAnswer: correctAnswer
    }

    obj.id=push(ref(db,'questions/')).key

    var reference = ref(db, `questions/${obj.id}`)
    set(reference,obj)
    console.log(obj);
}