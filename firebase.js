import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from "https://www.gstatic.com/firebasejs/11.9.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDl9fQ0cQgP-k7MM9GZHQtXC0SLwAgzjso",
  authDomain: "flincho-ai.firebaseapp.com",
  projectId: "flincho-ai",
  storageBucket: "flincho-ai.firebasestorage.app",
  messagingSenderId: "329462520131",
  appId: "1:329462520131:web:b5c38fa19a8db98499b7f6"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

window.auth = auth;
window.createUserWithEmailAndPassword = createUserWithEmailAndPassword;
window.signInWithEmailAndPassword = signInWithEmailAndPassword;
window.signOut = signOut;