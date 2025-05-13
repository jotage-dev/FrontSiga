import React, { useState } from "react"
import axios from 'axios'
import './styles.css';
import loginimg from './logo.jpg';
import { Link } from 'react-router-dom'


function Secretaria() {

    const [nomesecretaria, setNomesecretaria] = useState("");
    const [secretario, setSecretario] = useState("");
    const [formacao, setFormacao] = useState("");
    const [dataregistro, setDataregistro] = useState("");
    const [file, setFile] = useState();
    const [msg, setMsg] = useState("");

    const upload = () => {
        const formData = new FormData()
        formData.append("nomesecretaria", nomesecretaria);
        formData.append("secretario", secretario);
        formData.append("formacao", formacao);
        formData.append("dataregistro", dataregistro);
        formData.append('file', file)
        axios.post('http://localhost:3001/createsecretaria', formData)
            .then((response) => {
                console.log(response);
                if (response.data.Status === 'Success') {
                    setMsg("Cadastro efetuado com sucesso");
                } else {
                    setMsg("Error");
                }
            })
            .catch(er => console.log(er))
    }


    // calculo da diferença entre datas

    // var start = datainicio;
    // var end = datafinal;
    // start = new Date(start);
    // end = new Date(end);
    // var k = Math.abs(end - start);
    // var l = 1000 * 60 * 60 * 24;
    // var m = k/l;
    // console.log(l);
    // console.log(k);

    //console.log (m)

    return (
        <main>
            <form className='container'>


                <div className="main-container">
                    <div className='containerdashboard'>
                    
                        <h2><img src={loginimg} alt="" className="grafico" />
                        <span>  Cadastro das Secretarias </span> </h2>

                        <div className="input-dividido">
                            <Link to="/fichasecretario" className='btn btn-info'>Relação Secretarias</Link>
                            <Link to="/perfil" className='btn btn-warning'>Perfil Secretário</Link>
                        </div>

                        <div className="input-dividido">
                            <div className='col'>
                                <label className="form-label">Nome da Secretaria</label>
                                <input type="text"
                                    className="form-control"
                                    placeholder='Digite o nome da Secretaria'
                                    autoComplete='off'
                                    onChange={(e) => { setNomesecretaria(e.target.value) }} />
                            </div>


                            <div className='col'>
                                <label className="form-label">Nome do Secretário</label>
                                <input type="text"
                                    className="form-control"
                                    placeholder='Digite o nome do Secretário'
                                    autoComplete='off'
                                    onChange={(e) => { setSecretario(e.target.value) }} />
                            </div>
                        </div>

                        <div className="input-dividido">
                            <div className='col'>
                                <label className="form-label">Formação do Secretário</label>
                                <input type="text"
                                    className="form-control"
                                    placeholder='Digite a formação do Secretário'
                                    autoComplete='off'
                                    onChange={(e) => { setFormacao(e.target.value) }} />
                            </div>

                            <div className='col'>
                                <label className="form-label">Data do cadastro</label>
                                <input type="date"
                                    className="form-control"
                                    placeholder='Digite a data do cadastro'
                                    autoComplete='off'
                                    onChange={(e) => { setDataregistro(e.target.value) }} />
                            </div>
                        </div>

                        <div className="input-container">
                            <input className="form-control form-control-lg" type="file" onChange={(e) => setFile(e.target.files[0])} />
                        </div>

                        <button type="button" className="submit-button" onClick={upload}>Cadastrar SECRETARIA</button>

                    </div>
                    <h2>{msg}</h2>
                </div>
            </form>
        </main>
    )
}

export default Secretaria;