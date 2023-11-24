import styled from 'styled-components';

export const Box = styled.div`
    background: #fff;
    box-shadow: 0 1px 2px rgba(132, 148, 165, 0.1);
    border-radius: 8px;
    margin-bottom: 3rem;
`;

export const Password = styled.div`
    display: flex;
    align-items: center;
    padding: 1rem 1.5rem;
`;

export const Text = styled.div`
    flex: 1;
`;

export const Input = styled.input`
    font-family: 'Inconsolata', 'serif';
    font-size: 3rem;
    border: none;
    outline: none;
    cursor: default;
    height: 52px;
    width: 100%;
    transition: all 0.2s;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    &.font-sm {
    font-size: 2rem; 
    }
    &.font-xs {
    font-size: 1.5rem;
    }
    &.font-xxs {
    font-size: 1rem;
}
`;

export const Button1 = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
    opacity: 0.7;
    transition: opacity 0.2s;   
`;

export const Indicator = styled.div`
    height: 10px;
    background-color: #ddd;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
`;

export const Bar = styled.div`
    height: 10px;
    border-top-right-radius: 8px;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    transition: all 0.2s;
    &.safe {
        background-color: #27ae60;
    }
    &.warning {
        background-color: #f2c94c;
    }
    &.critical {
        background-color: #eb5757;
    }
    &.completed {
        border-top-right-radius: 0;
    }
`;

export const Customize = styled.div`
    background: #fff;
    box-shadow: 0 1px 2px rgba(132, 148, 165, 0.1);
    border-radius: 8px;
    margin-bottom: 3rem;
    padding: 1rem 1.5rem;
`;

export const Title = styled.h1`
    border-bottom: 1px solid #f0f0f0;
    font-size: 1.75rem;
    font-weight: bold;
    margin-bottom: 2rem;
    padding-bottom: 0.75rem;
`;

export const Actions = styled.div`
    display: flex;
    gap: 3rem;
    color: #828282;
`;

export const Passwordlenght = styled.div`
    flex: 1;
`;

export const Slider = styled.input`
    appearance: none;
    -webkit-appearance: none;
    height: 10px;
    background: #ddd;
    outline: none;
    border-radius: 8px;
    width: 100%;
    opacity: 0.7;
    transition: opacity 0.2s;
    margin-top: 1rem;
    &:hover {
        opacity: 1;
    }
    &::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        width: 25px;
        height: 25px;
        border-radius: 25px;
        background: #9b51e0;
        cursor: pointer;
    }
    &::-moz-range-thumb {
    width: 25px;
    height: 25px;
    border-radius: 25px;
    background: #9b51e0;
    cursor: pointer;
}
`;

export const Container = styled.label`
    display: block;
    position: relative;
    padding-left: 2rem;
    margin-bottom: 1rem;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
`;

export const InputContainer = styled.input`
    position: absolute;
    top: -5px;
    left: -3px;
    height: 25px;
    width: 25px;
    background-color: #ddd;
    transition: all 0.2s;
    color: #333;
`;


export const Submit = styled.div`
    text-align: center;
`;

export const Button2 = styled.button`
    background-color: #bb6bd9;
    font-size: 1.375rem;
    color: #fff;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    margin: 15px;
    padding: 1rem 2rem;
    transition: all 0.2s;
    &:hover {
        background-color: #9b51e0;
    }
`;


