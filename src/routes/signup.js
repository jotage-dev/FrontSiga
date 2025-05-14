//C:\react-js\my-app\src\components\signup.js
import { useState } from "react";
import Axios from "axios";
import loginimg from '../images/logo.jpg';
import figuraemail from '../images/email.png';
import senha from '../images/password.png';
import usuario from '../images/usuario.png';
import '../css/styles.css';


const SignUp = () => {

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [registerStatus, setRegisterStatus] = useState("");

  const register = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:3001/register", {
      email: email,
      name: name,
      password: password,
    }).then((response) => {
      console.log(response);
      if (response.data.message) {
        setRegisterStatus(response.data.message);
      } else {
        setRegisterStatus("Conta criada com sucesso");
      }
    })
  }
  return (

    <div className="container-principal">
      <form className="containerdashboardlogin">
        <div className="col-12">

          <div className="logologin">
            <img src={loginimg} alt="" className="img-fluid" />
          </div>
          <h1 className="letralogin">Crie a sua conta</h1>

          <h1>{registerStatus}</h1>

          <div className="form-outline mb-4">

            <div>
              <img width="40" height="40" src={usuario} alt="lock--v1" />
            </div>
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Entre com seu nome"
              onChange={(e) => { setName(e.target.value) }} required />
          </div>

          <div>
            <img width="40" height="40" src={figuraemail} alt="user--v1" />
          </div>
          <div className="form-outline mb-4">
            <input
              type="email"
              placeholder="Entre com o seu email"
              className="form-control form-control-lg"
              onChange={(e) => { setEmail(e.target.value) }} required />
          </div>

          <div>
            <img width="40" height="40" src={senha} alt="lock--v1" />
          </div>
          <div className="form-outline mb-3">
            <input
              type="password"
              className="form-control form-control-lg"
              placeholder="Entre com a sua senha"
              onChange={(e) => { setPassword(e.target.value) }} required />

          </div>

          <div className="d-flex justify-content-between align-items-center">
           
            <p className="small fw-bold mt-2 pt-1 mb-0 text-white "></p>
          </div>

          <div className="text-center text-white mt-4 pt-2">
            <button type="button" className="btn btn-primary btn-lg" onClick={register}>Cadastre-se</button>
            <p className="small fw-bold mt-2 pt-1 mb-0">Login para sua conta <a href="login" className="link-danger">Login</a></p>
          </div>
        </div>
      </form >
    </div >
  );
};

export default SignUp;
