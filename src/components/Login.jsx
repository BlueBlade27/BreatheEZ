import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-analytics.js";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";
import { useNavigate } from 'react-router-dom';

const firebaseConfig = {
  apiKey: "AIzaSyA8wWemahM0H5Cd6_TrHq1K_u6x9x1fbHY",
  authDomain: "breatheez-login.firebaseapp.com",
  projectId: "breatheez-login",
  storageBucket: "breatheez-login.appspot.com",
  messagingSenderId: "379457365328",
  appId: "1:379457365328:web:830587fdf5f284375bb855",
  measurementId: "G-1DE54DX7EH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

const Login = ({ setIsLoggedIn }) => {
    const navigate = useNavigate();
  
    const handleLogin = () => {
      setIsLoggedIn(true);
      navigate('/');
    };
// sign in consts
const submitButton = document.getElementById("submit");
const signupButton = document.getElementById("sign-up");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const main = document.getElementById("main");
const createacct = document.getElementById("create-acct");

// sign up consts
const signupEmailIn = document.getElementById("email-signup");
const signupPasswordIn = document.getElementById("password-signup");
const confirmSignUpPasswordIn = document.getElementById(
  "confirm-password-signup"
);
const createacctbtn = document.getElementById("create-acct-btn");

let email, password, signupEmail, signupPassword, confirmSignUpPassword;



createacctbtn.addEventListener("click", function () {
  let isVerified = true;

  signupEmail = signupEmailIn.value;

  signupPassword = signupPasswordIn.value;
  confirmSignUpPassword = confirmSignUpPasswordIn.value;
  if (signupPassword != confirmSignUpPassword) {
    window.alert("Your passwords do not match. Please try again.");
    isVerified = false;
  }

  if (
    signupEmail == null ||
    signupPassword == null ||
    confirmSignUpPassword == null
  ) {
    window.alert("Please fill all the boxes.");
    isVerified = false;
  }

  if (isVerified) {
    createUserWithEmailAndPassword(auth, signupEmail, signupPassword)
      .then((userCredential) => {
        const user = userCredential.user;
        window.alert("Account Created!");
        window.location.href = '/'; // Redirect to the main app
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        window.alert("Error occured. Try again.");
      });
  }
});

if (submitButton) {
    submitButton.addEventListener("click", function (e) {
      e.preventDefault();
      email = emailInput.value;
      password = passwordInput.value;
  
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          window.alert("Welcome back! :)");
          // Set isLoggedIn to true in your app's state management
          // For example, if using React context:
          // setIsLoggedIn(true);
          window.location.href = '/'; // Redirect to the main app
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          window.alert("Error! Try again.");
        });
    });
  }
  

if (signupButton) {
  signupButton.addEventListener("click", function () {
    main.style.display = "block";
    createacct.style.display = "none";
  });
}
}