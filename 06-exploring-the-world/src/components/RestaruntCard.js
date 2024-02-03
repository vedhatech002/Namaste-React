import { CDN_URL } from "../utils/Constant";
const RestaruntCard = (props) => {
  const { resData } = props;
  //   const {resName, cuisine, avgRating } = resData;
  //   const { deliveryTime } = resData?.sla;
  return (
    <div className="res-card">
      <img
        className="res-log"
        src={CDN_URL + resData?.info?.cloudinaryImageId}
      />
      <h3>{resData.info?.name}</h3>
      <h4>{resData.info?.cuisines}</h4>
      <h4>{resData.info?.costForTwo}</h4>
      <h4>{resData.info?.avgRating} stars</h4>
      <h4>{resData.info?.sla?.deliveryTime} Minutes</h4>
    </div>
  );
};

export default RestaruntCard;
