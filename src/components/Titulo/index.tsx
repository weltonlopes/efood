import { TituloStyled } from './styles';

export type Props = {
    children: string | JSX.Element;
    color: string;
    fontSize?: string;
};

const Titulo = (props: Props) => (
    <TituloStyled color={props.color} fontSize={props.fontSize}>
        {props.children}
    </TituloStyled>
);

export default Titulo;
