import Body from '../../components/Body';
import Header from '../../components/Header';
import ListaCartoes from '../../components/ListaCartoes';
import PerfilBanner from '../../components/PerfilBanner';
import { Container } from '../../styles';

const cartoes = [
    {
        titulo: 'Pizza Marguerita',
        paragrafo:
            'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
        link: 'https://welton.com.br',
        imagem: 'src/images/marguerita.png',
        nota: '4.9',
        tags: ['Destaque da semana', 'Japonesa'],
    },
    {
        titulo: 'Pizza Marguerita',
        paragrafo:
            'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
        link: 'https://welton.com.br',
        imagem: 'src/images/marguerita.png',
        nota: '4.9',
        tags: ['Destaque da semana', 'Japonesa'],
    },
    {
        titulo: 'Pizza Marguerita',
        paragrafo:
            'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
        link: 'https://welton.com.br',
        imagem: 'src/images/marguerita.png',
        nota: '4.9',
        tags: ['Destaque da semana', 'Japonesa'],
    },
    {
        titulo: 'Pizza Marguerita',
        paragrafo:
            'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
        link: 'https://welton.com.br',
        imagem: 'src/images/marguerita.png',
        nota: '4.9',
        tags: ['Destaque da semana', 'Japonesa'],
    },
    {
        titulo: 'Pizza Marguerita',
        paragrafo:
            'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
        link: 'https://welton.com.br',
        imagem: 'src/images/marguerita.png',
        nota: '4.9',
        tags: ['Destaque da semana', 'Japonesa'],
    },
    {
        titulo: 'Pizza Marguerita',
        paragrafo:
            'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
        link: 'https://welton.com.br',
        imagem: 'src/images/marguerita.png',
        nota: '4.9',
        tags: ['Destaque da semana', 'Japonesa'],
    },
];

import { Props } from '../../components/PerfilBanner';
import Titulo from '../../components/Titulo';

const Perfil = (props: Props) => (
    <>
        <Header>
            <div>
                <Container>
                    <div className="outerContainer">
                        <div className="innerContainer">
                            <Titulo color="primary">Restaurantes</Titulo>
                            <img src="src/images/icon_ifood.svg" alt="" />
                            <Titulo color="primary">
                                0 produto(s) no carrinho
                            </Titulo>
                        </div>
                    </div>
                </Container>
                <PerfilBanner
                    titulo={props.titulo}
                    subtitulo={props.subtitulo}
                    imagem={props.imagem}
                ></PerfilBanner>
            </div>
        </Header>
        <Body>
            <Container>
                <ListaCartoes data={cartoes} tipoCartao="secundario" />
            </Container>
        </Body>
    </>
);

export default Perfil;
