import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { ROUTES } from "../router/routes";
import { useContext, useState } from "react";
import { login, registration } from "../api/userAPI";
import { Context } from "../store/ContextProvider";

export const Auth = () => {   
  const { setUser, setIsAuth, appState } = useContext(Context)
  
  console.log(' appState: ', appState);

  const navigate = useNavigate();
   
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const location = useLocation();
  const isLogin = location.pathname === ROUTES.Login;

  const click = async () => {
    try {
      let data;
      if (isLogin) {
        data = await login(email, password);
      } else {
        data = await registration(email, password);
      }

      setUser(data)
      setIsAuth(!!data)
      navigate(ROUTES.Home)
    } catch (e) {
      alert(e.response.data.message)
    }
  }

  return (
    <div>
      <label htmlFor="email">Email</label>
      <input id="email" onChange={e => setEmail(e.target.value)} value={email}></input>

      <label htmlFor="password">Password</label>
      <input id="password" onChange={e => setPassword(e.target.value)} value={password}></input>

      {isLogin ?
        <div>
            Нет аккаунта? <NavLink to={ROUTES.Registration}>Зарегистрируйся!</NavLink>
        </div>
        :
        <div>
            Есть аккаунт? <NavLink to={ROUTES.Login}>Войдите!</NavLink>
        </div>
      }

      <button
        onClick={click}
      >
        {isLogin ? 'Войти' : 'Регистрация'}
      </button>
    </div>  
  );
};
