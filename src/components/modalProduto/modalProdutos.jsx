import React, { useContext } from 'react';
import './modalProdutos.css';
import { ModalPContext } from '../../shared/contexts/ModalPContext';


const ModalProdutos = () => {

    const { dataModalP } = useContext(ModalPContext);

   
    return (
        <div className='container modal-bg '>
        <div className='kit-img'>
            <img src={dataModalP?.imagemProdutoModal} className="kit-img" alt="..."></img>
        </div>
        <div class="desc-produtoModal container" id='imagemProduto'>
                    <div class="descModal">
                        <h3 class="h3-ttl" id='nomeKit'>{dataModalP?.nomeKit}</h3>
                        <p class="description" id='descKit' >{dataModalP?.descKit}</p>
                    </div>


                    <form class="sobre" action="">
                        <ul class="font-2-m cor-5 col-10 itens-modal">
                            <li class="li-desc" id='desc1'>{dataModalP?.desc1}</li>
                            <li class="li-desc" id='desc2'>{dataModalP?.desc2}</li>
                            <li class="li-desc" id='desc3'>{dataModalP?.desc3}</li>
                            <li class="li-desc" id='desc4'>{dataModalP?.desc4}</li>
                        </ul>
                    </form>
            </div>
        </div>
       
        )
    }

  
export default ModalProdutos