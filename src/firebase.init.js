// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAqj8mE018WGt6YuhA32_aLcpqA3DcEFeE",
  authDomain: "genius-car-services-d9cb4.firebaseapp.com",
  projectId: "genius-car-services-d9cb4",
  storageBucket: "genius-car-services-d9cb4.appspot.com",
  messagingSenderId: "912055615373",
  appId: "1:912055615373:web:62a6c58ccf06ecad8b07c4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
