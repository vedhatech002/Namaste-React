import { useState } from "react";
import FoodItem from "./FoodItemsCard";

const FoodCategory = (props) => {
  const { title, itemCards } = props.data;

  const [collapse, setCollapse] = useState(false);

  const handleAccordion = () => {
    setCollapse(!collapse);
  };

  return (
    <section className="bg-white" onClick={handleAccordion}>
      {/*accordian header */}
      <div className="flex justify-between py-4 px-2">
        <h5 className="text-xl font-semibold ">
          {title}({itemCards.length})
        </h5>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.5rem"
            height="1.5rem"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M8.12 9.29L12 13.17l3.88-3.88a.996.996 0 1 1 1.41 1.41l-4.59 4.59a.996.996 0 0 1-1.41 0L6.7 10.7a.996.996 0 0 1 0-1.41c.39-.38 1.03-.39 1.42 0"
            ></path>
          </svg>
        </span>
      </div>
      {/* accordian body */}
      {collapse &&
        itemCards.map((foodObj) => (
          <FoodItem key={foodObj?.card?.info?.id} data={foodObj} />
        ))}
    </section>
  );
};

export default FoodCategory;
