import styled, { keyframes } from 'styled-components';

const loading = keyframes`
  from {
    background-position: 0 0;
    /* rotate: 0; */
  }

  to {
    background-position: 100% 100%;
    /* rotate: 360deg; */
  }
`;

const Form = styled.form`
  position: relative;
  box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.05);
  background: white;
  border: 5px solid white;
  padding: 20px;
  font-size: 1.5rem;
  line-height: 1.5;
  font-weight: 600;
  z-index: 0;
  .pictureHolder {
    height: 100%;
    width: 100%;
  }

  label {
    display: block;
    margin-bottom: 1rem;
  }
  input,
  textarea,
  select {
    position: relative;
    width: 100%;
    padding: 0.5rem;
    font-size: 1rem;
    font-family: 'radnika_next';
    border: 1px solid black;
    z-index: 1;
    &:focus {
      outline: 0;
      border-color: ${(props) => props.theme.red};
    }
  }
  textarea {
    min-height: 20vh;
    max-height: 40vh;
    height: max-content;
    font-size: 1.5rem;
    z-index: 1;
  }
  button,
  input[type='submit'] {
    position: relative;
    width: auto;
    font-family: Science;
    background: ${(props) => props.theme.primary};
    box-shadow: ${(props) => props.theme.bs};
    color: white;
    border: 0;
    font-size: 2rem;
    font-weight: 600;
    padding: 0.5rem 1.2rem;
    text-shadow: -1px 1px 2px #ffc600;
    z-index: 1;
  }
  fieldset {
    position: relative;
    border: 0;
    padding: 0;
    z-index: 1;

    &[disabled] {
      opacity: 0.5;
    }
    &::before {
      height: 10px;
      content: '';
      display: block;
      background-image: linear-gradient(
        to right,
        #17161c 0%,
        #38383d 50%,
        #17161c 100%
      );
    }
    &[aria-busy='true']::before {
      background-size: 50% auto;
      animation: ${loading} 0.5s linear infinite;
    }
  }
  @media (${(props) => props.theme.phoneView}) {
    .font {
      display: grid;
      grid-template-columns: 1fr;
      max-width: 100%;
    }
  }
`;

export default Form;
