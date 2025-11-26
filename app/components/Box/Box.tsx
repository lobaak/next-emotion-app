import styled from "@/app/utils/styled";

const StyledDiv = styled("div")`
  width: 200px;
  height: 200px;
  background-color: ${({ theme }) => theme.tokens.global.bodyTextColorInverse};
  padding: ${({ theme }) => theme.getSize(2, true)};
  font-family: ${({ theme }) => theme.bodyFont};
`;

export const Box = () => {
  return <StyledDiv>Some box</StyledDiv>;
};
