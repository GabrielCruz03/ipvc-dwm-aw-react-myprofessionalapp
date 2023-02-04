import React from 'react'
import './Sobre.css'
import image from './foto_perfil.png'
import 'https://kit.fontawesome.com/8662bd7374.js'


function Sobre() {
    const info = {
        nome: "Gabriel Cruz",
        numaluno: "28741",
        email: "gabrielcruz@ipvc.pt",
        github: "https://github.com/GabrielCruz2022",
        instagram: "https://www.instagram.com/cruzz_gabriel03/",
        linkedin: "https://www.linkedin.com/in/gabriel-cruz-321101226/",
    }


    return (
        <div className="container d-flex justify-content-center mt-5">
            <div className="sobre-seccao">
            <h1 className="titulo">Sobre mim</h1>
                <div className="top-container"> <img src={image} className="img-fluid imagem-sobre" alt='foto' width="70"/>
                    <div className="ml-3">
                        <h5 className="nome">{info.nome} - {info.numaluno}</h5>
                        <p className="email"><a href='mailto:gabrielcruz@ipvc.pt'>{info.email}</a> </p>
                    </div>
                </div>

                <div className="apresentacao">
                    Olá! Chamo-me Gabriel Cruz, tenho 19 anos e sou natural de Viana do Castelo!
                    Sou estudante e frequento atualmente o CtesP de Desenvolvimento Web e Multimédia no <a href='https://www.ipvc.pt' id='link-ipvc-site' target="_blank" rel="noreferrer" >Instituto Politécnico de Viana do Castelo</a>.
                </div>
                
                <div className="redes-sociais">
                    <a href={info.github} target="_blank" rel="noreferrer" className='github'><i className="nav-icon fa fa-github"></i></a>
                    <a href={info.instagram} target="_blank" rel="noreferrer" className='instagram'><i className="nav-icon fa fa-instagram"></i></a>
                    <a href={info.linkedin} target="_blank" rel="noreferrer" className='linkedin'><i className="nav-icon fa fa-linkedin"></i></a>
                </div>
            </div>
            
        </div>
    )


    
}

export default Sobre;