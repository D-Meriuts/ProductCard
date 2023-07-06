import styled from "styled-components";
import Title from "/src/title/title";

export const TitleList = styled.div`
  display: inline-flex;
  background-color: #ddd;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  overflow: hidden;
`;

export const TitleButton = styled.button`
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 20px;
  padding-right: 20px;
  border: none;
  cursor: pointer;
  box-shadow: none;
  display: block;
  background-color: ${(props) => (props.active ? "#CCC" : "none")};
`;

export const TitleText = styled(Title)`
  color: ${(props) =>
    props.active ? props.theme.textColor : props.theme.textColorMuted};
`;

export const Content = styled.div`
  border: 1px solid #ddd;
  padding: ${(props) => props.theme.indent};
  line-height: 1.5;
  font-size: 16px;
  box-sizing: border-box;
  text-align: left;
`;
