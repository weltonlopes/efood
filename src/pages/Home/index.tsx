import Body from '../../components/Body';
import Header from '../../components/Header';
import ListaCartoes from '../../components/ListaCartoes';
import Paragrafo from '../../components/Paragrafo';
import { Container } from '../../styles';

const cartoes = [
    {
        titulo: 'Hioki Sushi',
        paragrafo:
            'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
        link: '/Perfil',
        imagem: 'src/images/sushi_laranja.png',
        nota: '4.9',
        tags: ['Destaque da semana', 'Japonesa'],
    },
    {
        titulo: 'La Dolce Vita Trattoria',
        paragrafo:
            'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
        link: '/Perfil',
        imagem: 'src/images/macarrao_nojento.png',
        nota: '4.6',
        tags: ['Italiana'],
    },
    {
        titulo: 'Hioki Sushi',
        paragrafo:
            'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
        link: '/Perfil',
        imagem: 'src/images/sushi_laranja.png',
        nota: '4.9',
        tags: ['Destaque da semana', 'Japonesa'],
    },
    {
        titulo: 'Hioki Sushi',
        paragrafo:
            'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
        link: '/Perfil',
        imagem: 'src/images/sushi_laranja.png',
        nota: '4.9',
        tags: ['Destaque da semana', 'Japonesa'],
    },
    {
        titulo: 'La Dolce Vita Trattoria',
        paragrafo:
            'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
        link: '/Perfil',
        imagem: 'src/images/macarrao_nojento.png',
        nota: '4.6',
        tags: ['Italiana'],
    },
    {
        titulo: 'La Dolce Vita Trattoria',
        paragrafo:
            'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
        link: '/Perfil',
        imagem: 'src/images/macarrao_nojento.png',
        nota: '4.6',
        tags: ['Italiana'],
    },
];

const Home = () => (
    <>
        <Header>
            <Container>
                <div className="outerContainer">
                    <img src="src/images/icon_ifood.svg" alt="" />
                    <Paragrafo fontSize={36} fontWeight="bold">
                        Viva experiências gastronômicas no conforto da sua casa
                    </Paragrafo>
                </div>
            </Container>
        </Header>
        <Body>
            <Container>
                <ListaCartoes data={cartoes} />
            </Container>
        </Body>
    </>
);

export default Home;
