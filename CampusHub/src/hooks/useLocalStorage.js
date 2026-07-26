import {useState} from "react";

function useLocalStorage(key, initialValue) {

  const [value, setValue] = useState(() => {
    const saved = localStorage.getItem(key);
    if (saved) {
      return JSON.parse(saved);
    }
    return initialValue;
  });

  function saveData(data) 
  {
    setValue(data);
    localStorage.setItem(key, JSON.stringify(data));
  }

  function removeData(){
    setValue(initialValue);
    localStorage.removeItem(key);
  }
  return [value, saveData, removeData];
}

export default useLocalStorage;