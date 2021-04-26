import styled from 'styled-components';

const Supreme = styled.h3`
  font-family: Science;
  background: ${(props) => props.theme.primary};
  box-shadow: ${(props) => props.theme.bs};
  text-shadow: -1px 1px 2px #ffc600;
  border-top: 10px solid ${(props) => props.theme.navSecondary};
  color: white;
  display: inline-block;
  padding: 4px 10px;
  margin: 0;
  font-size: 4rem;
  width: 100%;

  @media (${(props) => props.theme.phoneViewLarge}) {
    font-size: 2.4rem;
  }
  @media (${(props) => props.theme.phoneViewSmall}) {
    font-size: 2.4rem;
  }
`;

const FilterHeader = styled.div`
  background-image: ${(props) => props.theme.red};
`;

export default Supreme;
export { FilterHeader };
