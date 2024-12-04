import styled from 'styled-components';

export const Imagem = styled.div`
    width: 100%;
    display: block;
    height: 280px;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;

    .overlay {
        position: absolute;
        height: 100%;
        width: 100%;
        background-color: rgba(0, 0, 0, 0.46);
    }

    .container {
        padding-top: 24px;
        max-width: 1024px;
        width: 100%;
        height: 100%;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding-bottom: 32px;
        font-size: 32px;
        color: #fff;
        z-index: 1;
        position: relative;

        h2 {
            font-weight: 100;
        }

        p {
            font-weight: 900;
        }
    }
`;
