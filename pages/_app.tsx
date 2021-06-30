import '../styles/globals.css'
import type {AppProps} from 'next/app'
import {Provider} from "react-redux";
import store from "../store/store";
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'
import A from "../components/A";

const Ul = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #333;
`;

const LI = styled.li`
float: left;
`;

const NavStyleText = styled.a`
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 30px;
`;

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

const theme = {
    colors: {
        primary: '#0070f3',
    },
}

function MyApp({Component, pageProps}: AppProps) {
    return (
        <>
            <GlobalStyle />
            <ThemeProvider theme={theme}>
                <Provider store={store}>
                    <Ul>
                        <LI>
                            <NavStyleText>
                                <A href={"/"} text={"Simple blog"}/>
                            </NavStyleText>
                        </LI>
                        <LI>
                            <NavStyleText>
                                <A href={"/posts"} text={"All posts"}/>
                            </NavStyleText>
                        </LI>
                        <LI>
                            <NavStyleText>
                                <A href={"/posts/new"} text={"Create new Post"}/>
                            </NavStyleText>
                        </LI>
                    </Ul>
                    <Component {...pageProps} />
                </Provider>
            </ThemeProvider>
        </>
    )
}

export default MyApp
