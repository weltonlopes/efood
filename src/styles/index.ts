import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Roboto, sans-serif;
        list-style: none;
    }
`;

export const Container = styled.div`
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
    padding: 40px 0;

    .outerContainer {
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        align-items: center;
        gap: 144px;

        .iconsWrapper {
            display: flex;
            flex-direction: column;
            align-items: center;
            row-gap: 32px;
        }

        p {
            max-width: 540px;
            text-align: center;
            margin-bottom: 0;
        }

        .listaRedes {
            display: flex;

            li {
                margin: 4px;
            }
        }

        .innerContainer {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
        }
    }
`;

export const BodyContainer = styled.div``;

export default GlobalStyle;
