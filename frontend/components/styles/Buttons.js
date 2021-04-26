import styled from 'styled-components';

const Button = styled.button`
  font-family: Science;
  border: none;
  border-radius: 2px;
  font-weight: 600;
  display: inline-block;
  background-color: ${(props) => props.theme.titleBackground};
  color: ${(props) => props.theme.secondary};
  height: 36px;
  line-height: 36px;
  padding: 0 16px;
  transition: 0.5s;
  letter-spacing: 0.1em;

  :hover {
    background-color: ${(props) => props.theme.primaryLight};
  }
`;

const ButtonLight = styled.button`
  cursor: pointer;
  font-family: Science;
  border: 1px solid ${(props) => props.theme.titleBackground};
  border-radius: 2px;
  font-weight: 900;
  display: inline-block;
  background-color: ${(props) => props.theme.secondary};
  color: ${(props) => props.theme.titleBackground};
  height: 36px;
  line-height: 36px;
  padding: 0 16px;
  transition: 0.5s;
  letter-spacing: 0.1em;

  :hover {
    color: ${(props) => props.theme.primaryLight};

    border: 1px solid ${(props) => props.theme.primaryLight};
  }
`;

export default Button;
export { ButtonLight };
