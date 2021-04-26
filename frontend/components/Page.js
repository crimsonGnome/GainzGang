import React, { Component } from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import Nav from './Nav';
import Meta from './Meta';
import Cart from './Cart';

const theme = {
  maxWidth: '1000px',
  bs:
    '0 2px 2px 0 rgba(0,0,0,0.14),0 3px 1px -2px rgba(0,0,0,0.12),0 1px 5px 0 rgba(0,0,0,0.2)',
  LargeDesktopView: 'max-width: 1513px',
  DesktopView: 'max-width: 1388px',
  DesktopViewMidSmall: 'max-width: 1200px',
  DesktopViewSmall: 'max-width: 1118px',
  HorizontalNavStart: 'min width: 1024px',
  HorizontalNav: 'max-width: 1024px',
  LargeTabletView: 'max-width: 961px',
  tabletView: 'max-width: 845px',
  tabletViewMed: 'max-width: 768px',
  tabletViewSm: 'max-width: 650px',
  phoneViewLarge: 'max-width: 542px',
  phoneViewSmall: 'max-width: 370px',
  primary: '#17161c',
  titleBackground: 'rgba(51, 51, 51, 0.5)',
  primaryLight: '#38383d',
  lightGrey: '#e2e2e2',
  secondary: 'rgba(0, 9, 114)',
  navSecondary: '#ffc600',
  honeyButton: '#edf2f7',
};

const StyledPage = styled.div`
  margin-left: 20vw;
  color: ${(props) => props.theme.black};
  @media (${(props) => props.theme.HorizontalNav}) {
  }
  @media (${(props) => props.theme.HorizontalNav}) {
    margin-left: 0;
    margin-top: 10vh;
  }
`;

const Inner = styled.div`
  margin: 0;
`;

const GlobalStyle = createGlobalStyle`  
@font-face {
    font-family: Science;
    src: url('/static/SweraDemo-Lj2W.ttf');
    font-style: normal;
  }
  @font-face {
    font-family: ScienceItalic;
    src: url('/static/SweraDemoItalic-g871.ttf');
    font-style: normal;
  }
  
  
  html {
    box-sizing: border-box;
    font-size: 10px;
    margin: 0;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    padding: 0;
    margin: 0;
    background: #ffffff;
    font-size: 1.6rem;
    line-height: 2;
    font-family: 'Raleway', sans-serif;
  }
  body::-webkit-scrollbar {
  width: 1em;
  }
 
body::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}
 
body::-webkit-scrollbar-thumb {
  background-color: darkgrey;
  outline: 1px solid slategrey;
}
  .crimson{
    color: #b20601;
  }
  a {
    text-decoration: none;
    color: ${theme.black};
  }
  .img-loading {
    opacity: 0;
  }

  .img-loaded {
    animation: fadeInImg cubic-bezier(0.23, 1, 0.32, 1) 1;
    position: relative;
    opacity: 1;
    animation-fill-mode: forwards;
    animation-duration: 2s;
    animation-delay: 0.1s;
  }
  //large phone view
  @media (max-width: 542px){
    body {
      font-size: 1.4rem;
    }
  }
  
`;
class Page extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <StyledPage>
          <GlobalStyle />
          <Meta />
          <Nav />
          <Cart />
          <Inner>{this.props.children}</Inner>
        </StyledPage>
      </ThemeProvider>
    );
  }
}

export default Page;
