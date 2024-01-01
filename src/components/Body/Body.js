import RestrauntCard from "../RestrauntCard/RestroCard";
import { useEffect, useState } from "react";
import Shimmer from "../Shimmer/Shimmer";
import { NavLink } from "react-router-dom";
import useUserStatus from "../../customHooks/useUserStatus";

const Body = () => {
  const [restro, setrestro] = useState([]);
  const [filteredrestro, setfilteredrestro] = useState([]);
  const [searchText, setsearchText] = useState("");

  console.log("Data came (--)", filteredrestro);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.7333148&lng=76.7794179&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    console.log(json);
    setrestro(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    setfilteredrestro(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useUserStatus();
  if (onlineStatus === false)
    return (
      <h1>Looks like you are offline check your internet and try again </h1>
    );
  return restro?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-btn"
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              const filteredrestro = restro.filter((res) => {
                return res.info?.name?.toLowerCase().includes(searchText);
              });
              setfilteredrestro(filteredrestro);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            let filteredRestro = restro.filter((rest) => {
              console.log(rest, "kya");
              return rest.info.avgRating > 3.8;
            });
            setrestro(filteredRestro);
          }}
        >
          Top Rated Restraunts
        </button>
      </div>
      <div className="res-container">
        {filteredrestro?.map((data) => (
          <NavLink key={data.info.id} to={"/restro/" + data.info.id}>
            <RestrauntCard resData={data} />
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Body;
// whenever state variable update react initiate reconcilliation cycle or it re-renders the whole component
