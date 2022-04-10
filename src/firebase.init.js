import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBWDV1EjswaSrkm06yt2d7-OEJxeB3Chjc",
  authDomain: "ema-john-web-728d3.firebaseapp.com",
  projectId: "ema-john-web-728d3",
  storageBucket: "ema-john-web-728d3.appspot.com",
  messagingSenderId: "660924583699",
  appId: "1:660924583699:web:f9a5cbb9dd7a51db4694e6",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
