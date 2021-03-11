import { createContext, useState } from 'react';

const FavoritesContext = createContext({  // pascal case because it will contain a component;
  favorites: [],
  totalFavorites: 0,
  addFavorite: (favoriteMeetup) => {}, // adding these 3 only for autocompletion later in components
  removeFavorite: (meetupId) => {},
  itemisFavorite: (meetupId) => {}
}); 

export const FavoritesContextProvider = (props) => {  // provides values to all child components that require them
  const [userFavorites, setUserFavorites] = useState([])

  // handlers to be passed onto children as pointers
  const addFavoriteHandler = (favoriteMeetup) => {
    setUserFavorites(prevUserFavorites => { // setUserFavorites supplies prevUserFavorites (=latest state snapshot) as arg for callback
      return prevUserFavorites.concat(favoriteMeetup) // same as push but creates a new array
    }); 
  }
  const removeFavoriteHandler = (meetupId) => {
    setUserFavorites(prevUserFavorites => {
      return prevUserFavorites.filter(meetup => meetup.id !== meetupId)
    })
  }
  const itemIsFavoriteHandler = (meetupId) => {
    return userFavorites.some(meetup => meetup.id === meetupId);  // if at least one meetup returns true .some() as a whole will return true;
  }

  // prep the object to get passed; also contains pointers to the helper functions
    const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: addFavoriteHandler, // pointer, so no () execution!
    removeFavorite: removeFavoriteHandler,
    itemIsFavorite: itemIsFavoriteHandler
  };
  
  return <FavoritesContext.Provider value={context} > 
    {props.children}
  </FavoritesContext.Provider>
}
export default FavoritesContext;  // the Provider export is above




