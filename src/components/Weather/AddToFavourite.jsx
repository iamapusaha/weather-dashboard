import { useContext, useEffect, useState } from "react";

import redHeart from "../../assets/heart-red.svg";
import heart from "../../assets/heart.svg";
import { FavouriteContext, WeatherContext } from "../../context";
export default function AddToFavourite() {
  const { favourites, addFavourites, removeFavourites } =
    useContext(FavouriteContext);
  console.log(favourites);
  const [isFavourites, setIsFavourite] = useState(false);
  const { weatherData } = useContext(WeatherContext);
  const { latitude, longitude, location } = weatherData;

  useEffect(() => {
    const found = favourites.find((fav) => fav.location === location);
    setIsFavourite(found);
  }, []);

  function handleFavourite() {
    const found = favourites.find((fav) => fav.location === location);
    if (!found) {
      addFavourites(latitude, longitude, location);
    } else {
      removeFavourites(location);
    }
    setIsFavourite(!isFavourites);
  }
  return (
    <div className="md:col-span-2">
      <div className="flex items-center justify-end space-x-6">
        <button
          onClick={handleFavourite}
          className="text-sm md:text-base inline-flex items-center space-x-2 px-3 py-1.5 rounded-md bg-[#C5C5C54D]"
        >
          <span>Add to Favourite</span>
          <img src={isFavourites ? redHeart : heart} alt="heart icon" />
        </button>
      </div>
    </div>
  );
}
