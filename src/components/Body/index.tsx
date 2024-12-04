import { BodyStyled } from './styles';

type Props = {
    children: string | JSX.Element;
};

const Body = (props: Props) => <BodyStyled>{props.children}</BodyStyled>;

export default Body;
