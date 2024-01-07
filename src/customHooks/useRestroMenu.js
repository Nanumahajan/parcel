import { useEffect, useState } from "react";
import { MENU_API } from "../utils/constants";

const useRestroMenu = (resId) => {
  const [restInfo, setRestInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    console.log(json);
    setRestInfo(json?.data);
  };
  return restInfo;
};

export default useRestroMenu;
