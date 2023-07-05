import React, { useContext } from 'react';
import './banner.css';
import { BannerContext } from '../../shared/contexts/BannerContext';



const Banner = () => {
    const { data } = useContext(BannerContext)
    

    return (

        <>
            <div className="col-12 p-t-120 banner">
                <h1 className='banner-h1' id='titulo'>{data.titulo}</h1>
                <h6 className="banner-h6 text-muted" id='paragrafo'>{data.paragrafo}</h6>
            </div>
        </>
    )
}

export default Banner;