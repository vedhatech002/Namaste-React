import useRestaruntMenu from "../utils/useRestaruntMenu";
import FoodCategory from "./FoodCategory";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaruntMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaruntMenu(resId);

  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name, id, avgRating, costForTwoMessage, cuisines } =
    resInfo?.data?.cards[0]?.card?.card?.info;

  const { title, itemCards } =
    resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card;

  // console.log(
  //   resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards
  // );

  const foodCategories =
    resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  console.log(foodCategories);
  return (
    <main className="pt-24 w-6/12 mx-auto ">
      {/* restaruant details */}
      <section className="flex justify-between border-b-2 py-6">
        <div>
          <h4 className="text-2xl font-bold">{name}</h4>
          <p className="text-sm font-semibold text-gray-600 py-2">
            {cuisines.join(",")} - {costForTwoMessage}
          </p>
        </div>
        <span className="text-lg font-semibold">{avgRating}⭐</span>
      </section>
      {/* restaruants category */}
      <section className="bg-gray-200 space-y-3">
        {foodCategories.map((category) => (
          <FoodCategory
            key={category?.card?.card?.title}
            data={category?.card?.card}
          />
        ))}
      </section>
    </main>
  );
};

export default RestaruntMenu;
