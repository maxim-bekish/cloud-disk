import { useState } from "react";
import Input from "../../utils/input/Input";
import { login } from "../../action/user";
import { useDispatch } from "react-redux";
import './authorization.scss';
const Login = () => {
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');

   const dispatch = useDispatch();
   return (
      <div className='authorization' >
         <div className='authorization__header' >Авторизация</div>
         <Input value={email} setValue={setEmail} type='text' placeholder='Логин' />
         <Input value={password} setValue={setPassword} type='password' placeholder='Пароль' />

         <button
            className='authorization__btn'
            onClick={() =>dispatch(login(email, password))}
            type="button">
            Войти
         </button>
      </div>
   )
}

export default Login;