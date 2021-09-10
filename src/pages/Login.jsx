import { AuthContext } from '../context/AuthContext';
import React, { useContext } from 'react';
import MyButton from '../UI/button/MyButton';
import MyInput from '../UI/input/MyInput';

const Login = () => {
  const { setIsAuth } = useContext(AuthContext);

  const submit = e => {
    e.preventDefault();
    setIsAuth(true);
    localStorage.setItem('auth', 'true');
  };

  return (
    <div>
      <h1>Страница для входа</h1>
      <form onSubmit={submit}>
        <MyInput type="text" placeholder="Введите логин" />
        <MyInput type="password" placeholder="Введите пароль" />
        <MyButton>Войти</MyButton>
      </form>
    </div>
  );
};

export default Login;
