import { useState } from "react";
import Input from "../../utils/input/Input";
import { registration } from "../../action/user";
import './registration.scss';
const Registration = () => {
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   return (
      <div className='registration' >
         <div className='registration__header' >Регистрация</div>
         <Input value={email} setValue={setEmail} type='text' placeholder='Логин' />
         <Input value={password} setValue={setPassword} type='password' placeholder='Пароль' />

         <button
            className='registration__btn'
            onClick={() => registration(email, password)}
            type="button">
            Войти </button>
      </div>
   )
}

export default Registration;