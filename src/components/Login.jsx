import React from 'react';
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../firebase';
import { useNavigate } from 'react-router-dom';

const Login = ({ setIsAuth }) => {
  const navigete = useNavigate();
  const loginInWithGoogle = () => {
    // Googleでログイン

    localStorage.setItem('isAuth', true);
    setIsAuth(true);
    navigete('/');
    // signInWithPopup(auth, provider).then((result) => {
    //   localStorage.setItem("isAuth", true);
    //   setIsAuth(true);
    //   navigete("/");
    // });
  };
  return (
    <div>
      <p>ログイン</p>
      <button onClick={loginInWithGoogle}>Googleでログイン</button>
    </div>
  );
};

export default Login;
