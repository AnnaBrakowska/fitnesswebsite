import React from 'react'
import { FormContainer, FormElement, FormInput, FormTextArea, FormHeader } from './Form.elements'
import { Button } from '../../globalStyles'

function Form() {
    return (
        <FormContainer>
            <FormHeader>Hey, I would love to hear from you!</FormHeader>
            <FormElement>
                <FormInput placeholder="Email address" />
                <FormInput placeholder="Name" />
                <FormTextArea placeholder="Your message..." />
                <Button>Send</Button>
            </FormElement>
        </FormContainer>
    )
}

export default Form
