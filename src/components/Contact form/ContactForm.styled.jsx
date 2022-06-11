import styled from 'styled-components';
import { Form } from 'formik';

export const StyledForm = styled(Form)`
  margin-top: 32px;
  border: solid 2px lightgray;
  border-radius: 15px;
  width: 300px;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 20px;

  label {
    text-align: center;
  }

  button {
    width: 100px;
    padding: 5px 10px;
    border: none;
    border-radius: 15px;
    background-color: #ffffff;
    cursor: pointer;
    margin-top: 15px;
  }
`;

export const EditForm = styled(Form)`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  input {
    width: 100%;
  }

  .submit-btn {
    width: 100px;
    padding: 5px 10px;
    border: none;
    border-radius: 15px;
    background-color: #ffffff;
    cursor: pointer;
    margin-top: 15px;
    color: black;
    margin: 15px auto 0 auto;
  }
  .close-btn {
    position: absolute;
    top: 5px;
    right: 5px;
    padding: 0;
  }
`;
