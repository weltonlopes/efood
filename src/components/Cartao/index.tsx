import Avaliacao from '../Avaliacao';
import Link from '../Link';
import Paragrafo from '../Paragrafo';
import Tag from '../Tag';
import Titulo from '../Titulo';
import { CartaoStyled, CartaoTitulo, ContentWrapper } from './styles';

export type Props = {
    imagem: string;
    titulo: string;
    paragrafo: string;
    link: string;
    nota: string;
    tags: string[];
};

const Cartao = (props: Props) => (
    <CartaoStyled>
        <ul className="tags-wrapper">
            {props.tags.map((tag, index) => (
                <li key={index}>
                    <Tag>{tag}</Tag>
                </li>
            ))}
        </ul>
        <img src={props.imagem} alt="imagem do cartão"></img>
        <ContentWrapper>
            <CartaoTitulo>
                <Titulo color="primary">{props.titulo}</Titulo>
                <Avaliacao nota={props.nota} />
            </CartaoTitulo>
            <Paragrafo fontSize={14} fontWeight="normal">
                {props.paragrafo}
            </Paragrafo>
            <Link url={props.link}>Saiba mais</Link>
        </ContentWrapper>
    </CartaoStyled>
);

export default Cartao;
