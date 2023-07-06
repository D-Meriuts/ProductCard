import styled from "styled-components";

export const Code = styled.span.attrs((props) => ({
  children: `Артикул: ${props.children}`
}))`
  color: ${(props) => props.theme.textColorMuted};
  font-size: 12px;
`;

export default Code;
