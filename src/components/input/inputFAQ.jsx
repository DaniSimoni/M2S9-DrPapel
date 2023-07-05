
import { React } from 'react';
import '../input/InputFAQ.css'

export const InputFAQ = () => {
    return (
        <>
            <div className=" container-faq email-input input-long">
                <input className="input2 input-email inputFaq" type="email" id="email" name="email" placeholder="Descreva brevemente a sua dúvida" /* onInput={handleInput} */ />
                <button className="botao "><span class="material-symbols-outlined">
                    search</span></button>
            </div>
           
        </>
    )
};


