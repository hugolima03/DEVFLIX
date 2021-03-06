import React, {useEffect} from 'react';
import Menu from '../../components/Menu/index.js';
import BannerMain from '../../components/BannerMain';
import dadosIniciais from '../../data/dados_iniciais.json'
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer/index.js';

function Home() {

  useEffect(()=> {
    const URL = 'http://localhost:8080/categorias';
        fetch(URL)
        .then(async (respostaDoServidor) => {
            //const resposta = await respostaDoServidor.json();
            // setCategorias([
            //     ...resposta,
            // ]);
        });
  });

  return (
    <div style={{background: '#141414'}}>
      <Menu />

      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={"Aprender dói. Dói porque nos deparamos com as nossas próprias ignorâncias, desconhecimentos, limitações."}
      />

      <Carousel
      ignoreFirstVideo
      category={dadosIniciais.categorias[0]}
      />
      <Carousel
      ignoreFirstVideo
      category={dadosIniciais.categorias[1]}
      />
      <Carousel
      ignoreFirstVideo
      category={dadosIniciais.categorias[2]}
      />
      <Carousel
      ignoreFirstVideo
      category={dadosIniciais.categorias[3]}
      />
      <Carousel
      ignoreFirstVideo
      category={dadosIniciais.categorias[4]}
      />
      <Carousel
      ignoreFirstVideo
      category={dadosIniciais.categorias[5]}
      />

      <Footer></Footer>
    </div>
  );
}

export default Home;