// login.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-analytics.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";

const firebaseConfig = {
  // Your Firebase configuration here
  apiKey: "AIzaSyAUQ8d0NJFeL7X5NrDKuIdGGw5xxJqw_nY",
  authDomain: "main-project-8cf34.firebaseapp.com",
  databaseURL: "https://main-project-8cf34-default-rtdb.firebaseio.com",
  projectId: "main-project-8cf34",
  storageBucket: "main-project-8cf34.appspot.com",
  messagingSenderId: "673995134140",
  appId: "1:673995134140:web:34ec8fcf2b7f692ab8acb9",
  measurementId: "G-60G97R2WYS"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();

var email = document.getElementById("email");
var password = document.getElementById("password");

window.login = function (e) {
  e.preventDefault();
  var obj = {
    email: email.value,
    password: password.value,
  };

  signInWithEmailAndPassword(auth, obj.email, obj.password)
    .then(function (success) {
      alert("Logged in Successfully");
      var aaaa = success.user.uid;
      localStorage.setItem("uid", aaaa);
      console.log(aaaa);

      // Redirect to coursepage.html after successful login
      window.location.replace('/course.html');
    })
    .catch(function (err) {
      alert("Login error: " + err);
    });

  console.log(obj);
};
