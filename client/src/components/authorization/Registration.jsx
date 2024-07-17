import { useState } from "react";
import Input from "../../utils/input/Input";
import { registration } from "../../action/user";
import './authorization.scss';
const Registration = () => {
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   return (
      <div className='authorization' >
         <div className='authorization__header' >Регистрация</div>
         <Input value={email} setValue={setEmail} type='text' placeholder='Логин' />
         <Input value={password} setValue={setPassword} type='password' placeholder='Пароль' />

         <button
            className='authorization__btn'
            onClick={() => registration(email, password)}
            type="button">
            Зарегистрироваться
         </button>
      </div>
   )
}

export default Registration;