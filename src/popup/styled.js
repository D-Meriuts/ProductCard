import styled from "styled-components";
import Botton from "/src/button/button";
export const Wrapper = styled.div`
  border: 1px solid black;
  padding: 15px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  min-width: 500px;
  z-index: 6;
`;

export const Close = styled(Botton)`
  position: absolute;
  top: 0;
  right: 5px;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  padding: 3px;
  line-height: 1;
  padding: 0;
`;

export const Header = styled.header`
  position: relative;
  display: flex;
  border-bottom: 1px solid black;
  padding-top: 5px;
  padding-bottom: 5px;
  margin-bottom: 10px;
  font-weight: bold;
  font-size: 18px;
`;
