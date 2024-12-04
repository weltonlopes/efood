import Titulo from '../Titulo';
import { TagStyled } from './styles';

type Props = {
    children: string | JSX.Element;
};

const Tag = (props: Props) => (
    <TagStyled>
        <Titulo fontSize="12" color="secondary">
            {props.children}
        </Titulo>
    </TagStyled>
);

export default Tag;
