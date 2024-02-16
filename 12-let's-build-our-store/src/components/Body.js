import { useContext, useEffect, useState } from "react";
import userContext from "../utils/userContext";
import RestaruntCard, { withOfferLabel } from "./RestaruntCard";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import { withOfferLabel } from "./RestaruntCard";

const Body = () => {
  const [restaruntList, setRestaruntList] = useState([]); //passing default value of

  const [filteredResList, setFilterResList] = useState([]);

  const [searchText, setSearchText] = useState("");

  const RestaruantCardOpened = withOfferLabel(RestaruntCard);

  useEffect(() => {
    fetchData(); // called after the component render
  }, []);
  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=10.7904833&lng=78.7046725&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const jsondata = await data.json();

      // console.log(
      //   jsondata.data.cards[2]?.card?.card?.gridElements?.infoWithStyle
      //     ?.restaurants
      // );

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

  const onlineStatus = useOnlineStatus();
  if (!onlineStatus) {
    return <h1>you are offline</h1>;
  }
  const { loggedInUser, setUserName } = useContext(userContext);
  // conditional rendering
  if (restaruntList?.length === 0) {
    return <Shimmer />;
  }

  return (
    <section className="pt-20">
      <div className="flex items-center  justify-between gap-6 py-4 px-20 ">
        <div className="flex items-center gap-4">
          <input
            className="px-4 py-1  border-2 rounded-md border-slate-950"
            type="text"
            placeholder="search restarunt"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-1 bg-slate-950 text-white rounded-md"
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
          <input
            type="text"
            className="border-2"
            value={loggedInUser}
            placeholder="userName"
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
        </div>

        <button
          className="text-sm bg-green-500 text-white px-4 py-1 rounded-md"
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
      <div className="grid grid-cols-4 gap-4 items-start mx-20 my-10">
        {filteredResList?.map((restarunt) => {
          return restarunt?.info?.isOpen ? (
            <RestaruantCardOpened resData={restarunt} />
          ) : (
            <RestaruntCard key={restarunt?.info?.id} resData={restarunt} />
          );
        })}
      </div>
    </section>
  );
};

export default Body;
