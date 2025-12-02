import { useEffect, useState } from "react";

const useLocalStorage = (storageKey, defulatValue) => {
  const [value, setValue] = useState(
    JSON.parse(localStorage.getItem(storageKey)) ?? defulatValue
  );

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(value));
  }, [value, storageKey]);
  return [value, setValue];
};

export default useLocalStorage;
