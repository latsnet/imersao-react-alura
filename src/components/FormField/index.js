import React from 'react';
import { InputBlock } from './styles';

function FormField({ label, name, ...rest}) {

    return (
        <InputBlock>
            <InputBlock.Container>
                <InputBlock.Label htmlFor={name} placeHolder={name}>
                <InputBlock.Input 
                    id={name}
                    name={name}
                    {...rest}
                    />
                    <InputBlock.PlaceHolder htmlFor={name}>{label}</InputBlock.PlaceHolder>
                </InputBlock.Label>
            </InputBlock.Container>
        </InputBlock>
    );
}

export default FormField;