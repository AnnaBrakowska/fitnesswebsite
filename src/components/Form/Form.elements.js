import styled from 'styled-components'

export const FormContainer = styled.section`
    background-color: #101522;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    height: 400px;
`

export const FormHeader = styled.h1`
    color: white;
    margin-bottom: 20px;
`

export const FormElement = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 60%;

  @media screen and (max-width: 820px) {
    width: 80%;
  }
`

export const FormInput = styled.input`
    padding: 10px 20px;
    border-radius: 2px;
    margin-right: 10px;
    margin-bottom: 20px;
    outline: none;
    border: none;
    font-size: 16px;
    border: 1px solid #fff;
    width: 100%;

    &::placeholder {
        color: #242424;
    }

    @media screen and(max-width: 820px) {
        width: 100%;
        margin: 0 0 16px 0;
    }
`;

export const FormTextArea = styled.textarea`
  border-radius: 2px;
    margin-right: 10px;
    margin-bottom: 10px;
    outline: none;
    border: none;
    font-size: 16px;
    border: 1px solid #fff;
    width: 100%;
    height: 100px;
    padding: 10px 20px;

    &::placeholder {
        color: #242424;
    }

    @media screen and(max-width: 820px) {
        width: 100%;
        margin: 0 0 16px 0;
    }
`