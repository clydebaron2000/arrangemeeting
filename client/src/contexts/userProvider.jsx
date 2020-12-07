import React, { useState, useEffect } from "react";
import axios from 'axios';
const context = React.createContext({});

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    //   axios.get({
    //       url: "/user",
    //       method: "get",
    //       params: {
    //           foo: "bar"
    //       }
    //   })
      axios.get("/user", { withCredentials: true })
          .then(res => res.json())
          .then(res => setUser(res))
          .catch(err => {
              console.log(err);
          });
  }, []);

  return (
      <context.Provider value={user}>
          {children}
      </context.Provider>
  );
};

UserProvider.context = context;

export default UserProvider;