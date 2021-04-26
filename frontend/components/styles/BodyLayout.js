import styled from 'styled-components';

const MainBody = styled.div`
  margin: 2rem;
  padding: 2rem;

  @media (${(props) => props.theme.tabletView}) {
    margin: 1rem;
    padding: 1rem;
  }
`;
const BodyMargin = styled.div`
  margin: 0 5vw;
`;
const TwentyEighty = styled.div`
  display: grid;
  grid-template-columns: 2fr 8fr;
  grid-gap: 20px;
  justify-content: center;
  justify-self: center;
  align-self: center;
  max-width: 100%;
  @media (${(props) => props.theme.phoneViewLarge}) {
    grid-template-columns: 1fr;
  }
`;
const DualLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  justify-content: center;
  justify-self: center;
  align-self: center;

  .center {
    text-align: center;
  }
  @media (${(props) => props.theme.tabletViewMed}) {
    grid-template-columns: 1fr;
  }
`;

const DualList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  justify-items: left;
  align-items: center;
  justify-self: center;
  align-self: center;
  text-decoration: none;
  padding: 0;
  list-style-type: none;
  font-weight: 200;
  padding: 0 20px;
`;
const Center = styled.div`
  text-align: center;
  grid-area: main;
  justify-self: center;
`;
const Center2 = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;
  justify-content: center;
  justify-self: center;
  align-self: center;

  .center {
    text-align: center;
  }
  .thiccc {
    padding: 10vh 10vw;
  }
`;
const SixtyForty = styled.div`
  display: grid;
  grid-template-columns: 6fr 4fr;
  grid-gap: 20px;
  justify-content: center;
  justify-self: center;
  align-self: center;
  @media (${(props) => props.theme.phoneViewLarge}) {
    grid-template-columns: 1fr;
  }
`;
const ThirtySeventy = styled.div`
  display: grid;
  grid-template-columns: 3fr 7fr;
  grid-gap: 20px;
  justify-content: center;
  justify-self: center;
  align-self: center;
  @media (${(props) => props.theme.phoneViewLarge}) {
    grid-template-columns: 1fr;
  }
`;
const SeventyThirty = styled.div`
  display: grid;
  grid-template-columns: 7fr 3fr;
  grid-gap: 20px;
  justify-content: center;
  justify-self: center;
  align-self: center;
  @media (${(props) => props.theme.phoneViewLarge}) {
    grid-template-columns: 1fr;
  }
`;
const EightyTwenty = styled.div`
  display: grid;
  grid-template-columns: 8fr 2fr;
  grid-gap: 20px;
  justify-content: center;
  justify-self: center;
  align-self: center;
  @media (${(props) => props.theme.phoneViewLarge}) {
    grid-template-columns: 1fr;
  }
`;

const ItemList = styled.div`
  margin-right: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;
  max-width: ${(props) => props.theme.maxWidth};
  @media (min-width: 2000px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }

  @media (${(props) => props.theme.DesktopViewMidSmall}) {
    grid-template-columns: 1fr 1fr;
  }
  @media (${(props) => props.theme.tabletViewSm}) {
    grid-template-columns: 1fr;
  }
`;
export { MainBody };
export { BodyMargin };
export { DualLayout };
export { SixtyForty };
export { DualList };
export { ThirtySeventy };
export { SeventyThirty };
export { TwentyEighty };
export { EightyTwenty };
export { ItemList };
export { Center };
export { Center2 };
