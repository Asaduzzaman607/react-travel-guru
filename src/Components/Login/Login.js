import * as firebase from "firebase/app";
import "firebase/auth";
import React, { useContext } from 'react';
import { useHistory, useLocation } from "react-router-dom";
import { UserContext } from "../../App";
import firebaseConfig from "./firebase.config";

const Login = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    // to make right way in which route user wanted to go
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    if(firebase.apps.length === 0) { // to avoid repeating initialization
        
          // Initialize Firebase
          firebase.initializeApp(firebaseConfig);


    }

    const handleGoogleSignIn = () => {
          

        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function(result) {
            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            const {displayName, email} = result.user
            const signedInUser = {
                name: displayName,
                email: email,
            }
            setLoggedInUser(signedInUser);
            history.replace(from)
          
          }).catch(function(error) {
            // Handle Errors here.
            const errorMessage = error.message;
            console.log(errorMessage);
          });
    }
    return (
        <div>
            <h1>This is Login</h1>
            <button onClick={handleGoogleSignIn}> Google Sign In</button>
        </div>
    );
};

export default Login;