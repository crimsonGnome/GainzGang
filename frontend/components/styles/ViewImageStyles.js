import styled from 'styled-components';

const ViewImageStyles = styled.div`
  text-align: right;
  .port {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 20px;
    max-width: ${props => props.theme.maxWidth};
    width: 80vw;
  }
  .close {
    border-radius: 3px;
  }
  .gallery {
    display: grid;
    grid-template-columns: repeat(auto-fill, 100px);
    grid-auto-rows: 100px;
    grid-auto-flow: dense;
  }
  .singlePicture {
    display: grid;
    grid-template-columns: repeat(auto-fill, 400px);
    grid-auto-rows: 200px;
    grid-auto-flow: dense;
  }

  .item {
    overflow: hidden;
    display: grid;
    grid-template-columns: 1;
    grid-template-rows: 1;
  }

  .item img {
    grid-column: 1 / -1;
    grid-row: 1 / -1;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .item__overlay {
    background: #ffc60032;
    grid-column: 1 / -1;
    grid-row: 1 / -1;
    position: relative;
    display: grid;
    justify-items: center;
    align-items: center;
    transition: 0.2s;
    transform: translateY(100%);
  }

  .item__overlay button {
    background: none;
    border: 2px solid white;
    color: white;
    text-transform: uppercase;
    background: rgba(0, 0, 0, 0.7);
    padding: 5px;
  }

  .item:hover .item__overlay {
    transform: translateY(0);
  }
  .item.v2 {
    grid-row: span 2;
  }

  .item.v3 {
    grid-row: span 3;
  }

  .item.v4 {
    grid-row: span 4;
  }

  .item.h2 {
    grid-column: span 2;
  }

  .item.h3 {
    grid-column: span 3;
  }

  .item.h4 {
    grid-column: span 4;
  }

  .overlay {
    position: fixed;
    background: rgba(0, 0, 0, 0.7);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: none;
    z-index: 2;
  }

  .overlay.open {
    display: grid;
    align-items: center;
    justify-items: center;
  }

  .overlay-inner {
    background: white;

    padding: 20px;
  }
  .overlay-img-container {
    height: 90vh;
    display: grid;
  }
  .overlay-img {
    grid-column: 1 / -1;
    grid-row: 1 / -1;
    object-fit: contain !important;
    height: 100% !important;
    width: 100%;
  }
`;

export default ViewImageStyles;
