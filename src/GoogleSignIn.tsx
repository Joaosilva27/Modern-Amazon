import { auth, GoogleAuthProvider } from "../firebaseConfig"; // Adjust path as necessary
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router";

const GoogleSignIn = () => {
  const navigate = useNavigate();
  const handleGoogleSignIn = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);

      const user = result.user;
      console.log("User Info:", user);

      navigate("/");
      // You can now do something with the user info, like saving it to your state
      // e.g., saving to Redux, Context API, or local state
    } catch (error) {
      console.error("Error during sign-in:", error);
    }
  };

  return (
    <div>
      <button onClick={handleGoogleSignIn} className="google-sign-in-btn">
        Sign In with Google
      </button>
    </div>
  );
};

export default GoogleSignIn;
