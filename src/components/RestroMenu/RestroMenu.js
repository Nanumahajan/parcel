import Shimmer from "../Shimmer/Shimmer";
import { useParams } from "react-router-dom";
import useRestroMenu from "../../customHooks/useRestroMenu";

const RestroMenu = () => {
  const { resId } = useParams();
  const restInfo = useRestroMenu(resId);

  if (restInfo === null) return <Shimmer />;
  const { name, cuisines, costForTwoMessage } =
    restInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    restInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card;

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
