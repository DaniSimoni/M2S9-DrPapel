import Header from '../components/header/header';
import Banner from '../components/banner/banner';
import Main from '../components/main/main';
import Footer from '../components/footer/footer';
import Slider from '../components/slider/slider';
import { useContext, useEffect } from 'react';
import { BannerContext } from '../shared/contexts/BannerContext';

export const HomePage = () => {

  const {setData} = useContext(BannerContext)

  useEffect(() => {
     setData({
      titulo: 'Papelaria Personalizada', 
      paragrafo: 'Deixe os momentos especiais inesquecíveis com os ítens da Dr.Papel.'})
  }, []);


  return (
    <>
      <div className='container-fluid '>
        <Header />
        <Banner />
      
        <Slider/>  

        <Main />

        <Footer />
        
      </div>

    </>
  )
};