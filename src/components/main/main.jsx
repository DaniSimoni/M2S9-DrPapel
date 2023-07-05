import './main.css';
import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import ModalProdutos from '../modalProduto/modalProdutos';



const Main = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };


    return (
        <div className='main '>

            <section className='kits container'>
                <h1 className='kits-ttl'>Kits Festas</h1>
                <p className='p-main'>Praticidade na escolha e economia na hora de montar a sua festa personalizada</p>
            </section>

            <section className='card-prod'>
               
                <div className='kit-img'>
                    <img src="/images/1.jpg" className="kit-img" alt="..."></img>
                </div>


                <div class="desc-produto container">
                    <div class="desc">
                        <h3 class="h3-ttl">Big Party</h3>
                        <p class="description">Um Kit Personalizado para encantar seus convidados.</p>
                    </div>


                    <form class="sobre" action="">
                        <ul class="font-2-m cor-5 col-10 itens">
                            <li class="li-desc">Topo de Bolo</li>
                            <li class="li-desc">Varal de Bandeirinhas</li>
                            <li class="li-desc">Caixas de Lembrancinha</li>
                            <li class="li-desc">Topper de docinhos</li>
                        </ul>
                    </form>
             
                        <Button type="primary" onClick={showModal} className=" botao-main ">
                        MAIS SOBRE
                        </Button>
                        <Modal className='modal-pdt1' title="Detalhes do Produto" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                            <ModalProdutos/>
                        </Modal>
     
                </div>
            </section>


            <section className='card-prod'>
                <div className='kit-img'>
                    <img src="/images/2.jpg" className="kit-img" alt="..."></img>
                </div>


                <div class="desc-produto container">
                    <div class="desc">
                        <h3 class="h3-ttl">Mini Party</h3>
                        <p class="description"> Um Kit Personalizado para encantar seus convidados.</p>
                    </div>


                    <form class="sobre" action="">
                        <ul class="font-2-m cor-5 col-10 itens">
                            <li class="li-desc">Topo de Bolo</li>
                            <li class="li-desc">Varal de Bandeirinhas</li>
                            <li class="li-desc">Caixas de Lembrancinha</li>
                            <li class="li-desc">Topper de docinhos</li>
                        </ul>
                    </form>

                    <Button type="primary" onClick={showModal} className=" botao-main ">
                        MAIS SOBRE
                        </Button>
                        <Modal className='modal-pdt1' title="Detalhes do Produto" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                            <ModalProdutos/>
                        </Modal>
                </div>
            </section>


            <section className='card-prod'>
                <div className='kit-img'>
                    <img src="/images/3.jpg" className="kit-img" alt="..."></img>
                </div>


                <div class="desc-produto container">
                    <div class="desc">
                        <h3 class="h3-ttl">Friends Party</h3>
                        <p class="description">Um Kit Personalizado para encantar seus convidados.</p>
                    </div>


                    <form class="sobre" action="">
                        <ul class="font-2-m cor-5 col-10 itens">
                            <li class="li-desc">Topo de Bolo</li>
                            <li class="li-desc">Varal de Bandeirinhas</li>
                            <li class="li-desc">Caixas de Lembrancinha</li>
                            <li class="li-desc">Topper de docinhos</li>
                        </ul>
                    </form>
                    <Button type="primary" onClick={showModal} className=" botao-main ">
                        MAIS SOBRE
                        </Button>
                        <Modal className='modal-pdt1' title="Detalhes do Produto" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                            <ModalProdutos/>
                        </Modal>
                </div>
            </section>

        </div>


    )
}







export default Main;