import { FOOD_IMG_URL } from "../utils/Constant";

const CartCard = (props) => {
  const { name, price, defaultPrice, description, imageId } = props.data;
  return (
    <div className="border-b-2 py-6 px-2 grid grid-cols-[3fr,1fr] gap-4">
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
      </div>
    </div>
  );
};

export default CartCard;
