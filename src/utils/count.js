import { idMatch } from "./cashierFunc";

export const countIncDec = (item) => {
  const increase = (setCart) => {
    setCart((prevState) =>
      prevState.map((i) =>
        idMatch(i, item) ? { ...i, count: i.count + 1 } : i
      )
    );
  };

  const decrease = (setCart) => {
    setCart((prevState) =>
      prevState.map((i) =>
        idMatch(i, item) ? { ...i, count: Math.max(1, i.count - 1) } : i
      )
    );
  };

  const changeCount = (count, setCart) => {
    setCart((prevState) =>
      prevState.map((i) =>
        idMatch(i, item) ? { ...i, count: count } : i
      )
    );
  }

  return { increase, decrease, changeCount };
};