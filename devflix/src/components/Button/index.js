import styled from "styled-components";
import { Link } from 'react-router-dom';

const Button = styled(Link)`
    box-sizing: border-box;
    cursor: pointer;
    padding: 16px 24px;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    outline: none;
    border-radius: 0px;
    text-decoration: none;
    display: inline-block;
    transition: opacity .3s; 
`;

export default Button