import { GridItemType } from "../../types/GridItemType";
import * as C from "./styles";
import { items } from "../../data/items";
import sunny from "../../assets/sunny.png";

type Props = {
  item: GridItemType;
  onClick: () => void;
};

export const GridItem = ({ item, onClick }: Props) => {
  return (
    <C.Container
      showBackground={item.show || item.permanentShown}
      onClick={onClick}
    >
      {!item.permanentShown && !item.show && (
        <C.Icon opacity={0.3} src={sunny} />
      )}

      {(item.permanentShown || item.show) && item.item !== null && (
        <C.Icon src={items[item.item].icon} />
      )}
    </C.Container>
  );
};
