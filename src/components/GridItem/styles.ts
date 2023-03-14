import styled from "styled-components";

type ContainerProps = {
  showBackground?: boolean;
};

type IconProps = {
  opacity?: number;
};

export const Container = styled.div<ContainerProps>`
  background-color: ${(props) =>
    props.showBackground ? " #58acf4" : "#412a1e"};
  height: 100px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    transform: scale(1.02);
  }
`;
export const Icon = styled.img<IconProps>`
  width: 140px;
  height: 140px;
  padding: 30px;
  opacity: ${(props) => (props.opacity ? props.opacity : 1)};
  transition: 0.2s;

  &:hover {
    opacity: 0.8;
  }
`;
