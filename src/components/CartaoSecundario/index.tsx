import Link from '../Link';
import Paragrafo from '../Paragrafo';
import Titulo from '../Titulo';
import { CartaoStyled, CartaoTitulo, ContentWrapper } from './styles';
import { Props } from '../Cartao';

const CartaoSecundario = (props: Props) => (
    <CartaoStyled>
        <img src={props.imagem} alt="imagem do cartão"></img>
        <ContentWrapper>
            <CartaoTitulo>
                <Titulo color="secundaria">{props.titulo}</Titulo>
            </CartaoTitulo>
            <Paragrafo fontSize={14} fontWeight="normal">
                {props.paragrafo}
            </Paragrafo>
            <Link url={props.link}>Adicionar ao carrinho</Link>
        </ContentWrapper>
    </CartaoStyled>
);

export default CartaoSecundario;
