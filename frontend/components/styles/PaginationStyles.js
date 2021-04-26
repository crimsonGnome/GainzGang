import styled from 'styled-components';

const PaginationStyles = styled.div`
  text-align: center;
  display: inline-grid;
  grid-template-columns: repeat(4, auto);
  align-items: stretch;
  justify-content: center;
  align-content: center;
  margin: 2rem 0;
  color: #676767;

  & > * {
    margin: 0;
    padding: 15px 30px;

    &:last-child {
    }
  }
  a {
    color: #676767;
  }
  a[aria-disabled='true'] {
    color: white;
    pointer-events: none;
  }
  @media (${(props) => props.theme.phoneView}) {
    font-size: 1.2rem;
    border-radius: 10px;
    & > * {
      margin: 0;
      padding: 0.3rem 0.6rem;

      &:last-child {
      }
    }
  }
`;

export default PaginationStyles;
