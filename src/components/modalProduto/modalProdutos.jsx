import React from 'react';
import './modalProdutos.css';



const ModalProdutosBig = () => {
    return (
        <div className='container modal-bg '>
        <div className='kit-img'>
            <img src="/public/images/kitBig.jpg" className="kit-img" alt="..."></img>
        </div>
        <div class="desc-produtoModal container">
                    <div class="descModal">
                        <h3 class="h3-ttl">Big Party</h3>
                        <p class="description">Um Kit Personalizado para encantar seus convidados.</p>
                    </div>


                    <form class="sobre" action="">
                        <ul class="font-2-m cor-5 col-10 itens-modal">
                            <li class="li-desc">Topo de Bolo</li>
                            <li class="li-desc">Varal de Bandeirinhas</li>
                            <li class="li-desc">Caixas de Lembrancinha</li>
                            <li class="li-desc">Topper de docinhos</li>
                        </ul>
                    </form>
            </div>
        </div>
       
        );
    };

  
export default ModalProdutosBig;