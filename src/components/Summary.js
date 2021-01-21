/**
 * Default Imports 👩‍💻
 */
import React from 'react';
import styled from 'styled-components';


export default function Summary( props ){
    const { text } = props;
    return (
        <StyledSummary>{ text }</StyledSummary>
    );
}

const StyledSummary = styled.p`
    width:90%;
    text-align:center;
    margin:auto;
    margin-top:30px;
    margin-bottom:20px;
    line-height:1.7;
    font-size:1.1rem;
`;
