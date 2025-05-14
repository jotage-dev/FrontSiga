import "./styles.css";
import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Graficobarra() {
    const [totalprojeto, setTotalprojeto] = useState()
    const [valorprojeto, setValorprojeto] = useState()
    const [altaprioridade, setAltaprioridade] = useState()
    const [maiorvalorprojeto, setMaiorvalorprojeto] = useState()
    const [agricultura, setAgricultura] = useState()
    const [meioambiente, setMeioambiente] = useState()
    const [governo, setGoverno] = useState()
    const [obras, setObras] = useState()
    const [saeg, setSaeg] = useState()
    const [codesg, setCodesg] = useState()
    const [planejamento, setPlanejamento] = useState()
    const [saude, setSaude] = useState()
    const [educacao, setEducacao] = useState()
    const [seguranca, setSeguranca] = useState()
    const [esporte, setEsporte] = useState()
    const [cultura, setCultura] = useState()
    const [turismo, setTurismo] = useState()
    const [mulher, setMulher] = useState()
    const [defesacivil, setDefesaCivil] = useState()
    const [administracao, setAdministracao] = useState()


   

    axios.get('http://localhost:3001/totalprojeto')
        .then(res => {
            setTotalprojeto(res.data[0].id)
        }).catch(err => console.log(err));

    axios.get('http://localhost:3001/valorprojeto')
        .then(res => {
            setValorprojeto(res.data[0].valor)
        }).catch(err => console.log(err));

    axios.get('http://localhost:3001/altaprioridade')
        .then(res => {
            setAltaprioridade(res.data[0].alta)
        }).catch(err => console.log(err));

    axios.get('http://localhost:3001/maiorvalorprojeto')
        .then(res => {
            setMaiorvalorprojeto(res.data[0].maior)
        }).catch(err => console.log(err));


    useEffect(() => {

        axios.get('http://localhost:3001/agricultura')
            .then(res => {
                setAgricultura(res.data[0].agro)
            }).catch(err => console.log(err));


        axios.get('http://localhost:3001/meioambiente')
            .then(res => {
                setMeioambiente(res.data[0].meio)
            }).catch(err => console.log(err));

        axios.get('http://localhost:3001/governo')
            .then(res => {
                setGoverno(res.data[0].governo)
            }).catch(err => console.log(err));

        axios.get('http://localhost:3001/obras')
            .then(res => {
                setObras(res.data[0].obras)
            }).catch(err => console.log(err));

        axios.get('http://localhost:3001/saeg')
            .then(res => {
                setSaeg(res.data[0].saeg)
            }).catch(err => console.log(err));

        axios.get('http://localhost:3001/codesg')
            .then(res => {
                setCodesg(res.data[0].codesg)
            }).catch(err => console.log(err));

        axios.get('http://localhost:3001/planejamento')
            .then(res => {
                setPlanejamento(res.data[0].planejamento)
            }).catch(err => console.log(err));

        axios.get('http://localhost:3001/saude')
            .then(res => {
                setSaude(res.data[0].saude)
            }).catch(err => console.log(err));

        axios.get('http://localhost:3001/educacao')
            .then(res => {
                setEducacao(res.data[0].educacao)
            }).catch(err => console.log(err));

        axios.get('http://localhost:3001/seguranca')
            .then(res => {
                setSeguranca(res.data[0].seguranca)
            }).catch(err => console.log(err));

        axios.get('http://localhost:3001/turismo')
            .then(res => {
                setTurismo(res.data[0].turismo)
            }).catch(err => console.log(err));

        axios.get('http://localhost:3001/cultura')
            .then(res => {
                setCultura(res.data[0].cultura)
            }).catch(err => console.log(err));

        axios.get('http://localhost:3001/esporte')
            .then(res => {
                setEsporte(res.data[0].esporte)
            }).catch(err => console.log(err));

        axios.get('http://localhost:3001/mulher')
            .then(res => {
                setMulher(res.data[0].mulher)
            }).catch(err => console.log(err));

        axios.get('http://localhost:3001/defesacivil')
            .then(res => {
                setDefesaCivil(res.data[0].defesacivil)
            }).catch(err => console.log(err));

        axios.get('http://localhost:3001/administracao')
            .then(res => {
                setAdministracao(res.data[0].administracao)
            }).catch(err => console.log(err));


    }, [])


    return (
        <div>

            <div className='containerdashboard'>
                <h5>PAINEL QUANTITATIVO DOS PROJETOS POR SECRETARIA</h5>
                <div className='main-cards'>
                    
                    <div className='card'>
                        <div className='card-inner'> 
                            <h5>Número de Projetos</h5>
                        </div>
                        <hr />
                        <div>
                            <h5>Total: {totalprojeto}</h5>
                        </div>
                    </div>
                    
                    <div className='card'>
                        <div className='card-inner'>
                            <h5>Valor dos projetos</h5>
                        </div>
                        <hr />
                        <div>
                            <h5>R$: {valorprojeto}</h5>
                        </div>
                    </div>

                    <div className='card'>
                        <div className='card-inner'>
                            <h5>Projetos prioritários</h5>
                        </div>
                        <hr />
                        <div>
                            <h5>Total: {altaprioridade}</h5>
                        </div>
                    </div>

                    <div className='card'>
                        <div className='card-inner'>
                            <h5>Maior valor - projeto</h5>
                        </div>
                        <hr />
                        <div>
                            <h5>R$: {maiorvalorprojeto}</h5>
                        </div>
                    </div>

                    <div className='card'>
                        <div className='card-inner'>
                            <h5>Agricultura</h5>
                        </div>
                        <hr />
                        <div>
                            <h5>Total de projetos: {agricultura}</h5>
                        </div>
                    </div>

                    <div className='card'>
                        <div className='card-inner'>
                            <h5>Obras</h5>
                        </div>
                        <hr />
                        <div>
                            <h5>Total de projetos: {obras}</h5>
                        </div>
                    </div>

                    <div className='card'>
                        <div className='card-inner'>
                            <h5>Governo</h5>
                        </div>
                        <hr />
                        <div>
                            <h5>Total de projetos: {governo}</h5>
                        </div>
                    </div>

                    <div className='card'>
                        <div className='card-inner'>
                            <h5>Meio Ambiente</h5>
                        </div>
                        <hr />
                        <div>
                            <h5>Total de projetos: {meioambiente}</h5>
                        </div>
                    </div>

                    <div className='card'>
                        <div className='card-inner'>
                            <h5>SAEG</h5>
                        </div>
                        <hr />
                        <div>
                            <h5>Total de projetos: {saeg}</h5>
                        </div>
                    </div>

                    <div className='card'>
                        <div className='card-inner'>
                            <h5>CODESG</h5>
                        </div>
                        <hr />
                        <div>
                            <h5>Total de projetos: {codesg}</h5>
                        </div>
                    </div>

                    <div className='card'>
                        <div className='card-inner'>
                            <h5>Planejamento</h5>
                        </div>
                        <hr />
                        <div>
                            <h5>Total de projetos: {planejamento}</h5>
                        </div>
                    </div>

                    <div className='card'>
                        <div className='card-inner'>
                            <h5>Saúde</h5>
                        </div>
                        <hr />
                        <div>
                            <h5>Total de projetos: {saude}</h5>
                        </div>
                    </div>

                    <div className='card'>
                        <div className='card-inner'>
                            <h5>Educação</h5>
                        </div>
                        <hr />
                        <div>
                            <h5>Total de projetos: {educacao}</h5>
                        </div>
                    </div>

                    <div className='card'>
                        <div className='card-inner'>
                            <h5>Segurança</h5>
                        </div>
                        <hr />
                        <div>
                            <h5>Total de projetos: {seguranca}</h5>
                        </div>
                    </div>

                    <div className='card'>
                        <div className='card-inner'>
                            <h5>Turismo</h5>
                        </div>
                        <hr />
                        <div>
                            <h5>Total de projetos: {turismo}</h5>
                        </div>
                    </div>

                    <div className='card'>
                        <div className='card-inner'>
                            <h5>Esportes e Lazer</h5>
                        </div>
                        <hr />
                        <div>
                            <h5>Total de projetos: {esporte}</h5>
                        </div>
                    </div>

                    <div className='card'>
                        <div className='card-inner'>
                            <h5>Cultura</h5>
                        </div>
                        <hr />
                        <div>
                            <h5>Total de projetos: {cultura}</h5>
                        </div>
                    </div>

                    <div className='card'>
                        <div className='card-inner'>
                            <h5>Mulheres</h5>
                        </div>
                        <hr />
                        <div>
                            <h5>Total de projetos: {mulher}</h5>
                        </div>
                    </div>

                    <div className='card'>
                        <div className='card-inner'>
                            <h5>Defesa Civil</h5>
                        </div>
                        <hr />
                        <div>
                            <h5>Total de projetos: {defesacivil}</h5>
                        </div>
                    </div>

                    <div className='card'>
                        <div className='card-inner'>
                            <h5>Administração</h5>
                        </div>
                        <hr />
                        <div>
                            <h5>Total de projetos: {administracao}</h5>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Graficobarra