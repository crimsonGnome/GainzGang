import styled from 'styled-components';

const Title = styled.h3`
  font-family: Science;
  background: ${(props) => props.theme.titleBackground};
  box-shadow: ${(props) => props.theme.bs};
  margin: 1rem;
  text-align: center;
  transform: skew(-5deg) rotate(-1deg);
  margin-top: -3rem;
  font-family: scriptCookie;
  text-shadow: 2px 2px 4px rgba(0, 9, 114);
  a {
    background: ${(props) => props.theme.titleBackground};
    display: inline;
    line-height: 1.3;
    font-size: 4rem;
    text-align: center;
    color: white;
    padding: 0 1rem;
  }
  @media (${(props) => props.theme.phoneViewLarge}) {
    a {
      font-size: 2.5rem;
    }
  }
`;

const CustomTitle = styled.h3`
  font-family: Science;
  background: ${(props) => props.theme.titleBackground};
  box-shadow: ${(props) => props.theme.bs};
  margin: 1rem;
  font-family: scriptCookie;
  text-shadow: 2px 2px 4px rgba(0, 9, 114);
  transform: skew(-5deg) rotate(-1deg);
  font-size: 3rem;
  color: white;
  padding: 0 1rem;
  display: inline-block;
  @media (${(props) => props.theme.DesktopViewMidSmall}) {
    font-size: 3rem;
  }
  @media (${(props) => props.theme.phoneViewLarge}) {
    font-size: 2.5rem;
  }
`;

export default Title;
export { CustomTitle };
