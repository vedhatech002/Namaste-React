import restaruntsData from "../utils/mockdata";
import RestaruntCard from "./RestaruntCard";

const Body = () => {
  return (
    <section className="body">
      <div className="search-container">search</div>
      <div className="res-container" style={{ padding: "1rem" }}>
        {restaruntsData.map((restarunt) => (
          <RestaruntCard key={restarunt.id} resData={restarunt} />
        ))}
      </div>
    </section>
  );
};

export default Body;
