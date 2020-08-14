import React from 'react';
import { InputBlock } from './styles';

function FormField({ label, name, ...rest}) {

    return (
        <InputBlock>
            <InputBlock.Label htmlFor={name}>
            <InputBlock.Input 
                id={name}
                name={name}
                {...rest}
                />
                <InputBlock.PlaceHolder htmlFor={name}>Nome da Categoria</InputBlock.PlaceHolder>
            </InputBlock.Label>
        </InputBlock>
    );
}

export default FormField;