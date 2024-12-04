import { Props } from '.';

import styled from 'styled-components';

export const ParagrafoStyled = styled.p<Props>`
    font-size: ${(props) => props.fontSize}px;
    font-weight: ${(props) => props.fontWeight};
    color: ${(props) => (props.color === 'primaria' ? '#e66767' : '#FFEBD9')};
    margin-bottom: 16px;
`;
