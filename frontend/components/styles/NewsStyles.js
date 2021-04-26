import styled from 'styled-components';

const ThirtySeventyNews = styled.div`
  display: grid;
  grid-template-columns: 3fr 7fr;
  grid-gap: 20px;
  justify-content: center;
  justify-self: center;
  align-self: center;
  @media (${props => props.theme.phoneViewLarge}) {
    grid-template-columns: 1fr;
  }
`;

const NewsCard = styled.div`
  padding: 20px;
  position: relative;
  margin: 0;
  background-color: #ffffff99;
  border-radius: 2px;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
  overflow: hidden;
  font-size: 1.8rem;
  .content {
    display: grid;
    grid-template-columns: 1fr 9fr;
    grid-gap: 20px;
  }
  .content svg {
    height: 25px;
    margin-bottom: 10px;
  }
  .svg {
    display: grid;
    justify-content: center;
    align-content: center;
    justify-items: center;
  }
  h5,
  h4 {
    margin: 0;
    color: ${props => props.theme.secondary};
    text-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14);
  }
  p {
    margin: 0;
    line-height: 1.5;
  }
  span {
    color: ${props => props.theme.primary};
  }
  .news-container {
  }
  .img-container {
    position: relative;
    height: 300px;
    width: 400px;
    border-radius: 5px;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
      0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
  }
  img {
    /* position: absolute; */
    background-position: center center;
  }
  .hashTag {
    color: ${props => props.theme.primary};
    font-weight: 900;
  }
`;

const SubNavNews = styled.ul`
  position: absolute;
  top: 50px;
  text-transform: uppercase;
  border-radius: 2px;
  border: 3px solid ${props => props.theme.secondary};
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
  margin: 0;
  width: 100%;
  padding: 0;
  z-index: 2;
  font-size: 1.8rem;

  li {
    width: 100%;
    padding: 1rem;
    margin: 0;
    color: black;
    background: #ffffff;
    list-style: none;
    transition: 0.2s;
    font-weight: 300;
    /* letter-spacing: 0.1em; */
    border-bottom: 1px solid c;
  }
  li.active {
    background: #ffffff70;
    color: ${props => props.theme.primaryLight};
    font-weight: 900;
  }
  li:hover {
    background: #ffffff70;
    color: ${props => props.theme.primaryLight};
    font-weight: 600;
  }
`;

const ColumnDivNews = styled.div`
  position: relative;
  &::before {
    position: absolute;
    content: '';
    left: 10vw;
    height: 50px;
    width: 3px;
    background: ${props => props.theme.secondary};
    top: 0;
    z-index: 1;
  }
  &::after {
    position: absolute;
    left: 10vw;
    display: block;
    content: '';
    height: calc(100% - 400px);
    width: 3px;
    background: ${props => props.theme.secondary};
    top: 370px;
    z-index: 1;
  }
`;
export { ThirtySeventyNews };
export { ColumnDivNews };
export { SubNavNews };
export { NewsCard };
