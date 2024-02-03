import { useState } from "react";
import restaruntsData from "../utils/mockdata";
import RestaruntCard from "./RestaruntCard";

const Body = () => {
  // Hooks => simple js utility function writen by facebook developers
  //Local state variable  => usestate => to craete state variable
  const [restaruntList, setRestaruntList] = useState(restaruntsData); //passing default value of state variable

  return (
    <section className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const topRestaunt = restaruntsData.filter(
              (restarunt) => restarunt.avgRating > 4.3
            );
            setRestaruntList(topRestaunt);
          }}
        >
          Top Rated Restarunt
        </button>
      </div>
      <div className="res-container" style={{ padding: "1rem" }}>
        {restaruntList.map((restarunt) => (
          <RestaruntCard key={restarunt.id} resData={restarunt} />
        ))}
      </div>
    </section>
  );
};

export default Body;
