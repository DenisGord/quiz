import React, { useMemo, useState } from "react";
import { getData } from "../../functions";
import { HeaderStyle } from "./HeaderPage.style";

export const HeaderPage = () => {
  const [result, setResult] = useState<
    { name: string; point: { [key: number]: number } }[]
  >([]);

  setInterval(async () => {
    await getData(setResult);
  }, 500);
  

  const returnResults = useMemo(() => {
    if (result.length > 0) {
      return result.map(({ name, point }) => {
        const pointSumm =
          Object.keys(point).length > 0 &&
          Object.values(point)?.reduce((acc, cur) => acc + cur);
        return (
          <h4 style={{ marginRight: "10px" }}>{`${name}=${pointSumm || 0}`}</h4>
        );
      });
    }
  }, [result]);

  return <HeaderStyle>{returnResults}</HeaderStyle>;
};
