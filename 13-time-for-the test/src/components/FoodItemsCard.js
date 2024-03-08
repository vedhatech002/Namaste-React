import { FOOD_IMG_URL } from "../utils/Constant";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
const FoodItem = (props) => {
  const { name, price, defaultPrice, description, imageId } =
    props.data?.card?.info;
  // console.log(props.data?.card?.info);

  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    //dispatch an action
    dispatch(addItem(item));
  };

  return (
    <div
      data-testid="foodItemCard"
      className="border-b-2 py-6 px-2 grid grid-cols-[3fr,1fr] gap-4"
    >
      <div>
        <h6 className="text-lg font-semibold">{name}</h6>
        <span className="text-sm font-semibold ">
          ₹ {price ? price / 100 : defaultPrice / 100}
        </span>
        <p className="text-xs font-normal text-gray-600 text-left ">
          {description}
        </p>
      </div>
      <div className="relative">
        {imageId && (
          <img
            className="!w-[118px] !h-[96px] rounded object-cover"
            src={FOOD_IMG_URL + imageId}
          />
        )}
        <button
          onClick={() => handleAddItem(props.data?.card?.info)}
          className="px-4 py-1 bg-black text-white rounded-md absolute bottom-1 left-5"
        >
          Add +
        </button>
      </div>
    </div>
  );
};

export default FoodItem;
