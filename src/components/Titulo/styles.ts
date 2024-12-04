import styled from 'styled-components';
import { Props } from '.';

export const TituloStyled = styled.h2<Props>`
    font-size: ${(props) => (props.fontSize ? props.fontSize : 18)}px;
    color: ${(props) => (props.color === 'primary' ? '#e66767' : '#FFEBD9')};
`;
