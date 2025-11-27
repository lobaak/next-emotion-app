import styled from "@/app/utils/styled";

const StyledDiv = styled("div")`
  width: 200px;
  height: 200px;
  background-color: ${({ theme }) => theme.tokens.global.bodyTextColorInverse};
  padding: ${({ theme }) => theme.getSize(2, true)};
  font-family: ${({ theme }) => theme.bodyFont};
`;

const environment = typeof window !== "undefined" ? "client" : "server";

export const Box = () => {
  console.log("Box rendered on:", environment);
  return <StyledDiv>Some box</StyledDiv>;
};
