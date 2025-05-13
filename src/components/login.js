//C:\react-js\my-app\src\components\login.js
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom'
import loginimg from './logo.jpg';
import { setToken } from './Auth.js'
import figuraemail from './email.png';
import senha from './password.png';
import './styles.css';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState('')
  const navigate = useNavigate()

  const login = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3001/login", {
      email: email,
      password: password,
    })
      .then(res => {
        console.log(res);
        if (res.data.Status === 'Success') {
          console.log(res.data.Token);
          setToken(res.data.Token)
          navigate('/');
        } else {
          setError(res.data.Error);
        }
      })
      .catch(err => console.log(err));
  }
 
  return (
    <div className="container-principal">
      <form className="containerdashboardlogin">

        <div className="col-12">
          
          <p style={{ color: 'white', fontSize: '20px', textAlign: 'center', marginTop: '20px' }}>PREFEITURA MUNICIPAL DE GUARATINGUETÁ</p>
          <div className="logologin">
            <img src={loginimg} alt="" className="img-fluid" />
          </div>

          <h1 className="letralogin">Entrar na Plataforma</h1>

          <h1 style={{ color: 'red', fontSize: '20px', textAlign: 'center', marginTop: '20px' }}>{error && error}</h1>

          <img width="40" height="40" src={figuraemail} alt="user--v1" />

          <div>
            <input
              type="email"
              className="input-containerlogin"
              placeholder="Digitar o email"
              onChange={(e) => { setEmail(e.target.value) }} required />
          </div>

          <img width="40" height="40" src={senha} alt="lock--v1" />

          <div>
            <input
              type="password"
              className="input-containerlogin"
              placeholder="Senha"
              onChange={(e) => { setPassword(e.target.value) }} required />
          </div>

          <div className="letraloginesqueceu">
            <a href="signup">Esqueci minha senha - RECADASTRAR</a>
          </div>

          <button type="button" className="submit-button" onClick={login}>Entrar</button>

          <div className="register-link">
            <p>Não está cadastrado? <a href="signup">Cadastrar</a></p>
          </div>

        </div>

      </form>
    </div>
  );
};

export default Login;

