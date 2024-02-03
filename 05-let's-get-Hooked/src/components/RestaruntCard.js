import { CDN_URL } from "../utils/Constant";
const RestaruntCard = (props) => {
  const { resData } = props;
  //   const {resName, cuisine, avgRating } = resData;
  //   const { deliveryTime } = resData?.sla;
  return (
    <div className="res-card">
      <img className="res-log" src={CDN_URL + resData.cloudinaryImageId} />
      <h3>{resData.resName}</h3>
      <h4>{resData.cuisines}</h4>
      <h4>{resData.costForTwo}</h4>
      <h4>{resData.avgRating} stars</h4>
      <h4>{resData?.sla.deliveryTime} Minutes</h4>
    </div>
  );
};

export default RestaruntCard;
