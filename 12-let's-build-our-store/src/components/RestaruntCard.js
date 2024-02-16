import { CDN_URL } from "../utils/Constant";
import { Link } from "react-router-dom";

const RestaruntCard = (props) => {
  const { resData } = props;
  //   const {resName, cuisine, avgRating } = resData;
  //   const { deliveryTime } = resData?.sla;\
  const { cuisines } = resData?.info;
  return (
    <Link to={"/restaurant/" + resData.info?.id} className="w-[250px]  p">
      <img
        className="w-full h-36 object-cover"
        src={CDN_URL + resData?.info?.cloudinaryImageId}
      />
      <h3 className="text-lg font-semibold">{resData.info?.name}</h3>
      <h4 className="text-sm">
        {cuisines.length < 4
          ? cuisines.join(",")
          : (cuisines[0], cuisines[1], cuisines[2], cuisines[3] + "....")}
      </h4>
      <h4>{resData.info?.costForTwo}</h4>
      <h4>{resData.info?.avgRating} stars</h4>
      <h4>{resData.info?.sla?.deliveryTime} Minutes</h4>
    </Link>
  );
};

//Higher Order Components

//nputs - restaruantCard ==> Restrauntcardeithoffer

export const withOfferLabel = (RestaruntCard) => {
  return (props) => {
    return (
      <div className="w-full relative  bg-slate-300">
        <label className="absolute top-1 bg-black text-white">opened</label>
        <RestaruntCard resData={props.resData} />
      </div>
    );
  };
};

export default RestaruntCard;
