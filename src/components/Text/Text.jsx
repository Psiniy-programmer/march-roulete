import React from 'react';
import styled from 'styled-components';

const StyledText = styled.p`
    font-family: Roobert,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
  font-size: ${({ isBig }) => isBig ? '32px' : '16px'};
  font-weight: ${({ isBig }) => isBig ? 900 : 600};
  line-height: normal;
`;

export const Text = ({children, isBig}) => {
    return <StyledText isBig={isBig}>
        {children}
    </StyledText>
}