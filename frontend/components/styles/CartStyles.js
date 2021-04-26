import styled from 'styled-components';

const CartStyles = styled.div`
  background: white;
  position: fixed;
  height: 100%;
  top: 0;
  right: 0;
  width: 40vw;
  min-width: 500px;
  bottom: 0;
  transform: translateX(100%);
  transition: all 0.3s;
  box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.2);
  z-index: 9999999;
  display: grid;
  grid-template-rows: auto 1fr auto;
  ${(props) => props.open && `transform: translateX(0);`};
  header {
    margin-bottom: 2rem;
  }
  h5 {
    margin-bottom: 0.5rem;
  }
  footer {
    width: 100%;
    position: absolute;
    bottom: 0;
    margin-top: 2rem;
    padding-top: 2rem;
    padding-bottom: 1rem;
    display: grid;
    grid-template-columns: auto auto;
    align-items: center;
    font-size: 3rem;
    font-weight: 900;
    p {
      margin: 0;
    }
  }
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  .juicyMargin {
    padding: 0 20px;
  }
  .cart {
    height: 300px;
    overflow-y: scroll;
  }
  @media (${(props) => props.theme.phoneViewLarge}) {
    max-width: 350px;
    min-width: 350px;
  }
`;

export default CartStyles;
