import { LinkStyled } from './styles';

type Props = {
    children: string;
    url: string;
};

const Link = (props: Props) => (
    <LinkStyled href={props.url}>{props.children}</LinkStyled>
);

export default Link;
