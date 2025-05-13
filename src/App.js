
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/login";
import SignUp from "./components/signup";
import { RequireToken } from './components/Auth.js'

import Dashboard from "./components/dashboard";
import Home from "./components/home";

import Employee from "./components/employee";
import AddEmployee from "./components/addemployee";
import EditEmployee from './components/editemployee';

import Folhapagamento from "./components/folhapagamento.js";

import ProjetoCompleto from "./components/projetocompleto.js";
import AddProjetoCompleto from "./components/addprojetocompleto.js";
import EditProjetoCompleto from "./components/editprojetocompleto.js";
import ViewProjetoCompleto from "./components/viewprojetocompleto.js";


import Grafico from "./components/grafico";
import Fichaprojeto from "./components/fichaprojeto.js";
import Graficobarra from "./components/graficobarra.js";

import Gantt2 from "./components/gantt2.js";
import Gantt3 from "./components/gantt3.js";
import Gantt4 from "./components/gantt4.js";

import Secretaria from "./components/secretaria.js";
import Fichasecretario from "./components/fichasecretario.js";
import EditSecretaria from "./components/editsecretaria.js";
import Perfil from "./components/perfil.js";


function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />

          <Route path='/' element={
            <RequireToken>
              <Dashboard />
            </RequireToken>
          }>
            <Route path='' element={<Home />}></Route>

            <Route path='/employee' element={<Employee />}></Route>
            <Route path='/create' element={<AddEmployee />}></Route>
            <Route path='/editemployee/:id' element={<EditEmployee />}></Route>

            <Route path='/Gantt4/:id' element={<Gantt4 />}></Route>

            <Route path='/projetocompleto' element={<ProjetoCompleto />}></Route>
            <Route path='/createprojetocompleto' element={<AddProjetoCompleto />}></Route>
            <Route path='/editprojetocompleto/:id' element={<EditProjetoCompleto />}></Route>
            <Route path='/viewprojetocompleto/:id' element={<ViewProjetoCompleto />}></Route>
            <Route path='/Gantt3/:id' element={<Gantt3 />}></Route>


            <Route path='/folhapagamento' element={<Folhapagamento />}></Route>
            
            <Route path='/gantt2' element={<Gantt2 />}></Route>
            <Route path='/gantt4' element={<Gantt4 />}></Route>
            <Route path='/grafico' element={<Grafico />}></Route>

            <Route path='/secretaria' element={<Secretaria />}></Route>
            <Route path='/editsecretaria/:id' element={<EditSecretaria />}></Route>
            <Route path='/fichasecretario' element={<Fichasecretario />}></Route>
            <Route path='/perfil' element={<Perfil />}></Route>

            <Route path='/fichaprojeto' element={<Fichaprojeto />}></Route>
            <Route path='/graficobarra' element={<Graficobarra />}></Route>


          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
