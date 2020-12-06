import React from 'react';
import userContext from '../../contexts/userProvider';
import api from '../../utils/api';
import axios from 'axios';

import { GoogleLogin } from 'react-google-login';
// refresh token
import { refreshTokenSetup } from '../../utils/refreshToken';

const clientId =
  '1044672665890-qlajs0slr507go3i8fit0klbnkb9scv0.apps.googleusercontent.com';

function Login() {
  const onSuccess = (res) => {
    console.log('Login Success: currentUser:', res.profileObj);
    let testuser = res.profileObj.googleId;
    let testpass = res.profileObj.imageUrl;
    api.searchUser(res.profileObj.googleId)
    .then(res => {
      console.log("Response: ",res);
      if(res.data[0]) {
          console.log("This user exists");
          axios.post('/login', {
            email: testuser,
            password: testpass
        }, { withCredentials: true })
        .then(res => {
            console.log('Login Response: ', res);
            if(res.status === 200) {
                window.location = '/create';
            }
        }).catch(error => {
            console.log('Login Error: ', error);
        })
      } else {
        api.postUser({email: testuser, password: testpass})
        .then(res => {
          axios.post('/login', {
            email: testuser,
            password: testpass
          }, { withCredentials: true })
          .then(res => {
            console.log('Login Response: ', res);
            if(res.status === 200) {
                window.location = '/create';
            }
        }).catch(error => {
            console.log('Login Error: ', error);
        })
        })
      }
    })
    refreshTokenSetup(res);
  };

  const onFailure = (res) => {
    console.log('Login failed: res:', res);
    alert(
      `Failed to login.`
    );
  };

  return (
    <div>
      <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        style={{ marginTop: '100px' }}
        isSignedIn={true}
      />
    </div>
  );
}

export default Login;