
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-analytics.js";

  import { getAuth ,createUserWithEmailAndPassword ,signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBOzG8mfMsGRvqXw_q5NuzwhLJkHsqNltU",
    authDomain: "hina-4a51e.firebaseapp.com",
    projectId: "hina-4a51e",
    storageBucket: "hina-4a51e.firebasestorage.app",
    messagingSenderId: "561721511933",
    appId: "1:561721511933:web:e34cdda7269139e9b11394",
    measurementId: "G-1L7FLPQRXR"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);


  
export {getAuth,createUserWithEmailAndPassword, signInWithEmailAndPassword}