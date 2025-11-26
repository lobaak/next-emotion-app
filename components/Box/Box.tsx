import styled from "@/utils/styled";

const StyledDiv = styled("div")`
  width: 200px;
  height: 200px;
  font-family: ${({ theme }) => {
    console.log(theme);
    return theme.bodyFont;
  }};
`;

export const Box = () => {
  return <StyledDiv>xxxxxxx</StyledDiv>;
};
