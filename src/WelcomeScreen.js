import React from 'react';
import './WelcomeScreen.css';
function WelcomeScreen(props) {
  return props.showWelcomeScreen ? (
    <div className="WelcomeScreen">
      <h1>Welcome to the Meet app</h1>
      <h4>
        Log in to see upcoming events around the world for full-stack developers
      </h4>
      <div className="login-button" align="center">
        <div className="google-btn-welcomeScreen">
          <div className="google-icon-wrapper">
            <img
              className="google-icon"
              src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Log
o.svg"
              alt="Google sign-in"
            />
          </div>
          <button
            onClick={() => {
              props.getAccessToken();
            }}
            rel="nofollow noopener"
            className="btn-text-welcomeScreen"
            // href="https://accounts.google.com/o/oauth2/v2/auth?access_type=offline&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fcalendar.readonly&response_type=code&client_id=357748427640-qkauu9ve0v93imrri5upg697a4o3jc9p.apps.googleusercontent.com&redirect_uri=https%3A%2F%2FHalehGhavami.github.io%2Fmeet-app"
          >
            <b>Sign in with google</b>
          </button>
        </div>
      </div>
      <a
        href="https://halehghavami.github.io/meet-app/privacy.html"
        rel="nofollow noopener"
        className="privacy"
      >
        Privacy policy
      </a>
    </div>
  ) : null;
}

export default WelcomeScreen;
