
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./routes/login";
import SignUp from "./routes/signup";
import { RequireToken } from './routes/Auth.js'

import Dashboard from "./routes/dashboard";
import Home from "./routes/home";

import Employee from "./routes/employee";
import AddEmployee from "./routes/addemployee";
import EditEmployee from './routes/editemployee';

import Folhapagamento from "./routes/folhapagamento.js";

import ProjetoCompleto from "./routes/projetocompleto.js";
import AddProjetoCompleto from "./routes/addprojetocompleto.js";
import EditProjetoCompleto from "./routes/editprojetocompleto.js";
import ViewProjetoCompleto from "./routes/viewprojetocompleto.js";


import Grafico from "./routes/grafico";
import Fichaprojeto from "./routes/fichaprojeto.js";
import Graficobarra from "./routes/graficobarra.js";

import Gantt2 from "./routes/gantt2.js";
import Gantt3 from "./routes/gantt3.js";
import Gantt4 from "./routes/gantt4.js";

import Secretaria from "./routes/secretaria.js";
import Fichasecretario from "./routes/fichasecretario.js";
import EditSecretaria from "./routes/editsecretaria.js";
import Perfil from "./routes/perfil.js";


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
