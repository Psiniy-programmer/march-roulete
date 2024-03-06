import React from "react";
import styled from "styled-components";
import './styles.css'


export const Button = ({children, isReversed, ...props}) => {
    return <button {...props} className={`button-28 ${isReversed ? 'reversed' : ''}`}>{children}</button>
};

// OData