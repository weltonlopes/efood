import estrela from '../../images/estrela.svg';
import Titulo from '../Titulo';
import { AvaliacaoStyled } from './styles';

type Props = {
    nota: string;
};

const Avaliacao = (props: Props) => (
    <AvaliacaoStyled>
        <Titulo color="primary">{props.nota}</Titulo>
        <img src={estrela} />
    </AvaliacaoStyled>
);

export default Avaliacao;
