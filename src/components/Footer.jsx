import React from "react";
import './Footer.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

function Footer() {
        return (
            <>
                <div className="bg-dark text-white footer p-3">
                    <div className="col-2 offset-2">
                        <h4>Contacte-me por e-mail:</h4>
                        <div>
                            
                            <a href="mailto:gabrielcruz@ipvc.pt" style={{textDecoration: 'none'}}> gabrielcruz@ipvc.pt </a>
                        </div>
                        

                    </div>
                    <div className="col-4 text-center">
                    <p>Gabriel Cruz © 2022</p>
                        
                    </div>
                    <div className="col-3 text-center">
                        <p>
                            <FontAwesomeIcon className="me-3" icon={faInstagram} /> <a href="https://instagram.com/cruzz_gabriel03" target="_blank" rel="noreferrer" style={{textDecoration: 'none' , color: 'blue'}}> Instagram </a><br></br>
                        </p>

                    </div>

                </div>


            </>
        );
    }

export default Footer;