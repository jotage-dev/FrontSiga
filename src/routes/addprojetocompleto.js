import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'
import '../css/styles.css';
;

function AddProjetoCompleto() {
    const [secretaria, setSecretaria] = useState("");
    const [nomeprojeto, setNomeprojeto] = useState("");
    const [gestorprojeto, setGestorprojeto] = useState("");
    const [etapa1, setEtapa1] = useState("");
    const [datainicioetapa1, setDatainicioetapa1] = useState("");
    const [datafimetapa1, setDatafimetapa1] = useState("");
    const [prazoetapa1, setPrazoetapa1] = useState("");
    const [situacaoetapa1, setSituacaoetapa1] = useState("");
    const [etapa2, setEtapa2] = useState("");
    const [datainicioetapa2, setDatainicioetapa2] = useState("");
    const [datafimetapa2, setDatafimetapa2] = useState("");
    const [prazoetapa2, setPrazoetapa2] = useState("");
    const [situacaoetapa2, setSituacaoetapa2] = useState("");
    const [etapa3, setEtapa3] = useState("");
    const [datainicioetapa3, setDatainicioetapa3] = useState("");
    const [datafimetapa3, setDatafimetapa3] = useState("");
    const [prazoetapa3, setPrazoetapa3] = useState("");
    const [situacaoetapa3, setSituacaoetapa3] = useState("");
    const [etapa4, setEtapa4] = useState("");
    const [datainicioetapa4, setDatainicioetapa4] = useState("");
    const [datafimetapa4, setDatafimetapa4] = useState("");
    const [prazoetapa4, setPrazoetapa4] = useState("");
    const [situacaoetapa4, setSituacaoetapa4] = useState("");
    const [etapa5, setEtapa5] = useState("");
    const [datainicioetapa5, setDatainicioetapa5] = useState("");
    const [datafimetapa5, setDatafimetapa5] = useState("");
    const [prazoetapa5, setPrazoetapa5] = useState("");
    const [situacaoetapa5, setSituacaoetapa5] = useState("");
    const [etapa6, setEtapa6] = useState("");
    const [datainicioetapa6, setDatainicioetapa6] = useState("");
    const [datafimetapa6, setDatafimetapa6] = useState("");
    const [prazoetapa6, setPrazoetapa6] = useState("");
    const [situacaoetapa6, setSituacaoetapa6] = useState("");
    const [registerStatus, setRegisterStatus] = useState("");

    const navigate = useNavigate()

    const createprojetocompleto = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3001/createprojetocompleto", {
            secretaria: secretaria,
            nomeprojeto: nomeprojeto,
            gestorprojeto: gestorprojeto,
            etapa1: etapa1,
            datainicioetapa1: datainicioetapa1,
            datafimetapa1: datafimetapa1,
            prazoetapa1: prazoetapa1,
            situacaoetapa1: situacaoetapa1,
            etapa2: etapa2,
            datainicioetapa2: datainicioetapa2,
            datafimetapa2: datafimetapa2,
            prazoetapa2: prazoetapa2,
            situacaoetapa2: situacaoetapa2,
            etapa3: etapa3,
            datainicioetapa3: datainicioetapa3,
            datafimetapa3: datafimetapa3,
            prazoetapa3: prazoetapa3,
            situacaoetapa3: situacaoetapa3,
            etapa4: etapa4,
            datainicioetapa4: datainicioetapa4,
            datafimetapa4: datafimetapa4,
            prazoetapa4: prazoetapa4,
            situacaoetapa4: situacaoetapa4,
            etapa5: etapa5,
            datainicioetapa5: datainicioetapa5,
            datafimetapa5: datafimetapa5,
            prazoetapa5: prazoetapa5,
            situacaoetapa5: situacaoetapa5,
            etapa6: etapa6,
            datainicioetapa6: datainicioetapa6,
            datafimetapa6: datafimetapa6,
            prazoetapa6: prazoetapa6,
            situacaoetapa6: situacaoetapa6,
        }).then((response) => {
            // setRegisterStatus(response);
            console.log(response);
            if (response.data.message) {
                setRegisterStatus(response.data.message);
            } else {
                navigate('/')
                alert("Success");
            }
        })
            .catch(err => console.log(err));
    }


    function difdatas() {
        var start = datafimetapa1;
        var end = datainicioetapa1;
        start = new Date(start);
        end = new Date(end);
        var k = Math.abs(end - start);
        var l = 1000 * 60 * 60 * 24;

        function id(valor_campo) {
            return document.getElementById(valor_campo)
        }

        var total = k / l;
        id("calctempo").value = total.toFixed(2);

        var start2 = datafimetapa2;
        var end2 = datainicioetapa2;
        start2 = new Date(start2);
        end2 = new Date(end2);
        var k2 = Math.abs(end2 - start2);
        var l2 = 1000 * 60 * 60 * 24;
        var total2 = total + (k2 / l2);
        id("calctempo2").value = total2.toFixed(2);

        var start3 = datafimetapa3;
        var end3 = datainicioetapa3;
        start3 = new Date(start3);
        end3 = new Date(end3);
        var k3 = Math.abs(end3 - start3);
        var l3 = 1000 * 60 * 60 * 24;
        var total3 = total2 + (k3 / l3);
        id("calctempo3").value = total3.toFixed(2);

        var start4 = datafimetapa4;
        var end4 = datainicioetapa4;
        start4 = new Date(start4);
        end4 = new Date(end4);
        var k4 = Math.abs(end4 - start4);
        var l4 = 1000 * 60 * 60 * 24;
        var total4 = total3 + (k4 / l4);
        id("calctempo4").value = total4.toFixed(2);

        var start5 = datafimetapa5;
        var end5 = datainicioetapa5;
        start5 = new Date(start5);
        end5 = new Date(end5);
        var k5 = Math.abs(end5 - start5);
        var l5 = 1000 * 60 * 60 * 24;
        var total5 = total4 + (k5 / l5);
        id("calctempo5").value = total5.toFixed(2);


        var start6 = datafimetapa6;
        var end6 = datainicioetapa6;
        start6 = new Date(start6);
        end6 = new Date(end6);
        var k6 = Math.abs(end6 - start6);
        var l6 = 1000 * 60 * 60 * 24;
        var total6 = total5 +(k6 / l6);
        id("calctempo6").value = total6.toFixed(2);


        console.log(total)
        console.log(total2)
        console.log(total3)
        console.log(total4)
        console.log(total5)
        console.log(total6)
    }


    return (

        <form className='container'>
            <h2>ADICIONAR UM NOVO PROJETO</h2>
            <div className='fs-1 px-5 py-3'>
                <Link to="/" className='btn btn-info px-5 g-5 me-2'>Dashboard</Link>
                <Link to="/employee" className='btn btn-warning px-5 g-5 me-2'>Retorna projeto</Link>
                <Link to="/fichaprojeto" className='btn btn-secondary'>Ficha do projeto</Link>
            </div>
            <div className="main-container">
                <div className='containerdashboard'>
                    <h1>{registerStatus}</h1>

                    <div className="input-dividido">

                        <div className='col'>
                            <label className="form-label">Secretaria</label>
                            <select
                                type="text"
                                className="form-control"
                                placeholder='Digite o nome da secretaria'
                                autoComplete='off'
                                onChange={(e) => { setSecretaria(e.target.value) }}>
                                <option value="Default">Digitar o nome da secretaria</option>
                                <option value="Chefia de Gabinete">Chefia de Gabinete</option>
                                <option value="Secretaria de Politica para Mulheres">Secretaria de Políticas para Mulheres</option>
                                <option value="Secretaria de Administração">Secretaria de Administração</option>
                                <option value="Secretaria da Obras">Secretaria de Obras</option>
                                <option value="Secretaria da Agricultura">Secretaria da Agricultura</option>
                                <option value="Secretaria de Governo">Secretaria de Governo</option>
                                <option value="Secretaria de Meio Ambiente">Secretaria de Meio Ambiente</option>
                                <option value="Secretaria de Planejamento">Secretaria de Planejamento</option>
                                <option value="Secretaria de Industria e Comércio">Secretaria de Industria e Comércio</option>
                                <option value="Secretaria de Relações Institucionais">Secretaria de Relações Institucionais</option>
                                <option value="Secretaria da Educação">Secretaria de Educação</option>
                                <option value="Secretaria da Saúde">Secretaria de Saúde</option>
                                <option value="Secretaria de Turismo">Secretaria de Turismo</option>
                                <option value="Secretaria de Segurança e Mobilidade Urbana">Secretaria de Segurança e Mobilidade Urbana</option>
                                <option value="Secretaria de Assistência Social">Secretaria de Assistência Social</option>
                                <option value="Secretaria da Cultura">Secretaria da Cultura</option>
                                <option value="Secretaria de Esportes e Lazer">Secretaria de Esportes e Lazer</option>
                                <option value="Secretaria de Justiça e Cidadania">Secretaria de Justiça e Cidadania</option>
                                <option value="SAEG">SAEG</option>
                                <option value="CODESG">CODESG</option>
                                <option value="Assessoria de Promoção Social">Assessoria de Promoção Social</option>
                                <option value="Assessoria de Projetos Legislativos">Assessoria de Projetos Legislativos</option>
                                <option value="Assessoria de Geração de Empregos e Renda">Assessoria de Geração de Empregos e Renda</option>
                                <option value="Assessor Especial de Relações Publicitárias e Imprensa">Assessor Especial de Relações Publicitárias e Imprensa</option>
                                <option value="Assessoria Especial de Defesa Civil">Assessoria Especial de Defesa Civil</option>
                            </select>
                        </div>

                        <div className='col'>
                            <label className="form-label">Nome do projeto</label>
                            <input type="text"
                                className="form-control"
                                placeholder='Digite o nome do projeto'
                                autoComplete='off'
                                onChange={(e) => { setNomeprojeto(e.target.value) }} />
                        </div>
                    </div>

                    <div className="input-dividido">
                        <div className='col'>
                            <label className="form-label">Etapa 1 do projeto</label>
                            <select
                                type="text"
                                className="form-control"
                                placeholder='Digite a etapa do projeto'
                                autoComplete='off'
                                onChange={(e) => { setEtapa1(e.target.value) }}>
                                <option value="Default">Escolher a etapa do projeto</option>
                                <option value="1 - Estruturação do projeto">1 - Estruturação do projeto</option>
                                <option value="2 - Elaboração do TdR/projeto e orçamento">2 - Elaboração do TdR/projeto e orçamento</option>
                                <option value="3 - Processo licitatório">3 - Processo licitatório</option>
                                <option value="4 - Assinatura do contrato">4 - Assinatura do contrato</option>
                                <option value="5 - Acompanhamento contratual">5 - Acompanhamento contratual</option>
                                <option value="6 - Prestação de contas e lições aprendidas">6 -  Prestação de contas e lições aprendidas</option>
                            </select>
                        </div>

                        <div className='col'>
                            <label className="form-label">Data de início do projeto</label>
                            <input type="date"
                                className="form-control"
                                placeholder="Digite a data de início do projeto"
                                autoComplete='off'
                                onChange={(e) => { setDatainicioetapa1(e.target.value) }} />
                        </div>


                        <div className='col'>
                            <label className="form-label">Data de término da etapa 1</label>
                            <input type="date"
                                className="form-control"
                                placeholder="Digite a data de término da etapa 1"
                                autoComplete='off'
                                onChange={(e) => { setDatafimetapa1(e.target.value) }} />
                        </div>
                    </div>

                    <div className="input-dividido">
                        <div className='col'>
                            <label className="form-label">Prazo da etapa 1</label>
                            <input type="number"
                                className="form-control"
                                placeholder="Digite o prazo da da etapa 1"
                                id="calctempo"
                                autoComplete='off'
                                onChange={(e) => { setPrazoetapa1(e.target.value) }} />
                        </div>

                        <div className='col'>
                            <label className="form-label">Situação da etapa do projeto</label>
                            <select
                                type="text"
                                className="form-control"
                                placeholder='Digite a situação da etapa do projeto'
                                autoComplete='off'
                                onChange={(e) => { setSituacaoetapa1(e.target.value) }}>
                                <option value="Default">Escolher a situação do projeto</option>
                                <option value="Não iniciado">Não iniciado</option>
                                <option value="Em andamento">Em andamento</option>
                                <option value="Concluído">Concluído</option>
                                <option value="Atrasado">Atrasado</option>
                            </select>
                        </div>
                    </div>

                    <div className="input-dividido">
                        <div className='col'>
                            <label className="form-label">Etapa 2 do projeto</label>
                            <select
                                type="text"
                                className="form-control"
                                placeholder='Digite a etapa do projeto'
                                autoComplete='off'
                                onChange={(e) => { setEtapa2(e.target.value) }}>
                                <option value="Default">Escolher a etapa do projeto</option>
                                <option value="1 - Estruturação do projeto">1 - Estruturação do projeto</option>
                                <option value="2 - Elaboração do  TdR/projeto e orçamento">2 - Elaboração do  TdR/projeto e orçamento</option>
                                <option value="3 - Processo licitatório">3 - Processo licitatório</option>
                                <option value="4 - Assinatura do contrato">4 - Assinatura do contrato</option>
                                <option value="5 - Acompanhamento contratual">5 - Acompanhamento contratual</option>
                                <option value="6 - Prestação de contas e lições aprendidas">6 -  Prestação de contas e lições aprendidas</option>
                            </select>
                        </div>

                        <div className='col'>
                            <label className="form-label">Data de início da etapa 2</label>
                            <input type="date"
                                className="form-control"
                                placeholder="Digite a data de início da etapa 2"
                                autoComplete='off'
                                onChange={(e) => { setDatainicioetapa2(e.target.value) }} />
                        </div>


                        <div className='col'>
                            <label className="form-label">Data de término da etapa 2</label>
                            <input type="date"
                                className="form-control"
                                placeholder="Digite a data de término da etapa 2"
                                autoComplete='off'
                                onChange={(e) => { setDatafimetapa2(e.target.value) }} />
                        </div>
                    </div>


                    <div className="input-dividido">
                        <div className='col'>
                            <label className="form-label">Prazo da etapa 2</label>
                            <input type="number"
                                className="form-control"
                                placeholder="Digite o prazo da da etapa 2"
                                id='calctempo2'
                                autoComplete='off'
                                onChange={(e) => { setPrazoetapa2(e.target.value) }} />
                        </div>

                        <div className='col'>
                            <label className="form-label">Situação da etapa do projeto</label>
                            <select
                                type="text"
                                className="form-control"
                                placeholder='Digite a situação da etapa do projeto'
                                autoComplete='off'
                                onChange={(e) => { setSituacaoetapa2(e.target.value) }}>
                                <option value="Default">Escolher a situação do projeto</option>
                                <option value="Não iniciado">Não iniciado</option>
                                <option value="Em andamento">Em andamento</option>
                                <option value="Concluído">Concluído</option>
                                <option value="Atrasado">Atrasado</option>
                            </select>
                        </div>
                    </div>

                    <div className="input-dividido">
                        <div className='col'>
                            <label className="form-label">Etapa 3 do projeto</label>
                            <select
                                type="text"
                                className="form-control"
                                placeholder='Digite a etapa do projeto'
                                autoComplete='off'
                                onChange={(e) => { setEtapa3(e.target.value) }}>
                                <option value="Default">Escolher a etapa do projeto</option>
                                <option value="1 - Estruturação do projeto">1 - Estruturação do projeto</option>
                                <option value="2 - Elaboração do  TdR/projeto e orçamento">2 - Elaboração do  TdR/projeto e orçamento</option>
                                <option value="3 - Processo licitatório">3 - Processo licitatório</option>
                                <option value="4 - Assinatura do contrato">4 - Assinatura do contrato</option>
                                <option value="5 - Acompanhamento contratual">5 - Acompanhamento contratual</option>
                                <option value="6 - Prestação de contas e lições aprendidas">6 -  Prestação de contas e lições aprendidas</option>
                            </select>
                        </div>

                        <div className='col'>
                            <label className="form-label">Data de início da etapa 3</label>
                            <input type="date"
                                className="form-control"
                                placeholder="Digite a data de início da etapa 3"
                                autoComplete='off'
                                onChange={(e) => { setDatainicioetapa3(e.target.value) }} />
                        </div>


                        <div className='col'>
                            <label className="form-label">Data de término da etapa 3</label>
                            <input type="date"
                                className="form-control"
                                placeholder="Digite a data de término da etapa 3"
                                autoComplete='off'
                                onChange={(e) => { setDatafimetapa3(e.target.value) }} />
                        </div>
                    </div>

                    <div className="input-dividido">
                        <div className='col'>
                            <label className="form-label">Prazo da etapa 3</label>
                            <input type="number"
                                className="form-control"
                                placeholder="Digite o prazo da da etapa 3"
                                 id='calctempo3'
                                autoComplete='off'
                                onChange={(e) => { setPrazoetapa3(e.target.value) }} />
                        </div>

                        <div className='col'>
                            <label className="form-label">Situação da etapa do projeto</label>
                            <select
                                type="text"
                                className="form-control"
                                placeholder='Digite a situação da etapa do projeto'
                                autoComplete='off'
                                onChange={(e) => { setSituacaoetapa3(e.target.value) }}>
                                <option value="Default">Escolher a situação do projeto</option>
                                <option value="Não iniciado">Não iniciado</option>
                                <option value="Em andamento">Em andamento</option>
                                <option value="Concluído">Concluído</option>
                                <option value="Atrasado">Atrasado</option>
                            </select>
                        </div>
                    </div>


                    <div className="input-dividido">
                        <div className='col'>
                            <label className="form-label">Etapa 4 do projeto</label>
                            <select
                                type="text"
                                className="form-control"
                                placeholder='Digite a etapa do projeto'
                                autoComplete='off'
                                onChange={(e) => { setEtapa4(e.target.value) }}>
                                <option value="Default">Escolher a etapa do projeto</option>
                                <option value="1 - Estruturação do projeto">1 - Estruturação do projeto</option>
                                <option value="2 - Elaboração do  TdR/projeto e orçamento">2 - Elaboração do  TdR/projeto e orçamento</option>
                                <option value="3 - Processo licitatório">3 - Processo licitatório</option>
                                <option value="4 - Assinatura do contrato">4 - Assinatura do contrato</option>
                                <option value="5 - Acompanhamento contratual">5 - Acompanhamento contratual</option>
                                <option value="6 - Prestação de contas e lições aprendidas">6 -  Prestação de contas e lições aprendidas</option>
                            </select>
                        </div>

                        <div className='col'>
                            <label className="form-label">Data de início da etapa 4</label>
                            <input type="date"
                                className="form-control"
                                placeholder="Digite a data de início da etapa 4"
                                autoComplete='off'
                                onChange={(e) => { setDatainicioetapa4(e.target.value) }} />
                        </div>


                        <div className='col'>
                            <label className="form-label">Data de término da etapa 4</label>
                            <input type="date"
                                className="form-control"
                                placeholder="Digite a data de término da etapa 4"
                                autoComplete='off'
                                onChange={(e) => { setDatafimetapa4(e.target.value) }} />
                        </div>
                    </div>

                    <div className="input-dividido">
                        <div className='col'>
                            <label className="form-label">Prazo da etapa 4</label>
                            <input type="number"
                                className="form-control"
                                placeholder="Digite o prazo da da etapa 4"
                                 id='calctempo4'
                                autoComplete='off'
                                onChange={(e) => { setPrazoetapa4(e.target.value) }} />
                        </div>

                        <div className='col'>
                            <label className="form-label">Situação da etapa do projeto</label>
                            <select
                                type="text"
                                className="form-control"
                                placeholder='Digite a situação da etapa do projeto'
                                autoComplete='off'
                                onChange={(e) => { setSituacaoetapa4(e.target.value) }}>
                                <option value="Default">Escolher a situação do projeto</option>
                                <option value="Não iniciado">Não iniciado</option>
                                <option value="Em andamento">Em andamento</option>
                                <option value="Concluído">Concluído</option>
                                <option value="Atrasado">Atrasado</option>
                            </select>
                        </div>
                    </div>


                    <div className="input-dividido">
                        <div className='col'>
                            <label className="form-label">Etapa 5 do projeto</label>
                            <select
                                type="text"
                                className="form-control"
                                placeholder='Digite a etapa do projeto'
                                autoComplete='off'
                                onChange={(e) => { setEtapa5(e.target.value) }}>
                                <option value="Default">Escolher a etapa do projeto</option>
                                <option value="1 - Estruturação do projeto">1 - Estruturação do projeto</option>
                                <option value="2 - Elaboração do  TdR/projeto e orçamento">2 - Elaboração do  TdR/projeto e orçamento</option>
                                <option value="3 - Processo licitatório">3 - Processo licitatório</option>
                                <option value="4 - Assinatura do contrato">4 - Assinatura do contrato</option>
                                <option value="5 - Acompanhamento contratual">5 - Acompanhamento contratual</option>
                                <option value="6 - Prestação de contas e lições aprendidas">6 -  Prestação de contas e lições aprendidas</option>
                            </select>
                        </div>

                        <div className='col'>
                            <label className="form-label">Data de início da etapa 5</label>
                            <input type="date"
                                className="form-control"
                                placeholder="Digite a data de início da etapa 5"
                                autoComplete='off'
                                onChange={(e) => { setDatainicioetapa5(e.target.value) }} />
                        </div>


                        <div className='col'>
                            <label className="form-label">Data de término da etapa 5</label>
                            <input type="date"
                                className="form-control"
                                placeholder="Digite a data de término da etapa 5"
                                autoComplete='off'
                                onChange={(e) => { setDatafimetapa5(e.target.value) }} />
                        </div>
                    </div>

                    <div className="input-dividido">
                        <div className='col'>
                            <label className="form-label">Prazo da etapa 5</label>
                            <input type="number"
                                className="form-control"
                                placeholder="Digite o prazo da da etapa 5"
                                 id='calctempo5'
                                autoComplete='off'
                                onChange={(e) => { setPrazoetapa5(e.target.value) }} />
                        </div>

                        <div className='col'>
                            <label className="form-label">Situação da etapa do projeto</label>
                            <select
                                type="text"
                                className="form-control"
                                placeholder='Digite a situação da etapa do projeto'
                                autoComplete='off'
                                onChange={(e) => { setSituacaoetapa5(e.target.value) }}>
                                <option value="Default">Escolher a situação do projeto</option>
                                <option value="Não iniciado">Não iniciado</option>
                                <option value="Em andamento">Em andamento</option>
                                <option value="Concluído">Concluído</option>
                                <option value="Atrasado">Atrasado</option>
                            </select>
                        </div>
                    </div>

                    <div className="input-dividido">
                        <div className='col'>
                            <label className="form-label">Etapa 6 do projeto</label>
                            <select
                                type="text"
                                className="form-control"
                                placeholder='Digite a etapa do projeto'
                                autoComplete='off'
                                onChange={(e) => { setEtapa6(e.target.value) }}>
                                <option value="Default">Escolher a etapa do projeto</option>
                                <option value="1 - Estruturação do projeto">1 - Estruturação do projeto</option>
                                <option value="2 - Elaboração do  TdR/projeto e orçamento">2 - Elaboração do  TdR/projeto e orçamento</option>
                                <option value="3 - Processo licitatório">3 - Processo licitatório</option>
                                <option value="4 - Assinatura do contrato">4 - Assinatura do contrato</option>
                                <option value="5 - Acompanhamento contratual">5 - Acompanhamento contratual</option>
                                <option value="6 - Prestação de contas e lições aprendidas">6 -  Prestação de contas e lições aprendidas</option>
                            </select>
                        </div>

                        <div className='col'>
                            <label className="form-label">Data de início da etapa 6</label>
                            <input type="date"
                                className="form-control"
                                placeholder="Digite a data de início da etapa 6"
                                autoComplete='off'
                                onChange={(e) => { setDatainicioetapa6(e.target.value) }} />
                        </div>


                        <div className='col'>
                            <label className="form-label">Data de término da etapa 6</label>
                            <input type="date"
                                className="form-control"
                                placeholder="Digite a data de término da etapa 6"
                                autoComplete='off'
                                onChange={(e) => { setDatafimetapa6(e.target.value) }} />
                        </div>
                    </div>

                    <div className="input-dividido">
                        <div className='col'>
                            <label className="form-label">Prazo da etapa 6</label>
                            <input type="number"
                                className="form-control"
                                placeholder="Digite o prazo da da etapa 6"
                                 id='calctempo6'
                                autoComplete='off'
                                onChange={(e) => { setPrazoetapa6(e.target.value) }} />
                        </div>


                        <div className='col'>
                            <label className="form-label">Situação da etapa do projeto</label>
                            <select
                                type="text"
                                className="form-control"
                                placeholder='Digite a situação da etapa do projeto'
                                autoComplete='off'
                                onChange={(e) => { setSituacaoetapa6(e.target.value) }}>
                                <option value="Default">Escolher a situação do projeto</option>
                                <option value="Não iniciado">Não iniciado</option>
                                <option value="Em andamento">Em andamento</option>
                                <option value="Concluído">Concluído</option>
                                <option value="Atrasado">Atrasado</option>
                            </select>
                        </div>
                    </div>



                    <div className='col'>
                        <label className="form-label">Nome do Gestor do Projeto</label>
                        <input type="text"
                            className="form-control"
                            placeholder="Digite o nome do gestor do projeto"
                            autoComplete='off'
                            onChange={(e) => { setGestorprojeto(e.target.value) }} />


                    </div>

                    <div className="input-dividido">
                        <div className='col'>
                            <button type="submit"
                                className="submit-button"
                                onClick={createprojetocompleto}>Cadastrar</button>
                        </div>

                        <div className='col'>
                            <button type="button"
                                className="button-dif"
                                onClick={difdatas}>Diferença entre datas</button>
                        </div>

                      

                </div>
            </div>
        </div>
        </form >


    )
}

export default AddProjetoCompleto