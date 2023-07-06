import styled from "styled-components";
import Price from "/src/price/price";

export const InnerPrice = styled(Price)`
  margin-left: ${(props) => props.theme.indent};
`;

export const PriceWrapper = styled.span`
  vertical-align: bottom;
  display: inline-block !important;
`;
