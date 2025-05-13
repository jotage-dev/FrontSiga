import React, { } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import loginimg from './logo.jpg';

function Dashboard() {

    const navigate = useNavigate();
    const signOut = () => {
        localStorage.removeItem('Token')
        navigate("/login");
    }

    const ocultar = () => {
        const botao = document.querySelector(".botao-menu");
        const menuLateral = document.querySelector(".menu-lateral");
        const conteudo = document.querySelector(".conteudo");
        const background = document.querySelector(".background");
        const principal = document.querySelector(".principal");


        botao.addEventListener("click", () => {
            botao.classList.toggle("ativo")
            menuLateral.classList.toggle("ativo")
            conteudo.classList.toggle("ativo")
            background.classList.toggle("ativo")
            principal.classList.toggle("ativo")
        })

        background.addEventListener("click", () => {
            botao.classList.remove("ativo")
            menuLateral.classList.remove("ativo")
            conteudo.classList.remove("ativo")
            background.classList.remove("ativo")
            principal.classList.remove("ativo")
        })
    }

    return (
        <div>
            <button className="botao-menu" onClick={ocultar}>
                <i className="fa-solid fa-bars"></i>
            </button>

            <div className="principal">

                <nav className="menu-lateral">

                    <div className="logologin">
                        <img src={loginimg} alt="" className="loginimg" />
                    </div>

                    <ul>
                        <li className="side-item">
                            <Link to="/">
                                <i className="fa-solid fa-arrow-up-wide-short"></i>
                                <span>
                                    Número de projetos
                                </span>
                            </Link>
                        </li>

                        <li className="side-item">
                            <Link to="gantt2">
                                <i className="fa-solid fa-money-bill-1"></i>
                                <span>
                                    Valor dos projetos
                                </span>
                            </Link>
                        </li>

                        <li className="side-item">
                            <Link to="employee">
                                <i className="fa-solid fa-sheet-plastic"></i>
                                <span>
                                    Projetos
                                </span>
                            </Link>
                        </li>

                        <li className="side-item">
                            <Link to="projetocompleto">
                            <i className="fa-solid fa-chart-gantt"></i>
                                <span>
                                    Cronograma do Projeto
                                </span>
                            </Link>
                        </li>

                        <li className="side-item">
                            <Link to="graficobarra">
                                <i className="fa-solid fa-chart-line"></i>
                                <span>
                                    Painel de Projetos
                                </span>
                            </Link>
                        </li>


                        <li className="side-item">
                            <Link to="folhapagamento">
                                <i className="fa-brands fa-searchengin"></i>
                                <span>
                                    Pesquisa Estruturada
                                </span>
                            </Link>
                        </li>



                        <li className="side-item">
                            <Link to="secretaria">
                                <i className="fa-regular fa-building"></i>
                                <span>
                                    Secretaria
                                </span>
                            </Link>
                        </li>


                        <div>
                            <button type='button'
                                className='button-sair' onClick={signOut}>
                                <i className="fa-solid fa-right-to-bracket"></i>
                                <span>
                                    Sair
                                </span>
                            </button>
                        </div>
                    </ul>

                </nav>

                <div className="background "></div>

                <div className="conteudo">
                    <div className="titulo">
                        <h6>  PREFEITURA MUNICIPAL DE GUARATINGUETÁ/SP - MÓDULO PROJETOS</h6>
                    </div>
                    <Outlet />
                </div>

            </div>
        </div>


    )
}

export default Dashboard