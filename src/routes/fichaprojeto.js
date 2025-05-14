import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import grafico from '../images/grafico.png';


const Fichaprojeto = () => {
    const [data, setData] = useState([])
    const [concluido, setConcluido] = useState([])
    const [emandamento, setEmandamento] = useState([])
    const [naoiniciado, setNaoiniciado] = useState([])
    const [atrasado, setAtrasado] = useState([])
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

    axios.get('http://localhost:3001/getconcluido')
        .then(res => {
            setConcluido(res.data[0].concluido)
        }).catch(err => console.log(err));



    axios.get('http://localhost:3001/getemandamento')
        .then(res => {
            setEmandamento(res.data[0].emandamento)
        }).catch(err => console.log(err));



    axios.get('http://localhost:3001/getnaoiniciado')
        .then(res => {
            setNaoiniciado(res.data[0].naoiniciado)
        }).catch(err => console.log(err));



    axios.get('http://localhost:3001/getatrasado')
        .then(res => {
            setAtrasado(res.data[0].atrasado)
        }).catch(err => console.log(err));




    const [filteredData, setFilteredData] = useState(data);
    const search = (e) => setFilteredData(data.filter((item) => item.nomeprojeto.includes(e.target.value)));




    return (
        <div className='px-5 py-3'>
            <div className='d-flex justify-content-center mt-2'>
                <h3>Ficha do PROJETO</h3>
            </div>

            <Link to="/employee" className='btn btn-info px-5 g-5 me-2'>Retorna projeto</Link>
            

            <div className='main-cards'>
                <div className='card'>
                    <div className='card-inner'>
                        <h3>CONCLUÍDO</h3>
                        <img src={grafico} alt="" className="usuario" />
                    </div>
                    <h1> Total: {concluido}</h1>
                </div>

                <div className='card'>
                    <div className='card-inner'>
                        <h3>EM ANDAMENTO</h3>
                        <img src={grafico} alt="" className="usuario" />
                    </div>
                    <h1> Total: {emandamento}</h1>
                </div>

                <div className='card'>
                    <div className='card-inner'>
                        <h3>NÃO INICIADO</h3>
                        <img src={grafico} alt="" className="usuario" />
                    </div>
                    <h1> Total: {naoiniciado}</h1>
                </div>

                <div className='card'>
                    <div className='card-inner'>
                        <h3>ATRASADO</h3>
                        <img src={grafico} alt="" className="usuario" />
                    </div>
                    <h1> Total: {atrasado}</h1>
                </div>

            </div>




            <div className='mt-3'>

                <div className="input-group mb-2 col">
                    <span className="input-group-text bg-primary text-white" id="basic-addon1">Pesquisa estruturada</span>
                    <input type="text"
                        className="form-control"
                        placeholder='Pesquisar nome do projeto'
                        autoComplete='off'
                        onKeyUp={search} />
                </div>

                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Secretaria</th>
                            <th>Projeto</th>
                            <th>Data Inicio</th>
                            <th>Data fim</th>
                            <th>Situação</th>

                        </tr>
                    </thead>
                    <tbody>
                        {filteredData.map((employee, index) => {
                            return <tr key={index}>
                                <td>{employee.secretaria}</td>
                                <td>{employee.nomeprojeto}</td>
                                <td>{employee.datainicioetapa1}</td>
                                <td>{employee.datafimetapa6}</td>
                                <td>{employee.situacaoetapa1}</td>
                                <td>
                                </td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        </div>



    )
}

export default Fichaprojeto