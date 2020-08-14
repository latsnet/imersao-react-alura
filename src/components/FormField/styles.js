import styled from 'styled-components';

export const InputBlock = styled.div`
    display: block;
    margin-bottom: 5%;
    font-family: 'Ubuntu';
`;

InputBlock.Label = styled.label`

`;

InputBlock.Input = styled.input`
    height: 48px;
    padding: 10px 10px 0;
    width: 100%;
    line-height: normal;
    border-radius: 2px;
    display: block;
    box-shadow: none;
`;

InputBlock.PlaceHolder = styled.label`
    position: absolute;
    top: 50%;
    left: 10px;
    color: #8c8c8c;
    transition: font .1s ease,top .1s ease,transform .1s ease,-webkit-transform .1s ease,-moz-transform .1s ease,-o-transform .1s ease;
    @media only screen and (min-width: 740px) {
        font-size: 16px;
    }
`