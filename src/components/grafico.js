import "./styles.css";
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


function Grafico() {
   
    const [data, setData] = useState([])
    const [dados, setDados] = useState([])
    const [dato, setDato] = useState([])
    const [nomeprojeto, setNomeprojeto] = useState([])
    const [nomesecretaria, setSecretaria] = useState([])
     const [employee, setemployee] = useState({
            secretaria: "",
            nomeprojeto: "",
            descricao: "",
            prioridade: "",
            gestor: "",
            tipo: "",
            valorestimado: "",
            prazoestimado: "",
            equipelocada: "",
            arquivo: "",
            codigoprojeto: ""
        });



    useEffect(() => {
        axios.get('http://localhost:3001/getnomeprojeto')
            .then(res => {
                if (res.data.Status === "Success") {
                    setData(res.data.Result);
                } else {
                    alert("Error")
                }
            })
            .catch(err => console.log(err));
    }, [])




    useEffect(() => {
        axios.get('http://localhost:3001/getnomesecretaria')
            .then(res => {
                if (res.data.Status === "Success") {
                    setDados(res.data.Result);
                } else {
                    alert("Error")
                }
            })
            .catch(err => console.log(err));
    }, [])





    useEffect(() => {
        axios.get('http://localhost:3001/getEmployee')
            .then(res => {
                if (res.data.Status === "Success") {
                    setDato(res.data.Result);
                } else {
                    alert("Error")
                }
            })
            .catch(err => console.log(err));
    }, [])

    const [filteredData, setFilteredData] = useState(dato);
    const search = (e) => setFilteredData(dato.filter((item) => item.nomeprojeto.includes(e.target.value)));


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
    
    const teste = (id) => {
    axios.get("http://localhost:3001/get/" + id)
            .then(res => {
                console.log(res.data.Result[0])
                setemployee(res.data.Result[0]);
            })
            .catch(err => console.log(err))
    }
   console.log(employee)


    return (
        <div className='col'>

            <label className="test-label">Nome</label>
            <select className='form-control'
                value={nomeprojeto}
                onChange={(e) => { setNomeprojeto(e.target.value) }} >

                <option value="Default">Escolher o nome do projeto</option>
                {
                    data.map((employee) => <option>{employee.nomeprojeto}</option>)
                }
            </select>


            <label className="test-label ">Secretaria</label>
            <select className='form-control'
                value={nomesecretaria}
                onChange={(e) => { setSecretaria(e.target.value) }}>
                <option value="Default">Escolher o nome da secretaria</option>
                {
                    dados.map((employee, index) => <option key={index}>{employee.nomesecretaria}</option>)
                }
            </select>

            <div className="input-group mb-2 col">
                <span className="input-group-text bg-primary text-white" id="basic-addon1">Pesquisa estruturada</span>
                <input type="text"
                    className="form-control"
                    placeholder='Pesquisar instância - inicial maiúscula'
                    autoComplete='off'
                    onKeyUp={search} />
            </div>

            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Secretaria</th>
                        <th>Projeto</th>
                        <th>Descrição</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredData.map((employee, index) => {
                        return <tr key={index}>
                            <td>{employee.id}</td>
                            <td>{employee.secretaria}</td>
                            <td>{employee.nomeprojeto}</td>
                            <td>{employee.descricao}</td>
                            <td>
                                <Link to={`/editemployee/` + employee.id} className='btn btn-primary btn-sm me-2'>edit</Link>
                                <button onClick={e => teste(employee.id)} className='btn btn-sm btn-info'>teste</button>
                                <button onClick={e => handleDelete(employee.id)} className='btn btn-sm btn-danger'>delete</button>
                            </td>
                        </tr>
                    })}
                </tbody>
            </table>



s

        </div>

    )
};

export default Grafico