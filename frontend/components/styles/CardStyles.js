import styled from 'styled-components';

const Card = styled.div`
  position: relative;
  margin: 0.5rem 0 1rem 0;
  background-color: #ffffff99;
  border-radius: 2px;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
  overflow: hidden;
  font-size: 1.8rem;
  .opacity-none {
    height: 100%;
    width: 100%;
    background-color: #ffffff;
  }
  .facebook {
    position: relative;
    overflow: hidden;
    height: 80vh;
    width: 100%;
  }
  .facebook iframe {
    height: 80vh;
    width: 100%;
    top: 0;
    left: 0;
    position: absolute;
  }

  .card-image,
  .card-image-teacher-home {
    position: relative;
    transform: scale(1);
    background-color: #000;

    overflow: hidden;
  }
  .card-image-teacher-home {
    width: 98px;
    border-radius: 2px;
  }

  svg {
    height: auto;
    display: block;
    border-radius: 2px 2px 0 0;
    background-position: center center;
    position: relative;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    opacity: 0.9;
    width: 100%;
    transition: opacity 0.6s ease, transform 0.6s ease;
    :hover {
      opacity: 0.75;
      transform: scale(1.1);
    }
  }
  .article-image {
    position: relative;
    transform: scale(1);
    background-color: #000;
    overflow: hidden;
  }
  .item-image {
    position: relative;
    transform: scale(1);
    background-color: #000;
    overflow: hidden;
    height: 200px;
  }
  img {
    display: block;
    border-radius: 2px 2px 0 0;
    background-position: center center;
    position: relative;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    opacity: 0.9;
    width: 100%;
    transition: opacity 0.6s ease, transform 0.6s ease;
    :hover {
      opacity: 0.75;
      transform: scale(1.1);
    }
  }
  .teacherHome {
    height: 125px;
  }
  span {
    color: ${props => props.theme.primary};
    max-width: 100%;

    font-weight: 300;
  }
  .card-content {
    display: grid;
    justify-items: center;

    padding: 24px;
    padding-top: 0;
    border-radius: 0 0 2px 2px;
  }
  .dual {
    display: grid;
    justify-items: center;
    align-items: center;
    grid-template-columns: 1fr 1fr;

    padding: 24px;
    border-radius: 0 0 2px 2px;
    grid-gap: 20px;
  }
  .article-title {
    z-index: 2;

    padding: 8px;
    border-radius: 0 0 2px 2px;
  }
  .paragraph {
    text-indent: 50px;
  }
  .WASC {
    height: 200px;
    width: 200px;
  }
`;

const Cardheader = styled.h3`
  font-family: 'europa';

  display: grid;
  grid-template-columns: 1fr auto 1fr;
  grid-gap: 10px;
  align-items: center;
  color: ${props => props.theme.primaryLight};
  ::before,
  ::after {
    display: block;
    content: '';
    height: 2px;
    background: linear-gradient(
      to var(--direction, left),
      ${props => props.theme.primaryLight},
      transparent
    );
  }
  ::after {
    --direction: right;
  }
`;
const CardheaderBig = styled.h3`
  font-family: 'europa';
  text-transform: uppercase;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  grid-gap: 10px;
  align-items: center;
  font-size: 3rem;
  color: ${props => props.theme.primary};
  ::before,
  ::after {
    display: block;
    content: '';
    height: 2px;
    background: linear-gradient(
      to var(--direction, left),
      ${props => props.theme.primary},
      transparent
    );
  }
  ::after {
    --direction: right;
  }
`;

export default Card;
export { Cardheader };
export { CardheaderBig };
