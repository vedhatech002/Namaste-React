import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { RES_MENU_URL } from "../utils/Constant";

const RestaruntMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams();
  console.log(resId);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(RES_MENU_URL + resId);

    const jsonData = await data.json();

    console.log(jsonData);
    setResInfo(jsonData);
    // console.log(
    //   jsonData.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card
    // );
  };

  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name, id, avgRating, costForTwoMessage, cuisines } =
    resInfo?.data?.cards[0]?.card?.card?.info;

  const { title, itemCards } =
    resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card;
  console.log(itemCards);
  return (
    <>
      <h1>{name}</h1>
      <p>
        {cuisines.join(",")} - {costForTwoMessage}
      </p>
      <h2>Menus</h2>
      <h3>{title}</h3>
      <ul>
        {itemCards?.map((dish) => (
          <li key={dish?.card?.info?.id}>
            {dish?.card?.info?.name} - Rs
            {dish?.card?.info?.price
              ? dish?.card?.info?.price / 100
              : dish?.card?.info?.defaultPrice / 100}
          </li>
        ))}
      </ul>
    </>
  );
};

export default RestaruntMenu;
