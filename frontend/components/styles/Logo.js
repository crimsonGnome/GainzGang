import styled from 'styled-components';

const Logo = styled.div`
  position: relative;
  width: 130px;
  display: grid;
  grid-template-columns: 1fr;
  text-align: center;
  align-content: center;

  img {
    width: 120px;
    height: auto;
  }
  ::before {
    content: 'EST.';
    display: block;
    position: absolute;
    top: 35%;
    transform: translateY(-100%, -50%);
    left: -34px;
    color: ${(props) => props.theme.primary};
    border-top: 1px solid ${(props) => props.theme.primary};
    border-bottom: 1px solid ${(props) => props.theme.primary};
  }
  ::after {
    content: '1953';
    display: block;
    position: absolute;
    top: 35%;
    transform: translateY(-100%, -50%);
    right: -31px;
    color: ${(props) => props.theme.primary};
    border-top: 1px solid ${(props) => props.theme.primary};
    border-bottom: 1px solid ${(props) => props.theme.primary};
  }
`;

const LogoInverse = styled.div`
  position: relative;
  text-align: center;
  align-content: center;

  img {
    width: auto;
    height: 100px;
  }
  ::before {
    content: 'EST.';
    display: block;
    position: absolute;
    top: 35%;
    transform: translateY(-100%, -50%);
    left: -23px;
    color: white;
    border-top: 1px solid white;
    border-bottom: 1px solid white;
  }
  ::after {
    content: '1953';
    display: block;
    position: absolute;
    top: 35%;
    transform: translateY(-100%, -50%);
    right: -25px;
    /* margin-right: 20px; */
    color: white;
    border-top: 1px solid white;
    border-bottom: 1px solid white;
  }
`;

const Title = styled.h3`
  margin: 1rem;
  color: white;
  border-radius: 2px;
  text-align: center;
  transform: skew(-5deg) rotate(-1deg);
  margin-top: -3rem;
  text-shadow: 1px 1px 2px ${(props) => props.theme.primary};
  a {
    background: ${(props) => props.theme.primarySuperLight};

    display: inline;
    line-height: 1.3;
    font-size: 4rem;
    text-align: center;
    color: white;
    padding: 0 1rem;
  }
  @media (${(props) => props.theme.phoneView}) {
    a {
      font-size: 2.5rem;
    }
  }
`;

const LogoStamp = styled.div`
  content: '';
  position: absolute;
  top: 30%;
  left: 0;
  width: 60%;
  height: 60%;
  background-image: radial-gradient(closest-side, transparent, white),
    url('/static/gainzGang.jpg');
  /* skewX: '(-15deg)'; */
  opacity: 0.6;
  background-size: cover;
  z-index: -1;
`;
const LogoStamp2 = styled.div`
  content: '';
  position: absolute;
  top: 20%;
  left: 0;
  width: 70%;
  height: 70%;
  background-image: radial-gradient(closest-side, transparent, white),
    url('/static/gainzGang.jpg');
  /* skewX: '(-15deg)'; */
  opacity: 0.6;
  background-size: cover;
  z-index: -1;
  @media (${(props) => props.theme.phoneViewLarge}) {
    height: 50%;
  }
`;

export default Logo;
export { LogoInverse };
export { Title };
export { LogoStamp };
export { LogoStamp2 };
