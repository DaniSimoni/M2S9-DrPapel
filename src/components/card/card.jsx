import React from 'react';
import './card.css';


const Card = () => {
    return (

        <>
            <div className="container lojas-item">
                <section className='lojas'>
                <iframe className='mapa-card' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3540.542867926123!2d-48.40989812443591!3d-27.452353815967502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x952741e5344049fb%3A0xf8058798cf43e209!2sServid%C3%A3o%20Reginaldo%20Jos%C3%A9%20Sag%C3%A1z%2C%20281%20-%20casa%204%20-%20Ribeir%C3%A3o%20da%20Ilha%2C%20Florian%C3%B3polis%20-%20SC%2C%2088058-343!5e0!3m2!1spt-BR!2sbr!4v1687530625310!5m2!1spt-BR!2sbr" width="1320" height="350"></iframe>
                </section>


                <div className="lojas-conteudo">
                    <h3 className="font-1-xl">Florianópolis</h3>
                    <div className="lojas-dados font-2-s cor-8">
                        <p className="info-loja">Srv. Reginaldo José Sagaz, 281 casa 4</p>
                        <p className="info-loja">Florianópolis - SC</p>
                    </div>
                    <div className="lojas-dados font-2-s cor-8">
                        <a href="mailto:sp@bikcraft.com" className="info-loja">contato@drpapel.com</a>
                        <a href="tel:+5548984037505" className="info-loja">+55 48 984035-7505</a>
                    </div>

                    <div className="horario">
                        <img src="https://www.origamid.com/projetos/bikcraft/img/icones/horario.svg" alt="" className="img4" /><p className="lojas-tempo font-1-s horario2">09-17h de seg à sab</p>
                    </div>
                </div>


            </div>


        </>

    )

}

export default Card;












