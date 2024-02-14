import { FOOD_IMG_URL } from "../utils/Constant";

const FoodItem = (props) => {
  const { name, price, defaultPrice, description, imageId } =
    props.data?.card?.info;
  console.log(props.data?.card?.info);
  return (
    <div className="border-b-2 py-6 px-2 flex justify-between gap-6">
      <div>
        <h6 className="text-lg font-semibold">{name}</h6>
        <span className="text-sm font-semibold ">
          ₹ {price ? price / 100 : defaultPrice / 100}
        </span>
        <p className="text-xs font-normal text-gray-600 text-left ">
          {description}
        </p>
      </div>
      <div className="">
        {imageId && (
          <img
            className="!w-[118px] !h-[96px] rounded object-cover"
            src={FOOD_IMG_URL + imageId}
          />
        )}
      </div>
    </div>
  );
};

export default FoodItem;
