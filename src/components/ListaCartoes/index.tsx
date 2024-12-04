import Cartao from '../Cartao';
import CartaoSecundario from '../CartaoSecundario';
import { Props as CartaoProps } from '../Cartao';
import { ListaCartoesStyled } from './styles';

export type Props = {
    data: CartaoProps[];
    tipoCartao?: string;
};

const ListaCartoes = (props: Props) => (
    <ListaCartoesStyled tipoCartao={props.tipoCartao}>
        {props.data.map((cartao, index) => (
            <li key={index}>
                {props.tipoCartao === 'secundario' ? (
                    <CartaoSecundario
                        titulo={cartao.titulo}
                        paragrafo={cartao.paragrafo}
                        link={cartao.link}
                        imagem={cartao.imagem}
                        nota={cartao.nota}
                        tags={cartao.tags}
                    />
                ) : (
                    <Cartao
                        titulo={cartao.titulo}
                        paragrafo={cartao.paragrafo}
                        link={cartao.link}
                        imagem={cartao.imagem}
                        nota={cartao.nota}
                        tags={cartao.tags}
                    />
                )}
            </li>
        ))}
    </ListaCartoesStyled>
);

export default ListaCartoes;
