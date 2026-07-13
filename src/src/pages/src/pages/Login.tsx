import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";

function Login() {
  const navigate = useNavigate();

  const login = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);

      navigate("/dashboard");
    } catch (error) {
      console.error(error);
      alert("Login failed");
    }
  };

  return (
    <div
      style={{
        background: "#0f172a",
        color: "white",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h1>🚀 Flincho AI</h1>
      <p>Your AI Assistant</p>

      <button
        onClick={login}
        style={{
          padding: "15px 30px",
          borderRadius: "10px",
          border: "none",
          cursor: "pointer",
          background: "#2563eb",
          color: "white",
        }}
      >
        Sign in with Google
      </button>
    </div>
  );
}

export default Login;