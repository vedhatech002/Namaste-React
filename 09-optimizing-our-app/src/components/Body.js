import { useEffect, useState } from "react";

import RestaruntCard from "./RestaruntCard";
import Shimmer from "./Shimmer";

const Body = () => {
  // Hooks => simple js utility function writen by facebook developers
  //Local state variable  => usestate => to craete state variable
  const [restaruntList, setRestaruntList] = useState([]); //passing default value of state variable

  // take copy of  the reslist for filtered res
  const [filteredResList, setFilterResList] = useState([]);

  const [searchText, setSearchText] = useState("");
  // useEffect
  useEffect(() => {
    fetchData(); // called after the component render
  }, []);
  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=10.7904833&lng=78.7046725&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const jsondata = await data.json();

      console.log(
        jsondata.data.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );

      setRestaruntList(
        jsondata?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      // we pass the same fetched dta to state variable
      setFilterResList(
        jsondata?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      console.log(filteredResList);
    } catch (e) {
      console.log(e);
    }
  };
  console.log("body rendered");
  // conditional rendering
  if (restaruntList?.length === 0) {
    return <Shimmer />;
  }

  return (
    <section className="body">
      <div className="filter">
        <div className="search-bar">
          <input
            type="text"
            placeholder="search restarunt"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              const filteredData = restaruntList.filter((res) => {
                console.log(searchText);
                return res.info?.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });
              // console.log(filteredRes);
              setFilterResList(filteredData);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const topRestaunt = restaruntList?.filter(
              (restarunt) => restarunt?.info?.avgRating > 4.3
            );
            setFilterResList(topRestaunt);
          }}
        >
          Top Rated Restarunt
        </button>
      </div>
      <div className="res-container" style={{ padding: "1rem" }}>
        {filteredResList?.map((restarunt) => (
          <RestaruntCard key={restarunt?.info?.id} resData={restarunt} />
        ))}
      </div>
    </section>
  );
};

export default Body;
