import styled from 'styled-components';

const Item = styled.div`
  background: white;
  border: 1px solid ${(props) => props.theme.lightGrey};
  box-shadow: ${(props) => props.theme.bs};
  position: relative;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  max-height: 340px;
  img {
    width: 100%;
    height: 300px;
    object-fit: cover;
  }
  img.event {
    width: 100%;
    height: 300px;
    object-fit: contain;
    background: rgb(20, 20, 0);
  }
  p {
    font-size: 12px;
    line-height: 2;
    font-weight: 300;
    flex-grow: 1;
    padding: 0 3rem;
    font-size: 1.5rem;
  }
  .buttonList {
    display: grid;
    width: 100%;
    text-align: center;
    border-top: 1px solid ${(props) => props.theme.lightGrey};
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    grid-gap: 1px;
    max-height: 40px;
    background: ${(props) => props.theme.lightGrey};
    & > * {
      background: white;
      border: 0;
      font-size: 1rem;
      padding: 1rem;
    }
  }
  .borderButton {
    width: 80vw;
    margin-left: 10vw;
    position: relative;
    display: grid;
  }
  @media (${(props) => props.theme.phoneView}) {
    img {
      height: 200px;
    }
    img.event {
      width: 100%;
      height: 400px;
      object-fit: contain;
      background: rgb(20, 20, 0);
    }
    p {
      height: 0;
      margin: auto;
      overflow: hidden;
      color: white;
    }
    .event {
      font-size: 12px;
      line-height: 2;
      font-weight: 300;
      flex-grow: 1;
      padding: 0 3rem;
      font-size: 1rem;
    }
  }
`;
const Buttons = styled.div`
  width: 100%;
  padding: 0 5vw 0 5vw;
  margin-bottom: 50px;
  position: relative;
  background: white;
  display: grid;
  background: white;
  border: 1px solid ${(props) => props.theme.secondary};
  box-shadow: ${(props) => props.theme.bs};
  .buttonList {
    display: grid;
    width: 100%;
    border-top: 1px solid ${(props) => props.theme.lightGrey};
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    grid-gap: 1px;
    background: ${(props) => props.theme.lightGrey};
    & > * {
      background: white;
      border: 0;
      font-size: 1.5rem;
      padding: 1rem;
    }
    a {
      text-align: center;
    }
  }

  .fitler {
    display: grid;
    width: 100%;
    border-top: 1px solid ${(props) => props.theme.lightGrey};
    grid-template-columns: repeat(auto-fit, 1fr);
    grid-gap: 1px;
    background: ${(props) => props.theme.lightGrey};
    & > * {
      background: white;
      border: 0;
      font-size: 1.5rem;
      padding: 1rem;
    }
  }
  h3 {
    text-align: center;
  }
`;
export default Item;
export { Buttons };
