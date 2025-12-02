import { FavouriteContext } from "../context";
import { useLocalStorage } from "../hooks";

const FavouriteProvider = ({ children }) => {
  const [favourites, setFavourites] = useLocalStorage("favourites", []);

  const addFavourites = (latitude, longitude, location) => {
    setFavourites([
      ...favourites,
      {
        latitude,
        longitude,
        location,
      },
    ]);
  };
  const removeFavourites = (location) => {
    const restFavourites = favourites.filter(
      (fav) => fav.location !== location
    );
    setFavourites(restFavourites);
  };

  return (
    <FavouriteContext.Provider
      value={{ favourites, addFavourites, removeFavourites }}
    >
      {children}
    </FavouriteContext.Provider>
  );
};

export default FavouriteProvider;
