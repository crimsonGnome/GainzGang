import styled from 'styled-components';

const Footer = styled.footer`
  display: grid;
  grid-template-columns: 1fr;
  justify-content: center;
  text-align: center;
  padding: 5vh 5vh;
  margin: 0;
  background: ${props => props.theme.primaryDark};
  color: white;
  min-height: 350px;
  align-content: center;
  z-index: 4;
  .block-logo {
    position: relative;
    display: grid;
    grid-template-columns: 1fr;
    justify-content: center;
    justify-items: center;
  }
  .school-name {
    color: white;
    font-family: 'Cinzel';
  }
  .min-height-motto {
    min-height: 100px;
    min-width: 100%;
  }
  .school-moto {
    font-weight: 600;
    font-size: 2.5rem;
    padding: 0 20vw;
    display: grid;
    justify-content: center;
    grid: gap 10px;
    grid-template-columns: 1fr 1fr 1fr;
    color: ${props => props.theme.primary};
    font-family: 'Cinzel';
    position: absolute;
    width: calc(100% - 5vw);
  }
`;

export default Footer;
