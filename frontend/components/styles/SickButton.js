import styled from 'styled-components';

const SickButton = styled.button`
  cursor: pointer;
  transform: skew(-5deg) rotate(-1deg);
  font-size: 2rem;
  background: ${(props) => props.theme.primary};
  box-shadow: ${(props) => props.theme.bs};
  color: white;
  border: 0;
  border-radius: 3px;
  font-size: 2rem;
  padding: 0.8rem 1.5rem;
  transition: all 0.3s;
  text-shadow: -1px 1px 2px ${(props) => props.theme.secondary};
  &[disabled] {
    opacity: 0.5;
  }
  :hover {
    background: ${(props) => props.theme.titleBackground};

    border: 1px solid ${(props) => props.theme.titleBackground};
  }
`;
const SickButtonView = styled.span`
  button {
    cursor: pointer;

    background: ${(props) => props.theme.primary};
    box-shadow: ${(props) => props.theme.bs};
    color: white;
    text-shadow: -1px 1px 2px ${(props) => props.theme.navSecondary};
    border: 0;
    border-radius: 3px;

    font-size: 2rem;
    padding: 0.8rem 1.5rem;
    transform: skew(-5deg) rotate(-1deg);
    display: inline-block;
    transition: all 0.3s;
    &[disabled] {
      opacity: 0.5;
    }
  }
`;

const LightButtonViewBlock = styled.span`
  width: 100%;
  button {
    width: 100%;
    cursor: pointer;
    font-family: Science;
    background: ${(props) => props.theme.titleBackground};
    box-shadow: ${(props) => props.theme.bs};
    color: white;
    text-shadow: -1px 1px 2px ${(props) => props.theme.secondary};
    border: 0;
    border-radius: 3px;

    font-size: 2rem;
    padding: 0.8rem 1.5rem;
    transform: skew(-5deg) rotate(-1deg);
    display: inline-block;
    transition: all 0.3s;
    &[disabled] {
      opacity: 0.5;
    }
    :hover {
      background: ${(props) => props.theme.primary};

      border: 1px solid ${(props) => props.theme.primaryLight};
    }
  }

  button[aria-expanded='true'] {
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
    transition: 0.3s;
    letter-spacing: 0.1em;

    :hover {
      background: ${(props) => props.theme.primary};

      border: 1px solid ${(props) => props.theme.primaryLight};
    }
  }
`;

const LightButtonView = styled.span`
  button {
    cursor: pointer;
    font-family: Science;
    background: ${(props) => props.theme.titleBackground};
    box-shadow: ${(props) => props.theme.bs};
    color: white;
    text-shadow: -1px 1px 2px ${(props) => props.theme.secondary};
    border: 0;
    border-radius: 3px;

    font-size: 2rem;
    padding: 0.8rem 1.5rem;
    transform: skew(-5deg) rotate(-1deg);
    display: inline-block;
    transition: all 0.3s;
    &[disabled] {
      opacity: 0.5;
    }
    :hover {
      background: ${(props) => props.theme.primary};

      border: 1px solid ${(props) => props.theme.primaryLight};
    }
  }

  button[aria-expanded='true'] {
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
    transition: 0.3s;
    letter-spacing: 0.1em;

    :hover {
      background: ${(props) => props.theme.primary};

      border: 1px solid ${(props) => props.theme.primaryLight};
    }
  }
`;
export default SickButton;
export { SickButtonView };
export { LightButtonView };
export { LightButtonViewBlock };
