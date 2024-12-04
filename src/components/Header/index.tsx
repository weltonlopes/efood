import { HeaderStyled } from "./styles";

type Props = {
    children?: string | JSX.Element
}

const Header = (props: Props) => {
    return <HeaderStyled>{props.children}</HeaderStyled>
}

export default Header;
