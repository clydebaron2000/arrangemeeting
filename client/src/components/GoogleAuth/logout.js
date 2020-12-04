import React from 'react';
import { GoogleLogout } from 'react-google-login';

const clientId =
  '1044672665890-qlajs0slr507go3i8fit0klbnkb9scv0.apps.googleusercontent.com';

function Logout() {
  const onSuccess = () => {
    console.log('Logout made successfully');
    window.location = '/';
  };

  return (
    <div>
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
      ></GoogleLogout>
    </div>
  );
}

export default Logout;