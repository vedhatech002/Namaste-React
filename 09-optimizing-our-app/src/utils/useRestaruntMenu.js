import { useEffect, useState } from "react";
import { RES_MENU_URL } from "./Constant";

//custom hooks to get restarunt data
const useRestaruntMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  });
  const fetchMenu = async () => {
    const data = await fetch(RES_MENU_URL + resId);
    const jsondata = await data.json();
    setResInfo(jsondata);
  };
  return resInfo;
};

export default useRestaruntMenu;
