import './navbar.scss';
import logo from '../../assets/img/logo.svg';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../redux/sliceUser';
const Navbar = () => {
   const isAuth = useSelector(state => state.user.isAuth);
   const dispatch = useDispatch();

   return (
      <div className='navbar' >
         <div className='container' >

            <img src={logo} alt="" />
            <div className='navbar__header' >MERN CLOUD</div>

            {!isAuth && <div className='navbar__login' > <NavLink to="/login" > Войти </NavLink> </div>}
            {!isAuth && <div className='navbar__registration' > <NavLink to="/registration" > Регистрация </NavLink> </div>}
            {isAuth && <div className='navbar__login' onClick={() => dispatch(logOut())}> Выйти </div>}

         </div>
      </div>
   )
}

export default Navbar;