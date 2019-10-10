import styled from 'styled-components';

export const Input = styled.input.attrs(props => ({
    type: 'checkbox',
    checked: props.checked,
}))`
    width:70px;
    height:25px;
    -webkit-appearance: none;
    position:relative;
    background-color:#ffffff;
    outline: none;
    top:5px;
    border-radius: 20px;
    transition: .5s;
    box-shadow: inset 0 0 10px rgba(0,0,0,.6);
    
    
    &:before{
        content:'😊';
        position: absolute;
        text-align: center;
        line-height: 25px;
        width:25px;
        height:25px;
        border-radius: 20px;
        background-color:#ffffff;
        border: 1px solid #000;
        top:-2px;
        left:0;
        transition: .5s;
        transform:scale(1,1);
    }
    
    &:checked:before{
      left:45px;
    }
`;