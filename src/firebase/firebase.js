// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyDIws2tNgm9wEhFaNY5qipnqOB_gQ7elfw",
	authDomain: "budgetsoftware-2dfd9.firebaseapp.com",
	projectId: "budgetsoftware-2dfd9",
	storageBucket: "budgetsoftware-2dfd9.appspot.com",
	messagingSenderId: "649386517690",
	appId: "1:649386517690:web:232bc2d36817f074e9ce83",
	measurementId: "G-VG823J2RQE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export { app };
