import styled from 'styled-components';
import { Props } from '.';

export const ListaCartoesStyled = styled.ul<Omit<Props, 'data'>>`
    display: grid;
    grid-template-columns: ${(props) =>
        props.tipoCartao === 'primario' ? '1fr 1fr' : '1fr 1fr 1fr'};
    gap: ${(props) => (props.tipoCartao === 'primario' ? '48px 80px' : '32px')};

    li {
        display: flex;
        justify-content: center;
    }
`;
