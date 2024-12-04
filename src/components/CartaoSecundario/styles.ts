import styled from 'styled-components';

export const CartaoStyled = styled.div`
    position: relative;
    border: 1px solid #e66767;
    max-width: 474px;
    background-color: #e66767;

    img {
        max-width: 100%;
    }

    a {
        color: #e66767;
        display: block;
        text-align: center;
        background-color: #ffebd9;
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
