import styled from "styled-components";

export const Container = styled.div`
  background-color: #105edd;
  width: max-content;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 12px;
  transition: 0.2s;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  &:hover {
    opacity: 0.7;
  }
`;
export const BtnImg = styled.img`
  width: 40px;
  height: 40px;
  padding: 10px;
  display: block;
  border-right: 1px solid #fefefe;
`;
export const BtnLabel = styled.div`
  padding: 10px 30px;
  flex: 1;
`;
