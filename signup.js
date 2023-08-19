// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAUQ8d0NJFeL7X5NrDKuIdGGw5xxJqw_nY",
  authDomain: "main-project-8cf34.firebaseapp.com",
  databaseURL: "https://main-project-8cf34-default-rtdb.firebaseio.com",
  projectId: "main-project-8cf34",
  storageBucket: "main-project-8cf34.appspot.com",
  messagingSenderId: "673995134140",
  appId: "1:673995134140:web:34ec8fcf2b7f692ab8acb9",
  measurementId: "G-60G97R2WYS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

var name = document.getElementById("name");
var did = document.getElementById("did");
var email = document.getElementById("email");
var password = document.getElementById("password");
var confirmpassword = document.getElementById("confirmpassword");
window.signup = function (e) {
  if (password)
    if (
      name.value == "" ||
      did.value == "" ||
      email.value == "" ||
      password.value == ""
    ) {
      alert("All Field Are Required");
    }
  if (password.value == confirmpassword.value) {
  } else {
    alert("Password Confirmation is Wrong");
    return false;
  }

  e.preventDefault();
  var obj = {
    name: name.value,
    did: did.value,
    email: email.value,
    password: password.value,
  };

  createUserWithEmailAndPassword(auth, obj.email, obj.password)
    .then(function (success) {
      window.location.replace("new.html");
      // console.log(success.user.uid)
      alert("signup successfully");
    })
    .catch(function (err) {
      alert("Error in " + err);
    });

  console.log(obj);
};
