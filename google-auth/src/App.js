// import logo from "./logo.svg";
import "./App.css";
import socialMediaAuth from "./service/auth";
import { facebookProvider, googleProvider } from "./config/authMethods";
import "firebase/auth";
import firebase from "firebase";

import { useAuthState } from "react-firebase-hooks/auth";

function App() {
  const handleOnClick = async (provider) => {
    const res = await socialMediaAuth(provider);
    console.log(res);
    // console.log(auth);
  };

  const auth = firebase.auth();
  const [user] = useAuthState(auth);

  function SignIn() {
    return (
      <button className="sign-in" onClick={() => handleOnClick(googleProvider)}>
        Google
      </button>
    );
  }

  function SignOut() {
    return (
      auth.currentUser && (
        <button className="sign-out" onClick={() => auth.signOut()}>
          Sign Out
        </button>
      )
    );
  }

  return (
    <div className="App">
      <header>
        <strong>{user ? "sudah login" : "halaman login"}</strong>
      </header>
      <section>
        <div style={{ display: "flex" }}>
          {user? <SignOut /> : <SignIn /> }
          
        </div>
      </section>
    </div>
  );
}

export default App;
