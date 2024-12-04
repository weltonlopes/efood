import styled from 'styled-components';

export const CartaoStyled = styled.div`
    position: relative;
    border: 1px solid #e66767;
    max-width: 474px;

    img {
        max-width: 100%;
    }

    .tags-wrapper {
        position: absolute;
        top: 0;
        right: 0;
        display: flex;
        gap: 8px;
        padding: 16px;
    }
`;

export const CartaoTitulo = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 16px;
`;

export const ContentWrapper = styled.div`
    padding: 8px;
`;
