import { FooterStyled } from './styles';

type Props = {
    children?: string | JSX.Element;
};

const Footer = (props: Props) => <FooterStyled>{props.children}</FooterStyled>;

export default Footer;
