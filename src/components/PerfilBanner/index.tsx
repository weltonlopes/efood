import { Imagem } from './styles';

export type Props = {
    titulo: string;
    subtitulo: string;
    imagem: string;
};

const PerfilBanner = (props: Props) => (
    <Imagem style={{ backgroundImage: `url(${props.imagem})` }}>
        <div className="overlay"></div>
        <div className="container">
            <h2>{props.titulo}</h2>
            <p>{props.subtitulo}</p>
        </div>
    </Imagem>
);

export default PerfilBanner;
