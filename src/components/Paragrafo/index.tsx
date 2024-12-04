import { ParagrafoStyled } from './styles';

export type Props = {
    children: React.ReactNode;
    fontSize: number;
    fontWeight: string;
    color?: string;
};

const Paragrafo: React.FC<Props> = ({
    children,
    fontSize,
    fontWeight,
    color,
}) => (
    <ParagrafoStyled fontSize={fontSize} fontWeight={fontWeight} color={color}>
        {children}
    </ParagrafoStyled>
);

export default Paragrafo;
