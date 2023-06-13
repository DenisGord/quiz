import React, { FC, useMemo } from "react";

import { ListItemsStyle, ListStyle } from "../AdminRules/AdminRules.style";
import { user } from "../../constants";
export interface ResultsProps {
  counter: { name: string; point: { [key: number]: number } }[];
}

export const Results: FC<ResultsProps> = ({ counter }) => {
  const renderResult = useMemo(() => {
    if (counter.length > 0) {
      return counter.map(({ name, point }, i) => {
        const pointSumm =
          Object.keys(point).length > 0 &&
          Object.values(point)?.reduce((acc, cur) => acc + cur);

        const renderLi = Object.keys(point).map((item) => {
          return (
            <li>
              {`${+item + 1}=${point[item as unknown as keyof typeof point]}`}
            </li>
          );
        });
        return (
          <ListItemsStyle key={i}>
            <h2>{name}</h2>
            <h3>Сумма за все раунды: {pointSumm || 0}</h3>
            <h4>Каждый раунд</h4>
            <ul>{renderLi}</ul>
          </ListItemsStyle>
        );
      });
    }
    return null;
  }, [counter]);

  return (
    <>
      {user !== "admin" && <h1>{user} ты на </h1>}
      <ListStyle>{renderResult}</ListStyle>;
    </>
  );
};
