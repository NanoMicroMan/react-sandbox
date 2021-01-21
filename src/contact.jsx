import React from "react";
import './contact.css';

export class Contact extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
           <section className="contact-container">
                <div  className='content'>
                    <div className='contact-text-container'>
                        <h1>¡ Hablemos !</h1>
                        <br/>
                        <br/>
                        <h2>BUENOS AIRES</h2>
                        <h4>(+5411) 7078-4000</h4>
                        <h4>Capdevilla 3448, CABA</h4>
                        <br/>
                        <h2>CIUDAD DE MÉXICO</h2>
                        <h4>mexico@etermax.com</h4>
                        <h4>Av. Paseo de la Reforma 296, Juárez</h4>
                        <br/>
                        <h2>SAN PABLO</h2>
                        <h4>brasil@etermax.com</h4>
                        <h4>Alameda Río Negro 1477, Alphaville Industrial</h4>
                    </div>
                </div>
            </section>
        )
    }
}
