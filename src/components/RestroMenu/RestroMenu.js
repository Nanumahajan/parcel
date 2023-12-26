import { useEffect, useState } from "react";
import Shimmer from "../Shimmer/Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../../utils/constants";
const RestroMenu = () => {
  const [restInfo, setRestInfo] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      await fetch(
        `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=30.7333148&lng=76.7794179&restaurantId=${resId}`
      )
    );
    const json = await data.json();
    console.log(json);
    setRestInfo(json?.data);
  };

  if (restInfo === null) return <Shimmer />;
  const { name, cuisines, costForTwoMessage } =
    restInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    restInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card;

  console.log("hii", itemCards);
  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>{costForTwoMessage}</p>
      <h3>{cuisines.join(", ")}</h3>

      <h2>Menu</h2>
      <ul>
        {itemCards?.map((item) => (
          <li key={item.card?.info.name}>
            {item.card?.info.name} -{"Rs. "}
            {item.card?.info.price / 100 || item.card?.info.defaultPrice / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestroMenu;
