import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import GlobalStyle from './styles';
import { Container } from './styles';
import Paragrafo from './components/Paragrafo';
import Footer from './components/Footer';
import Home from './pages/Home';
import Perfil from './pages/Perfil';

const cartao = {
    titulo: 'Italiana',
    subtitulo: 'La Dolce Vita Trattoria',
    imagem: 'src/images/macarrao_nojento.png',
};

const rotas = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/Perfil',
        element: (
            <Perfil
                titulo={cartao.titulo}
                subtitulo={cartao.subtitulo}
                imagem={cartao.imagem}
            />
        ),
    },
]);

function App() {
    return (
        <>
            <GlobalStyle />
            <RouterProvider router={rotas} />
            <Footer>
                <Container>
                    <div className="outerContainer">
                        <div className="iconsWrapper">
                            <img src="src/images/icon_ifood.svg" alt="" />
                            <ul className="listaRedes">
                                <li>
                                    <img src="src/images/insta.svg" alt="" />
                                </li>
                                <li>
                                    <img src="src/images/fb.svg" alt="" />
                                </li>
                                <li>
                                    <img src="src/images/twiter.svg" alt="" />
                                </li>
                            </ul>
                        </div>
                        <Paragrafo fontSize={10} fontWeight="normal">
                            A efood é uma plataforma para divulgação de
                            estabelecimentos, a responsabilidade pela entrega,
                            qualidade dos produtos é toda do estabelecimento
                            contratado.
                        </Paragrafo>
                    </div>
                </Container>
            </Footer>
        </>
    );
}

export default App;
