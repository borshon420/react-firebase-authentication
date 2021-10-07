import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import './App.css';
import initializeAuthentication from './Firebase/Firebase.init';

initializeAuthentication();
const googleProvider = new GoogleAuthProvider();

function App() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const auth = getAuth();
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
    .then(result =>{
      const user = result.user
      console.log(user)
    })
  }

  const handleEmailChange = e => {
    setEmail(e.target.value)
  }

  const handlePasswordChange = e => {
    setPassword(e.target.value)
  }

  const handleRegistation = e => {
      console.log(email, password)
      createUserWithEmailAndPassword(auth, email, password)
      .then(result => {
        const user = result.user
        console.log(user)
      })
      e.preventDefault();
  }
  return (
    <div className="mx-5">
      <form onSubmit={handleRegistation}>
        <h3 className="text-primary">Please Register</h3>
  <div className="row mb-3">
    <label htmfor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
    <div className="col-sm-10">
      <input onBlur={handleEmailChange} type="email" className="form-control" id="inputEmail3" required/>
    </div>
  </div>
  <div className="row mb-3">
    <label htmfor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
    <div className="col-sm-10">
      <input onBlur={handlePasswordChange}type="password" className="form-control" id="inputPassword3" required/>
    </div>
  </div>
  <div className="row mb-3">
    <div className="col-sm-10 offset-sm-2">
      <div className="form-check">
        <input className="form-check-input" type="checkbox" id="gridCheck1" />
        <label className="form-check-label" htmfor="gridCheck1">
          Example checkbox
        </label>
      </div>
    </div>
  </div>
  <button type="submit" className="btn btn-primary">Register</button>
</form>
      <div>------------------------------------</div>
      <br /><br /><br />
      <button onClick={handleGoogleSignIn}>Google Sign In</button>
    </div>
  );
}

export default App;
