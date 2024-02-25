import React from "react";
import { useLocalStorage } from "../utilities/useLocalStorage";

export const SetInputValueInStorage = () => {
  const [itemInLocalStorage, setValueInLocalStorage] = useLocalStorage(
    "name",
    "mona"
  );

  const onChangeHandler = (e: any) => {
    console.log(e);
    setValueInLocalStorage(e.target.value);
  };
  return (
    <div>
      <input
        onChange={onChangeHandler}
        id="locals"
        type="text"
        value={itemInLocalStorage}
      />
    </div>
  );
};
