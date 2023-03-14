import * as C from "./styles";

type Props = {
  label: string;
  icon?: string;
  onClick: () => void;
};

export const Button = ({ label, onClick, icon }: Props) => {
  return (
    <C.Container onClick={onClick}>
      {icon && <C.BtnImg src={icon}></C.BtnImg>}

      <C.BtnLabel>{label}</C.BtnLabel>
    </C.Container>
  );
};
