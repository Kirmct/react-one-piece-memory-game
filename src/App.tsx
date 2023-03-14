import * as C from "./App.styles";

//types
import { GridItemType } from "./types/GridItemType";
//data
import { items } from "./data/items";

//assets
import logo from "./assets/ope.png";
import { InfoItem } from "./components/InfoItem";
import { useEffect, useState } from "react";
import { Button } from "./components/Button";
import restartIcon from "./svgs/restart.svg";
import { GridItem } from "./components/GridItem";

//helpers
import { formatTimeElapsed } from "./helpers/formatTimeElepsed";

function App() {
  const [gridItems, setGridItems] = useState<GridItemType[]>([]);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [moveCount, setMoveCount] = useState<number>(0);
  const [playing, setPlaying] = useState<boolean>(false);
  const [showCount, setShowCount] = useState<number>(0);

  useEffect(() => restartAndReset(), []);

  useEffect(() => {
    const timer = setInterval(() => {
      if (playing) setCurrentTime(currentTime + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [playing, currentTime]);

  useEffect(() => {
    if (showCount === 2) {
      let opened = gridItems.filter((item) => item.show === true);
      if (opened.length === 2) {
        if (opened[0].item === opened[1].item) {
          let tmpGrid = [...gridItems];
          for (let i in tmpGrid) {
            if (tmpGrid[i].show) {
              tmpGrid[i].permanentShown = true;
              tmpGrid[i].show = false;
            }
          }
          setGridItems(tmpGrid);
          setShowCount(0);
        } else {
          setTimeout(() => {
            let tmpGrid = [...gridItems];
            for (let i in tmpGrid) {
              tmpGrid[i].show = false;
            }
            setGridItems(tmpGrid);
            setShowCount(0);
          }, 1000);
        }

        setMoveCount((moveCount) => moveCount + 1);
      }
    }
  }, [showCount, gridItems]);

  useEffect(() => {
    if (
      moveCount > 0 &&
      gridItems.every((item) => item.permanentShown === true)
    ) {
      setPlaying(false);
    }
  }, [gridItems, moveCount]);

  //funcoes
  const restartAndReset = () => {
    setCurrentTime(0);
    setMoveCount(0);
    setShowCount(0);

    let tempGrid: GridItemType[] = [];
    //starting grid
    for (let i = 0; i < items.length * 2; i++) {
      tempGrid.push({ item: null, show: false, permanentShown: false });
    }
    //fill all grid
    for (let j = 0; j < 2; j++) {
      for (let k = 0; k < items.length; k++) {
        let pos = -1;
        while (pos < 0 || tempGrid[pos].item !== null) {
          pos = Math.floor(Math.random() * (items.length * 2));
        }
        tempGrid[pos].item = k;
      }
    }

    setGridItems(tempGrid);
    setPlaying(true);
  };

  const handleClick = (index: number) => {
    if (playing && index !== null && showCount < 2) {
      let tempGrid = [...gridItems];
      if (
        tempGrid[index].permanentShown === false &&
        tempGrid[index].show === false
      ) {
        tempGrid[index].show = true;
        setShowCount(showCount + 1);
      }
      setGridItems(tempGrid);
    }
  };
  return (
    <C.Container>
      <C.InfoArea>
        <C.Logo>
          <img src={logo} alt="" />
        </C.Logo>
        <InfoItem
          label="Tempo"
          value={formatTimeElapsed(currentTime)}
        ></InfoItem>
        <InfoItem label="Movimentos" value={moveCount.toString()}></InfoItem>
        <Button
          icon={restartIcon}
          label="Reiniciar"
          onClick={restartAndReset}
        />
      </C.InfoArea>
      <C.GridArea>
        <C.Grid>
          {gridItems.map((item, index) => (
            <GridItem
              key={index}
              item={item}
              onClick={() => handleClick(index)}
            />
          ))}
        </C.Grid>
      </C.GridArea>
    </C.Container>
  );
}

export default App;
