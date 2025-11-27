import styled from "@emotion/styled";
import { useEffect, useState } from "react";

const StyledButton = styled.button`
  padding: 8px 16px;
  border: none;
  background-color: ${({ theme }) =>
    theme.tokens.button.primary.background.color.active};
  cursor: pointer;
`;

export const Button = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Button mounted");
  }, []);

  return (
    <StyledButton type="button" onClick={() => setCount(count + 1)}>
      Click me ({count})
    </StyledButton>
  );
};
