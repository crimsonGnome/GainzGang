import styled from 'styled-components';

const ArticleSection = styled.section`
  position: relative;
  display: grid;
  padding: 10px 10px;

  .searchBar {
    margin: 0;
    padding: 0;
  }
  .searchBar h3 {
    font-family: ScienceItalic;
    color: white;
    text-shadow: 1px 1px 2px rgba(0, 9, 114);
    transform: skew(-5deg) rotate(-1deg);
    background: ${(props) => props.theme.titleBackground};
    font-size: 2rem;

    border-bottom: 3px solid #676767;

    font-style: normal;
    line-height: 1.4;
    text-rendering: optimizeLegibility;
  }
  .searchBar h4 {
    font-family: ScienceItalic;
    color: white;
    text-shadow: 1px 1px 2px rgba(0, 9, 114);
    transform: skew(-5deg) rotate(-1deg);
    background: ${(props) => props.theme.titleBackground};
    font-size: 1.8rem;

    cursor: pointer;
    display: block;
    position: relative;
    margin-bottom: 0;
  }
  .searchBar ul {
    margin: 0;
    border-bottom: 1px solid #676767;
  }
  .searchBar ul li,
  .searchBar ul li a {
    margin-right: 0.25rem;
    color: #676767;
    font-size: 1.4rem;
    position: relative;
    top: 1px;
    list-style: none;
  }
  .filterExpand {
    display: none;
  }
  .search {
    margin-top: 20px;
  }

  @media (${(props) => props.theme.phoneViewLarge}) {
    .searchBar[aria-expanded='false'] {
      display: none;
    }
    .searchBar[aria-expanded='true'] {
      display: block;
    }
    .filterExpand[aria-expanded='false'] {
      display: block;
    }
    .filterExpand[aria-expanded='true'] {
      display: block;
    }
  }
`;

const HomePage = styled.div`
  .sectionNews {
    width: 100%;
    background: #f5f5f5;
  }
  .blog {
    grid-column: 1 / -1;
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    grid-gap: 10px;
    align-items: center;
    ::before,
    ::after {
      display: block;
      content: '';
      height: 2px;
      background: linear-gradient(
        to var(--direction, left),
        ${(props) => props.theme.primary},
        transparent
      );
    }
    ::after {
      --direction: right;
    }
  }
  .primaryLight {
    cursor: pointer;
    color: ${(props) => props.theme.primaryLight};
  }
  .ExploreSection {
    position: relative;
    padding: 0 5vw;
    background-image: url('/static/school2.png');
    background-position: top left;
  }
  .noData {
    grid-column: 1 / -1;
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    grid-gap: 10px;
    align-items: center;
  }
`;
const BannerLabel = styled.h4`
  padding: 0;
  margin: 0;
  color: #ffffff;
  margin-bottom: 10px;
  font-weight: 900;
  font-size: 3.1em;
  text-transform: uppercase;
  @media (${(props) => props.theme.LargeTabletView}) {
    font-size: 2.5em;
  }
  @media (${(props) => props.theme.phoneViewLarge}) {
    font-size: 2em;
  }
`;
const BannerPadding = styled.div`
  padding: 5px 5px 0px 5px;
  top: 15%;
  left: 10%;
  background: rgba(51, 51, 51, 0.5);
  max-width: 800px;
  box-sizing: border-box;
  position: relative;
  @media (${(props) => props.theme.LargeTabletView}) {
    max-width: 700px;
  }
  @media (${(props) => props.theme.tabletViewMed}) {
    max-width: 500px;
  }
`;

export default ArticleSection;
export { HomePage };
export { BannerLabel };
export { BannerPadding };
