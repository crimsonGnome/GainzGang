import styled from 'styled-components';

const PriceTag = styled.span`
  background: rgba(51, 51, 51, 0.5);
  transform: rotate(8deg);
  color: white;
  text-shadow: 2px 2px 4px rgba(38, 29, 26, 0.2);
  padding: 5px;
  line-height: 1;
  font-size: 2.2rem;
  display: inline-block;
  position: absolute;
  top: -3px;
  right: -3px;

  @media (${(props) => props.theme.phoneView}) {
    font-size: 1rem;
  }
`;

const OgPriceTagClearance = styled.span`
  background: rgba(255, 255, 255, 0.6);
  transform: rotate(8deg);
  color: white;

  text-decoration: line-through;
  padding: 5px;
  line-height: 1;
  font-size: 2.2rem;
  display: inline-block;
  position: absolute;
  top: -3px;
  right: -3px;
  top: 2.2rem;
  @media (${(props) => props.theme.phoneView}) {
    font-size: 1rem;
  }
`;

const PriceTagClearance = styled.span`
  background: rgba(255, 51, 51, 0.5);
  transform: rotate(8deg);
  color: white;
  text-shadow: 2px 2px 4px rgba(38, 29, 26, 0.2);
  padding: 5px;
  line-height: 1;
  font-size: 2.2rem;
  display: inline-block;
  position: absolute;

  top: -3px;
  right: -3px;

  @media (${(props) => props.theme.phoneView}) {
    font-size: 1rem;
  }
`;

export default PriceTag;
export { OgPriceTagClearance, PriceTagClearance };
