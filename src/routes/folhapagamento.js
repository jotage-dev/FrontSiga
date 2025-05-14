import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import miniloginimg from '../images/prefeitura.png';


function Folhapagamento() {
  const [data, setData] = useState([])


  useEffect(() => {
    axios.get('http://localhost:3001/getprojetocompleto')
      .then(res => {
        if (res.data.Status === "Success") {
          setData(res.data.Result);
        } else {
          alert("Error")
        }
      })
      .catch(err => console.log(err));
  }, [])


  const handleDelete = (id) => {
    axios.delete('http://localhost:3001/delete/' + id)
      .then(res => {
        if (res.data.Status === "Success") {
          window.location.reload(true);
        } else {
          alert("Error")
        }
      })
      .catch(err => console.log(err));
  }


  const [filteredData, setFilteredData] = useState(data);
  const search = (e) => setFilteredData(data.filter((item) => item.nomeprojeto.includes(e.target.value)));


  return (
    <div className='px-5 py-3'>
      <div className='d-flex justify-content-center mt-2'>
        <h3>Consulta projetos e suas etapas</h3>


      </div>
      <Link to="/" className='btn btn-danger ml-0 px-5 g-5 me-2'>Dashboard</Link>
      <Link to="/employee" className='btn btn-warning px-5 g-5 me-2'>Retorna projeto</Link>

      <div className='mt-3'>
        <div className="input-group mb-2 col">
          <span className="input-group-text bg-primary text-white" id="basic-addon1 mt-2">Pesquisa estruturada</span>
          <input type="text"
            className="form-control"
            placeholder='Pesquisar pelo nome do projeto'
            autoComplete='on'
            onKeyUp={search} />
        </div>
      </div>

      {filteredData.map((user) => (
        <div key={user.id} className='containerficha'>


          <div className="cardespecial">

            <div className="row">
              <div className='col-6'>
                <button onClick={() => handleDelete(user.id)}>
                  <img src={miniloginimg} alt='pessoa' />
                </button>
              </div>
            </div>

            <div className="row">
              <div className='col'>
                <p>Nome do projeto:<span className='status'>{user.nomeprojeto}</span></p>
              </div>
            </div>

            <div className="row">
              <div className='col'>
                <p>Secretaria:<span>{user.secretaria}</span> </p>
              </div>
              <div className='col'>
                <p>Gestor:<span>{user.gestorprocesso}</span></p>
              </div>
            </div>



            <div className="row">
              <div className='col'>
                <p>Descrição:<span>{user.descricao}</span></p>
              </div>
            </div>


            <div className="row">
              <div className='col-6'>
                <p>Etapa:<span>{user.etapa1}</span></p>
              </div>
              <div className='col'>
                <p>Início:<span>{user.datainicioetapa1}</span></p>
              </div>
              <div className='col'>
                <p>Fim:<span>{user.datafimetapa1}</span></p>
              </div>
              <div className='col'>
                <p>Fim:<span>{user.situacaoetapa1}</span></p>
              </div>
            </div>

            <div className="row">
              <div className='col-6'>
                <p>Etapa:<span>{user.etapa2}</span></p>
              </div>
              <div className='col'>
                <p>Início:<span>{user.datainicioetapa2}</span></p>
              </div>
              <div className='col'>
                <p>Fim:<span>{user.datafimetapa2}</span></p>
              </div>
              <div className='col'>
                <p>Fim:<span>{user.situacaoetapa2}</span></p>
              </div>
            </div>

            <div className="row">
              <div className='col-6'>
                <p>Etapa:<span>{user.etapa3}</span></p>
              </div>
              <div className='col'>
                <p>Início:<span>{user.datainicioetapa3}</span></p>
              </div>
              <div className='col'>
                <p>Fim:<span>{user.datafimetapa3}</span></p>
              </div>
              <div className='col'>
                <p>Fim:<span>{user.situacaoetapa3}</span></p>
              </div>
            </div>

            <div className="row">
              <div className="col-6">
                <p>Etapa:<span>{user.etapa4}</span></p>
              </div>
              <div className="col">
                <p>Início:<span>{user.datainicioetapa4}</span></p>
              </div>
              <div className="col">
                <p>Fim:<span>{user.datafimetapa4}</span></p>
              </div>
              <div className='col'>
                <p>Fim:<span>{user.situacaoetapa4}</span></p>
              </div>
            </div>

            <div className="row">
              <div className='col-6'>
                <p>Etapa:<span>{user.etapa5}</span></p>
              </div>
              <div className='col'>
                <p>Início:<span>{user.datainicioetapa5}</span></p>
              </div>
              <div className='col'>
                <p>Fim:<span>{user.datafimetapa5}</span></p>
              </div>
              <div className='col'>
                <p>Fim:<span>{user.situacaoetapa5}</span></p>
              </div>
            </div>

            <div className="row">
              <div className='col-6'>
                <p>Etapa:<span>{user.etapa6}</span></p>
              </div>
              <div className='col'>
                <p>Início:<span>{user.datainicioetapa6}</span></p>
              </div>
              <div className='col'>
                <p>Fim:<span>{user.datafimetapa6}</span></p>
              </div>
              <div className='col'>
                <p>Fim:<span>{user.situacaoetapa6}</span></p>
              </div>
            </div>

          </div>
        </div>
      ))
      }

    </div >
  )
}

export default Folhapagamento