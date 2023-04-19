import React, { useState } from "react";
import './Portifolio.css';
import './PortifolioReactive.css';
import foto from "./foto.png";
import {Typewriter} from 'react-simple-typewriter';
import foto2 from "./foto-2.png";
import curriculo from "./Curriculo.pdf"
import iconHtml from "./icons/html.png"
import iconCss from "./icons/css.png"
import iconJs from "./icons/javascript.png"
import iconSql from "./icons/sql.png"
import iconReact from "./icons/react.png"
import iconTs from "./icons/typescript.png"
import iconReparo from "./icons/reparo.png"
import iconEng from "./icons/eng.png"
import iconOffice from "./icons/office.png"
import iconGit from "./icons/git.png"
import iconGithub from "./icons/github.png"
import calc from "./icons/calc.jpg"
import login from "./icons/login.jpg"
import batman from "./icons/batman.jpg"
import port from "./icons/port.jpg"
import emailjs from '@emailjs/browser'
import swal from 'sweetalert';
import pokedex from "./icons/pokedex.jpg"
import pedrapapel from "./icons/pedrapapeltesoura.jpg"
import despesas from "./icons/despesas.jpg"
import pr from "./icons/pr.jpg"


export default function Portifolio() {

    function myFunction() {
        var element = document.body;
        element.classList.toggle("dark-mode");
      }

      function subMenu1() {
        var element2 = document.querySelector("#b");
        element2.classList.add("a");
        var element3 = document.querySelector("#a");
        element3.classList.add("i");
        var element4 = document.querySelector("#c");
        element4.classList.add("i");
        var element5 = document.querySelector("#a");
        element5.classList.remove("a");
        var element6 = document.querySelector("#c");
        element6.classList.remove("a");
        var element7 = document.querySelector("#bt2");
        element7.classList.add("border2");
        var element8 = document.querySelector("#bt1");
        element8.classList.add("border1");
        var element9 = document.querySelector("#bt3");
        element9.classList.add("border1");
        var elementq = document.querySelector("#bt1");
        elementq.classList.remove("border2");
        var elementw = document.querySelector("#bt3");
        elementw.classList.remove("border2");
      }

      function subMenu2() {
        var elemente = document.querySelector("#c");
        elemente.classList.add("a");
        var elementr = document.querySelector("#a");
        elementr.classList.add("i");
        var elementt = document.querySelector("#b");
        elementt.classList.add("i");
        var elementy = document.querySelector("#a");
        elementy.classList.remove("a");
        var elementu = document.querySelector("#b");
        elementu.classList.remove("a");
        var elementi = document.querySelector("#bt3");
        elementi.classList.add("border2");
        var elemento = document.querySelector("#bt1");
        elemento.classList.add("border1");
        var elementp = document.querySelector("#bt2");
        elementp.classList.add("border1");
        var elementa = document.querySelector("#bt1");
        elementa.classList.remove("border2");
        var elements = document.querySelector("#bt2");
        elements.classList.remove("border2");
      }

      function subMenu3() {
        var element1 = document.querySelector("#a");
        element1.classList.add("a");
        var elementz = document.querySelector("#b");
        elementz.classList.add("i");
        var elementx = document.querySelector("#c");
        elementx.classList.add("i");
        var elementc = document.querySelector("#b");
        elementc.classList.remove("a");
        var elementv = document.querySelector("#c");
        elementv.classList.remove("a");
        var elementb = document.querySelector("#bt1");
        elementb.classList.add("border2");
        var elementn = document.querySelector("#bt2");
        elementn.classList.add("border1");
        var elementm = document.querySelector("#bt3");
        elementm.classList.add("border1");
        var elementl = document.querySelector("#bt2");
        elementl.classList.remove("border2");
        var elementj = document.querySelector("#bt3");
        elementj.classList.remove("border2");
      }
      
      const [name, setName] = useState('')
      const [email, setEmail] = useState('')
      const [message, setMessage] = useState('')
    
      function sendEmail(e){
        e.preventDefault();

        if(name === '' || email === '' || message === ''){
            swal ( "Mensagem não enviada!" ,  "Por favor preencha todos os campos!" ,  "error" )
            return;
        }

        const templateParams = {
            from_name: name,
            message: message,
            email: email
        }

        emailjs.send("service_3452zj1", "template_1eex7wo", templateParams, "bjPanzPsexa5lEkTC")
        .then((response) => {
            console.log("EMAIL ENVIADO", response.status, response.text);
            swal("Sua mensagem foi enviada!", "Retornarei o mais breve possível!", "success");
            setName('')
            setEmail('')
            setMessage('')

        }, (err) => {
            console.log("ERRO ", err)
        })
      }

      function navBar() {
        var element11 = document.querySelector("#navbar");
        element11.classList.toggle("open");
        var element22 = document.querySelector("#line1");
        element22.classList.toggle("l1");
        var element33 = document.querySelector("#line2");
        element33.classList.toggle("l2");
        var element44 = document.querySelector("#line3");
        element44.classList.toggle("l3");
      }

      function navBarOff() {
        var element55 = document.querySelector("#navbar");
        element55.classList.remove("open");
        var element66 = document.querySelector("#line1");
        element66.classList.remove("l1");
        var element77 = document.querySelector("#line2");
        element77.classList.remove("l2");
        var element88 = document.querySelector("#line3");
        element88.classList.remove("l3");
      }

    return (
        <div id="top" className="all">         
            <div className="top">
                <header className="header"> 
                    <div className="logo-div"><h1><a href="#top" className="logo">FM</a></h1></div> 
                    <h2 className="iten"><a className="iten-a" href="#top">Home</a></h2>
                    <h2 className="iten"><a className="iten-a" href="#curriculo">Currículo</a></h2>
                    <h2 className="iten"><a className="iten-a" href="#project">Projetos</a></h2>
                    <h2 className="iten"><a className="iten-a" href="#contato">Contato</a></h2>
                    <div>
                        <div className="dmbtn">
                            <button className="darkmode-btn" onClick={myFunction}></button>
                            <i class="fa fa-sun-o" aria-hidden="true"></i>
                            <p className="lg">Ligth</p>
                            <i class="fa fa-moon-o" aria-hidden="true"></i>
                            <p className="dk">Dark</p>
                        </div>
                    </div>
                    <div className="mobile-menu" onClick={navBar}>
                        <div id="line1" className="line1"></div>
                        <div id="line2" className="line2"></div>
                        <div id="line3" className="line3"></div>
                    </div>
                </header>
                <div className="line"></div>
                <div>
                    <div className="nav-bar"  id="navbar">
                        <h2 onClick={navBarOff} className="iten2"><a className="iten-a" href="#top">Home</a></h2>
                        <h2 onClick={navBarOff} className="iten2"><a className="iten-a" href="#curriculo">Currículo</a></h2>
                        <h2 onClick={navBarOff} className="iten2"><a className="iten-a" href="#project">Projetos</a></h2>
                        <h2 onClick={navBarOff} className="iten2"><a className="iten-a" href="#contato">Contato</a></h2>
                    </div>
                </div>        
            </div>
            <div className="mid">
                <div className="introduction">
                    <div className="left">
                        <p className="welcome">Bem Vindo!</p>
                        <h1 className="apresentation">Olá, Eu sou<br/><p>Filipe Muliterno</p></h1>
                        <div className="write"><span className="writecss">{}<Typewriter
                            words={['Desenvolvedor Web', 'Desenvolvedor Front-End', 'Desenvolvedor Junior', 'Técnico em Informática']}
                            loop={1000}
                            cursor
                            cursorStyle='_'
                            typeSpeed={70}
                            deleteSpeed={25}
                            delaySpeed={1000}/> </span>
                        </div>
                    </div>
                    <div  className="right">
                        <img className="foto" src={foto} alt='foto'/>
                    </div>
                </div>
                <div id="about"></div>
                <div className="about">
                    <a href="#about" className="about-me">Sobre Mim</a>
                    <i  class="fa fa-arrow-down" aria-hidden="true"></i>
                </div>
                <div  className="l2"><div className="line line2"></div></div> 

                <div  className="about-div">
                    <img src={foto2} alt="Foto" className="foto2" />
                    <div className="about-div2">
                        <p className="about-title">Quem sou eu?</p>
                        <p className="about-text"> Olá, meu nome é Filipe Muliterno, atualmente cursando Análise e Desenvolvimento de Sistemas com foco em Desenvolvimento Web. Gosto de desafios, sou esforçado, me adapto bem a novas experiências e ambientes, trabalho muito bem em equipe. Me considero ágil e consistente em aprender novas linguagens e tecnologias, me adaptando bem a qualquer mudança. Atuando também como técnico em informática, com foco em montagem e manutenção de computadores.</p>
                    </div>
                </div>
                <div className="l2"><div className="line line2"  id="curriculo"></div></div>
                <div className="c-div">
                    <h1 className="curriculum">Currículo</h1>
                    <div className="menus">
                        <button id="bt1" className="btn-menu border2" onClick={subMenu3}>Educação</button>
                        <button id="bt2" className="btn-menu border1" onClick={subMenu1}>Habilidades</button>
                        <button id="bt3" className="btn-menu border1" onClick={subMenu2}>Experiêcias</button>
                    </div>   
                    <div className="sub-menus">
                        <div className="m a" id="a">
                            <div className="education">
                                <div className="formation">
                                    <h1 className="f-h1">Formação</h1>
                                    <div className="form1">
                                        <i class="fa fa-arrow-right" aria-hidden="true"></i>
                                        <div className="div-form1">
                                            <p className="title-form1">Análise e Desenvolvimento de Sistemas</p>
                                            <p className="p-form1">Universidade Estácio de Passo Fundo</p>
                                            <p className="date-form1">Jul de 2021 - Dez de 2023</p>
                                            <p className="p2-form1">O curso de Análise e Desenvolvimento de Sistemas ensina a projetar, documentar, especificar, testar, implementar e cuidar da manutenção de sistemas computacionais e software.</p>
                                       </div>
                                    </div>
                                </div>
                                <div className="cursos">
                                    <h1 className="f-h1">Cursos</h1>
                                    <div className="form1">
                                    <i class="fa fa-arrow-right" aria-hidden="true"></i>
                                        <div className="div-form1">
                                            <p className="title-form1">Banco de Dados</p>
                                            <p className="p-form1">Dunki Code</p>
                                            <p className="date-form1">Concluído</p>
                                            <p className="p2-form1">O curso tem como objetivo ensinar tudo sobre banco de dados relacional MySql e banco de dados não relacional MongoDB.</p>
                                       </div>
                                    </div>
                                    <div className="form1">
                                    <i class="fa fa-arrow-right" aria-hidden="true"></i>
                                        <div className="div-form1">
                                            <p className="title-form1">Curso Front-End Completo</p>
                                            <p className="p-form1">Dunki Code</p>
                                            <p className="date-form1">Concluído</p>
                                            <p className="p2-form1">O curso tem como objetivo ensinar tudo sobre desenvolvimento Front-End, focando em HTML, CSS, JavaScript, React. Ensinando boas práticas de criação de páginas, Grid, Flexbox e muito mais.</p>
                                       </div>
                                    </div>
                                    <div className="form1">
                                    <i class="fa fa-arrow-right" aria-hidden="true"></i>
                                        <div className="div-form1">
                                            <p className="title-form1">Curso Profissão Programador Full-Stack</p>
                                            <p className="p-form1">Paulo Borges</p>
                                            <p className="date-form1">Em andamento...</p>
                                            <p className="p2-form1">O curso tem como objetivo ensinar tudo sobre desenvolvimento Full-Stack, focando em HTML, CSS, JavaScript, React e muitas outras, focando em ingressar no mercado de trabalho.</p>
                                       </div>
                                    </div>
                                </div> 
                        </div>
                        <div className="m i" id="b">
                            <div className="education">
                                <div className="formation">
                                    <h1 className="f-h1">Linguagens</h1>
                                    <div className="form2-2">
                                        <div className="icons-geral-all">
                                            <img className="icons-geral" src={iconHtml} alt="HTML" />
                                            <div className="div-icons-p"><p className="icon-text">HTML</p></div>
                                        </div>
                                        <div className="icons-geral-all">
                                            <img className="icons-geral" src={iconCss} alt="CSS" />
                                            <div className="div-icons-p"><p className="icon-text">CSS</p></div>
                                        </div>
                                        <div className="icons-geral-all">
                                            <img className="icons-geral" src={iconJs} alt="JavaScript" />
                                            <div className="div-icons-p"><p className="icon-text">JavaScrip</p></div>
                                        </div>
                                        <div className="icons-geral-all">
                                            <img className="icons-geral" src={iconSql} alt="SQL" />
                                            <div className="div-icons-p"><p className="icon-text">SQL</p></div>
                                        </div>
                                        <div className="icons-geral-all">
                                            <img className="icons-geral" src={iconReact} alt="React" />
                                            <div className="div-icons-p"><p className="icon-text">React</p></div>
                                        </div>
                                        <div className="icons-geral-all">
                                            <img className="icons-geral" src={iconTs} alt="TypeScript" />
                                            <div className="div-icons-p"><p className="icon-text">TypeScript</p></div>
                                        </div>
                                    </div>
                                </div>  
                                <div className="cursos">
                                    <h1 className="f-h1">Geral</h1>
                                    <div className="form2-2">
                                        <div className="icons-geral-all">
                                            <img className="icons-geral" src={iconReparo} alt="" />
                                            <div className="div-icons-p"><p className="icon-text">Montagem, manutenção e reparo de computadores e notebooks</p></div>
                                        </div>
                                        <div className="icons-geral-all">
                                            <img className="icons-geral" src={iconEng} alt="" />
                                            <div className="div-icons-p"><p className="icon-text">Conhecimento intermediário em inglês</p></div>
                                        </div>
                                        <div className="icons-geral-all">
                                            <img className="icons-geral" src={iconOffice} alt="" />
                                            <div className="div-icons-p"><p className="icon-text">Pacote Office</p></div>
                                        </div>
                                        <div className="icons-geral-all">
                                            <img className="icons-geral" src={iconGit} alt="" />
                                            <div className="div-icons-p"><p className="icon-text">Git</p></div>
                                        </div>
                                        <div className="icons-geral-all">
                                            <img className="icons-geral" src={iconGithub} alt="" />
                                            <div className="div-icons-p"><p className="icon-text">GitHub</p></div>
                                        </div>
                                    </div>
                                </div>      
                            </div>
                        </div>
                        <div className="m i" id="c">
                            <div className="education">
                                <div className="formation">
                                    <h1 className="f-h1">Trabalhos</h1>
                                    <div className="form1">
                                    <i class="fa fa-arrow-right" aria-hidden="true"></i>
                                        <div className="div-form1">
                                            <p className="title-form1">Técnico em Informática</p>
                                            <p className="p-form1">Sidy Informática</p>
                                            <p className="date-form1">Mar de 2021 - o momento</p>
                                            <p className="p2-form1">Atuando como técnico em informática, especializado em instalação, montagem, manutenção e conserto de desktops e notebooks. Experiência em impressoras, software e internet.</p>
                                       </div>
                                    </div>
                                </div>  
                                <div className="cursos"></div>      
                            </div>
                        </div>
                    </div></div>
                    <a className="crl-a" href={curriculo} download='curriculo'><p className="crl">Baixe meu Curriculo</p></a> 
                    <div id="project" className="l2"><div className="line line2"></div></div>
                </div>
            <div className="c-projeto">
                <h1 className="curriculum">Projetos</h1>
                <div className="projects-div">
                    <div className="proj proj-port">
                        <div className="proj-all">
                            <div className="proj-foto"><img className="proj-foto-real proj-port-foto" src={port} alt="calculadora" /></div>
                            <div className="proj-leg">
                                <div className="proj-tit-all">
                                    <p className="proj-tit">Portfólio</p>
                                    <div className="icon-proj">
                                        <a target='_blank' rel="noopener noreferrer" href="https://github.com/FilipeMuliterno/Portfolio"><i class="fa fa-github icon-projs" aria-hidden="true"></i> </a>
                                        <a href="#top"><i class="fa fa-globe icon-projs" aria-hidden="true"></i> </a>
                                    </div>
                                </div>
                                <p className="proj-sub">Feito para me apresentar. Criado em React, utilizando diversas funcionalidades. Sistema de mensagem funcional.</p>
                            </div>
                        </div>
                    </div>
                    <div className="proj proj-login">
                        <div className="proj-all">
                            <div className="proj-foto"><img className="proj-foto-real proj-login-foto" src={login} alt="calculadora" /></div>
                            <div className="proj-leg">
                                <div className="proj-tit-all">
                                    <p className="proj-tit">Tela de Login</p>
                                    <div className="icon-proj">
                                        <a target='_blank' rel="noopener noreferrer" href="https://github.com/FilipeMuliterno/PagLogin"><i class="fa fa-github icon-projs" aria-hidden="true"></i> </a>
                                        <a target='_blank' rel="noopener noreferrer" href="https://pag-login.vercel.app"><i class="fa fa-globe icon-projs" aria-hidden="true"></i> </a>
                                    </div>
                                </div>
                                <p className="proj-sub">Página login demonstrativa com intuito de colocar em prática meus conhecimentos em Front-End. Feita somente em HTML e CSS.</p>
                            </div>
                        </div>
                    </div>
                    <div className="proj proj-calc">
                        <div className="proj-all">
                            <div className="proj-foto"><img className="proj-foto-real proj-calc-foto" src={calc} alt="calculadora" /></div>
                            <div className="proj-leg">
                                <div className="proj-tit-all">
                                    <p className="proj-tit">Calculadora</p>
                                    <div className="icon-proj">
                                        <a target='_blank' rel="noopener noreferrer" href="https://github.com/FilipeMuliterno/Calculadora"><i class="fa fa-github icon-projs" aria-hidden="true"></i> </a>
                                        <a target='_blank' rel="noopener noreferrer" href="https://calculadora-one-ashy.vercel.app"><i class="fa fa-globe icon-projs" aria-hidden="true"></i> </a>
                                    </div>
                                </div>
                                <p className="proj-sub">Projeto de calculadora feito no framework React.Projeto simples e bem executado.</p>
                            </div>
                        </div>
                    </div>
                    <div className="proj proj-batman">
                        <div className="proj-all">
                            <div className="proj-foto"><img className="proj-foto-real proj-batman-foto" src={batman} alt="calculadora" /></div>
                            <div className="proj-leg">
                                <div className="proj-tit-all">
                                    <p className="proj-tit">Projeto Batman</p>
                                    <div className="icon-proj">
                                        <a target='_blank' rel="noopener noreferrer" href="https://github.com/FilipeMuliterno/ProjetoBatman"><i class="fa fa-github icon-projs" aria-hidden="true"></i> </a>
                                        <a target='_blank' rel="noopener noreferrer" href="https://projeto-batman.vercel.app"><i class="fa fa-globe icon-projs" aria-hidden="true"></i> </a>
                                    </div>
                                </div>
                                <p className="proj-sub">Site baseado no filme Batman, com intuito de demonstrar meu conhecimento em Front-End. Feito somento em HTML e CSS. </p>
                            </div>
                        </div>
                    </div>
                    <div className="proj proj-pok">
                        <div className="proj-all">
                            <div className="proj-foto"><img className="proj-foto-real proj-pok-foto" src={pokedex} alt="calculadora" /></div>
                            <div className="proj-leg">
                                <div className="proj-tit-all">
                                    <p className="proj-tit">Pokédex</p>
                                    <div className="icon-proj">
                                        <a target='_blank' rel="noopener noreferrer" href="https://github.com/FilipeMuliterno/Pokedex"><i class="fa fa-github icon-projs" aria-hidden="true"></i> </a>
                                        <a target='_blank' rel="noopener noreferrer" href="https://pokedex-bay-delta.vercel.app"><i class="fa fa-globe icon-projs" aria-hidden="true"></i> </a>
                                    </div>
                                </div>
                                <p className="proj-sub">Projeto de Pokédex, você indica o número de pokémons a serem exibidos em tela. O projeto foi feito com requisições em uma API pública.</p>
                            </div>
                        </div>
                    </div>
                    <div className="proj proj-port">
                        <div className="proj-all">
                            <div className="proj-foto"><img className="proj-foto-real proj-port-foto" src={despesas} alt="calculadora" /></div>
                            <div className="proj-leg">
                                <div className="proj-tit-all">
                                    <p className="proj-tit">Lista de despesas</p>
                                    <div className="icon-proj">
                                        <a target='_blank' rel="noopener noreferrer" href="https://github.com/FilipeMuliterno/ListaDespesas"><i class="fa fa-github icon-projs" aria-hidden="true"></i> </a>
                                        <a target='_blank' rel="noopener noreferrer" href="https://lista-despesas.vercel.app"><i class="fa fa-globe icon-projs" aria-hidden="true"></i> </a>
                                    </div>
                                </div>
                                <p className="proj-sub">Ferramenta para listar e somar suas despesas.</p>
                            </div>
                        </div>
                    </div>
                    <div className="proj proj-port">
                        <div className="proj-all">
                            <div className="proj-foto"><img className="proj-foto-real proj-port-foto" src={pedrapapel} alt="calculadora" /></div>
                            <div className="proj-leg">
                                <div className="proj-tit-all">
                                    <p className="proj-tit">Pedra, Papel ou Tesoura</p>
                                    <div className="icon-proj">
                                        <a target='_blank' rel="noopener noreferrer" href="https://github.com/FilipeMuliterno/PedraPapelTesoura"><i class="fa fa-github icon-projs" aria-hidden="true"></i> </a>
                                        <a target='_blank' rel="noopener noreferrer" href="https://pedra-papel-tesoura-weld.vercel.app"><i class="fa fa-globe icon-projs" aria-hidden="true"></i> </a>
                                    </div>
                                </div>
                                <p className="proj-sub">Jogo Pedra, Papel ou Tesoura feito em JavaScript com sistema de aleatoriedade da escolha do oponente.</p>
                            </div>
                        </div>
                    </div>
                    <div className="proj proj-port">
                        <div className="proj-all">
                            <div className="proj-foto"><img className="proj-foto-real proj-port-foto" src={pr} alt="calculadora" /></div>
                            <div className="proj-leg">
                                <div className="proj-tit-all">
                                    <p className="proj-tit">Perguntas e Respostas</p>
                                    <div className="icon-proj">
                                        <a target='_blank' rel="noopener noreferrer" href="https://github.com/FilipeMuliterno/PerguntasRespostas"><i class="fa fa-github icon-projs" aria-hidden="true"></i> </a>
                                        <a target='_blank' rel="noopener noreferrer" href="https://perguntas-respostas-nu.vercel.app"><i class="fa fa-globe icon-projs" aria-hidden="true"></i> </a>
                                    </div>
                                </div>
                                <p className="proj-sub">Um sistema de perguntas e respostas sobre HTML e CSS com contador de acertos e erros, feito para treinar JavaScript.</p>
                            </div>
                        </div>
                    </div>
                </div>  
            </div>          
                <div id="contato" className="l2"><div className="line line2"></div></div>
                <div className="contato-div">
                    <h1 className="curriculum contato-2">Contato</h1>
                    <div className="contato-all">
                        <div className="contato-dados-p">
                            <img className="foto-dados" src={foto} alt="foto" />
                            <div className="textos-contato">
                                <p className="tit-contact">Filipe Muliterno</p>
                                <p className="dev-w">Desenvolvedor Web</p>
                                <div className="tel-em"><p>Contato:</p><a className="telema" target='_blank' rel="noopener noreferrer" href="tel:+5554996128320">+55 54 99612-8320</a> </div>
                                <div className="tel-em"><p>Email:</p><a className="telema" target='_blank' rel="noopener noreferrer" href="mailto:filipemuliternop@hotmail.com? subject=subject text">filipemuliternop@hotmail.com</a> </div>
                            </div>
                            <div className="redes-contato">
                                <div className="icon-divs">
                                    <a target='_blank' rel="noopener noreferrer" className="iconn" href="https://www.linkedin.com/in/filipe-muliterno-2612401a2/"><i class="fa fa-linkedin fa-2x" aria-hidden="true"></i> </a>
                                </div>
                                <div className="icon-divs">
                                    <a target='_blank' rel="noopener noreferrer" className="iconn" href="https://github.com/FilipeMuliterno"><i class="fa fa-github fa-2x" aria-hidden="true"></i> </a>
                                </div>
                                <div className="icon-divs">
                                    <a target='_blank' rel="noopener noreferrer" className="iconn" href="https://api.whatsapp.com/send/?phone=5554996128320&text&type=phone_number&app_absent=0"><i class="fa fa-whatsapp fa-2x" aria-hidden="true"></i> </a>
                                </div>
                            </div>
                        </div>
                        <div className="contato-dados-e">
                            <p className="tit-d">Deixe sua mensagem</p>
                            <form className="form" onSubmit={sendEmail}>
                                <div className="inputs-ne">
                                    <div className="tt">
                                        <label className="label" htmlFor="nome">DIGITE SEU NOME</label>
                                        <input value={name} onChange={(e) => setName(e.target.value)} id="nome" className="input" type="text"/>
                                    </div>
                                    <div className="tt">
                                        <label className="label" htmlFor="email">DIGITE SEU EMAIL</label>
                                        <input value={email} onChange={(e) => setEmail(e.target.value)} id="email" className="input" type="text"/>
                                    </div>
                                </div>
                                <div className="tt text-div">
                                    <label className="label" htmlFor="text">POR FAVOR, DIGITE SUA MENSAGEM</label>
                                    <textarea value={message} onChange={(e) => setMessage(e.target.value)} id="text" className="text" cols="30" rows="8" ></textarea>
                                </div>
                                <input className="submit" type="submit" value="ENVIAR MENSAGEM"/>
                            </form>
                        </div>
                    </div>
                </div>
                </div>
                <div className="line"></div>
                <div className="bottom">
                    <footer className="footer">
                        <div className="logo-div"><h1><a href="#top" className="logo">FM</a></h1></div>
                        <div className="redes-f">
                                <div className="icon-divs">
                                    <a target='_blank' rel="noopener noreferrer" className="iconn" href="https://www.linkedin.com/in/filipe-muliterno-2612401a2/"><i class="fa fa-linkedin fa-2x" aria-hidden="true"></i> </a>
                                </div>
                                <div className="icon-divs">
                                    <a target='_blank' rel="noopener noreferrer" className="iconn" href="https://github.com/FilipeMuliterno"><i class="fa fa-github fa-2x" aria-hidden="true"></i> </a>
                                </div>
                                <div className="icon-divs">
                                    <a target='_blank' rel="noopener noreferrer" className="iconn" href="https://api.whatsapp.com/send/?phone=5554996128320&text&type=phone_number&app_absent=0"><i class="fa fa-whatsapp fa-2x" aria-hidden="true"></i> </a>
                                </div>
                            </div>
                        <span>© 2023. Todos os Direitos Reservados por Filipe Muliterno.</span>
                    </footer>
                </div>        
        </div>
    )
}

