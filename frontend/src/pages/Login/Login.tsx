import "./Login.scss";

import { useState } from "react";
import { useNavigate  } from "react-router-dom";

import { useDispatch } from "react-redux";
import { setUserAuthInfoAction } from "../../redux/appActions";

// Components import
import { CTAButton } from "../../components/CTAButton/CTAButton";
import { TextInput } from "../../components/TextInput/TextInput";

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const dispatch = useDispatch()
  const navigate = useNavigate();

  const handleConnect = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:3001/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const res  = await response.json();
        dispatch(setUserAuthInfoAction({ userAuthInfo: res }));
        localStorage.setItem('token', res.token);
        setError('');
        navigate('/products'); 
      } else {
        const { error } = await response.json();
        setError(error);}
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="Login">
      <form className="Login__Form" onSubmit={handleConnect}>
        <div className="Login__Inputs">
          <TextInput placeholder="Email *" value={email} onChange={e => setEmail(e.target.value)} />
          <TextInput placeholder="Mot de passe *" type="password" value={password} onChange={e => setPassword(e.target.value)} />
        </div>
        <div className="Login__Error">{error}</div>
        <div className="Login__Button">
          <CTAButton name="Connexion" type="submit" />
        </div>
      </form>
    </div>
  );
};
