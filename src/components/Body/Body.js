import RestrauntCard from "../RestrauntCard/RestroCard";
import { useEffect, useState } from "react";
import Shimmer from "../Shimmer/Shimmer";

const Body = () => {
  const [restro, setrestro] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.7096702&lng=76.7142593&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    setrestro(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  if (restro.length === 0) {
    return <Shimmer />;
  }
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            let filteredRestro = restro.filter((rest) => {
              return rest.info.avgRating > 4;
            });
            setrestro(filteredRestro);
          }}
        >
          Top Rated Restraunts
        </button>
      </div>
      {/* <div className="search">Search</div> */}
      <div className="res-container">
        {restro.map((data) => {
          return <RestrauntCard key={data.info.id} resData={data} />;
        })}
      </div>
    </div>
  );
};

export default Body;
